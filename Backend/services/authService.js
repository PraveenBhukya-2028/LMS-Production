const UserModel = require("../models/userModel");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");

class AuthService {

  // =========================
  // Register User
  // =========================
  static async register(userData) {

    const {
      full_name,
      email,
      mobile,
      password,
      role,
    } = userData;

    // Basic Validation
    if (!full_name || !email || !mobile || !password || !role) {
      throw new Error("All fields are required");
    }

    // Check Email
    const existingUser = await UserModel.findByEmail(email);

    if (existingUser) {
      throw new Error("Email already registered");
    }

    // Encrypt Password
    const encryptedPassword = await hashPassword(password);

    const newUser = {
      full_name,
      email,
      mobile,
      password: encryptedPassword,
      role,
    };

    // Save User
    const userId = await UserModel.createUser(newUser);

    // Fetch User
    const createdUser = await UserModel.findById(userId);

    return createdUser;
  }

  // =========================
  // Login User
  // =========================
  static async login(loginData) {

    const { email, password } = loginData;

    if (!email || !password) {
      throw new Error("Email and Password are required");
    }

    // Find User
    const user = await UserModel.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Compare Password
    const isMatch = await comparePassword(
      password,
      user.password
    );

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    // Generate Token
    const token = generateToken(user);

    delete user.password;

    return {
      token,
      user,
    };
  }

}

module.exports = AuthService;