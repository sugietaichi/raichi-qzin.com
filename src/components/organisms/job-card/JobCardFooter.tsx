"use client"

import { UserType } from "@/components/_internal/emus"
import { ButtonItem } from "@/components/atoms/button/ButtonItem"
import { IconLine, IconDocText } from "@/components/atoms/icons/icons"
import useLineLogin from "@/hooks/use-line-login/useLineLogin"
import useAffiliatorId from "@/hooks/useAffiliatorId"
import { useRouter } from "next/navigation"
import { useToggle } from "react-use"

export const JobCardFooter = ({
    jobId
}: {
    jobId: string
}) => {
    const router = useRouter()
    const { affiliatorId } = useAffiliatorId('a')
    const { submit, isLoading: isLineLoading } = useLineLogin()
    const [isNextLoading, setIsNextLoading] = useToggle(false)
    return (
        <div className="w-full">
            <div className="flex rounded-md justify-center shadow-sm my-5 mx-3" role="group">
                {
                    isLineLoading
                        ?
                        <ButtonItem
                            loading={true}
                            round="rounded-s-lg"
                            bgColor="bg-green-300"
                            textColor="text-white"
                            flex="flex-1"
                            text="読み込み中です"
                            barColor="green"
                            h="h-20"
                        />
                        :
                        <ButtonItem
                            onClick={() => {
                                submit(process.env.NEXT_PUBLIC_LINE_CLIENT_ID ?? "", {
                                    base: process.env.NEXT_PUBLIC_LINE_LOGIN_WEBHOOK_URL ?? "",
                                    params: {
                                        jobId,
                                        affiliatorId,
                                        type: String(UserType.Actress)
                                    }
                                })
                            }}
                            round="rounded-s-lg"
                            bgColor="bg-green-500"
                            textColor="text-white"
                            flex="flex-1"
                            text="LINEで応募"
                            h="h-20"
                        >
                            <IconLine />
                        </ButtonItem>
                }

                {/* <button type="button" className="inline-flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white flex-1">
                            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                            </svg>
                            Se
                        </button> */}

                {
                    isNextLoading
                        ?
                        <ButtonItem
                            loading={true}
                            round="rounded-e-lg"
                            bgColor="bg-blue-400"
                            textColor="text-white"
                            flex="flex-1"
                            text="読み込み中です"
                            barColor="blue"
                            h="h-20"
                        />
                        :
                        <ButtonItem
                            onClick={() => {
                                setIsNextLoading(true)
                                router.push(`/job/${jobId}`)
                            }}
                            round="rounded-e-lg"
                            bgColor="bg-blue-600"
                            textColor="text-white"
                            flex="flex-1"
                            text="詳細を見る"
                            h="h-20"
                        >
                            <IconDocText />
                        </ButtonItem>
                }
            </div>
        </div>
    )
}