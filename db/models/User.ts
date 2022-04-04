import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema: Schema = new Schema<UserSchemaType>({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: {
      type: Date,
      default: Date.now,
    },
  },
  accessToken: String,
  tokens: [String],
});

UserSchema.pre("save", async function (next) {
  // if only password field get modified then only we will hash else not
  if (this.isModified("password")) {
    // we need to await, bcz it return the promises
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
