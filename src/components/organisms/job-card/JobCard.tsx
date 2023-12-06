import { type Job } from "@/server/api/routers/job";
import { JobCardTopImage as Image } from "./JobCardTopImage"
import { JobCardHeader as Header } from "./JobCardHeader";
import { JobCardDetails } from "./JobCardDetails";
import { type ReactNode } from "react";
import { JobCardSchedule } from "./JobCardSchedule";
import { JobCardTemplate } from "./JobCardTmplate";
import { JobCardFooter as Footer } from "./JobCardFooter";

const IconLocation = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
)

const IconCheckDocument = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
)

const IconQlock = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

const IconMoney = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)




export type DetailInfo = {
    icon: ReactNode,
    text: string,
    description: string
}

const details = new Map<"expose" | "hide", DetailInfo[]>([
    ["expose", [
        {
            icon: IconLocation,
            text: "撮影場所",
            description: "東京都新宿区"
        },
        {
            icon: IconCheckDocument,
            text: "応募資格",
            description: "18歳以上の方(高校生不可)"
        },
        {
            icon: IconQlock,
            text: "拘束時間",
            description: "最大6時間"
        },
    ]],
    ["hide", [
        {
            icon: IconMoney,
            text: "謝礼目安",
            description: "最低8万円~30万円以上も可"
        },
    ]]
]);

const schedule = new Map<"expose" | "hide", ScheduleInfo[]>([

    ["expose", [
        {
            icon: IconLocation,
            text: "撮影場所",
            description: "東京都新宿区"
        },
        {
            icon: IconLocation,
            text: "撮影場所",
            description: "東京都新宿区"
        },
    ]],

    ["hide", [
        {
            icon: IconLocation,
            text: "拘束時間",
            description: "最大6時間"
        },
        {
            icon: IconLocation,
            text: "拘束時間",
            description: "最大6時間"
        },
    ]]
]);

export type ScheduleInfo = {
    icon: ReactNode,
    text: string,
    description: string
}



export const JobCard = ({ data }: { data: Job }) => {
    const { job, id } = data

    return (
        <JobCardTemplate>
            <Header {...{ data }} />

            <Image {...{
                src: job.imageUrl,
                href: `/job/${id}`
            }} />

            <JobCardDetails {...{
                details,
                text: "案件詳細"
            }} />

            <JobCardSchedule {...{
                schedule,
                text: "当日の流れ"
            }} />

            <Footer {...{
                jobId: id
            }} />
        </JobCardTemplate>
    )
}