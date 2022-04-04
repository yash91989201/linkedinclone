import mongoose from "mongoose";

// const connection: DbConnectionDataType = {
//   isConnected: false,
// };

// if (connection.isConnected) return;
// const db = await mongoose.connect("mongodb://localhost:27017/linkedinDb");
// connection.isConnected = db.connections[0].readyState;
// console.log(
//   `Database is ${connection.isConnected ? "connected" : "not connedted"}`
// );
// console.log("Database is connected");
function connect() {
  mongoose
    .connect("mongodb://localhost:27017/linkedinDb")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err.message));
}

export default connect;
