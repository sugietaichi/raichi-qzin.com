import { useEffect, useRef, useState } from "react";
import { JobDetailItemInfo } from "./JobDetailItemInfo";
import { DetailInfo } from "./JobCard";
import { useToggle } from "react-use";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";


export const JobCardDetails = ({
    details,
    text
}: {
    details: Map<"expose" | "hide", DetailInfo[]>
    text: string
}) => {
    const exposes = details.get("expose")
    const hides = details.get("hide")

    // const [toggleAccordion, setToggleAccordion] = useState(false);
    const [showAccordion, changeShowAccordion] = useToggle(false)
    const [contentHeight, setContentHeight] = useState<number>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    // const onToggleAccordion = () => setToggleAccordion(!toggleAccordion);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [showAccordion]);

    return (
        <BorderArea title={text}>

            {exposes?.map(detail => (
                <JobDetailItemInfo key={detail.title} {...detail} />
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
                    <JobDetailItemInfo key={detail.title} {...detail} />
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