import { JobCard } from "@/components/organisms/job-card/JobCard"
import { api } from "@/trpc/react"

export const JobCardById = ({ id }: { id: string }) => {
    const { data: data } = api.job.getById.useQuery({ id });

    return (
        <>
            {data && <JobCard {...{ data }} />}
        </>

    )
}