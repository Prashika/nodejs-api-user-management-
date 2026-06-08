function sendResponse(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}

function sendError(res, statusCode, message) {
  sendResponse(res, statusCode, {
    success: false,
    message,
  });
}

module.exports = {
  sendResponse,
  sendError,
};