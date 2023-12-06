import { ReactNode } from "react";

export const JobDetailItemInfo = ({ icon, text, description }: {
    icon: ReactNode,
    text: string,
    description: string
}) => (
    <div className="flex items-center px-5 py-2 w-70">
        <div className="flex flex-col items-center mr-4">
            {icon}
            <p className="text-xs">{text}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>
);