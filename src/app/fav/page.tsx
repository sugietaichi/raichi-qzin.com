"use client"

import Loading from "@/components/atoms/loading/Loading";
import Card from "@/components/molecules/card/Card";
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu";
import useLikeJobs from "@/hooks/useLikeJobs";
import Link from "next/link";


function Page() {
    const { jobIds } = useLikeJobs();
    return (
        <>

            <div className="flex justify-between items-center">
                <div>
                    <Pankuzu paths={[{ text: "お気に入り", href: "/fav" },]} />
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-center mx-auto text-sm">
                        お気に入り
                    </div>
                    {jobIds?.length ?
                        <p className="text-right">
                            <span className="text-lg text-gray-700">{jobIds.length}</span>
                            /
                            <span className="text-lg text-gray-700">{jobIds.length}</span>
                            件
                        </p>
                        :
                        <p className="text-right">
                            <span className="text-lg text-gray-700">{0}</span>
                            件
                        </p>
                    }
                </div>
            </div>


            <ul className='space-y-3'>
                {jobIds ? jobIds.map((jobId: string) => (
                    <div key={jobId} className="mb-10">
                        <Card {...{ jobId }} >
                        </Card>
                    </div>

                )) : <Loading />}
                {!jobIds.length && (
                    <li className='bg-white rounded shadow-xl rounded-t-lg border-2 border-blue-500 mt-1'>
                        <div className="m-5">
                            <div className="inline space-y-2">
                                <p>お気に入りが0件です。</p>
                                <p>
                                    案件一覧は
                                    <Link href={"/"} className="underline inline-block">
                                        こちら
                                    </Link>
                                </p>
                                {/* <span className="inline-block align-middle">
                                <IconHeart h="h-4" w="w-4" m="" />
                            </span> */}
                            </div>
                        </div>
                    </li >
                )}
            </ul>
        </>
    );
}

export default Page