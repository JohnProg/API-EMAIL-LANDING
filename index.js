const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mainRouter = require("./routes");
const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
morgan.token("body", (req, res) => JSON.stringify(req.body));
server.use(
  morgan(
    ":remote-addr - :remote-user [:date] ':method :url' :status :response-time ms - :res[content-length] :body - :req[content-length] ':user-agent'"
  )
);

server.use("/api/v1", mainRouter);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
