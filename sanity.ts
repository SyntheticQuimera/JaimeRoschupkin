import { createClient, groq } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"
const useCdn = process.env.NODE_ENV === "production"

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn,
})


export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source)

