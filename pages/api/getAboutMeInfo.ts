import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { AboutMeInfo } from '../../typings'

const query = groq`
    *[_type == "aboutMe"][0]
`
type Data = {
    aboutMeInfo: AboutMeInfo
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const aboutMeInfo: AboutMeInfo = await sanityClient.fetch(query)

    res.status(200).json({ aboutMeInfo })
}
