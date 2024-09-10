import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/slickClients.css";

import { listClient } from "../libs/listClient";
import { settings } from "../libs/settingsSwiper";


export default function ClientsSwiper() {
    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

    return (
        <section id="clients" className="w-full h-auto overflow-hidden mb-5">
            <div className="w-full h-full py-10 px-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <Slider {...settings}>
                    {listClient.map((element, index) => {
                        return (
                            <div className="w-full h-auto !flex items-center !justify-center" key={index} >
                                <img
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    style={{
                                        transition: "0.3s",
                                        filter:
                                            hoveredIndex === index
                                                ? "none"
                                                : "grayscale(100)",
                                    }}
                                    className={`h-24 w-auto ${hoveredIndex === index ? "opacity-100" : "opacity-50"}`}
                                    src={element.src}
                                    alt={element.alt}
                                />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </section>
    );
}
