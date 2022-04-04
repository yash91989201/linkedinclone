import bcrypt from "bcryptjs";
import connect from "../conn";
import User from "../models/User";

// interface SignUpDataType{
// email:string;

// }

connect();

// register new user
const userSignUp = async (userCredentials: any) => {
  try {
    const { email, userName, password } = userCredentials;
    // check in the database if similar email exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      const newUser = new User({
        email,
        userName,
        password,
      });
      newUser.save();
      return {
        status: true,
        message: "User register successful",
        data: null,
      };
    }
    return {
      status: false,
      message: "User already exists",
      data: null,
    };
  } catch (err: any) {
    return {
      status: false,
      message: err.message,
      data: null,
    };
  }
};

// login existing user
const userSignIn = async (userCredentials: any) => {
  try {
    const { email, password } = userCredentials;
    // check in the database if similar email exists
    const userData = await User.findOne({ email });
    if (userData) {
      const isMatch = await bcrypt.compare(password, userData.password);
      if (isMatch)
        return {
          success: true,
          message: "User Sign in successful",
          data: {
            id: userData._id,
            email: userData.email,
            userName: userData.userName,
          },
        };
      return {
        success: false,
        message: "Invalid Login Credentials",
        data: null,
      };
    }
    return {
      status: false,
      message: "User doesnot exists",
      data: null,
    };
  } catch (err: any) {
    return {
      status: false,
      message: err.message,
      data: null,
    };
  }
};

export { userSignUp, userSignIn };
