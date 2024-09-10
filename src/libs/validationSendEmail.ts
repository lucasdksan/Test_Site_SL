export default function validationSendEmail(
    email: string,
    name: string,
    text: string,
    setEmail: (value: boolean) => void,
    setName: (value: boolean) => void,
    setText: (value: boolean) => void) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultEmail = emailRegex.test(email);

    setEmail(resultEmail);
    setName(name.length > 0);
    setText(text.length > 0);

    return { resultEmail, resultName: name.length > 0, resultText: text.length > 0 }
}