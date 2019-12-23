# Playlist Website Project

This project practices:
--Creating class components
--Creating a react app
--Launching a website


Steps taken:
1. Create new repo in github and clone to comp.
2. `npm init` to create a _package.json_ file
3. `npm i` to create a _package-lock.json_ file and the _node_modules_ folder of stuff -- update `"scripts` with `"start": "node server.js"` and `"server": "nodemon index.js"`
4. Download dependencies via `npm i`: express, helmet, sqlite3, node, nodemon, cors, dotenv
5. Run `npx create-react-app <app-name>` to create new react app (used to be able to do it via npm, but the new standards recommend doing it this way now)
6. Add a _.gitignore_ file if you don't have one in your root folder (you can use one from a previous project if you don't know what specific things you want/need to gitignore)
7. Add an _index.js_ file and also an _api_ folder with a _server.js_ file inside it to the root folder. You will have to add some content to the index and server files to run localhost and to access the react app. (*Note--if you have downloaded the `dotenv` dependency, create a _.env_ file to add _PORT=XXXX_ for the index file.)
    7a. In _server.js_ import the dependencies you added via npm, and if you are only working on the backend, set your routes now. (You will need to do this anyway at some point, so it doesn't matter if you do it now/later -- personally, I think working on it first makes it easier for your react app because you have endpoints configured.)
    7b. Otherwise, cd into your react app and run `npm start` to work on your react app

## backend
1. In your _api_ file

### class components
1. Once you cd into your react app and run `npm start`, your terminal should show you a message of _"You can now view <react-app-name> in the browser"_ with a link to localhost and on your network.
2. In a separate terminal, cd into your react app and run `npm i axios`








