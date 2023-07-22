import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import FlyingFord from "../models/Ford";


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: wheat;
`;

const Header = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 700;
  margin-top: 70px;
  margin-bottom: 50px;
`;

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  height: 60vh;
  width: 100%;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const CharacterDescription = styled.p`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  margin: 10px 0;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 14px;
  color: #888;
`;

const Diordesk = () => {
  return (
    <Container>
      <Navbar />
      <Header>Flying Ford Anglia</Header>
      <CharacterWrapper>
        <Canvas camera={{ position: [3, 1, 0], zoom: 1 }}>
          <Suspense fallback={null}>
            <OrbitControls autoRotate />
            <hemisphereLight intensity={0.15} />
            <spotLight
              position={[2, 0, 10]}
              angle={2.3}
              penumbra={5}
              intensity={7}
              castShadow
            />
            <Stage
              environment="city"
              intensity={0.6}
              contactShadow={true}
              contactShadowOpacity={0.5}
              shadowBias={-0.0001}
            >
              <FlyingFord/>
            </Stage>
          </Suspense>
        </Canvas>
      </CharacterWrapper>
      <CharacterDescription>{/*Karakter açıklması*/}</CharacterDescription>
      <Footer>© 2023 MB Software Development</Footer>
    </Container>
  );
};

export default Diordesk;
