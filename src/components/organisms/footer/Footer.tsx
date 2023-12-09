"use client"

import Link from 'next/link'
import Image from 'next/image'
import { UserType } from '@/components/_internal/emus'
import Loading from '@/components/atoms/loading/Loading'
import useLineLogin from '@/hooks/use-line-login/useLineLogin'
import useJobId from '@/hooks/useJobId'

export const Footer = () => {
    const { submit, isLoading } = useLineLogin()
    const { jobId } = useJobId()

    return (
        <footer className='footer items-center p-4'>
            <Link href={'https://lin.ee/bLawYUk'}>
                <Image
                    src={'/lineimg.jpg'}
                    alt={''}
                    width={800}
                    height={600}
                    className='w-full'
                />
            </Link>

            <aside
                id="aff"
                className='items-center grid-flow-col text-center cursor-pointer'
            >
                {isLoading ? <Loading /> : (
                    <div className='underline pt-3'
                        onClick={() => {
                            submit(process.env.NEXT_PUBLIC_LINE_CLIENT_ID_AFFILIATOR ?? "", {
                                base: process.env.NEXT_PUBLIC_LINE_LOGIN_WEBHOOK_URL ?? "",
                                params: { jobId, type: String(UserType.Affiliator) }
                            })
                        }}>
                        <p>このページのアフィリエイトリンクを作成する</p>
                    </div>
                )}
            </aside >


        </footer >
    )
}