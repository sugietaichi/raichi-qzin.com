"use client"

import { type Job } from "@/server/api/routers/job";
import { JobCardTopImage as Image } from "./JobCardTopImage"
import { JobCardHeader as Header } from "./JobCardHeader";
import { JobCardDetails } from "./JobCardDetails";
import { useState, type ReactNode, useEffect } from "react";
import { JobCardSchedule } from "./JobCardSchedule";
import { JobCardTemplate } from "./JobCardTmplate";
import { JobCardFooter as Footer } from "./JobCardFooter";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";
import Link from "next/link";
import { DetailCardCommentInfo } from "../job-detail-card/JobDetailCardCommentInfo";
import { Tags } from "@/components/molecules/tags/Tags";

export const IconLocation = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
)

export const IconCheckDocument = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
)

export const IconQlock = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

export const IconMoney = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

export const IconHand = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
    </svg>
)

export const IconIdCard = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
    </svg>
)

export const IconInfo = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
)

export type DetailInfo = {
    icon: ReactNode,
    text: string,
    description: string
}

export const defaultDetails = new Map<"expose" | "hide", DetailInfo[]>([
    ["expose", [
        {
            icon: IconCheckDocument,
            text: "応募資格",
            description: "お問い合わせください"
        },
        {
            icon: IconInfo,
            text: "絡みの有無",
            description: "お問い合わせください"
        },
        {
            icon: IconMoney,
            text: "謝礼目安",
            description: "お問い合わせください"
        },
        {
            icon: IconLocation,
            text: "撮影場所",
            description: "お問い合わせください"
        },
    ]],
    ["hide", [
        {
            icon: IconQlock,
            text: "拘束時間",
            description: "お問い合わせください"
        },
        {
            icon: IconHand,
            text: "接触の有無",
            description: "お問い合わせください"
        },
        {
            icon: IconIdCard,
            text: "公的身分証",
            description: "お問い合わせください"
        },
    ]]
]);

const defaultSchedules = new Map<"expose" | "hide", ScheduleInfo[]>([

    ["expose", [
        {
            step: 1,
            text: "デートシーン撮影",
            hour: 1,
            description: "撮影監督との合流後、最寄りのゲームセンター・カフェなどでデートシーンの撮影をします。"
        },
        {
            step: 2,
            text: "事前説明",
            hour: 1,
            description: "撮影現場(最寄りのホテルorスタジオ)に到着後、条件のご確認と撮影に関する事前説明を行います。"
        },
    ]],

    ["hide", [
        {
            step: 3,
            text: "絡み×2回",
            hour: 3,
            description: "休憩を入れながら絡みシーンの撮影を2回行います。"
        },
    ]]
]);

export type ScheduleInfo = {
    step: number,
    text: string,
    hour: number,
    description: string
}

export type Kuchikomi = {
    nickname?: string;
    title?: string;
    shootingDate: string;
    rating?: number;
    comment: string;
    priority?: number;
}

export const JobCard = ({ data }: { data: Job }) => {
    const { job, id } = data
    const [details, setDetails] = useState<Map<"expose" | "hide", DetailInfo[]>>(defaultDetails)
    const [schedules, setSchedules] = useState<Map<"expose" | "hide", ScheduleInfo[]>>(defaultSchedules)
    const [kuchikomi, setKuchikomi] = useState<Kuchikomi>()

    useEffect(() => {
        const {
            require,
            karami,
            guarantee,
            location,
            hours,
            touch,
            idCard,
        } = job.details
        const tmpl = "お問い合わせください"
        setDetails(new Map<"expose" | "hide", DetailInfo[]>([
            ["expose", [
                {
                    icon: IconCheckDocument,
                    text: "応募資格",
                    description: require ?? tmpl
                },
                {
                    icon: IconInfo,
                    text: "絡みの有無",
                    description: karami ?? tmpl
                },
                {
                    icon: IconMoney,
                    text: "謝礼目安",
                    description: guarantee ?? tmpl
                },
                {
                    icon: IconLocation,
                    text: "撮影場所",
                    description: location ?? tmpl
                },
            ]],
            ["hide", [
                {
                    icon: IconQlock,
                    text: "拘束時間",
                    description: hours ?? tmpl
                },
                {
                    icon: IconHand,
                    text: "接触の有無",
                    description: touch ?? tmpl
                },
                {
                    icon: IconIdCard,
                    text: "公的身分証",
                    description: idCard ?? tmpl
                },
            ]]
        ]))
    }, [data])

    useEffect(() => {
        if (!job || !job.jobStep) {
            return
        }
        const ask = [...job.jobStep].sort((a, b) => a.step - b.step);

        const exposedSchedules = ask.slice(0, 2); // 最初の2つの要素を取得
        const hiddenSchedules = ask.slice(2); // 残りの要素を取得

        setSchedules(new Map<"expose" | "hide", ScheduleInfo[]>([
            ["expose", exposedSchedules],
            ["hide", hiddenSchedules]
        ]));
    }, [data]);

    useEffect(() => {
        if (!job || !job.kuchikomi) {
            return
        }
        const top = [...job.kuchikomi].find(item => item.priority === 1);
        setKuchikomi(top ? top : job.kuchikomi[0])
    }, [data]);

    return (
        <JobCardTemplate>
            <Header {...{ data }} />

            <Image {...{
                src: job.imageUrl,
                href: `/job/${id}`,
                alt: "",
            }} />

            <Tags tags={job.tags} />

            <div className="mx-3 text-gray-800 text-xl font-bold">
                {job.subtitle}
            </div>

            <JobCardDetails {...{
                details,
                text: "案件詳細"
            }} />

            <JobCardSchedule {...{
                schedules,
                text: "仕事内容"
            }} />

            {kuchikomi &&
                <BorderArea title={"女の子ボイス"} >
                    <Link href={`/job/${id}?fcs=girls_voice`} className="mt-3  flex items-center justify-between">
                        <DetailCardCommentInfo
                            p={"p-1"}
                            shootingDate={kuchikomi.shootingDate}
                            comment={kuchikomi.comment}
                        />
                        <div className="flex justify-end">
                            <button className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </BorderArea>
            }

            <Footer {...{
                jobId: id
            }} />
        </JobCardTemplate >
    )
}