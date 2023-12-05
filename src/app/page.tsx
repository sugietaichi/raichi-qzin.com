"use client"

import Image from "next/image"
import Card from "@/components/molecules/card/Card";
import { ResultModal } from "@/components/molecules/modal/Modal";
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu";
import { type Job } from "@/server/api/routers/job";
import { api } from "@/trpc/react";
import { SearchArea } from "@/components/molecules/search-area/searchArea";
import { JobCard } from "@/components/organisms/job-card/JobCard";

function Home() {
  const { data } = api.job.getAll.useQuery();

  return (
    <div className="">
      <div className="flex justify-between items-center mx-1 mb-2">
        <div className="">
          <Pankuzu paths={[{ text: "案件一覧", href: "/" }]} />
        </div>
      </div>
      <div className='bg-gray-400 w-full text-white text-center mb-2'>
        高額モデル求人情報サイト
      </div>
      <Image className="w-full pb-2 " src="/bana.png" alt={""} width={200} height={200} />
      <ResultModal />
      <div className="flex flex-col items-end">
        <div className="text-right text-sm">
          検索結果
        </div>
        {data?.length ?
          <p className="text-right">
            <span className="text-lg text-gray-700">{data.length}</span>
            /
            <span className="text-lg text-gray-700">{data.length}</span>
            件
          </p>
          :
          <p className="text-right">
            <span className="text-lg text-gray-700">{0}</span>
            件
          </p>
        }
      </div>
      <SearchArea />
      <Image className="w-full py-1" src="/top_banner.png" alt={""} width={200} height={200} />
      <ul className='space-y-3'>
        {data ? data.map((job: Job) => (
          <div key={job.id} className="mb-10">
            {/* <Card {...{ jobId: job.id }} /> */}
            <JobCard {...{ data: job }} />
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