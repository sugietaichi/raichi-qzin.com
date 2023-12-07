import { BorderArea } from "@/components/molecules/border-area/BorderArea"
import { useToggle } from "react-use"
import { JobDetailItemInfo } from "../job-card/JobDetailItemInfo"
import { DetailInfo } from "./JobDetailCard"
import { DetailCardCommentInfo } from "./JobDetailCardCommentInfo"

export type CommentType = {
    name?: string
    shootingDate?: string
    avatar?: React.ReactNode
    rating?: 0 | 1 | 2 | 3 | 4 | 5
    comment?: string
    title?: string
}


export const JobDetailCardComment = ({
    comments,
    text,
    initOpen = false
}: {
    comments: Map<"expose" | "hide", CommentType[]>
    text: string
    initOpen?: boolean
}) => {
    const exposes = comments.get("expose")
    const hides = comments.get("hide")
    const [showAccordion, changeShowAccordion] = useToggle(initOpen)

    return (
        <BorderArea title={text}>
            {exposes?.map((detail, i) => (
                <DetailCardCommentInfo key={i} />
            ))}

            <div
                className={`transition-all duration-1000 ease-in-out relative 
                            ${showAccordion ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
            >
                {hides?.map((detail, i) => (
                    <DetailCardCommentInfo key={i} {...detail} />
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