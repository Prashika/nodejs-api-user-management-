function validateUser(user) {
  if (!user.name) {
    return "Name is required";
  }

  if (!user.email) {
    return "Email is required";
  }

  return null;
}

module.exports = {
  validateUser,
};