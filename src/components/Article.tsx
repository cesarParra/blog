// TODO: Rename to Post

import {Card, CardTitle, CardEyebrow, CardDescription, CardCta} from "./Card.tsx";

interface Article {
    title: string
    description: string
    date: Date
}

export interface ArticleWithSlug extends Article {
    slug: string
}

export function Article({ article }: { article: ArticleWithSlug }) {
    const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <Card as="article">
            <CardTitle href={`/blog/${article.slug}`}>
                {article.title}
            </CardTitle>
            <CardEyebrow as="time" dateTime={formattedDate} decorate>
                {formattedDate}
            </CardEyebrow>
            <CardDescription>{article.description}</CardDescription>
            <CardCta>Read article</CardCta>
        </Card>
    )
}
