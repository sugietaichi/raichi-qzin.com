import { type ReactNode } from "react";
import { type CommentType } from "./JobDetailCardCommet";

export const DetailCardCommentInfo = ({
    name = "noname",
    shootingDate = "無回答",
    title = "無題",
    avatar = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    rating = 5,
    comment = "未回答"
}: CommentType
) => (
    <div className="py-5 bg-gray-100 flex items-center justify-center">
        <div className="px-3">
            <div className="bg-white max-w-xl rounded-2xl px-10 py-3 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 py-4">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-lg font-semibold">{name}</div>
                            <span className="font-normal text-sm text-gray-500">{shootingDate}{" "}撮影</span>
                        </div>
                    </div>
                </div>
                <div className="mt-1">
                    <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">{title}</h1>
                    <div className="flex mt-1">
                        {Array.from({ length: rating }, (_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="mt-4 text-md text-gray-600">
                        {comment}
                    </p>
                </div>
            </div>
        </div>
    </div >
);