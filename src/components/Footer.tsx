import { Link } from "react-router-dom";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import logoFooter from "../assets/logo.png"

import Copyright from "./Copyright";

export default function Footer(){
    return(
        <footer className="bottom-0 w-full h-auto bg-[#151515]">
            <div className="flex flex-col items-center justify-center px-5 py-8 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <div className="flex flex-col items-center justify-center w-full h-auto gap-4 mb-5">
                    <Link className="w-14 h-14 flex" to="https://slparticipacoes.com/">
                        <img className="w-full h-full" src={logoFooter} alt="Logo da empresa" />
                    </Link>
                    <span className="w-[80%] border-b-2 border-white"></span>
                    <p className="text-white font-poppins text-lg text-center">SL Participações em Soluções Técnicas</p>
                </div>
                <div className="flex gap-5">
                    <a href="https://www.instagram.com/slparqt/" target="_blank" className="">
                        <BsInstagram color="#fff" size={24} />
                    </a>
                    <a href="mailto: falecom@sl.arq.br" target="_blank" className="">
                        <MdOutlineEmail color="#fff" size={24} />
                    </a>
                    <a href="https://wa.me/5584933463760?text=Olá, quero solicitar um orçamento!" target="_blank" className="">
                        <BsWhatsapp color="#fff" size={24} />
                    </a>
                </div>
            </div>
            <Copyright />
        </footer>
    );
}