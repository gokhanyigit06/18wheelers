import { adminDb } from './firebaseAdmin';

export interface Article {
    id: string;
    title: string;
    tldr?: string;
    body: string;
    category: string;
    authorId: string;
    authorName: string;
    authorAvatar: string;
    image: string;
    date: string;
    createdAt?: any;
    seo?: {
        metaTitle?: string;
        metaDesc?: string;
        keywords?: string;
    };
}

export const getArticles = async (limitCount = 10, category?: string): Promise<Article[]> => {
    try {
        if (!adminDb) return [];
        let queryRef: any = adminDb.collection("articles");

        if (category) {
            queryRef = queryRef.where("category", "==", category);
        } else {
            queryRef = queryRef.orderBy("createdAt", "desc");
        }

        queryRef = queryRef.limit(limitCount * 3);

        const snapshot = await queryRef.get();
        let articles: any[] = snapshot.docs.map((doc: any) => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                date: data.createdAt ? data.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently",
                _sortTime: data.createdAt ? data.createdAt.toMillis() : 0
            };
        });

        if (category) {
            articles.sort((a, b) => b._sortTime - a._sortTime);
        }

        articles = articles.slice(0, limitCount).map(({ _sortTime, ...rest }) => rest);

        return articles as Article[];
    } catch (error) {
        console.error("Error fetching articles: ", error);
        return [];
    }
};

export const getArticleById = async (id: string): Promise<Article | null> => {
    if (!id || typeof id !== 'string') {
        return null;
    }
    try {
        if (!adminDb) return null;
        const doc = await adminDb.collection("articles").doc(id).get();
        if (!doc.exists) {
            return null;
        }
        const data = doc.data() as any;
        return {
            id: doc.id,
            ...data,
            date: data?.createdAt ? data.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently",
        } as Article;
    } catch (error) {
        console.error("Error fetching article by ID: ", error);
        return null;
    }
};
