import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/Products/productSlice";
import  { keyframes } from 'styled-components';

const CartItemWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding-bottom: 100px;
  background: url("https://w0.peakpx.com/wallpaper/392/258/HD-wallpaper-harry-potter-harry-potter-thumbnail.jpg");
  background-position: 0 70px;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    object-fit: contain;
  }
`;

const CartItems = styled.div`
  height: 600px;
  width: 350px;
  display: inline-block;
  margin-left: 65px;
  margin-right: 165px;
  margin-top: 200px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  img {
    max-height:300px;
    width: 100%;
    height: 100%;
  }

  h3 {
    font-size: 30px;
    color: black;
    padding-bottom: 5px;
  }

  span {
    font-size: 20px;
    color: black;
  }

  @media (max-width: 768px) {
    width: 250px;
    margin: 40px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 50px;
    padding: 20px;
  }
`;

const Btn = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
  width: 70%;
  height: 50px;
  background-color: #f0c040;
  border: none;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-left: 30px;

  &:hover {
    background-color: #f0c040;
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    background-color: #f0c040;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 20px;
    color: white;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-left: 0px;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative; /* New */
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const Slide = styled.div`
  min-width: 100%;
`;





const ArrowButton = styled.button`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 70px;
  height: 270px;
  background-color: #f0c040;
  border: none;
  right : 75px;
  border-radius: 0%;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
  

`;

const ProductTitle = styled.div`
  position: absolute;
  margin-bottom: 600px;
  display: flex;
  margin-left: 70px;

  .one {
    font-size: 30px;
    color: red;
    padding-bottom: 5px;
    width: 100%;
    margin-right: 20px;
  }
  .cıkanlar {
    font-size: 30px;
    color: white;
    width: 100%;
    border-bottom: 2px solid white;
  }
  @media (max-width: 768px) {
    display: flex;
    position: relative;
    margin-bottom: 20px;
    margin-left: 20%;
    margin-right: 20px;

    .one {
    }
    .cıkanlar {
      margin-right: 60px;
    }
  }
`;

const Data = [
  { id: 1, name: 'Harry Potter Wand', price: 100, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSe1cszNlKBdCEAvqg1M-FlhYt6Z5sElLGRvnOaK82MS4CtZJdJS2YDio5_cHozWNO_3nbnxGF0s_1rDPYU2tnjvNQbOyKPmq1-KBbyS5auwP540lrx6CNSQw&usqp=CAE" },
  { id: 2, name: 'Severus Snape Wand', price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIdiDfrVyo6IwL-jO4mZjqXINGpqO2vSyBw&usqp=CAU" },
  { id: 3, name: 'Lord Voldemort Wand', price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2wlfkfv-CKGHSU1xNZpkYE3UG7mN7-LvVg&usqp=CAU" },
  { id: 4, name: 'Albus Dumbledore Wand', price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vdWa0VomTB6ji98gsytklacfb-cS9Ecf5Q&usqp=CAU" },
  {id:5 , name: 'Hermione Granger Wand', price:100, image:"https://c4.wallpaperflare.com/wallpaper/883/487/640/digital-art-fantasy-art-artwork-women-wallpaper-preview.jpg"},
  { id: 6, name: 'Ron Weasley Wand', price: 100, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AA1nuGF1z7yeu3iyG11VX1l06Cncm7ZeEQ&usqp=CAU"}
];

const CartItem = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showSlides = isMobile ? 1 : 2;
  const slideCount = isMobile ? 1 : 5;

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

  const slides = Data.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides) % slides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideWidth = sliderRef.current.clientWidth;
    const initialTranslateX = -(slideWidth * currentSlide);
    sliderRef.current.style.transform = `translateX(${initialTranslateX}px)`;
  }, [currentSlide]);

  return (
    <>
      <CartItemWrapper>
        <ProductTitle>
          <h3 className="one">ÖNE</h3>
          <h3 className="cıkanlar">ÇIKANLAR</h3>
        </ProductTitle>
 
        <SliderWrapper>
          <SliderContainer ref={sliderRef} style={{ width: `${100 / showSlides}%` }}>
            {Data.map((product) => (
              <Slide key={product.id}>
                <CartItems>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <span>Price: ${product.price}</span>
                  <Btn onClick={() => addToCartHandler(product)}>Sepete Ekle</Btn>
                </CartItems>
              </Slide>
            ))}
          </SliderContainer>
          <ArrowButton onClick={prevSlide}>&larr;</ArrowButton>
          <ArrowButton onClick={nextSlide}>&rarr;</ArrowButton>
        </SliderWrapper>
      </CartItemWrapper>
    </>
  );
};

export default CartItem;

