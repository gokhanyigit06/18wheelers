import { adminDb } from './firebaseAdmin';

export const getArticles = async (limitCount = 10, category?: string) => {
    try {
        let queryRef: any = adminDb.collection("articles");

        if (category) {
            queryRef = queryRef.where("category", "==", category);
        } else {
            // Only apply orderBy in Firebase when not using where, to avoid Composite Index Error
            queryRef = queryRef.orderBy("createdAt", "desc");
        }

        queryRef = queryRef.limit(limitCount * 3); // fetch a handful for sorting if needed

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

        return articles;
    } catch (error) {
        console.error("Error fetching articles: ", error);
        return [];
    }
};

export const getArticleById = async (id: string) => {
    if (!id || typeof id !== 'string') {
        console.warn("getArticleById: Invalid ID provided", id);
        return null;
    }
    try {
        const doc = await adminDb.collection("articles").doc(id).get();
        if (!doc.exists) {
            return null;
        }
        return {
            id: doc.id,
            ...doc.data(),
            date: doc.data()?.createdAt ? doc.data()?.createdAt.toDate().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently",
        };
    } catch (error) {
        console.error("Error fetching article by ID: ", error);
        return null;
    }
};
