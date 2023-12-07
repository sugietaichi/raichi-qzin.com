"use client"

import { UserType } from "@/components/_internal/emus"
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu"
import { TableRow } from "@/components/molecules/table-raw/TableRow"
import useLineLogin from "@/hooks/use-line-login/useLineLogin"
import useAffiliatorId from "@/hooks/useAffiliatorId"
import { api } from "@/trpc/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/molecules/card/Header"
import { useToggle } from "react-use"
import { ButtonItem } from "@/components/atoms/button/ButtonItem"
import { IconLine, IconBack } from "@/components/atoms/icons/icons"
import { Tags } from "@/components/molecules/tags/Tags"
import { JobDetailCard } from "@/components/organisms/job-detail-card/JobDetailCard"

const Page = ({ params: { id } }: { params: { id: string } }) => {
    const { data: data, isLoading } = api.job.getById.useQuery({ id });
    const [isBackLoading, setIsBackLoading] = useToggle(false)

    return (
        <>
            <Pankuzu paths={[
                {
                    text: "案件一覧",
                    href: "/"
                },
                {
                    text: `${data?.job.title}`,
                    href: `/job/${data?.job.title}`
                }
            ]}
            />
            <div >
                {data ?
                    <JobDetailCard {...{ data }} />
                    :
                    <div className="flex justify-center m-10" aria-label="読み込み中">
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>}
            </div >
        </>
    )
}

export default Page