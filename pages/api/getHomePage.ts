import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { HomePage } from '../../typings'

const query = groq`
*[_type == "home"][0]
`
type Data = {
    home: HomePage
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const home: HomePage = await sanityClient.fetch(query)

    res.status(200).json({ home })
}
