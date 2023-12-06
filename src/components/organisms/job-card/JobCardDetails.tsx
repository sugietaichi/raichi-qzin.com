import { ReactNode, useEffect, useRef, useState } from "react";
import { JobDetailItemInfo } from "./JobDetailItemInfo";
import { useToggle } from "react-use";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";
import { DetailInfo } from "./JobCard";
import { JobScheduleInfo } from "./JobScheduleInfo";


export const JobCardDetails1 = ({
    details,
    text
}: {
    details: Map<"expose" | "hide", DetailInfo[]>
    text: string
}) => {
    const exposes = details.get("expose")
    const hides = details.get("hide")

    const [showAccordion, changeShowAccordion] = useToggle(false)
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [showAccordion]);

    return (
        <BorderArea title={text}>

            {exposes?.map(detail => (
                <JobDetailItemInfo key={detail.text} {...detail} />
            ))}

            <div
                ref={contentRef}
                style={{
                    maxHeight: showAccordion ? `${contentHeight}px` : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.7s ease-in-out'
                }}
            >
                {hides?.map(detail => (
                    <JobDetailItemInfo key={detail.text} {...detail} />
                ))}
            </div>

            <div className="flex justify-end">
                <button onClick={changeShowAccordion} className="px-4 py-2 z-10 text-sm text-blue-500">
                    {showAccordion ? '閉じる' : 'もっと見る'}
                </button>
            </div>
        </BorderArea>
    )
}





export const JobCardDetails = ({
    details,
    text
}: {
    details: Map<"expose" | "hide", DetailInfo[]>
    text: string
}) => {
    const exposes = details.get("expose")
    const hides = details.get("hide")

    // 初期状態を true に設定
    const [showAccordion, changeShowAccordion] = useToggle(false)

    return (
        <BorderArea title={text}>
            {exposes?.map((detail, i) => (
                <JobDetailItemInfo key={i} {...detail} />
            ))}

            <div
                className={`transition-all duration-1000 ease-in-out relative 
                            ${showAccordion ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`
                }
            >
                {hides?.map((detail, i) => (
                    <JobDetailItemInfo key={i} {...detail} />
                ))}
            </div>
            <div className="flex justify-end">
                <button onClick={changeShowAccordion} className="px-4 py-2 z-10 text-sm text-blue-500">
                    {showAccordion ? '閉じる' : 'もっと見る'}
                </button>
            </div>
        </BorderArea>
    )
}
