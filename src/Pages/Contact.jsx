import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import ContactIcon from "../components/ContactIcon";



const Section = styled.div`
  height: 65vh;
  scroll-snap-align: center;
  background-color: #93BEFF;

    @media only screen and (max-width: 768px) {
    min-height: 60vh;
    height: 100%;


    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  @media only screen and (max-width: 768px) {
    text-align: center

    ;
  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Message = styled.p`
  text-align: center;
`;

const Contact = () => {
  const ref = useRef();

  const [message, setMessage] = useState(null);


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_arkzrcc",
        "template_lrm225u",
        ref.current,
        "YKDdrWdP-S6rsVPw9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          alert("Mesajınız Başarıyla İletildi!");
        },
        (error) => {
          console.log(error.text);
          setMessage(false);
        }
      );
  };

  return (

    <>
      <Section id="contact">
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Benimle İletişime Geç</Title>
              <Input placeholder="İsim" name="name" />
              <Input placeholder="E-mail" name="email" />
              <TextArea placeholder="Mesaj Bırakın" name="message" rows={8} />
              <Button type="submit" onClick={handleScrollToTop}>Gönder</Button>
              {message && <Message>Mesajınız Başarıyla İletildi...</Message>}
            </Form>
          </Left>
          <Right>
          <ContactIcon />
          </Right>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
