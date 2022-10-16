import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = _req;

  switch (method) {
    case 'PUT':
      const { title, content, authorId } = body;
      const user = await prisma.user.count({
        where: {
          id: authorId
        }
      });

      if (!user) {
        await prisma.user.create({
          data: {
            id: authorId
          }
        })
      }

      await prisma.post.create({
        data: {
          title,
          content,
          authorId
        }
      });

      // json 호출안하니 pending 거리더라.. 주의하자.
      res.status(200).json(1);
      return;
  }
}