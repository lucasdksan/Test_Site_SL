import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

import logoHeader from "../assets/logo.png"

import Nav from "./Nav";
import NavDesktop from "./NavDesktop";

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const headerStyle = { backgroundColor: scrolling ? "rgba(0, 0, 0, 0.8)" : "transparent", transition: "background-color 0.3s ease-in-out" };

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 0;
            setScrolling(isScrolling);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={headerStyle} className="fixed top-0 right-0 left-0 w-full z-30 h-auto flex items-center justify-between">
            <div className="px-5 py-3 w-full h-full flex items-center justify-between sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <div className="w-9 h-9">
                    <Link to="https://slparticipacoes.com/">
                        <img className="w-full h-full" src={logoHeader} alt="Logo da empresa" />
                    </Link>
                </div>
                <button className="text-white focus:outline-none md:hidden" onClick={toggleMobileMenu} >
                    <MdMenu size={28} color="#fff" />
                </button>
                <Nav isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
                <NavDesktop />
            </div>
        </header>
    );
}