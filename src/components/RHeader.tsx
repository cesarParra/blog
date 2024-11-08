'use client'

import React, {useEffect, useRef, useState} from 'react'
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from './Container.tsx';
import {useTheme} from "../hooks/useTheme.ts";
import avatar from "../assets/avatar.jpg";

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function MobileNavItem({
                           href,
                           children,
                       }: {
    href: string
    children: React.ReactNode
}) {
    return (
        <li>
            <PopoverButton as='a' href={href} className="block py-2">
                {children}
            </PopoverButton>
        </li>
    )
}

function MobileNavigation(
    props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
    return (
        <Popover {...props}>
            <PopoverButton
                className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDownIcon
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"/>
            </PopoverButton>
            <PopoverBackdrop
                transition
                className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
            />
            <PopoverPanel
                focus
                transition
                className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
            >
                <div className="flex flex-row-reverse items-center justify-between">
                    <PopoverButton aria-label="Close menu" className="-m-1 p-1">
                        <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400"/>
                    </PopoverButton>
                    <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Navigation
                    </h2>
                </div>
                <nav className="mt-6">
                    <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        <MobileNavItem href="/">Home</MobileNavItem>
                        <MobileNavItem href="/blog">Blog</MobileNavItem>
                    </ul>
                </nav>
            </PopoverPanel>
        </Popover>
    )
}

function NavItem({
                     currentPath,
                     href,
                     children,
                 }: {
    currentPath: string,
    href: string
    children: React.ReactNode
}) {
    let isActive = currentPath === href

    return (
        <li>
            <a
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'hover:text-teal-500 dark:hover:text-teal-400',
                )}
            >
                {children}
                {isActive && (
                    <span
                        className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"/>
                )}
            </a>
        </li>
    )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'> & { currentpath: string }) {
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <NavItem currentPath={props.currentpath} href="/">Home</NavItem>
                <NavItem currentPath={props.currentpath} href="/blog">Blog</NavItem>
            </ul>
        </nav>
    )
}

function ThemeToggle() {
    let {theme, setTheme} = useTheme()
    let otherTheme = theme === 'dark' ? 'light' : 'dark'
    let [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <label className="px-3 py-2 swap swap-rotate">
            <input type="checkbox" onChange={() => setTheme(otherTheme)} checked={theme === 'dark'}/>
            <svg
                className="swap-on h-6 w-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
            </svg>
            <svg
                className="swap-off h-6 w-6 fill-zinc-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
        </label>
    )
}

function clamp(number: number, a: number, b: number) {
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    return Math.min(Math.max(number, min), max)
}

function AvatarContainer({
                             className,
                             ...props
                         }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={clsx(
                className,
                'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10',
            )}
            {...props}
        />
    )
}

function Avatar({
                    large = false,
                    className,
                    ...props
                }: Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & {
    large?: boolean
}) {
    return (
        <a
            href="/"
            aria-label="Home"
            className={clsx(className, 'pointer-events-auto')}
            {...props}
        >
            <img
                src={avatar.src}
                alt=""
                sizes={large ? '4rem' : '2.25rem'}
                className={clsx(
                    'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
                    large ? 'h-16 w-16' : 'h-9 w-9',
                )}
            />
        </a>
    )
}

export function RHeader({currentPath}: { currentPath: string }) {
    let isHomePage = currentPath === '/'

    let headerRef = useRef<React.ElementRef<'div'>>(null)
    let avatarRef = useRef<React.ElementRef<'div'>>(null)
    let isInitial = useRef(true)

    useEffect(() => {
        let downDelay = avatarRef.current?.offsetTop ?? 0
        let upDelay = 64

        function setProperty(property: string, value: string) {
            document.documentElement.style.setProperty(property, value)
        }

        function removeProperty(property: string) {
            document.documentElement.style.removeProperty(property)
        }

        function updateHeaderStyles() {
            if (!headerRef.current) {
                return
            }

            let {top, height} = headerRef.current.getBoundingClientRect()
            let scrollY = clamp(
                window.scrollY,
                0,
                document.body.scrollHeight - window.innerHeight,
            )

            if (isInitial.current) {
                setProperty('--header-position', 'sticky')
            }

            setProperty('--content-offset', `${downDelay}px`)

            if (isInitial.current || scrollY < downDelay) {
                setProperty('--header-height', `${downDelay + height}px`)
                setProperty('--header-mb', `${-downDelay}px`)
            } else if (top + height < -upDelay) {
                let offset = Math.max(height, scrollY - upDelay)
                setProperty('--header-height', `${offset}px`)
                setProperty('--header-mb', `${height - offset}px`)
            } else if (top === 0) {
                setProperty('--header-height', `${scrollY + height}px`)
                setProperty('--header-mb', `${-scrollY}px`)
            }

            if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
                setProperty('--header-inner-position', 'fixed')
                removeProperty('--header-top')
                removeProperty('--avatar-top')
            } else {
                removeProperty('--header-inner-position')
                setProperty('--header-top', '0px')
                setProperty('--avatar-top', '0px')
            }
        }

        function updateAvatarStyles() {
            if (!isHomePage) {
                return
            }

            let fromScale = 1
            let toScale = 36 / 64
            let fromX = 0
            let toX = 2 / 16

            let scrollY = downDelay - window.scrollY

            let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
            scale = clamp(scale, fromScale, toScale)

            let x = (scrollY * (fromX - toX)) / downDelay + toX
            x = clamp(x, fromX, toX)

            setProperty(
                '--avatar-image-transform',
                `translate3d(${x}rem, 0, 0) scale(${scale})`,
            )

            let borderScale = 1 / (toScale / scale)
            let borderX = (-toX + x) * borderScale
            let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

            setProperty('--avatar-border-transform', borderTransform)
            setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
        }

        function updateStyles() {
            updateHeaderStyles()
            updateAvatarStyles()
            isInitial.current = false
        }

        updateStyles()
        window.addEventListener('scroll', updateStyles, {passive: true})
        window.addEventListener('resize', updateStyles)

        return () => {
            window.removeEventListener('scroll', updateStyles)
            window.removeEventListener('resize', updateStyles)
        }
    }, [isHomePage])

    return (
        <>
            <header
                className="pointer-events-none relative z-50 flex flex-none flex-col"
                style={{
                    height: 'var(--header-height)',
                    marginBottom: 'var(--header-mb)',
                }}
            >
                {isHomePage && (
                    <>
                        <div
                            ref={avatarRef}
                            className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
                        />
                        <Container
                            className="top-0 order-last -mb-3 pt-3"
                            style={{
                                position:
                                    'var(--header-position)' as React.CSSProperties['position'],
                            }}
                        >
                            <div
                                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                                style={{
                                    position:
                                        'var(--header-inner-position)' as React.CSSProperties['position'],
                                }}
                            >
                                <div className="relative">
                                    <AvatarContainer
                                        className="absolute left-0 top-3 origin-left transition-opacity"
                                        style={{
                                            opacity: 'var(--avatar-border-opacity, 0)',
                                            transform: 'var(--avatar-border-transform)',
                                        }}
                                    />
                                    <Avatar
                                        large
                                        className="block h-16 w-16 origin-left"
                                        style={{transform: 'var(--avatar-image-transform)'}}
                                    />
                                </div>
                            </div>
                        </Container>
                    </>
                )}
                <div
                    ref={headerRef}
                    className="top-0 z-10 h-16 pt-6"
                    style={{
                        position:
                            'var(--header-position)' as React.CSSProperties['position'],
                    }}
                >
                    <Container
                        className="top-[var(--header-top,theme(spacing.6))] w-full"
                        style={{
                            position:
                                'var(--header-inner-position)' as React.CSSProperties['position'],
                        }}
                    >
                        <div className="relative flex gap-4">
                            <div className="flex flex-1">
                                {!isHomePage && (
                                    <AvatarContainer>
                                        <Avatar/>
                                    </AvatarContainer>
                                )}
                            </div>
                            <div className="flex flex-1 justify-end md:justify-center">
                                <MobileNavigation className="pointer-events-auto md:hidden"/>
                                <DesktopNavigation currentpath={currentPath}
                                                   className="pointer-events-auto hidden md:block"/>
                            </div>
                            <div className="flex justify-end md:flex-1">
                                <div className="pointer-events-auto">
                                    <ThemeToggle/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            {isHomePage && (
                <div
                    className="flex-none"
                    style={{height: 'var(--content-offset)'}}
                />
            )}
        </>
    )
}
