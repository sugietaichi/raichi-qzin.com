import { ReactNode } from "react";

export const JobDetailItemInfo = ({ icon, title, description }: {
    icon: ReactNode,
    title: string,
    description: string
}) => (
    <div className="flex items-center px-5 py-2 w-70">
        <div className="flex flex-col items-center mr-4">
            {icon}
            <p className="text-xs">{title}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>
);