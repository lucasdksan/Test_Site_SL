import { IoHappyOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { BsJournalText } from "react-icons/bs";

const date = new Date();
const year = date.getFullYear()

export const listMoreInfo = [
    {
        title: "Clientes satisfeitos",
        sub_title: "com nossos projetos!",
        value: "100",
        Icon: IoHappyOutline
    },
    {
        title: "Anos de experiência",
        sub_title: "executando projeto com excelência.",
        value: year - 2017,
        Icon: FaRegClock
    },
    {
        title: "Projetos",
        sub_title: "bem-sucedidos.",
        value: 200,
        Icon: BsJournalText
    }
];