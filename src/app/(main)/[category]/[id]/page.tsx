import ArticleDetail from "../../../../components/ArticleDetail";
import { getArticleById, getArticles } from "../../../../lib/dataFetcher";
import { Metadata } from 'next';

type Props = {
    params: { category: string; id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const article = await getArticleById(params.id);

    if (!article) {
        return {
            title: 'Article Not Found | 18-Wheelers',
        };
    }

    return {
        title: `${article.title} | 18-Wheelers`,
        description: article.tldr?.substring(0, 160) || article.seo?.metaDesc || "Read more about logistics and automotive world on 18-Wheelers.",
        openGraph: {
            title: article.title,
            description: article.tldr?.substring(0, 160),
            images: [article.image || ""],
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    const article = await getArticleById(params.id);
    const trending = await getArticles(4); // Fetch 4 latest for sidebar

    return (
        <main>
            <ArticleDetail
                article={article}
                trending={trending.filter(t => t.id !== params.id).slice(0, 3)}
            />
        </main>
    );
}
