const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainRouter = require("./routes");
const config = require("./config");
const firebase = require("./services/firebase");
const server = express();

server.use(bodyParser.json());
server.use(cors());
morgan.token("body", (req, res) => JSON.stringify(req.body));
server.use(
  morgan(
    ":remote-addr - :remote-user [:date] ':method :url' :status [time :response-time ms] - :res[content-length] :body - :req[content-length] ':user-agent'"
  )
);
server.use("/api/v1", mainRouter);

// initialize Firebase
firebase.init();
firebase.initFirestore();

server.listen(config.server.port, () => console.log("App is running 🎉"));
