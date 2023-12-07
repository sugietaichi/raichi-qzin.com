"use client"

import { UserType } from "@/components/_internal/emus"
import { ButtonItem } from "@/components/atoms/button/ButtonItem"
import { IconLine, IconDocText, IconBack } from "@/components/atoms/icons/icons"
import useLineLogin from "@/hooks/use-line-login/useLineLogin"
import useAffiliatorId from "@/hooks/useAffiliatorId"
import { api } from "@/trpc/react"
import { useRouter } from "next/navigation"
import { useToggle } from "react-use"

export const JobDetailCardFooter = ({
    jobId
}: {
    jobId: string
}) => {
    const { affiliatorId } = useAffiliatorId('a')
    const { submit, isLoading: isLineLoginLoading } = useLineLogin()
    const router = useRouter()

    const [isBackLoading, setIsBackLoading] = useToggle(false)
    return (
        <div className="w-full">
            <div className="flex rounded-md justify-center shadow-sm my-5 mx-3" role="group">
                {
                    isBackLoading
                        ?
                        <ButtonItem
                            loading={true}
                            round="rounded-s-lg"
                            bgColor="bg-gray-300"
                            textColor="text-black"
                            flex="flex-1"
                            text="読み込み中です"
                            barColor="gray"
                            h="h-20"
                        />
                        :
                        <ButtonItem
                            onClick={() => {
                                setIsBackLoading(true)
                                router.back()
                            }}
                            round="rounded-s-lg"
                            bgColor="bg-gray-100"
                            textColor="text-black"
                            barColor="black"
                            flex="flex-1"
                            text="戻る"
                            h="h-20"
                        >
                            <IconBack />
                        </ButtonItem>
                }
                {
                    isLineLoginLoading
                        ?
                        <ButtonItem
                            loading={true}
                            round="rounded-e-lg"
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
                            round="rounded-e-lg"
                            bgColor="bg-green-500"
                            textColor="text-white"
                            flex="flex-1"
                            text="LINEで応募"
                            h="h-20"
                        >
                            <IconLine />
                        </ButtonItem>
                }
            </div>
        </div>
    )
}