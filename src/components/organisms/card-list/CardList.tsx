import { api } from "@/trpc/server";
import Card from "../../molecules/card/Card"
import Loading from "../../atoms/loading/Loading";
import { type Job } from "@/server/api/routers/job";

const CardList = async () => {
    const jobs = await api.job.getAll.query();

    return (
        <ul className='space-y-3'>
            {jobs ? jobs.map((job: Job) => (
                <div key={job.id} className="mb-10">
                    <Card {...{ jobId: job.id }} />
                </div>
            )) : <Loading />}
        </ul>
    )
}

export default CardList