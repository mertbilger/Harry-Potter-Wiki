import styled from "styled-components";

const Home = () => {

  const HomeContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("https://c4.wallpaperflare.com/wallpaper/339/699/782/castle-fiction-fantasy-hogwarts-wallpaper-preview.jpg")
      no-repeat center center fixed;
    background-size: cover;
    font-family: "Poppins", sans-serif;
    text-align: center;
  `;

  const Content = styled.div`
    max-width: 60rem;
    
    h3 {
      font-size: 2.5rem;
      color: #fff;
      margin-bottom: 1rem;
    }
    
    span {
      display: block;
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.5;
      color: #FFA31A;
    }
  `;


  return (
    <>
      <HomeContainer>
        <Content>
          <h3>TÜRKİYE'NİN İLK HARRY POTTER EVRENİ</h3>
          <span>TÜRKİYE AKADEMİSİ</span>
        </Content>
      </HomeContainer>
    </>

  );
};

export default Home;
