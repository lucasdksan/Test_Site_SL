import About from "../components/About";
import CallAction from "../components/CallAction";
import ClientsSwiper from "../components/ClientsSwiper";
import Footer from "../components/Footer";
import FormArea from "../components/FormArea";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import MoreInfo from "../components/MoreInfo";
import ServicesArea from "../components/ServicesArea";
import UpButton from "../components/UpButton";

export default function Home(){
    return(
        <>
            <Header />
            <main className="w-full h-auto">
                <HeroBanner />
                <About />
                <ClientsSwiper />
                <CallAction />
                <ServicesArea />
                <MoreInfo />
                <FormArea />
            </main>
            <Footer />
            <UpButton />
        </>
    );
}