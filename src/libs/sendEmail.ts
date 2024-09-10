import { backend } from "../services/backend";

export default function sendEmail(email: string, name: string, textContent: string, setSuccessSend: (value: boolean) => void){
    fetch(`${backend}/sendmailer-homepage`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ email, name, textContent })
    }).then((e)=>{
        setSuccessSend(e.status === 200);
        return e.json();
    }).then((data)=>{
        console.log(data);
    });
}