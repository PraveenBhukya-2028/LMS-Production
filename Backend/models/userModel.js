const db = require("../config/db");

class UserModel {

  // =========================
  // Find User By Email
  // =========================
  static async findByEmail(email) {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    return rows[0];
  }

  // =========================
  // Create User
  // =========================
  static async createUser(userData) {

    const {
      full_name,
      email,
      mobile,
      password,
      role
    } = userData;

    const [result] = await db.query(
      `INSERT INTO users
      (
        full_name,
        email,
        mobile,
        password,
        role
      )
      VALUES (?,?,?,?,?)`,
      [
        full_name,
        email,
        mobile,
        password,
        role
      ]
    );

    return result.insertId;
  }

  // =========================
  // Find User By Id
  // =========================
  static async findById(id) {

    const [rows] = await db.query(
      `
      SELECT
        id,
        full_name,
        email,
        mobile,
        role,
        profile_image,
        is_active,
        created_at,
        updated_at
      FROM users
      WHERE id = ?
      `,
      [id]
    );

    return rows[0];
  }

}

module.exports = UserModel;