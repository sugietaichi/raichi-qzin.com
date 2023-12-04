'use client'

import Link from 'next/link'
import { Logo } from '../../atoms/logo/logo'
import { useToggle } from 'react-use'
import { FavCount } from '@/components/molecules/fav-count/FavCount'

type Props = {
    menuList: {
        label: string
        href: string
    }[]
}

export const Header = (props: Props) => {
    const [isOpen, changeOpen] = useToggle(false)

    return (
        <header className='px-5 mt-5 w-full max-w-xl flex justify-between items-center text-center'>
            <Logo />

            <nav
                className={
                    isOpen
                        ? 'z-40 transition duration-0 ease-in-out backdrop-blur-lg fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col'
                        : 'fixed right-[-100%]'
                }
            >
                <ul
                    className={
                        isOpen
                            ? 'flex h-screen justify-center items-center flex-col gap-6 text-xl pb-[50vh]'
                            : 'block'
                    }
                >
                    {props.menuList.map(v => (
                        <li key={v.label}>
                            <Link
                                onClick={changeOpen}
                                href={v.href}
                                className='border-b border-white border-dotted text-gray-700'
                            >
                                {v.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center h-full">
                <FavCount />
                <div className='flex items-center h-full mx-2'>
                    <button className='z-50 space-y-2' onClick={changeOpen}>
                        <span
                            className={
                                isOpen
                                    ? 'block w-8 h-0.5 bg-white translate-y-2.5 rotate-45 duration-300'
                                    : 'block w-8 h-0.5 bg-white duration-300'
                            }
                        />
                        <span
                            className={
                                isOpen
                                    ? 'block opacity-0 duration-300'
                                    : 'block w-8 h-0.5 bg-white duration-300'
                            }
                        />
                        <span
                            className={
                                isOpen
                                    ? 'block w-8 h-0.5 bg-white -rotate-45 duration-300'
                                    : 'block w-8 h-0.5 bg-white duration-300'
                            }
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}