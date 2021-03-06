const express = require("express");
const helmet = require("helmet");

//import routers when wired up
const projectRouter = require("./Data/Routers/projectRouter.js");
const actionRouter = require("./Data/Routers/actionRouter.js");

//declare server
const server = express();

//add middleware
server.use(helmet());
server.use(express.json());

//asign routing when wired up
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

//post a message on the root dir
server.use("/", (req, res) => {
  res.send(`<h1>SPRINT CHALLENGE RDBMS</h1>`);
});

module.exports = server;
