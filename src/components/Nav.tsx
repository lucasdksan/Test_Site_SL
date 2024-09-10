import { MdClose } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

export default function Nav({ isMobileMenuOpen, toggleMobileMenu }: { isMobileMenuOpen: boolean, toggleMobileMenu: ()=>void }){
    const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

    return(
        <nav 
            style={{ transition: "width .5s, visibility .5s, left .5s, background 1s" }}
            onClick={toggleMobileMenu}
            className={`${isMobileMenuOpen ? "left-0 w-full" : "left-[-100%]"} fixed w-full visible bg-[#000000CC] h-screen top-0 z-40 flex md:hidden`}
        >
            <div className="w-[90%] h-full bg-white z-50 flex flex-col items-center p-5" onClick={handleDivClick}>
                <div className="w-full flex justify-between mb-6">
                    <span className="font-roboto text-black text-center text-xl font-semibold">SL Participações</span>
                    <button className="" onClick={toggleMobileMenu}>
                        <MdClose size={20} color="#000"/>
                    </button>
                </div>
                <ul className="flex-1 w-full">
                    <li className="flex w-full border-b-2 border-gray-300"><ScrollLink className="py-5 w-full h-full" to="about" smooth={true} duration={500}>Sobre</ScrollLink></li>
                    <li className="flex w-full border-b-2 border-gray-300"><ScrollLink className="py-5 w-full h-full" to="services" smooth={true} duration={500}>Serviços</ScrollLink></li>
                    <li className="flex w-full border-b-2 border-gray-300"><ScrollLink className="py-5 w-full h-full" to="clients" smooth={true} duration={500}>Clientes</ScrollLink></li>
                    <li className="flex w-full border-b-2 border-gray-300"><ScrollLink className="py-5 w-full h-full" to="form" smooth={true} duration={500}>Entre em Contato</ScrollLink></li>
                    <li className="flex w-full"><ScrollLink className="py-5 w-full h-full" to="moreinfo" smooth={true} duration={500}>Trajetória Exemplar</ScrollLink></li>
                </ul>
                <div></div>
            </div>
        </nav>
    );
}