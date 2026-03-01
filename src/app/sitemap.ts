import { MetadataRoute } from 'next'
import { getArticles } from '../lib/dataFetcher'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getArticles(100); // Fetch up to 100 recent articles for sitemap

    const articleUrls = articles.map((article) => ({
        url: `https://18-wheelers.com/${article.category}/${article.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [
        {
            url: 'https://18-wheelers.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://18-wheelers.com/news',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://18-wheelers.com/trucks',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://18-wheelers.com/muscle-cars',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: 'https://18-wheelers.com/logistics',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        ...articleUrls,
    ]
}
