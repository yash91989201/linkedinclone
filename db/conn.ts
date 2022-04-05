import mongoose from "mongoose";

function connect() {
  mongoose
    .connect("mongodb://localhost:27017/linkedinDb")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err.message));
}

export default connect;
