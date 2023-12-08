import { BorderArea } from "@/components/molecules/border-area/BorderArea"
import { JobDetailItemInfo } from "../job-card/JobDetailItemInfo"
import { type DetailInfo } from "./JobDetailCard"

export const JobDetailCardDetails = ({
    details,
    text,
}: {
    details: DetailInfo[]
    text: string
}) => {
    return (
        <BorderArea title={text}>
            {details?.map((detail: DetailInfo, i: number) => (
                <JobDetailItemInfo key={i} {...detail} />
            ))}
            <div className="">
                <div className="flex items-center text-pink-500 mx-8 py-2 w-70">
                    <div className="flex-1 border-t-2 border-dotted border-pink-500"></div>
                    <p className="px-2">条件について</p>
                    <div className="flex-1 border-t-2 border-dotted border-pink-500"></div>
                </div>
                <div className="flex justify-center text-pink-500 mx-10 py-2 w-70">
                    <p className=" content-center">具体的な金額・プレイ内容等は事前審査にてお決めいたします。</p>
                </div>
                <div className="flex justify-center text-pink-500 mx-10 py-2 w-70">
                    <p className=" content-center">気になった方は<a className="text-green-700 underline">{" "}LINE応募{" "}</a>のボタンからお気軽にご相談ください。</p>
                </div>
            </div>
        </BorderArea>
    )
}
