"use client"

import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu"
import { api } from "@/trpc/react"
import { JobDetailCard } from "@/components/organisms/job-detail-card/JobDetailCard"

const Page = ({ params: { id } }: { params: { id: string } }) => {
    const { data: data } = api.job.getById.useQuery({ id });

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
            <div>
                {data ?
                    <JobDetailCard {...{ data }} />
                    :
                    <div className="flex justify-center m-10" aria-label="読み込み中">
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>}
            </div>
        </>
    )
}

export default Page