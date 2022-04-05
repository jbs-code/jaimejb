import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

//servicio proporcionado por Emailjs, revisa documentación de su implementación.
export const sendEmail = (name, email, message) => {
    let templateParams = {
        from_name: name,
        to_name: 'Jaime',
        from_email: email,
        message: message
    };

    init("LYnwKnchzf04r2zhF");//se utiliza para evitar poner el user_id dentro del send.

    //retornará una promesa que servira para manejar mensajes, de ok en caso de que se haya resuelto 
    //favorablemente o de error en caso de que no.
    return emailjs.send('service_2d2ijwa', 'template_49nzlma', templateParams);
        
}