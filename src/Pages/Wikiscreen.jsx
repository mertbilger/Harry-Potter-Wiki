import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: wheat;

  h1 {
    color: #000;
    margin-top: 70px;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  grid-gap: 80px;
  justify-items: center;
  max-width: 960px; 
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    grid-gap: 40px;
  }
`;

const Card = styled.div`
  background-color: antiquewhite;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 100%;
  max-width: 350px;



  img {
    width: 100%;
    height: 400px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-family: poppins;
    font-weight: 500;
    margin: 5px 0;
    margin-bottom: 20px;
  }

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin-left: -20px;

    img {
      height: 200px; 
      min-width: 250px;
    }

    p {
      margin-left: 60px;
      font-size: 12px; 
      margin-bottom: 15px; 
      text-decoration: none;
    }
  }
`;

const Name = styled.div`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70px;
  width: auto;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  background-color: #000;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px; 
    align-items: center;
    justify-content: center;
    height: 50px;
    display: flex; 
    flex-direction: column; 
    text-align: center;
    padding: 10px;

  }
`;

const Wikiscreen = () => {
  return (
    <Container>
      <Navbar />
      <h1>Harry Potter Wiki</h1>
      <Grid>
      <Link to="/3d"> 
          <Card>
            <Name>Harry Potter 3D Arşivi</Name>
            <img src='https://wallpapers.com/images/hd/harry-potter-severus-snape-fan-art-dyejwc4mows9vi22.webp' alt='büyüleri :D' />
            <p>Görmek için tıklayınız...</p>
          </Card>
        </Link>
        <Link to='/evren'> 
          <Card>
            <Name>Harry Potter Karakterleri</Name>
            <img src='https://c4.wallpaperflare.com/wallpaper/570/863/676/hermione-granger-harry-potter-harry-potter-and-the-goblet-of-fire-movies-fantasy-girl-hd-wallpaper-preview.jpg' alt='hermony :D' />
            <p>Görmek için tıklayınız...</p>
          </Card>
        </Link>
        <Link to="/spells"> 
          <Card>
            <Name>Harry Potter Büyüleri</Name>
            <img src='https://w0.peakpx.com/wallpaper/821/400/HD-wallpaper-harry-potter-cars-harry-potter-hogwarts-express-ron-weasley-train-thumbnail.jpg' alt='büyüleri :D' />
            <p>Görmek için tıklayınız...</p>
          </Card>
        </Link>
      </Grid>
    </Container>
  );
}

export default Wikiscreen;
