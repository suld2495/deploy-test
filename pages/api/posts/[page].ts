import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export const PER_POST = 10;

type PostsQuery = {
  page?: number
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {
  const { method, query } = _req;
  const { page = 1 } = query as PostsQuery;

  switch (method) {
    case 'GET':
      const posts = await prisma.post.findMany({
        skip: (page - 1) * PER_POST,
        take: PER_POST,
        orderBy: {
          id: 'desc'
        }
      });
      const total = await prisma.post.count();
      _res.status(200).json({ posts, total });
      break;
  }
};