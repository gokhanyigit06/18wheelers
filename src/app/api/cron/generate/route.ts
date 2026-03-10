import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function GET(request: Request) {
    // Basic auth check for Cron (optional: add a secret token)
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        if (!GEMINI_API_KEY) {
            return NextResponse.json({ error: "No API Key" }, { status: 500 });
        }

        // 1. Choose a random category and persona
        const categories = ["trucks", "muscle-cars", "logistics", "news"];
        const category = categories[Math.floor(Math.random() * categories.length)];

        let persona = "Caleb Vance";
        let personaId = "caleb";
        let bio = "logistics and heavy-duty trucking";

        if (category === "muscle-cars") {
            persona = "Elena Rodriguez";
            personaId = "elena";
            bio = "automotive performance and heritage";
        }

        // 2. Prepare the prompt
        const prompt = `You are ${persona}, an expert in ${bio} for the website '18-Wheelers'. 
        Write a high-quality, engaging article about a trending topic in the ${category} industry.
        
        Return the result ONLY as a JSON object with this exact structure:
        {
            "title": "...",
            "tldr": "...",
            "body": "...",
            "category": "${category}",
            "seo": {
                "metaTitle": "...",
                "metaDesc": "...",
                "keywords": "..."
            }
        }
        
        Guidelines:
        - The title should be catchy and SEO optimized.
        - TL;DR should be 3-4 bullet points.
        - Body should be in HTML format, using <p>, <h2>, <h3> tags. Do not use <h1>.
        - Length: At least 800 words for the body.
        - Tone: Professional, slightly brutalist, authoritative.
        - Important: Provide only the JSON, no markdown formatting like \`\`\`json.`;

        // 3. Call Gemini
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            }),
        });

        const data = await response.json();
        const content = JSON.parse(data.candidates[0].content.parts[0].text);

        // 4. Save to Firestore as Draft
        const articleData = {
            ...content,
            slug: content.title.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "") + "-" + Date.now().toString().slice(-4),
            authorId: personaId,
            authorName: persona,
            authorAvatar: personaId === "caleb" ? "https://i.pravatar.cc/150?u=a04" : "https://i.pravatar.cc/150?u=b02",
            image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800", // Standard placeholder
            status: "draft", // Saving as draft so user can add image
            createdAt: new Date(),
        };

        if (adminDb) {
            await adminDb.collection("articles").add(articleData);
        }

        return NextResponse.json({ success: true, articleId: articleData.slug });

    } catch (error: any) {
        console.error("AI Generation Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
