import { Container } from './Container.tsx';

export function NotFound() {
    return (
        <Container className="flex h-full items-center pt-16 sm:pt-32">
            <div className="flex flex-col items-center">
                <p className="text-base font-semibold text-slate-400 dark:text-slate-500">
                    404
                </p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl dark:text-slate-100">
                    Page not found
                </h1>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <a href="/" className="hover:text-orange-500 dark:hover:text-orange-400 mt-4 btn hover:bg-white">
                    Go back home
                </a>
            </div>
        </Container>
    )
}
