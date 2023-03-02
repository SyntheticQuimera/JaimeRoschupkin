import { SkillBadge } from '../typings'

export const fetchSkillBadge = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillBadge`)

    const data = await res.json();

    const skillBadge: SkillBadge[] = data.skillBadge;

    // console.log("fetching", skillBadge)

    return skillBadge;
}