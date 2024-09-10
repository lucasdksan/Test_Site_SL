import { AiFillCopyrightCircle } from "react-icons/ai";

export default function Copyright(){
    return(
        <div className="w-full h-auto bg-black p-4 flex items-center justify-center gap-2">
            <AiFillCopyrightCircle size={20} color="#fff" />
            <p className="text-white font-roboto text-xs">SL Participações - Todos os direitos reservados</p>
        </div>
    );
}