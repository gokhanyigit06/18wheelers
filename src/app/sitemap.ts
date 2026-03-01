import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // In a real application, you would fetch your dynamic URLs from Firebase here
    // e.g., const articles = await getArticles(); ... return articles.map(...)

    return [
        {
            url: 'https://18wheelers.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://18wheelers.com/news',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://18wheelers.com/trucks',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://18wheelers.com/muscle-cars',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://18wheelers.com/logistics',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ]
}
