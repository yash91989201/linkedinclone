import type { NextApiRequest, NextApiResponse } from "next";

import { incrementPostLikeCount, deletePost } from "../../../db/utils/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  const { id } = req.query;
  const postAction = id[1];
  switch (postAction) {
    case "likepost": {
      const { status, message, data } = await incrementPostLikeCount(id[0]);
      res.status(200).json({ status, message, data });
      break;
    }
    case "deletepost": {
      const { status, message, data } = await deletePost(id[0]);
      res.status(200).json({ status, message, data });
      break;
    }
  }
}
