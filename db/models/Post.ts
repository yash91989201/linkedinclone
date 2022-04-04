import mongoose, { Schema } from "mongoose";

const PostSchema: Schema = new Schema<PostSchemaType>({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  imageURL: String,
  likes: Number,
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
