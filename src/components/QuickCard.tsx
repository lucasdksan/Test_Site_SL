import { IconType } from "react-icons";

interface QuickCardTypes {
    data: {
        Icon: IconType; 
        name: string; 
        data: string; 
        link: string;
    }
}

export default function QuickCard({ data }:QuickCardTypes){
    const { Icon, data: dataName, link, name } = data;
    return(
        <a href={link} target="_blank" className="flex flex-row gap-4 items-center justify-start" >
            <Icon size={40} color="#ffc451" />
            <div className="flex flex-col gap-1">
                <span className="text-left text-xl text-black font-roboto font-semibold">{name}</span>
                <span className="text-left text-sm text-stone-600 font-roboto font-normal">{dataName}</span>
            </div>
        </a>
    );
}