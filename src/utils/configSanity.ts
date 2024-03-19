import {createClient} from 'next-sanity';

export const sanityClient = createClient({
  projectId: '47q3609j',
  dataset: 'production',
  apiVersion: '2022-03-07',
  useCdn: true,
});