import CardHeroBanner from "./CardHeroBanner";

import bannerHero from "../assets/Banner-hero.jpg";

import { listCardHero } from "../libs/listCardHero";

export default function HeroBanner(){
    return(
        <section 
            className="w-full h-full relative bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:bg-[#000000E6] top-0 left-0 right-0 bottom-0 before:w-full before:h-full before:z-0 md:h-screen"
            style={{ backgroundImage: `url(${bannerHero})` }}
            id="bannerHero"
        >
            <div className="w-full h-full z-[1] relative flex flex-col items-center justify-start pt-[115px] pb-20 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto lg:pt-[170px] xl:pt-[200px]">
                <div className="w-full h-auto flex flex-col items-center justify-center px-5">
                    <h1 className="font-poppins text-white text-3xl text-center font-bold">SL Participações em Soluções Técnicas</h1>
                    <h2 className="font-poppins text-[#FFFFFFE6] text-[13px] mt-2 text-center font-medium">Líder em soluções técnicas na área de construção civil.</h2>
                </div>
                <div className="w-full mt-7 h-auto flex flex-col items-center justify-center px-5 gap-4 lg:flex-row lg:flex-wrap">
                    { listCardHero.map(({ Icon, title }, key)=>{
                        return(
                            <CardHeroBanner title={title} key={key}>
                                <Icon size={20} color="#fab510"/>
                            </CardHeroBanner>
                        );
                    }) }
                </div>
            </div>
        </section>
    );
}