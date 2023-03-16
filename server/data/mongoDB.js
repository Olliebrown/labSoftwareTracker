import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'

// Read in configuration secrets for Mongo
dotenv.config()
const MONGO_HOST = process.env.MONGO_HOST ?? 'bad.host.com'
const MONGO_USER = process.env.MONGO_USER ?? 'noUser'
const MONGO_PW = process.env.MONGO_PW ?? 'noPassword'
const MONGO_DB = process.env.MONGO_DB ?? 'unknownDB'

// Build connection URI and client object
const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PW}@${MONGO_HOST}/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

/**
 * Query the database using a callback function. The callback should return a Promise
 * and will be awaited. The callback function will receive a Db instance or, if a
 * collection name is provided, a reference to that Collection object. All resources
 * are released before this function returns.
 *
 * @param {string|function} collectionOrCallback Name of a collection or a callback
 *        that receives a MongoDB Db instance (see mongodb api docs for details)
 * @param {function} [callback] A callback that receives a MongoDB collection object
 *        (see mongodb api docs for details)
 */
export async function dbQuery (collectionOrCallback, callback) {
  // Check if a collection name is present and if it is the right type
  if (typeof callback === 'function' && typeof collectionOrCallback !== 'string') {
    throw new Error('Collection name passed to dbQuery() must be a string')
  }

  // Check if callback was provided and is the right type
  callback = callback ?? collectionOrCallback
  if (typeof callback !== 'function') {
    throw new Error('Callback passed to dbQuery() must be a function')
  }

  try {
    // Open the database (and possibly a collection)
    const database = client.db(MONGO_DB)
    if (typeof collectionOrCallback === 'string') {
      const collection = database.collection(collectionOrCallback)

      // Run callback on the collection
      await callback(collection)
    } else {
      // Run callback on the database
      await callback(database)
    }
  } catch (err) {
    console.error('Database query error.')
    console.error(err)
  }
}

/**
 * Close the database connection
 */
export async function dbClose () {
  await client.close()
}
