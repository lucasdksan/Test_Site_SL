import ServicesCard from "./ServicesCard";

import { listCardServices } from "../libs/listCardServices";

export default function ServicesArea(){
    return(
        <section id="services" className="w-full h-auto">
            <div className="py-10 px-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <h3 className="font-semibold text-4xl font-roboto text-left not-italic">Outros Serviços</h3>
                <div className="w-full h-auto mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
                    { listCardServices.map((element, key)=>{
                        return(
                            <ServicesCard subject={element.subject} title={element.title} key={key} />
                        );
                    }) }
                </div>
            </div>
        </section>
    );
}