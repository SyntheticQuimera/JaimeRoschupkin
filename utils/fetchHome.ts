import { HomePage } from '../typings'

export const fetchHome = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHomePage`)

    const data = await res.json();

    const home: HomePage = data.home;

    // console.log("fetching", home)

    return home;
}