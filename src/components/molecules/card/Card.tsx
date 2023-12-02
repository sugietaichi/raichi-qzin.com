"use client"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { api } from "@/trpc/react"
import Loading from "../../atoms/loading/Loading"
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
                : <></>}
        </li >
    )
}

export default Card