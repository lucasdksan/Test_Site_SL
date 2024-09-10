import meeting from "../assets/meeting.jpg";

import { listMoreInfo } from "../libs/listMoreInfo";

import MoreInfoCard from "./MoreInfoCard";

export default function MoreInfo() {
    return (
        <section id="moreinfo" className="w-full h-auto">
            <div className="py-10 px-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <div className="flex flex-col gap-4 lg:flex-row-reverse lg:justify-between">
                    <div className="h-auto w-full lg:w-1/2">
                        <img className="md:w-full md:h-auto lg:h-full lg:w-auto" src={meeting} alt="Banner de Fundo, ilutrando o contexto da empresa!" />
                    </div>
                    <div className="w-full h-auto mb-5 lg:w-1/2">
                        <h3 className="font-semibold text-4xl font-roboto text-left not-italic">Trajetória Exemplar</h3>
                        <p className="mt-5 text-base text-[#333232] font-normal not-italic font-roboto text-left">Aqui, compartilhamos nossa vasta experiência, o respaldo de inúmeros clientes satisfeitos e uma série de projetos bem-sucedidos.</p>
                        <div className="grid grid-cols-1 mt-7 gap-4 lg:grid-cols-2">
                            { listMoreInfo.map((data, key)=>{
                                return(
                                    <MoreInfoCard data={data} key={key} />
                                );
                            }) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}