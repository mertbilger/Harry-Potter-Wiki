import { Outlet } from 'react-router-dom';
import CartItem from "../Pages/CartItem";
import WhatsappIcon from '../components/Wp';
import Home from "../Pages/Home";
import Contact from '../Pages/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <>
            
            <Outlet />
            <WhatsappIcon />
            <Home />
            <CartItem />
            <Contact />
            <Footer />
        </>
    )
}

export default Layout