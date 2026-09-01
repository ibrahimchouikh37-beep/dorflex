import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap { return ['','/nos-matelas','/comparateur','/a-propos','/conseils','/contact'].map(path=>({url:`https://dorflex.ma${path}`,lastModified:new Date()})) }
