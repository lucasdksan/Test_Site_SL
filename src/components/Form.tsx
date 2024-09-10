import { FormEvent, useState } from "react";

import sendEmail from "../libs/sendEmail";
import validationSendEmail from "../libs/validationSendEmail";

export default function Form(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [textContent, setTextContent] = useState("");
    const [emailConfirm, setEmailConfirm] = useState(true);
    const [nameConfirm, setNameConfirm] = useState(true);
    const [textContentConfirm, setTextContentConfirm] = useState(true);
    const [successSend, setSuccessSend] = useState(false);

    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault();
        
        const { resultEmail, resultName, resultText } = validationSendEmail(email, name, textContent, setEmailConfirm, setNameConfirm, setTextContentConfirm);

        if(resultEmail && resultName && resultText) sendEmail(email, name, textContent, setSuccessSend);
    }

    return(
        <form className="w-full h-auto mt-5 flex flex-col items-center justify-center lg:mt-0" onSubmit={handleSubmit}>
            <fieldset className="w-full h-auto mb-5">
                <input value={name} onChange={(e)=> setName(e.target.value)} className={`h-9 p-6 w-full border-2 ${ nameConfirm ? "border-slate-300" : "border-red-300" } font-poppins`} id="name" type="text" placeholder="Digite seu Nome"/>
            </fieldset>
            <fieldset className="w-full h-auto mb-5">
                <input value={email}  onChange={(e)=> setEmail(e.target.value)} className={`h-9 p-6 w-full border-2 ${ emailConfirm ? "border-slate-300" : "border-red-300" } font-poppins`} id="email" type="email" placeholder="Digite seu E-mail"/>
            </fieldset>
            <fieldset className="w-full h-auto mb-5">
                <textarea value={textContent} onChange={(e)=> setTextContent(e.target.value)} className={`h-auto p-6 w-full border-2 ${ textContentConfirm ? "border-slate-300" : "border-red-300" } font-poppins`} name="Input text" id="text" placeholder="Mensagem"></textarea>
            </fieldset>
            { successSend && <span className="text-green-500 font-roboto font-normal text-sm text-center my-4">E-mail enviado</span> }
            <button className="w-44 h-11 bg-black text-white font-poppins text-base font-medium text-center" type="submit">Enviar</button>
        </form>
    );
}