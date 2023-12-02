"use client"

import Loading from "@/components/atoms/loading/Loading";
import Card from "@/components/molecules/card/Card";
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu";
import { SearchArea } from "@/components/search-area/searchArea";
import { type Job } from "@/server/api/routers/job";
import { api } from "@/trpc/react";

function Home() {
  const { data } = api.job.getAll.useQuery();

  return (
    <div className="">
      <SearchArea />
      <Pankuzu paths={[
        {
          text: "案件一覧",
          href: "/"
        }
      ]}
      />
      <ul className='space-y-3'>
        {data ? data.map((job: Job) => (
          <div key={job.id} className="mb-10">
            <Card {...{ jobId: job.id }} />
          </div>
        ))
          : <Loading />}
      </ul>
    </div>
  );
}

export default Home