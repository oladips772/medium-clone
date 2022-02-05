import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_SANITY_PUBLIC_DATSET || 'production',
  projectId: process.env.NEXT_SANITY_PUBLIC_ID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config);
