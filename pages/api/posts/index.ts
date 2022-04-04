// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createPost, getPost } from "../../../db/utils/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  const { method } = req;
  switch (method) {
    case "GET": {
      // get all posts from the database
      const { status, message, data } = await getPost();
      res.status(200).json({ status, message, data: data as PostDataType[] });
      break;
    }
    case "POST": {
      // create a new post from the req.body data
      const { status, message, data } = await createPost(req.body);
      res.status(200).json({ status, message, data });
      break;
    }
  }
}
