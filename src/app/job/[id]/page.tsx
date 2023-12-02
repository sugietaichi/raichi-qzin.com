"use client"

import { UserType } from "@/components/_internal/emus"
import Loading from "@/components/atoms/loading/Loading"
import { Pankuzu } from "@/components/molecules/pankuzu/Pankuzu"
import { TableRow } from "@/components/molecules/table-raw/TableRow"
import { Tags } from "@/components/organisms/tags/Tags"
import useLineLogin from "@/hooks/use-line-login/useLineLogin"
import useAffiliatorId from "@/hooks/useAffiliatorId"
import { api } from "@/trpc/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/molecules/card/Header"
import { useToggle } from "react-use"
import { ButtonItem } from "@/components/atoms/button/ButtonItem"
import { IconLine, IconBack } from "@/components/atoms/icons/icons"



const Page = ({ params: { id } }: { params: { id: string } }) => {
    const { affiliatorId } = useAffiliatorId('a')
    const { submit, isLoading: isLineLoginLoading } = useLineLogin()
    const router = useRouter()
    const { data: data, isLoading } = api.job.getById.useQuery({ id });

    const [isBackLoading, setIsBackLoading] = useToggle(false)

    return (
        <>
            <Pankuzu paths={[
                {
                    text: "案件一覧",
                    href: "/"
                },
                {
                    text: `${data?.job.title}`,
                    href: `/job/${data?.job.title}`
                }
            ]}
            />
            <div className='bg-white rounded shadow-xl rounded-t-lg border-2 border-blue-500 mt-2'>
                {data ?
                    <div className="">
                        <Header
                            {...{
                                jobId: id,
                                title: data.job.title
                            }}
                        />
                        <div className=''>
                            {isLoading && <div className="flex justify-center m-10" aria-label="読み込み中">
                                <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                                <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
                                <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                            </div>}
                            <div className="w-full">
                                <div className="">
                                    <div className="">
                                        <div>
                                            <div className="px-2 py-1">
                                                <Image
                                                    src={data.job.imageUrl || '/noimage.png'}
                                                    alt={''}
                                                    height={300}
                                                    width={400}
                                                    className='w-full rounded-t-lg border-gray-500'
                                                />
                                            </div>
                                            <Tags tags={data.job.tags} />
                                        </div>

                                        <div className="w-full">
                                            <div className="flex rounded-md justify-center shadow-sm  mx-3" role="group">
                                                {
                                                    isLineLoginLoading
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
                                    </div>
                                    <hr className="my-2" />


                                    <div className="m-2">
                                        <div className="pt-2">
                                            <div className="flex items-center justify-center">
                                                <p className="text-lg font-bold leading-none bg-pink-500 text-white p-2 my-2 border border-b">案件詳細</p>
                                            </div>
                                        </div>

                                        <div className='border border-black'>
                                            <table className='table-auto w-full'>
                                                <tbody className=''>
                                                    <TableRow
                                                        _key={'撮影場所'}
                                                        value={data.job.details?.location ?? "-"}
                                                        default='お問い合わせください'
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    {data.job.details?.scenes.map((v: string, i: number) => {
                                                        return (
                                                            <TableRow
                                                                key={i}
                                                                _key={`${i === 0 ? '撮影内容' : ''}`}
                                                                value={`・${v}`}
                                                                leftCn='bg-pink-200  text-gray-500'
                                                                rightCn=''
                                                            />
                                                        )
                                                    })}
                                                    <TableRow
                                                        _key={'拘束時間'}
                                                        value={data.job.details?.hours}
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    <TableRow
                                                        _key={'顔出し範囲'}
                                                        value={data.job.details?.facialExposure}
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    <TableRow
                                                        _key={'スキン'}
                                                        value={data.job.details?.skin}
                                                        default='お問い合わせください'
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    <TableRow
                                                        _key={'謝礼(目安実績)'}
                                                        value={data.job.details?.guarantee}
                                                        default='お問い合わせください'
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    <TableRow
                                                        _key={'報酬受け渡しのタイミング'}
                                                        value={data.job.details?.paymentTiming}
                                                        default='お問い合わせください'
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    {data.job.details?.notes.map((v: string, i: number) => {
                                                        return (
                                                            <TableRow
                                                                key={i}
                                                                _key={`${i === 0 ? `備考` : ''}`}
                                                                value={`${v}`}
                                                                leftCn='bg-pink-200 text-gray-500'
                                                                rightCn=''
                                                            />
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="m-2">
                                        <div className="pt-8">
                                            <div className="flex items-center justify-center">
                                                <p className="text-lg font-bold leading-none bg-pink-500 text-white p-2 my-2 border border-b">求人情報</p>
                                            </div>
                                        </div>

                                        <div className='border-black border'>
                                            <table className='table-auto w-full'>
                                                <tbody className=''>
                                                    {data.job.recruitment?.required.map((v: string, i: number) => {
                                                        return (
                                                            <TableRow
                                                                key={i}
                                                                _key={`${i === 0 ? `応募条件` : ''}`}
                                                                value={`・${v}`}
                                                                leftCn='bg-pink-200 text-gray-500'
                                                                rightCn=''
                                                            />
                                                        )
                                                    })}

                                                    <TableRow
                                                        _key={'採用基準年齢(目安)'}
                                                        value={data.job.recruitment?.age}
                                                        default='お問い合わせください'
                                                        leftCn='bg-pink-200  text-gray-500'
                                                        rightCn=''
                                                    />
                                                    <TableRow
                                                        _key={'採用基準スペック(目安)'}
                                                        value={data.job.recruitment?.spe}
                                                        default='お問い合わせください'
                                                        leftCn='bg-pink-200  text-gray-500 border'
                                                        rightCn=''
                                                    />

                                                    {data.job.recruitment?.welcome.map((v: string, i: number) => {
                                                        return (
                                                            <TableRow
                                                                key={i}
                                                                _key={`${i === 0 ? `高額になりやすい方` : ''}`}
                                                                value={`・${v}`}
                                                                leftCn='bg-pink-200 text-gray-500'
                                                                rightCn=''
                                                            />
                                                        )
                                                    })}

                                                    {data.job.recruitment?.notes.map((v: string, i: number) => {
                                                        return (
                                                            <TableRow
                                                                key={i}
                                                                _key={`${i === 0 ? `備考` : ''}`}
                                                                value={`${v}`}
                                                                leftCn='bg-pink-200 text-gray-500'
                                                                rightCn=''
                                                            />
                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >

                        <div className="w-full">
                            <div className="flex rounded-md justify-center shadow-sm my-5 mx-3" role="group">
                                {
                                    isBackLoading
                                        ?
                                        <ButtonItem
                                            loading={true}
                                            round="rounded-s-lg"
                                            bgColor="bg-gray-300"
                                            textColor="text-black"
                                            flex="flex-1"
                                            text="読み込み中です"
                                            barColor="red"
                                            h="h-20"
                                        />
                                        :
                                        <ButtonItem
                                            onClick={() => {
                                                setIsBackLoading(true)
                                                router.back()
                                            }}
                                            round="rounded-s-lg"
                                            bgColor="bg-gray-100"
                                            textColor="text-black"
                                            barColor="black"
                                            flex="flex-1"
                                            text="戻る"
                                            h="h-20"
                                        >
                                            <IconBack />
                                        </ButtonItem>
                                }
                                {
                                    isLineLoginLoading
                                        ?
                                        <ButtonItem
                                            loading={true}
                                            round="rounded-e-lg"
                                            bgColor="bg-green-300"
                                            textColor="text-white"
                                            flex="flex-1"
                                            text="読み込み中です"
                                            barColor="green"
                                            h="h-20"
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
                                            round="rounded-e-lg"
                                            bgColor="bg-green-500"
                                            textColor="text-white"
                                            flex="flex-1"
                                            text="LINEで応募"
                                            h="h-20"
                                        >
                                            <IconLine />
                                        </ButtonItem>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex justify-center m-10" aria-label="読み込み中">
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full mx-4"></div>
                        <div className="animate-ping h-2 w-2 bg-blue-600 rounded-full"></div>
                    </div>}
            </div >
        </>
    )
}

export default Page