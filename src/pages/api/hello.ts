// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyContacts } from 'src/data'
interface Data {
  "id": number
  "first_name": string
  "last_name": string
  "email": string
  "gender": string
  "isActive": boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(dummyContacts)
  }
}
