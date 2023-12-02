"use client"

import Link from "next/link"
import Image from "next/image"
import { type Job } from "@/server/api/routers/job";
import { Tags } from "@/components/organisms/tags/Tags";

export const CardBody = ({
    id: jobId,
    job,
    // children
}: Job) => {
    return (
        <>
            <div className="px-3">
                <Link href={`/job/${jobId}`}>
                    <Image
                        className='rounded-t-lg border border-black '
                        src={job.imageUrl || '/noimage.png'}
                        alt=''
                        width={1000}
                        height={430}
                    >
                    </Image>
                </Link>
            </div>
            <Tags tags={job.tags} />
            <div className="p-2">
                <h5 className='m-2 text-2xl font-bold tracking-tight text-gray-900'>
                    {job.title}
                </h5>
            </div>
            {/* <div className='text-gray-600 p-2'>{job.subtitle}</div> */}

            <div className="border-orange-500 border rounded shadow-xl m-2 mb-5 p-2 pt-5 mt-5 relative" >
                <div className="absolute top-[-1rem] left-2 px-2 bg-orange-200">要件内容</div>
                <div className="px-5 py-2 w-70">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                            </svg>
                            <p className="text-xs">応募資格</p>
                        </div>
                        <div>
                            <p>18歳以上の方</p>
                        </div>
                    </div>
                </div>

                <div className="px-5 py-2 w-70">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <p className="text-xs">撮影場所</p>
                        </div>
                        <div>

                            <p>東京都新宿区</p>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-2 w-70">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className="text-xs">拘束時間</p>
                        </div>
                        <div>
                            <p>最大6時間</p>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-2 w-70">
                    <div className="flex items-center">
                        <div className="flex flex-col items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-xs">謝礼目安</p>
                        </div>
                        <div>
                            <p>最低8万円~30万円以上も可</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="border-gray-400 border rounded shadow-xl m-2 p-4" >
                                        <div>【秘密で稼ぎたい女性専門】充実した待遇のもと高収入を狙えるプロダクション美容への後押しとなる盛り沢山の福利厚生をぜひチェック！
                                            『LIGHT promotion』は、少ない稼働でも効率よく高収入を目指せる仕組みなのだとか。マスクを着用したりサングラスを着用したりして出演することも可能だそうで、身バレの心配を抑えることができそうです。また、こちらの会社は美容への後押しとなるサポート待遇も盛り沢山なのだとか。様々な福利厚生が設けられているとのことで、美しさを高めることも可能なのだそうですよ♪少しでもグッと来た方はぜひチェック！＜編集部＞</div>
                                    </div> */}

            <div className="pt-5">
                <div className="border-gray-400 border rounded shadow-xl m-2 p-5 relative">
                    <div className="absolute top-[-1rem] left-2 px-2 bg-gray-200">紹介文</div>
                    <div className="">
                        充実した待遇のもと高収入を狙えるプロダクション美容への後押しとなる盛り沢山の福利厚生をぜひチェック！
                        『LIGHT promotion』は、少ない稼働でも効率よく高収入を目指せる仕組みなのだとか。マスクを着用したりサングラスを着用したりして出演することも可能だそうで、身バレの心配を抑えることができそうです。また、こちらの会社は美容への後押しとなるサポート待遇も盛り沢山なのだとか。様々な福利厚生が設けられているとのことで、美しさを高めることも可能なのだそうですよ♪少しでもグッと来た方はぜひチェック！＜編集部＞
                    </div>
                </div>
            </div>
        </>
    )
}