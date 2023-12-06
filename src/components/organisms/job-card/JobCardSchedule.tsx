import { ReactNode, useEffect, useRef, useState } from "react";
import { JobDetailItemInfo } from "./JobDetailItemInfo";
import { DetailInfo, ScheduleInfo } from "./JobCard";
import { useToggle } from "react-use";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";
import { JobScheduleInfo } from "./JobScheduleInfo";

export const JobCardSchedule = ({
    schedule,
    text
}: {
    schedule: Map<"expose" | "hide", {
        icon: ReactNode,
        text: string,
        description: string
    }[]>
    text: string
}) => {
    const exposes = schedule.get("expose")
    const hides = schedule.get("hide")

    // 初期状態を true に設定
    const [showAccordion, changeShowAccordion] = useToggle(true)
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [showAccordion]);

    return (
        <BorderArea title={text}>
            {/* 「expose」の部分を常に表示 */}
            <ol className="relative border-s border-gray-200 m-5">
                {exposes?.map((schedule, index) => (
                    <JobScheduleInfo
                        key={index}
                        {...schedule}
                    />
                ))}
            </ol>

            {/* アコーディオン部分 */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: showAccordion ? `${contentHeight}px` : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.7s ease-in-out'
                }}
            >
                <ol className="relative border-s border-gray-200 m-5">
                    {hides?.map((schedule, index) => (
                        <JobScheduleInfo
                            key={index}
                            {...schedule}
                        />
                    ))}
                </ol>
            </div>

            <div className="flex justify-end">
                <button onClick={changeShowAccordion} className="px-4 py-2 z-10 text-sm text-blue-500">
                    {showAccordion ? '閉じる' : 'もっと見る'}
                </button>
            </div>
        </BorderArea>
    )
}
