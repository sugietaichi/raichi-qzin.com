"use client"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { api } from "@/trpc/react"
import { type Job } from "@/server/api/routers/job"
import { CardBody } from "@/app/fav/_internal/CardBody"

const Card = ({
    jobId,
}: {
    jobId: string
}): JSX.Element => {
    const { data }: {
        data: Job | undefined
    } = api.job.getById.useQuery({ id: jobId })

    return (
        <li className='bg-white rounded shadow-xl rounded-t-lg border-2 border-blue-500 mt-1'>
            {data ?
                <div className="">
                    <Header
                        {...{
                            jobId,
                            title: data.job.title
                        }}
                    />

                    <CardBody {...data} />

                    <Footer {
                        ...{ jobId }
                    } />
                </div>
                :
                <div className="flex justify-center m-10" aria-label="読み込み中">
                    <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                    <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
                    <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                </div>
            }
        </li >
    )
}

export default Card