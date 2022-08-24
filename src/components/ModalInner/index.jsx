import React, { useState, useEffect } from "react";
import { Container, H3, H4, P, Socials, SuccessContainer } from "./styles";
import Form from "../Form";
import { ReactComponent as Happy } from "./happy_face.svg";
import { ReactComponent as Facebook } from "./icon_facebook.svg";
import { ReactComponent as Instagram } from "./icon_instagram.svg";
import { ReactComponent as Twitter } from "./icon_twitter.svg";

const Input = ({ handleSuccess }) => (
  <Container>
    <H3>Sign Up</H3>
    <P>
      Join our newsletter to be notified of when pre-release tickets for our
      first ever world tour go on sale.
    </P>
    <Form handleSuccess={handleSuccess} />
  </Container>
);

const Success = () => (
  <SuccessContainer>
    <Happy />
    <H4>Yay! We're so excited!</H4>
    <P>
      We hope you are too. In the meantime you can dollow us on social media to
      keep ip to do date:
    </P>
    <Socials>
      <Instagram />
      <Twitter />
      <Facebook />
    </Socials>
  </SuccessContainer>
);

const ModalInnerComponent = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

export default ModalInnerComponent;
