import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function safeFetch<T>(query: string, params: any = {}, options: any = {}): Promise<T | null> {
  try {
    return await client.fetch(query, params, options);
  } catch (error) {
    console.error("Sanity fetch failed (likely missing configuration):", error);
    return null;
  }
}
