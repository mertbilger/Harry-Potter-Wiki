import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Mail from "../models/MailModel";



const ContactModel = () => {
    return (
      <Canvas camera={{ position: [0, 1.5, -5], zoom: 1.1 }}>
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
            <Mail />
          </Stage>
        </Suspense>
      </Canvas>
    );
  };
  
  export default ContactModel;
  