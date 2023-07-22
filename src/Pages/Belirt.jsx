import styled, { keyframes } from "styled-components";
import { FaWikipediaW } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const wave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-18px);
  }
  100% {
    transform: translateY(0);
  }
`;

const WikiPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
  background: url("/img/bg.jpg");
  background-size: cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  .p {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
  animation: ${wave} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 700px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const DescriptionContainer = styled.div`
  flex: 2;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 33px;
  color: orange;
  margin-bottom: 10px;
  animation: ${wave} 2s ease-in-out infinite;
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    font-size: 27px;
  }
`;

const Description = styled.p`
  font-size: 24px;
  padding-top: 20px;
  color: #fff;
  line-height: 1.6;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    font-size: 20px;
  }
`;

const ExternalLink = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LinkComp = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #007bff;
  font-size: 20px;
`;

const WikiIcon = styled(FaWikipediaW)`
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;


const Belirt = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Düzgün bir kaydırma animasyonu için smooth kullanıyoruz
    });
  };




  const imgUrl =
    "https://w0.peakpx.com/wallpaper/576/744/HD-wallpaper-harry-potter-paper-harry-pottee-harry-potter-thumbnail.jpg";
  const wikiDescription =
    "Harry Potter, İngiliz yazar J. K. Rowling tarafından yazılmış yedi fantastik romandan oluşan bir seridir. Romanlar, Hogwarts Cadılık ve Büyücülük Okulu'nda eğitim gören genç büyücü Harry Potter ile arkadaşları Hermione Granger ve Ron Weasley'nin yaşamlarını konu alır. Ana hikâye Harry'nin karanlık bir büyücü olan Lord Voldemort'un ölümsüz olmayı, Sihir Bakanlığı olarak bilinen büyücü yönetim kurulunu devirmeyi ve tüm büyücüleri ve Muggle'ları (büyülü olmayan insanlar) boyun eğdirmeye çalışması ve buna karşı bir hayat mücadelesi vermesidir.";

  return (
    <>
      <Navbar />
      <WikiPageContainer>
        <ImageContainer>
          <Image src={imgUrl} alt="Harry Potter" />
        </ImageContainer>
        <DescriptionContainer>
          <Title>Harry Potter Wiki Sayfasına Hoşgeldiniz</Title>
          <Description>{wikiDescription}</Description>
          <ExternalLink>
            <Link to="/wiki">
              <LinkComp>
                <WikiIcon onClick={handleScrollToTop} />
                <p onClick={handleScrollToTop}>Harry Potter Wiki Sayfası</p>
              </LinkComp>
            </Link>
          </ExternalLink>
        </DescriptionContainer>
      </WikiPageContainer>
    </>

  );
};

export default Belirt;
