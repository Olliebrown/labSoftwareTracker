# Lab Software Tracker
A simple web tool for tracking software installed on computers in managed labs at UW Stout.  It enables tracking of who requested it, for what course, and how long ago it was requested. It was designed to help eliminate software bloat by making it easier to tell when software is no longer needed or at least who requested it and when so it can be tracked.

### Development
#### Client Application
- Run `npm run client:dev` to bundle the client in development mode and watch for changes
- On file save, the code will re-bundle and browser will auto-refresh
- Stop the development builder with `ctrl+c` when done

#### Expres Server
- Run `npm run server:dev` to start a local express server bound to the port indicated in .env
- When server files are changed it will re-start the server automatically
- Exit the dev server with `ctrl+c` when done

### Deployment
- Run `npm run client` to build a minified production version in the `public` folder
- The client app is contained entirely in the public folder
- Run `npm start` to run a production version of the server

### Notes
- When running in development mode, the global boolean `_DEV_` will be true in your JS code
- `_VER_` is a global string equal to your semantic version in package.json

