const users = require("../db/store");
const { sendResponse } = require("../utils/response");

function getUsers(req, res) {
  sendResponse(res, 200, users);
}

module.exports = {
  getUsers,
};