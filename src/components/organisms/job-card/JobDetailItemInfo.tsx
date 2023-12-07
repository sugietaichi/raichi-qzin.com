import { type ReactNode } from "react";

export const JobDetailItemInfo = ({ icon, text, description }: {
    icon: ReactNode,
    text: string,
    description: string
}) => (
    <div className="grid grid-cols-10 items-center px-5 py-2 w-70 text-gray-600">
        <div className="col-span-3 flex flex-col items-center">
            {icon}
            <p className="text-xs">{text}</p>
        </div>
        <div className="col-span-7">
            <p>{description}</p>
        </div>
    </div>
);