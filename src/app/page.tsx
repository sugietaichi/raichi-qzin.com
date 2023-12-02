import QueryParam from "@/components/_internal/QueryParam";
import Loading from "@/components/atoms/loading/Loading";
import Card from "@/components/molecules/card/Card";
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu";
import { SearchArea } from "@/components/search-area/searchArea";
import { type Job } from "@/server/api/routers/job";
import { api } from "@/trpc/server";

async function Home() {
  const jobs = await api.job.getAll.query();

  return (
    <>
      <QueryParam />
      <SearchArea />
      <Pankuzu paths={[
        {
          text: "案件一覧",
          href: "/"
        }
      ]}
      />
      <ul className='space-y-3'>
        {jobs ? jobs.map((job: Job) => (
          <div key={job.id} className="mb-10">
            <Card {...{ jobId: job.id }} />
          </div>
        ))
          : <Loading />}
      </ul>
    </>
  );
}

export default Home