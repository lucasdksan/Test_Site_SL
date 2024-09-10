import aboutBanner from "../assets/single.jpg";

export default function About() {
    return (
        <section id="about" className="w-full h-auto">
            <div className="py-14 px-5 sm:max-w-xl md:max-w-3xl lg:max-w-4xl lg:flex lg:flex-row-reverse lg:gap-5 xl:max-w-7xl 2xl:max-w-[1440px] sm:mx-auto">
                <div className="w-full h-auto mb-5">
                    <h3 className="font-semibold text-4xl font-roboto text-left not-italic">Construção com Excelência</h3>
                    <p className="mt-5 text-base text-[#333232] font-normal not-italic font-roboto text-left">A SL, líder em construção pesada desde 2017, apresenta sua reformulação, agora destacando o sobrenome como marca no mercado.</p>
                    <p className="mt-5 text-base text-[#333232] font-normal not-italic font-roboto text-left">Continuamos a oferecer dinamismo, eficiência e as melhores soluções. Atuamos em diversos campos, como projetos arquitetônicos, reformas, elétricos, hidráulicos e estruturais. Nosso compromisso é viabilizar condições para atender clientes e parceiros, assegurando qualidade e cronograma.</p>
                    <p className="mt-5 text-base text-[#333232] font-normal not-italic font-roboto text-left">Garantimos isso com equipamentos modernos e mão-de-obra qualificada, fundamentais para cada necessidade.</p>
                    <p className="mt-5 text-base text-[#333232] font-normal not-italic font-roboto text-left">Na SL, entendemos que a satisfação dos nossos clientes é a essência do nosso sucesso duradouro. Cada projeto que assumimos é mais do que uma simples empreitada; é uma oportunidade de construir relações sólidas e deixar um impacto positivo.</p>
                </div>
                <div className="w-full h-auto">
                    <img className="md:w-full md:h-auto lg:h-full lg:w-auto" src={aboutBanner} alt="Banner de Fundo, ilutrando o contexto da empresa!" />
                </div>
            </div>
        </section>
    );
}