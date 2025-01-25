import { ArrowCircleUp } from "phosphor-react";

export default function Card({title,icon, value, backgroundColor, textColor}) {
    return (
        <div className={`${backgroundColor} p-8 space-y-6 rounded shadow-md w-full`}>
            <header className="flex justify-between items-center">
                <h2 className={textColor}>{title}</h2>
                {icon}
            </header>
            <h1 className={`${textColor} text-4xl`}>
                {value}
            </h1>
        </div>
    )
}