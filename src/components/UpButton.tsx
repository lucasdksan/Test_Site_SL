import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { FaArrowUp } from "react-icons/fa";

export default function UpButton() {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    if (!visible) return ( <></> );
    
    return (
        <div className="fixed bottom-5 right-5">
            <button onClick={scrollToTop} className="flex items-center justify-center bg-black rounded-full p-3">
                <FaArrowUp size={18} color="#fff" />
            </button>
        </div>
    );
};