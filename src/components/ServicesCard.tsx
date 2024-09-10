import { useState } from "react";

export default function ServicesCard({ subject, title }: { title: string; subject: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`border-2 border-[#ebebeb] flex flex-col items-center justify-center px-5 py-14 gap-3 mb-6 md:mb-0 transform transition-transform duration-300 ${isHovered ? 'translate-y-[-5px] shadow-lg' : ''
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="text-black font-roboto text-center font-bold text-xl">{title}</span>
            <p className="text-[#444444] font-poppins text-center font-normal">{subject}</p>
        </div>
    );
}