"use client"

import { useRouter } from "next/navigation"
import { IconHeart } from "../../atoms/icons/icons"
import useLikeJobs from "@/hooks/useLikeJobs"
import { useEffect, useState } from "react"

export const HeaderFav = () => {
    const { jobIds } = useLikeJobs()
    const router = useRouter()
    const [likedCount, setLikedCount] = useState<number>(0)

    useEffect(() => {
        setLikedCount(jobIds.length)
    }, [jobIds.length])

    return (
        <div className='mx-2'>
            <button
                type="button"
                onClick={() => router.push("/fav")}
                className="flex flex-col items-center px-2 py-2 text-sm font-medium text-center text-white bg-white rounded-lg"
            >
                <div className="flex items-center">
                    <IconHeart
                        stroke={'white'} fill={'red'} h={'h-6'} w={'w-6'} m={""}
                    />
                    <span
                        className="flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
                    >
                        {likedCount}
                    </span>
                </div>
                <div className="text-red-500">
                    キープ
                </div>
            </button>
        </div>

    )
}