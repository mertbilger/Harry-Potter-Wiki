import React from 'react';
import styled from 'styled-components';

const WhatsappIconContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 999;
`;

const WhatsappIconLink = styled.a`
  display: block;
`;

const WhatsappIconImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
`;

const WhatsappIcon = () => {
    return (
        <WhatsappIconContainer>
            <WhatsappIconLink
                href="https://whatsapp_linkiniz"
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsappIconImage
                    src="data:image/png;base64,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"
                    alt="WhatsApp Icon"
                />
            </WhatsappIconLink>
        </WhatsappIconContainer>
    );
};

export default WhatsappIcon;
