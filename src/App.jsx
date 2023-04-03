import { useState } from "react";
import backGroud from "./assets/lightbox.svg";
import title from "./assets/title.png";
import checked from "./assets/thanksCheck.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./App.scss";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const CupomVoucher = "SEJAMULTI";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nome:", formData.name);
    console.log("Email:", formData.email);
    setIsFormSubmitted(true);
  };

  const handleClose = () => {
    const lightbox = document.querySelector(".lightbox_container");
    lightbox.classList.add("fade-out");
    setTimeout(() => setIsClosed(false), 500);
  };

  const handleCopyVoucher = () => {
    const copyText = document.getElementById("voucher");
    copyText.select();
    document.execCommand("copy");
    alert("CUPOM COPIADO");
  };

  return (
    <div className="lightbox_container">
      {isClosed ? (
        <div className="lightbox_container_img">
          <img src={backGroud} alt="CUPOM DESCONTO" draggable="false" />
          <a className="lightbox_container_button_closed" onClick={handleClose}>
            <AiOutlineCloseCircle />
          </a>
          <div className="lightbox_container_content_header">
            {isFormSubmitted ? (
              <img
                className="lightbox_container_content_header_img"
                src={checked}
                alt="OBRIGADO PELO CADASTRO"
                draggable="false"
              />
            ) : (
              <img
                className="lightbox_container_content_header_img"
                src={title}
                alt="GANHE 5% OFF"
                draggable="false"
              />
            )}
          </div>
          {isFormSubmitted ? (
            <div className="lightbox_container_content_sucess">
              <label className="lightbox_container_content_sucess_title">
                Aqui está o seu Cupom
              </label>
              <input
                className="lightbox_container_content_sucess_cupom"
                onClick={handleCopyVoucher}
                id="voucher"
                defaultValue={CupomVoucher}
                readOnly
              />
            </div>
          ) : (
            <div className="lightbox_container_content">
              <div className="lightbox_container_content_title">
                <label>Cadastre-se e receba agora mesmo!</label>
              </div>

              <form
                onSubmit={handleSubmit}
                className="lightbox_container_content_form"
              >
                <input
                  className="lightbox_container_content_button_input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome:"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="lightbox_container_content_button_input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail:"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <button
                  className="lightbox_container_content_button_send"
                  type="submit"
                  id="submit"
                >
                  Cadastre-se
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
