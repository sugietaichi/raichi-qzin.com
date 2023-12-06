import { type Job } from "@/server/api/routers/job";
import { JobCardTopImage as Image } from "./JobCardTopImage"
import { JobCardHeader as Header } from "./JobCardHeader";
import { JobCardTemplate as Template } from "./JobCardTmplate";
import { JobCardBody as Body } from "./JobCardBody";
import { JobCardDetails } from "./JobCardDetails";
import { ReactNode } from "react";
import { JobCardSchedule } from "./JobCardSchedule";

const IconLocation = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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

const schedule = new Map<"expose" | "hide", DetailInfo[]>([
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
        <Template>
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
                text: "撮影当日の流れ"
            }} />
        </Template>
    )
}