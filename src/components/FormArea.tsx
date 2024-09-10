import { listInfo } from "../libs/listInfo";

import Form from "./Form";
import QuickCard from "./QuickCard";

export default function FormArea(){
    return(
        <section id="form" className="w-full h-auto">
            <div className="py-10 px-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <h3 className="font-semibold text-4xl font-roboto text-left not-italic">Entre em Contato</h3>
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-10 lg:mt-6">
                    <Form />
                    <div className="mt-5 gap-6 flex flex-col w-full lg:w-[600px]">
                        { listInfo.map((data, key)=>{
                            return( <QuickCard data={data} key={key} /> );
                        }) }
                    </div>
                </div>
            </div>
        </section>
    );
}