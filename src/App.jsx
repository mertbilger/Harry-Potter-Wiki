import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyle from './Styled/GlobalStyled';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Router/Layout';
import Evren from './Pages/Evren';
import Wikiscreen from './Pages/Wikiscreen';
import Spells from './Pages/Spells';
import Sepet from './Pages/Sepet';
import Main3d from './Pages/Main3d';
import GoldenSnitch from './Elements/GoldenSnitch';
import PotterModel from './Elements/PotterModel';
import Threeİtems from './Elements/Threeİtems';
import VoldemortModel from './Elements/VoldemortModel';
import Belirt from "./Pages/Belirt";
import Contact from './Pages/Contact';
import AlbusModel from './Elements/AlbusModel';
import Car from './Elements/Car';
import DobbyModel from './Elements/DobbyModel';
import ElderWand from './Elements/ElderWand';


const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #000;

  @media (max-width: 768px) {
    & video {
      width: 100%;
      min-height: 100vh;
      height: 100%;
    }
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  z-index: 9999;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-right: 10px;
`;




function App() {

  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Belirt />
        },
        {
          path: "/evren",
          element: <Evren />
        },
        {
          path: "/wiki",
          element: <Wikiscreen />
        }, {
          path: "/spells",
          element: <Spells />
        },
        {
          path: "/sepet",
          element: <Sepet />
        },
        {
          path: "/3d",
          element: <Main3d />
        },
        {
          path: "/snitch",
          element: <GoldenSnitch />
        },
        {
          path: "/potter",
          element: <PotterModel />
        },
        {
          path: "/voldemort",
          element: <VoldemortModel />
        },
        {
          path: "/three",
          element: <Threeİtems />
        },
        {
          path: "/albus",
          element: <AlbusModel />

        },
        {
          path: "/iletisim",
          element: <Contact />
        },
        {
          path: "/ford",
          element: <Car />
        },
        {
          path: "/dobby",
          element: <DobbyModel />
        },
        {
          path: "/elder",
          element: <ElderWand />
        }
      ]
    }
  ]);

  return (
    <>
      {loading && (
        <VideoContainer>
          <video
            src="./jenerik2.mp4"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
            onEnded={() => setLoading(false)}
          />
        </VideoContainer>
      )}
      {loading && !videoLoaded && (
        <LoadingContainer>
          <LoadingSpinner />
          Sayfa yükleniyor...
        </LoadingContainer>
      )}
      {!loading && (
        <div>
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
