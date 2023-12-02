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
            <Pankuzu paths={[
                {
                    text: "お気に入り",
                    href: "/fav"
                },
            ]} />

            <ul className='space-y-3'>
                {jobIds ? jobIds.map((jobId: string) => (
                    <div key={jobId} className="mb-10">
                        <Card {...{ jobId }} >
                        </Card>
                    </div>

                )) : <Loading />}
                {!jobIds.length && (
                    <div className="">
                        <div className="inline">
                            <p>お気に入りが0件です。</p>
                            案件一覧は
                            <Link href={"/"} className="underline inline-block">
                                こちら
                            </Link>
                            {/* <span className="inline-block align-middle">
                                <IconHeart h="h-4" w="w-4" m="" />
                            </span> */}
                        </div>
                    </div>
                )}
            </ul>
        </>
    );
}

export default Page