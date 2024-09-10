import React from "react";

export default function CardHeroBanner({ children, title }: { title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center w-full justify-center gap-3 border-2 border-[#fab510af] px-8 py-5 rounded-md lg:max-w-[360px]">
            { children }
            <span className="font-poppins text-lg text-white font-semibold text-center">{title}</span>
        </div>
    );
}