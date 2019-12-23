require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`I'm listening on port ${PORT}. Visit http://localhost:${PORT}`);
});