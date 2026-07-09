const { verifyToken } = require("../utils/jwt");
const ApiResponse = require("../utils/apiResponse");

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    // Check Authorization Header
    if (!authHeader) {
        return ApiResponse.error(
            res,
            401,
            "Authorization token is required"
        );
    }

    // Header Format:
    // Bearer eyJhbGc...

    const token = authHeader.split(" ")[1];

    if (!token) {
        return ApiResponse.error(
            res,
            401,
            "Invalid token format"
        );
    }

    try {

        const decoded = verifyToken(token);

        req.user = decoded;

        next();

    } catch (error) {

        return ApiResponse.error(
            res,
            401,
            "Invalid or Expired Token"
        );

    }

};

module.exports = authMiddleware;