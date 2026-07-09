const AuthService = require("../services/authService");
const ApiResponse = require("../utils/apiResponse");

class AuthController {

    // Register
    static async register(req, res) {

        try {

            const user = await AuthService.register(req.body);

            return ApiResponse.success(
                res,
                201,
                "User Registered Successfully",
                user
            );

        } catch (error) {

            return ApiResponse.error(
                res,
                400,
                error.message
            );

        }

    }

    // Login
    static async login(req, res) {

        try {

            const result = await AuthService.login(req.body);

            return ApiResponse.success(
                res,
                200,
                "Login Successful",
                {
                    token: result.token,
                    user: result.user
                }
            );

        } catch (error) {

            return ApiResponse.error(
                res,
                400,
                error.message
            );

        }

    }

}

module.exports = AuthController;