import { FaMapMarked, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const listInfo = [
    {
        name: "Localização",
        data: "A108 Adam Street, New York, NY 535022",
        link: "https://www.google.com/maps?ll=40.71206,-74.003729&z=13&t=m&hl=pt-BR&gl=US&mapclient=embed&q=Financial+District+Nova+Iorque,+NY+EUA",
        Icon: FaMapMarked,
    },
    {
        name: "E-mail",
        data: "info@example.com",
        link: "mailto:email@provedor.com.br",
        Icon: MdEmail
    },
    {
        name: "Whatsapp",
        data: "40028922",
        link: "https://wa.me/5584933463760?text=Olá, quero solicitar um orçamento!",
        Icon: FaWhatsapp
    }
];