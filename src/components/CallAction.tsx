import bgCallAction from "../assets/foundation.jpg";

export default function CallAction() {
    return (
        <section
            style={{ background: `linear-gradient(#000000cd, #000000cd), url("${bgCallAction}") fixed center center` }}
            className="w-full h-auto mt-8"
        >
            <div className="py-10 px-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <div className="w-full h-auto flex flex-col items-center justify-center gap-4">
                    <span className="text-white text-3xl font-roboto font-bold">Entre em Contato</span>
                    <p className="text-white text-center text-base font-roboto font-normal">Estamos prontos para ajudar. Entre em contato para obter suporte personalizado.</p>
                    <a 
                        href="https://wa.me/5584933463760?text=Olá, quero solicitar um orçamento!"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-poppins font-semibold text-white text-base border-2 border-white rounded-md px-7 py-2 transition duration-300 hover:border-green-500 hover:bg-green-500">Enviar Mensagem</a>
                </div>
            </div>
        </section>
    );
}