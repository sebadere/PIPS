import React, {useState} from 'react'
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection/index';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import FloatingWhatsApp from 'react-floating-whatsapp'
import Gallery from '../components/Gallery/Index';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>

            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HomeSection/>
            <InfoSection/>
            <Services/>
            <Gallery/>
            <ContactSection/>
            <Footer/>
            <FloatingWhatsApp
                phoneNumber="123456789"
                accountName="Bot"
                allowClickAway
                notification
                notificationDelay={60000} // 1 minute
            />
        </>
    )
}

export default Home
