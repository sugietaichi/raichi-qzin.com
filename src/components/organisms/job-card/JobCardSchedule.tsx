import { ReactNode, useEffect, useRef, useState } from "react";
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
    const [showAccordion, changeShowAccordion] = useToggle(false)

    return (
        <BorderArea title={text}>
            <div className="border-s border-blue-700 m-5">
                <ol className="relative">
                    {exposes?.map((schedule, index) => (
                        <li className="mb-10 ms-6">
                            <JobScheduleInfo
                                key={index}
                                {...schedule}
                            />
                        </li>
                    ))}

                    <div
                        className={`transition-all duration-1000 ease-in-out relative 
                            ${showAccordion ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`
                        }
                    >
                        {hides?.map((schedule, index) => (
                            <li className="mb-10 ms-6">
                                <JobScheduleInfo key={index} {...schedule} />
                            </li>
                        ))}
                    </div>
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
