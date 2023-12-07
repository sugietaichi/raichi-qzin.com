import { type Job } from "@/server/api/routers/job";
import { JobCardLikeButton as LikeButton } from "./JobCardLikeButton";
import { JobCardTitle } from "./JobCardTitle";


export const JobCardHeader = ({ data }: { data: Job }) => {
    const { id, job } = data

    return (
        <div className="flex items-center justify-between mb-4 bg-blue-500 rounded-t">
            <JobCardTitle {...{ text: job.title }} />

            <div className="flex items-center mx-2">
                <LikeButton {...{ id }} />
            </div>
        </div>
    )
}