import { type Job } from "@/server/api/routers/job";
import { JobCardTopImage as Image } from "./JobCardTopImage"
import { JobCardHeader as Header } from "./JobCardHeader";
import { JobCardTemplate as Template } from "./JobCardTmplate";
import { JobCardBody as Body } from "./JobCardBody";
import { JobCardDetails } from "./JobCardDetails";
import { ReactNode } from "react";

const IconLocation = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
)

export type DetailInfo = {
    icon: ReactNode,
    title: string,
    description: string
}

const details = new Map<"expose" | "hide", DetailInfo[]>([
    ["expose", [
        {
            icon: IconLocation,
            title: "撮影場所",
            description: "東京都新宿区"
        },
        {
            icon: IconLocation,
            title: "撮影場所",
            description: "東京都新宿区"
        },
    ]],
    ["hide", [
        {
            icon: IconLocation,
            title: "拘束時間",
            description: "最大6時間"
        },
        {
            icon: IconLocation,
            title: "拘束時間",
            description: "最大6時間"
        },
    ]]
]);

export const JobCard = ({ data }: { data: Job }) => {
    const { job, id } = data
    return (
        <Template>
            <Header {...{ data }} />
            <Image {...{
                src: job.imageUrl,
                href: `/job/${id}`
            }} />
            {/* <Body {...{ data }} /> */}
            <JobCardDetails {...{
                details,
                text: "案件詳細"
            }} />
        </Template>
    )
}