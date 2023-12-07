import { useState } from 'react';
import { useToggle } from "react-use";
import { BorderArea } from "@/components/molecules/border-area/BorderArea";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, toggleIsOpen] = useToggle(false);

    return (
        <div className="mb-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleIsOpen}
            >
                <h3 className="font-medium text-gray-900">{question}</h3>
                <button className="p-2">
                    {isOpen ? (
                        <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                    )}
                </button>
            </div>
            <hr />
            <div
                className={`transition-all duration-1000 ease-in-out relative overflow-hidden
                            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <p className="px-4 py-2 text-gray-600">{answer}</p>
            </div>

        </div>
    );
};

export const FAQSection = ({
    faqData,
    title,
    initOpen = false
}: {
    faqData: FAQItemProps[];
    title: string;
    initOpen?: boolean;
}) => {
    return (
        <BorderArea title={title}>
            <div className="m-1">
                {faqData.map((item, index) => (
                    <>
                        <FAQItem key={index} {...item} />
                    </>
                ))}
            </div>
        </BorderArea>
    );
};
