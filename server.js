const http = require("http");
const config = require("./src/config/config");

const { getUsers, createUser, updateUser, deleteUser } = require("./src/handlers/userHandlers");

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    return getUsers(req, res);
  }

  if (req.url === "/users" && req.method === "POST") {
    return createUser(req, res);
  }

  if (
    req.url.startsWith("/users/") &&
    req.method === "PUT"
  ) {
    return updateUser(req, res);
  }

  if (
    req.url.startsWith("/users/") &&
    req.method === "DELETE"
  ) {
    return deleteUser(req, res);
  }

  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Route not found",
    })
  );
});

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
