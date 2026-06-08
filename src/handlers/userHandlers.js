const users = require("../db/store");
const { parseBody } = require("../middleware/bodyParser");
const { validateUser } = require("../utils/validators");
const { sendResponse, sendError } = require("../utils/response");

function getUsers(req, res) {
  sendResponse(res, 200, users);
}

async function createUser(req, res) {
  try {
    const body = await parseBody(req);

    const validationError = validateUser(body);

    if (validationError) {
      return sendError(res, 400, validationError);
    }

    const newUser = {
      id: users.length + 1,
      name: body.name,
      email: body.email,
    };

    users.push(newUser);

    sendResponse(res, 201, {
      success: true,
      data: newUser,
    });
  } catch (error) {
    sendError(res, 400, error.message);
  }
}

async function updateUser(req, res) {
  try {
    const urlParts = req.url.split("/");

    const userId = Number(urlParts[2]);

    const user = users.find(
      (user) => user.id === userId
    );

    if (!user) {
      return sendError(
        res,
        404,
        "User not found"
      );
    }

    const body = await parseBody(req);

    const validationError = validateUser(body);

    if (validationError) {
      return sendError(
        res,
        400,
        validationError
      );
    }

    user.name = body.name;
    user.email = body.email;

    sendResponse(res, 200, {
      success: true,
      data: user,
    });

  } catch (error) {
    sendError(res, 400, error.message);
  }
}
module.exports = {
  getUsers,
  createUser,
  updateUser,
};
