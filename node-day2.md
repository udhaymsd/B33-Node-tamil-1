### Day 2

1. Overall architecture
2. what/why Rest api
3. Express Js
4. Api methods
5. Request & Response objects
6. Postman Intro
7. Testing with Postman
8. Params
9. Query params

### What/Why Rest api

1. Tightly coupled F.E & B.E  - old apps
    1. Java servlet
    2.Php

2. Loosely coupled F.E & B.E
    1. Dependency on F.E & B.E reduced - Flexibility
    2. Transition F.E & B.E - eg: React -> vue JS, Node -> Go
    3. Muliple F.E -> React (web), Kotlin (Android), Swift (IOS) -> all can point same B.E
    4. Multiple B.E -> Go, Node, Java, Python -> performance 
    5. Multiple database -> Microservice service architecture (Every api will have its own DB)
    6. REST -   Multiple B.E &  Multiple F.E
        1. JSON - common language
        2. Methods
           1. Create
           2. Read
           3. Update
           5. Delete


### Express Js

1. Create `index.js` file
2. `npm init -y` - will create package.json
3. npm i express - Installs express
4. https://www.npmjs.com/package/express - sample to be pasted in index.js
5. Every change need restarting the server
    1. `ctrl + c` - Stop server
    2. `node index.js`- Start server
6. JS Object -> JSON (automatic coversion)
7. Auto restart of server - nodemon
    1.`npm install --save-dev nodemon` `
` installs dev dependency for auto reload when changes are made - only needed for development
    2. `scripts` - shortcuts
    3. "start" : "node index.js", -> Heroku deployment
            1. `npm run start` -> `npm start` (shortcut)
    4. "dev": "nodemon index.js",
            1. `npm run dev`
    
    8. Latest Import & Exports
        1. "type": "module" , add in `package.json`