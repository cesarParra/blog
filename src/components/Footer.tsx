import { ContainerInner, ContainerOuter } from './Container.tsx';
import React from "react";

function NavLink({
					 href,
					 children,
				 }: {
	href: string
	children: React.ReactNode
}) {
	return (
		<a
			href={href}
			className="transition hover:text-orange-500 dark:hover:text-orange-400"
		>
			{children}
		</a>
	)
}

export function Footer() {
	return (
		<footer className="mt-32 flex-none">
			<ContainerOuter>
				<div className="border-t border-slate-100 pb-16 pt-10 dark:border-slate-700/40">
					<ContainerInner>
						<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-slate-800 dark:text-slate-200">
								<NavLink href="/">Home</NavLink>
								<NavLink href="/blog">Blog</NavLink>
							</div>
							<p className="text-sm text-slate-400 dark:text-slate-500">
								&copy; {new Date().getFullYear()} Cesar Parra. All rights
								reserved.
							</p>
						</div>
					</ContainerInner>
				</div>
			</ContainerOuter>
		</footer>
	)
}
