# class-components

This project practices:
--Creating class components
--Creating a react app
--Launching a website


Steps taken:
1. Create new repo in github and clone to comp.
2. `npm init` to create a _package.json_ file
3. `npm i` to create a _package-lock.json_ file and the _node_modules_ folder of stuff -- update _scripts_ with `"start": "node server.js"` and `"server": "nodemon index.js"`
4. Download dependencies via `npm i`: express, helmet, sqlite3, node, nodemon, cors, dotenv
5. Run `npx create-react-app <app-name>` to create new react app (used to be able to do it via npm, but the new standards recommend doing it this way now)
6. Add a `.gitignore` file if you don't have one in your root folder
7.. Add an _api_ folder with a _server.js_ file and an _index.js_ file to the root folder. You have to add some content to the index and server files to run localhost for the react app. (*Note--if you have downloaded dotenv, create a _.env_ file to add _PORT=XXXX_ for the index file.)
    7a. In _server.js_ import the dependencies you added via npm, and set your routes.




