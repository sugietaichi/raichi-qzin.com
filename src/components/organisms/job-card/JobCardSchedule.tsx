import { useToggle } from "react-use";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";
import { JobScheduleInfo } from "./JobScheduleInfo";
import type { ScheduleInfo } from "./JobCard";

export const JobCardSchedule = ({
    schedule,
    text,
    initOpen = false
}: {
    schedule: Map<"expose" | "hide", ScheduleInfo[]>
    text: string
    initOpen?: boolean
}) => {
    const exposes = schedule.get("expose")
    const hides = schedule.get("hide")
    const [showAccordion, changeShowAccordion] = useToggle(initOpen)

    return (
        <BorderArea title={text}>
            <div className="border-s border-blue-700 m-5">
                <ol className="relative">
                    {exposes?.map((schedule) => (
                        <li
                            className="mb-10 ms-6"
                            key={schedule.text}
                        >
                            <JobScheduleInfo {...schedule} />
                        </li>
                    ))}

                    <div
                        className={`transition-all duration-1000 ease-in-out relative 
                            ${showAccordion ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`
                        }
                    >
                        {hides?.map((schedule) => (
                            <li
                                key={schedule.text}
                                className="mb-10 ms-6"
                            >
                                <JobScheduleInfo {...schedule} />
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
