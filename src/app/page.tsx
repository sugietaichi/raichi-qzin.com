"use client"

import Loading from "@/components/atoms/loading/Loading";
import Card from "@/components/molecules/card/Card";
import { ResultModal } from "@/components/molecules/modal/Modal";
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu";
import { SearchArea } from "@/components/search-area/searchArea";
import { type Job } from "@/server/api/routers/job";
import { api } from "@/trpc/react";

function Home() {
  const { data } = api.job.getAll.useQuery();

  return (
    <div className="">
      <ResultModal />
      <SearchArea />
      <div className="flex justify-between items-center">
        <div>
          <Pankuzu paths={[{ text: "案件一覧", href: "/" }]} />
        </div>
        <div className="flex">
          <div className="text-center mx-auto text-sm">
            検索結果
            <span className=" text-lg text-gray-700">{` ${data ? data.length : 0} `}</span>
            /
            <span className=" text-lg text-gray-700">{` ${data ? data.length : 0} `}</span>
            件
          </div>
        </div>
      </div>
      <ul className='space-y-3'>
        {data ? data.map((job: Job) => (
          <div key={job.id} className="mb-10">
            <Card {...{ jobId: job.id }} />
          </div>
        ))
          :
          <div className="flex justify-center m-10" aria-label="読み込み中">
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
          </div>
        }
      </ul>
    </div>
  );
}

export default Home