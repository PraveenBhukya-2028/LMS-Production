const ApiResponse = require("../utils/apiResponse");

const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return ApiResponse.error(res, 401, "Unauthorized");
    }

    if (!allowedRoles.includes(req.user.role)) {
      return ApiResponse.error(
        res,
        403,
        "You don't have permission to access this resource"
      );
    }

    next();
  };
};

module.exports = roleMiddleware;