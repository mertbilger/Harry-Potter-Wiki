import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Icon = styled.a`
  margin-top: 140px;
  margin-left: 350px;
    color: #000;

  @media (max-width: 768px) {
     margin:20px
    ;
  }
`;

const ContactIcon = () => {
  return (
    <IconContainer>
      <Icon href="https://www.instagram.com">
        <FaInstagram size={42} />
      </Icon>
      <Icon href="https://github.com">
        <FaGithub size={42} />
      </Icon>
      <Icon href="https://www.linkedin.com">
        <FaLinkedin size={42} />
      </Icon>
    </IconContainer>
  );
};

export default ContactIcon;
