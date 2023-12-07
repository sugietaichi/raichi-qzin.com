import { type ReactNode } from "react";
import { useToggle } from "react-use";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";
import { ScheduleInfo } from "./JobDetailCard";
import { JobScheduleInfo } from "../job-card/JobScheduleInfo";

export const JobDetailCardSchedule = ({
    schedules,
    text,
    initOpen = false
}: {
    schedules: ScheduleInfo[]
    text: string
    initOpen?: boolean
}) => {
    const [showAccordion, changeShowAccordion] = useToggle(initOpen)

    return (
        <BorderArea title={text}>
            <div className="border-s border-blue-700 m-5">
                <ol className="relative">
                    {schedules.map((schedule) => (
                        <li
                            className="mb-10 ms-6"
                            key={schedule.text}
                        >
                            <JobScheduleInfo {...schedule} />
                        </li>
                    ))}

                </ol>
            </div>
        </BorderArea>
    )
}
