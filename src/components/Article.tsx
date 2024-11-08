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

function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function Article({ article }: { article: ArticleWithSlug }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <CardTitle href={`/articles/${article.slug}`}>
                    {article.title}
                </CardTitle>
                <CardEyebrow
                    as="time"
                    dateTime={formatDate(article.date)}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.date)}
                </CardEyebrow>
                <CardDescription>{article.description}</CardDescription>
                <CardCta>Read article</CardCta>
            </Card>
            <CardEyebrow
                as="time"
                dateTime={formatDate(article.date)}
                className="mt-1 hidden md:block"
            >
                {formatDate(article.date)}
            </CardEyebrow>
        </article>
    )
}

export function ArticleCondensed({ article }: { article: ArticleWithSlug }) {
    return (
        <Card as="article">
            <CardTitle href={`/blog/${article.slug}`}>
                {article.title}
            </CardTitle>
            <CardEyebrow as="time" dateTime={formatDate(article.date)} decorate>
                {formatDate(article.date)}
            </CardEyebrow>
            <CardDescription>{article.description}</CardDescription>
            <CardCta>Read article</CardCta>
        </Card>
    )
}
