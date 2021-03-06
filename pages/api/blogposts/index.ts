// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllPosts } from '../../../lib/posts'


export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {posts}=await getAllPosts()
  res.status(200).json({payload:posts})
}
