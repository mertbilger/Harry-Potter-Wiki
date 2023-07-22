import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: url("https://wallpapers.com/images/high/hogwarts-house-logos-harry-potter-desktop-dyqtgu9zpr30a5eb.webp")
      no-repeat center center fixed;
    background-size: cover;

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 70px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

const Card = styled.div`
  background-color: antiquewhite;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 250px;
  
  img {
    width: 100%;
    height: 350px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin: 5px 0;
    margin-bottom: 20px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Name = styled.div`
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: auto;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
  background-color: #3C2020;
  color: #fff;
`;



const Main3d = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
      <Navbar />
      <h1>Harry Potter 3D Karakterler</h1>
      <Grid>
        <Link to="/snitch">
          <Card onClick={handleScrollToTop}>
            <Name >Golden Snitch</Name>
            <img src="https://wallpapers.com/images/high/quidditch-1920-x-1080-wallpaper-562zcas9oxthqxic.webp"></img>
            <p></p>
          </Card></Link>
        <Link to="/potter">
        <Card onClick={handleScrollToTop}>
          <Name>Harry Potter</Name>
          <img src="https://w0.peakpx.com/wallpaper/952/791/HD-wallpaper-harry-potter-harry-potter-deathly-hallows-thumbnail.jpg"></img>
          <p></p>
        </Card>
        </Link>
        <Link to="/three">
        <Card onClick={handleScrollToTop}>
          <Name>A Few of the Items</Name>
          <img src="https://wallpapers.com/images/high/hufflepuff-stitched-logo-harry-potter-desktop-m3yvq0s5yvszrfm0.webp"></img>
          <p></p>
        </Card>
        </Link>
        <Link to="/voldemort">
        <Card onClick={handleScrollToTop}>
          <Name>Lord Voldemort</Name>
          <img src="https://w0.peakpx.com/wallpaper/263/260/HD-wallpaper-harry-potter-7-harry-potter-magic-the-deathly-hallows-thumbnail.jpg"></img>
          <p></p>
        </Card>
        </Link>
        <Link to="/albus">
        <Card onClick={handleScrollToTop}>
        <Name>Albus Dumbledore</Name>
        <img src="https://w0.peakpx.com/wallpaper/764/399/HD-wallpaper-dumbledore-asa-harry-potter-thumbnail.jpg"></img>
        <p></p>
      </Card>
      </Link>
      <Link to="/ford">
      <Card onClick={handleScrollToTop}>
      <Name>Flying Ford Anglia</Name>
      <img src="https://w0.peakpx.com/wallpaper/821/400/HD-wallpaper-harry-potter-cars-harry-potter-hogwarts-express-ron-weasley-train-thumbnail.jpg"></img>
      <p></p>
    </Card>
    </Link>
    <Link to="/dobby">
    <Card onClick={handleScrollToTop}>
    <Name>Dobby</Name>
    <img src="https://w0.peakpx.com/wallpaper/667/195/HD-wallpaper-house-elf-dobby-in-harry-potter-and-fantastic-beasts-2-dobby-harry-potter-movies-creature-thumbnail.jpg"></img>
    <p></p>
  </Card>
  </Link>
  <Link to="/elder">
  <Card onClick={handleScrollToTop}>
  <Name>Elder Wand</Name>
  <img src="https://w0.peakpx.com/wallpaper/875/627/HD-wallpaper-hermione-granger-brunette-cauldron-digital-art-harry-magic-potter-uniform-wand-thumbnail.jpg"></img>
  <p></p>
</Card>
</Link>
      </Grid>
    </Container>
  );
};


export default Main3d