import React from 'react';

interface SEOProps {
    type: 'NewsArticle' | 'Product' | 'Breadcrumb' | 'WebSite';
    data: any;
}

const SEO: React.FC<SEOProps> = ({ type, data }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": type,
        ...data
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default SEO;
