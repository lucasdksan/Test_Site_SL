import { IconType } from "react-icons";

interface MoreInfoCardType {
    data: {
        title: string;
        sub_title: string;
        value: string | number;
        Icon: IconType;
    }
}

export default function MoreInfoCard({ data }:MoreInfoCardType){
    const { Icon, sub_title, title, value } = data;

    return(
        <div className="flex gap-3 items-start justify-start">
            <div>
                <Icon size={35} color="#ffc451" />
            </div>
            <div className="flex flex-col">
                <strong className="text-left text-3xl text-black font-roboto">{value}</strong>
                <p className="text-left text-sm text-[#3b3b3b] font-poppins"><strong>{title}</strong> {sub_title}</p>
            </div>
        </div>
    );
}