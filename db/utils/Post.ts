import mongoose from "mongoose";
import connect from "../conn";
import Post from "../models/Post";

connect();

// create new post
const createPost = async ({
  userId,
  userName,
  userEmail,
  message,
  imageURL,
}: PostDataType): Promise<DbResponseDataType> => {
  try {
    const res = await Post.create({
      userId,
      userName,
      userEmail,
      message,
      imageURL,
      likes: 0,
    });
    return {
      status: true,
      message: "New Post Created",
      data: res,
    };
  } catch (err: any) {
    return {
      status: false,
      message: err.message,
      data: null,
    };
  }
};

// fetch all post data
const getPost = async (): Promise<DbResponseDataType> => {
  try {
    const res = await Post.find();
    return {
      status: true,
      message: "Fetched all posts",
      data: res,
    };
  } catch (err: any) {
    return {
      status: false,
      message: "Unable to fetch posts",
      data: null,
    };
  }
};

// increment like count of a post with the given id
const incrementPostLikeCount = async (postId: string) => {
  try {
    const res = await Post.updateOne(
      { _id: new mongoose.Types.ObjectId(postId) },
      { $inc: { likes: 1 } }
    );
    const { acknowledged, modifiedCount, matchedCount } = res;
    if (acknowledged && modifiedCount == 1 && matchedCount == 1) {
      return {
        status: true,
        message: "Increased like count for post",
        data: null,
      };
    }
    return {
      status: false,
      message: "Unable to increase like count for post",
      data: null,
    };
  } catch (err: any) {
    console.log(err);
    return {
      status: false,
      message: err.message,
      data: null,
    };
  }
};

// delete post by using post id
const deletePost = async (_id: string): Promise<DbResponseDataType> => {
  try {
    const res = await Post.deleteOne({ _id });
    const { acknowledged, deletedCount } = res;
    if (acknowledged == true && deletedCount == 1)
      return {
        status: acknowledged,
        message: "Post deleted successfully",
        data: null,
      };
    return {
      status: false,
      message: "Unable to delete post",
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

export { createPost, getPost, incrementPostLikeCount, deletePost };
