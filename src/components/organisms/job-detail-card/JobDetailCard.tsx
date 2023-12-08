"use client"

import { type Job } from "@/server/api/routers/job";
import { useEffect, type ReactNode, useState } from "react";
import { JobCardHeader } from "../job-card/JobCardHeader";
import { JobCardTopImage } from "../job-card/JobCardTopImage";
import { JobDetailCardTemplate } from "./JobDetailCardTemplate";
import { JobDetailCardDetails } from "./JobDetailsCardDetails";
import { Tags } from "@/components/molecules/tags/Tags";
import { JobDetailCardFooter } from "./JobDetailCardFooter";
import { UserType } from "@/components/_internal/emus";
import { ButtonItem } from "@/components/atoms/button/ButtonItem";
import { IconLine } from "@/components/atoms/icons/icons";
import useLineLogin from "@/hooks/use-line-login/useLineLogin";
import useAffiliatorId from "@/hooks/useAffiliatorId";
import { JobDetailCardSchedule } from "./JobDetailCardSchedules";
import { FAQSection } from "./JobDetailCardFAQ";
import { useSearchParams } from "next/navigation";
import { IconHand, IconIdCard, IconInfo, type Kuchikomi } from "../job-card/JobCard";
import { JobDetailCardComment } from "./JobDetailCardCommet";

const IconLocation = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
)

const IconCheckDocument = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
    </svg>
)

const IconQlock = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

const IconYen = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
)

const IconCalender = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
)

const IconMoney = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
)

export type DetailInfo = {
    icon: ReactNode,
    text: string,
    description: string
}

const details = [
    {
        icon: IconLocation,
        text: "撮影場所",
        description: "東京都新宿区"
    },
    {
        icon: IconCheckDocument,
        text: "応募資格",
        description: "18歳以上の方(高校生不可)"
    },
    {
        icon: IconYen,
        text: "給料",
        description: "最低8~30万円以上の実績あり"
    },
    {
        icon: IconQlock,
        text: "拘束時間",
        description: "最大6時間"
    },
    {
        icon: IconMoney,
        text: "支払い",
        description: "撮影後現金手渡し"
    },
]

const schedules = [
    {
        step: 1,
        text: "デートシーン撮影",
        hour: 1,
        description: "撮影監督との合流後、最寄りのゲームセンター・カフェなどでデートシーンの撮影をします。"
    },
    {
        step: 2,
        text: "事前説明",
        hour: 1,
        description: "撮影現場(最寄りのホテルorスタジオ)に到着後、条件のご確認と撮影に関する事前説明を行います。"
    },
    {
        step: 3,
        text: "絡み×2回",
        hour: 3,
        description: "休憩を入れながら絡みシーンの撮影を2回行います。"
    },
]

export type ScheduleInfo = {
    step: number,
    text: string,
    hour: number,
    description: string
}


const comments = new Map<"expose" | "hide", Kuchikomi[]>([
    ["expose", [
        {
            nickname: "noname",
            shootingDate: "2023年12月",
            // avatar: <></>,
            // rating: 5,
            comment: "はじめてでしたが問題なく終わりました。ありがとうございました。",
            // title: "",
        }
    ]],

    ["hide", [
        {
            nickname: "noname",
            shootingDate: "2023年11月",
            // avatar: <></>,
            // rating: 5,
            comment: `丁寧に色々説明してくれたり
            凄く言い方でした😿✊🏻
            紹介ありがとうございます(emoji)`,
            // title: "ww",
        }
    ]]
]);

export type FaqType = {
    question: string,
    answer: string
}

export const JobDetailCard = ({ data }: { data: Job }) => {
    const { job, id } = data
    const { affiliatorId } = useAffiliatorId('a')
    const { submit, isLoading: isLineLoginLoading } = useLineLogin()
    const searchParams = useSearchParams();
    const forcus = searchParams.get("fcs")

    const [details, setDetails] = useState<DetailInfo[]>()
    const [schedules, setSchedules] = useState<ScheduleInfo[]>()
    const [kuchikomi, setKuchikomi] = useState<Map<"expose" | "hide", Kuchikomi[]>>()
    const [faqs, setFaqs] = useState<FaqType[]>()


    useEffect(() => {
        const {
            require,
            karami,
            guarantee,
            location,
            hours,
            touch,
            idCard,
        } = job.details
        const tmpl = "お問い合わせください"
        setDetails(([
            {
                icon: IconCheckDocument,
                text: "応募資格",
                description: require ?? tmpl
            },
            {
                icon: IconInfo,
                text: "絡みの有無",
                description: karami ?? tmpl
            },
            {
                icon: IconMoney,
                text: "謝礼目安",
                description: guarantee ?? tmpl
            },
            {
                icon: IconLocation,
                text: "撮影場所",
                description: location ?? tmpl
            },
            {
                icon: IconQlock,
                text: "拘束時間",
                description: hours ?? tmpl
            },
            {
                icon: IconHand,
                text: "接触の有無",
                description: touch ?? tmpl
            },
            {
                icon: IconIdCard,
                text: "公的身分証",
                description: idCard ?? tmpl
            }
        ]))
    }, [job])

    useEffect(() => {
        if (!job?.jobStep) {
            return
        }
        const ask = [...job.jobStep].sort((a, b) => a.step - b.step);
        setSchedules(ask)
    }, [job])



    useEffect(() => {
        if (!job?.kuchikomi) {
            return
        }

        const top = [[...job.kuchikomi].find(item => item.priority === 1),]
        const exposed = job.kuchikomi.slice(0, 1);
        const hidden = job.kuchikomi.slice(1);

        setKuchikomi(new Map<"expose" | "hide", Kuchikomi[]>([
            ["expose", top && exposed],
            ["hide", hidden]]
        ));
    }, [job]);


    useEffect(() => {
        if (forcus) {
            const e = document.getElementById(forcus)
            if (e) {
                e.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [forcus]);

    return (
        <JobDetailCardTemplate>
            <JobCardHeader {...{ data }} />

            <JobCardTopImage {...{
                src: job.imageUrl,
                href: `/job/${id}`,
                alt: "",
            }} />

            <Tags tags={job.tags} />

            <div className="p-2">
                <h5 className='m-2 text-2xl font-bold tracking-tight text-gray-900'>
                    {job.title}
                </h5>
            </div>

            <div className="w-full">
                <div className="flex rounded-md justify-center shadow-sm  mx-3" role="group">
                    {isLineLoginLoading
                        ?
                        <ButtonItem
                            loading={true}
                            bgColor="bg-green-500"
                            textColor="text-white"
                            flex="flex-1"
                            text="ローディング中"
                            barColor="green"
                            h="h-16"
                        />
                        :
                        <ButtonItem
                            onClick={() => {
                                submit(process.env.NEXT_PUBLIC_LINE_CLIENT_ID ?? "", {
                                    base: process.env.NEXT_PUBLIC_LINE_LOGIN_WEBHOOK_URL ?? "",
                                    params: {
                                        jobId: id, affiliatorId,
                                        type: String(UserType.Actress)
                                    }
                                })
                            }}
                            bgColor="bg-green-500"
                            textColor="text-white"
                            flex="flex-1"
                            text="LINEで質問・相談をする"
                            h="h-16"
                        >
                            <IconLine />
                        </ButtonItem>
                    }
                </div>
            </div>

            {details &&
                <JobDetailCardDetails {...{
                    details,
                    text: "案件詳細",
                    initOpen: true
                }} />
            }

            {schedules &&
                <JobDetailCardSchedule {...{
                    schedules,
                    text: "仕事内容",
                    initOpen: true
                }} />
            }

            {faqs &&
                <FAQSection {...{
                    faqData: faqs,
                    title: "よくあるご質問",
                    initOpen: true
                }} />
            }

            {kuchikomi &&
                <div id="girls_voice">
                    <JobDetailCardComment
                        text="女の子ボイス"
                        {...{
                            kuchikomi
                        }} />
                </div>
            }

            <JobDetailCardFooter {...{
                jobId: id
            }} />
        </JobDetailCardTemplate>
    )
}