import { AboutMeInfo } from '../typings'

export const fetchAboutMeInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutMeInfo`)

    const data = await res.json();

    const aboutMeInfo: AboutMeInfo = data.aboutMeInfo;

    // console.log("fetching", aboutMe)

    return aboutMeInfo;
}