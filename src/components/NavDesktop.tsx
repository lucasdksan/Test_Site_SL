import { Link as ScrollLink } from "react-scroll";

export default function NavDesktop() {
    return (
        <nav className="hidden md:flex md:w-full items-end justify-end">
            <div className="w-full h-full flex items-center md:max-w-md lg:max-w-2xl">
                <ul className="flex-1 w-full flex flex-row justify-end">
                    <li className="w-auto mx-4"><ScrollLink style={{ transition: "color .5s" }} className="w-full h-full text-white cursor-pointer hover:text-[#fab510] text-base" to="about" smooth={true} duration={500}>Sobre</ScrollLink></li>
                    <li className="w-auto mx-4"><ScrollLink style={{ transition: "color .5s" }} className="w-full h-full text-white cursor-pointer hover:text-[#fab510] text-base" to="services" smooth={true} duration={500}>Serviços</ScrollLink></li>
                    <li className="w-auto mx-4"><ScrollLink style={{ transition: "color .5s" }} className="w-full h-full text-white cursor-pointer hover:text-[#fab510] text-base" to="clients" smooth={true} duration={500}>Clientes</ScrollLink></li>
                    <li className="w-auto mx-4"><ScrollLink style={{ transition: "color .5s" }} className="w-full h-full text-white cursor-pointer hover:text-[#fab510] text-base" to="form" smooth={true} duration={500}>Entre em Contato</ScrollLink></li>
                    <li className="w-auto mx-4"><ScrollLink style={{ transition: "color .5s" }} className="w-full h-full text-white cursor-pointer hover:text-[#fab510] text-base" to="moreinfo" smooth={true} duration={500}>Trajetória Exemplar</ScrollLink></li>
                </ul>
            </div>
        </nav>
    );
}