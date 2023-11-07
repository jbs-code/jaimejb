import { useState } from "react";
//sendEmail es una implementacion de Emailjs, revisar documetación de su implementación.
//Su función es el manejo de los mensajes enviados en el formulario.
import { sendEmail } from "../../helpers/sendEmail";
import useForm from "../../hooks/useForm";
import validator from "validator";
import { gsapFormContact } from "../../scripts/gsapEffects";
import { useLayoutEffect } from "react";

function Contact() {
  //clásica implementación de hook useForm.
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formValues;

  const [emailOk, setEmailOk] = useState(false); //flag para saber si email se envio correctamente.
  const [emailError, setEmailError] = useState(false); //flag para saber si email no pudo enviarse.
  const [validateInput, setValidateInput] = useState({
    isCorrect: true,
    note: "",
  }); //Flag para saber si los inputs del formulario son correctos, o en caso contrario manejar mensajes de errores.
  const [disabled, setDisabled] = useState(false); //flag para activar o desactivar el boton de enviar.

  const { isCorrect, note } = validateInput;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.isEmail(email) && name.length > 0 && message.length > 0) {
      setDisabled(true);
      //sendEmail nos retorna una promesa que servira para manejar mensajes.
      sendEmail(name, email, message).then(
        (response) => {
          setEmailOk(true);
          setDisabled(false);
        },
        (error) => {
          setEmailError(true);
          setDisabled(false);
        }
      );

      setValidateInput({ isCorrect: true, note: "" });
    } else if (!validator.isEmail(email)) {
      setValidateInput({ isCorrect: false, note: "El email no es válido" });
      setEmailOk(false);
    } else if (name.length === 0 || message.length === 0) {
      setValidateInput({
        isCorrect: false,
        note: "Los campos no pueden estar vacíos",
      });
      setEmailOk(false);
    }
  };

  const handleOk = () => {
    setEmailOk(false);
    setEmailError(false);
    reset();
  };

  useLayoutEffect(() => {
    const ctx = gsapFormContact();
    return () => ctx.revert();
  }, []);

  return (
    <div className="contact">
      <h1 className="text-shadow">Contacto</h1>

      <div className="card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            className="contact-form__input-text"
            placeholder="Nombre"
            onChange={handleInputChange}
            value={name}
            disabled={emailOk}
          />

          <input
            name="email"
            type="email"
            className="contact-form__input-text"
            placeholder="Correo"
            onChange={handleInputChange}
            value={email}
            disabled={emailOk}
          />

          <textarea
            name="message"
            className="contact-form__input-text"
            placeholder="Mensaje"
            onChange={handleInputChange}
            value={message}
            disabled={emailOk}
          />

          {!isCorrect && (
            <label className="contact-form__label contact-form__label--error text-shadow">
              {note}
            </label>
          )}
          {emailError && (
            <label className="contact-form__label contact-form__label--error text-shadow">
              No se pudo mandar el mensaje, intentalo más tarde
            </label>
          )}
          {emailOk && (
            <label className="contact-form__label contact-form__label--info">
              Su mensaje se envió correctamente
            </label>
          )}
          {emailOk ? (
            <input
              type="button"
              className="btn btn-primary text-shadow"
              onClick={handleOk}
              value="OK"
            />
          ) : (
            <button
              className="btn btn-primary text-shadow"
              type="submit"
              disabled={disabled}
            >
              Enviar
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
