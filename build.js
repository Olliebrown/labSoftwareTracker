// Import esbuild
import ESBuild from 'esbuild'

// Is server requested?
const serve = process.argv.some((arg) => (arg.toLowerCase() === 'serve'))

// Is this a dev build?
const _DEV_ = process.argv.some((arg) => (arg.toLowerCase() === 'dev'))

// esbuild options
const options = {
  // List of all separate entry points
  entryPoints: [
    './client/main.jsx'
  ],

  // Configure output location and names
  outdir: './public',
  entryNames: '/[name]',

  // Configure output types and target
  bundle: true,
  sourcemap: _DEV_,
  minify: (!_DEV_),
  target: 'es6',

  // Define important variables
  define: {
    _VER_: `"${process.env.npm_package_version}"`,
    _DEV_: JSON.stringify(_DEV_)
  }
}

// Create build context if needed
if (serve || _DEV_) {
  try {
    // Create esbuild context
    const context = await ESBuild.context(options)

    if (_DEV_) {
      // Enable a watched build
      await context.watch()
      console.log('Bundling and monitoring for changes')
    }

    // Start server if requested
    if (serve) {
      const { host, port } = await context.serve({ port: 3000, servedir: 'public' })
      const note = host === '0.0.0.0' ? ` (http://localhost:${port})` : ''
      console.log(`Serving dev code at http://${host}:${port}${note}`)
      const handleExit = (signal) => {
        console.log('Exiting due to ' + signal)
        context.dispose()
      }
      process.on('SIGINT', handleExit)
      process.on('SIGTERM', handleExit)
    }
  } catch (err) {
    console.error('Failed to start esbuild context')
    console.error(err)
    process.exit(1)
  }
} else {
  // Attempt to build
  ESBuild.build(options).catch(
    (err) => {
      console.error('Failed to bundle code')
      console.error(err)
      process.exit(1)
    }
  )
}
