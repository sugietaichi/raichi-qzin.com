import React from "react";

interface Props {
    color?: 'border-green-500' | 'border-red-500' | 'border-blue-500' | 'border-black' | 'border-red-400' | 'border-green-400';
    optional?: string;
}
const Loading = ({ color = 'border-black', optional = '' }: Props): JSX.Element => {
    const spinAnimation = "animate-spin";
    const size = "h-10 w-10";
    const borderStyle = "border-4 rounded-full border-t-transparent";
    const shadow = "shadow-lg";

    const classes = [
        "justify-center items-center",
        spinAnimation,
        size,
        borderStyle,
        color,
        shadow,
        optional
    ].filter(Boolean).join(' ');

    return (
        <div className="w-full flex justify-center">
            <div className={classes} role="status"></div>
        </div>
    )
}

export default Loading