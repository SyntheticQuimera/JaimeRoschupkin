import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { SkillBadge } from '../../typings'

const query = groq`
    *[_type == "skillBadge"]   
`
type Data = {
    skillBadge: SkillBadge[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const skillBadge: SkillBadge[] = await sanityClient.fetch(query)

    res.status(200).json({ skillBadge })
}
