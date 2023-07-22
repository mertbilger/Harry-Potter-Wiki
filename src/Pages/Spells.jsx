import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background: url("https://w0.peakpx.com/wallpaper/769/321/HD-wallpaper-patrono-harry-potter-expecto-expecto-patronus-harry-harry-potter-hp-patrono-patronus-potter-thumbnail.jpg")
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

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://hp-api.onrender.com/api/spells';

    axios.get(apiUrl)
      .then((response) => setSpells(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h1>Harry Potter Büyüleri</h1>
      <Grid>
        {spells.map((spell) => (
          <Card key={spell.spell} >
            <Name>{spell.name}</Name>   
            <p>{spell.description}</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Spells;
