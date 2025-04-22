import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nextbit.io',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://nextbit.io/about',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://nextbit.io/contact',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://nextbit.io/process',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
        url: 'https://nextbit.io/services',
        lastModified: new Date(),
        changeFrequency: 'always',
      },
     
  ]
}