"use client"

import { useSearchParams } from "next/navigation";
import { useToggle } from "react-use";

export const ResultModal = () => {
    const searchParams = useSearchParams();
    const res = searchParams.get("line_notice_result");
    const [result, setResult] = useToggle(res === "true")

    return (
        <>
            {result &&
                <div id="popup-modal" tabIndex={-1} className="flex justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-start w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ">
                    <div className="relative p-4 w-full max-w-md max-h-full ">
                        <div className="relative bg-white rounded-lg shadow border-green-500 border ">
                            <button onClick={() => setResult(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                            <div className="p-4 flex flex-col items-center">
                                <svg className=" h-20 w-20 text-green-500 m-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />  <polyline points="22 4 12 14.01 9 11.01" /></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">登録処理が完了しました。</h3>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">公式LINEからのメッセージをご確認ください。</h3>
                                <button onClick={() => setResult(false)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">閉じる</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}