import { BorderArea } from "@/components/molecules/border-area/BorderArea"
import { useToggle } from "react-use"
import { DetailCardCommentInfo } from "./JobDetailCardCommentInfo"
import { type Kuchikomi } from "../job-card/JobCard"



export const JobDetailCardComment = ({
    kuchikomi,
    text,
    initOpen = false
}: {
    kuchikomi: Map<"expose" | "hide", Kuchikomi[]>
    text: string
    initOpen?: boolean
}) => {
    const exposes = kuchikomi.get("expose")
    const hides = kuchikomi.get("hide")
    const [showAccordion, changeShowAccordion] = useToggle(initOpen)

    return (
        <BorderArea title={text}>
            <div className="pt-3"></div>
            {exposes?.map((comments, i) => (
                <DetailCardCommentInfo
                    key={i}
                    {...comments}
                    p="p-2"
                />
            ))}

            <div
                className={`transition-all duration-1000 ease-in-out relative 
                            ${showAccordion ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
            >
                {hides?.map((comments, i) => (
                    <DetailCardCommentInfo
                        key={i}
                        {...comments}
                        p="p-2"
                    />
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