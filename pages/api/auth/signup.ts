import type { NextApiRequest, NextApiResponse } from "next";
import { userSignUp } from "../../../db/utils/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDataType>
) {
  // get all posts from the database
  const { status, message, data } = await userSignUp(req.body);
  res.status(200).json({ status, message, data });
}
