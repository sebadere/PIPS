import React from 'react'
import { ContactContainer, ContactWrapper, ContactTitle, ContactInfo, ContactInfoTitle, ContactInfoWrapper, IconWrapper, ContactForm, ContactInput, ImageWrapper, Image, ContactFormButton, InfoWrapper, InfoTitle, InfoData} from './ContactElements'
import Image1 from '../../images/contactsection.png'
import {FaPhoneAlt} from "react-icons/fa"
import {IoLocationSharp} from "react-icons/io5"
import {MdMail} from "react-icons/md"

const ContactSection = () => {
    return (
        <>
            <ContactContainer id={'contact'}>
                <ContactTitle>CONTACTANOS</ContactTitle>
                <ContactWrapper>
                    <ImageWrapper>
                        <Image src={Image1}></Image>
                    </ImageWrapper>
                    <ContactInfoWrapper>
                        <ContactInfo>
                            <IconWrapper>
                                <FaPhoneAlt/>
                            </IconWrapper>
                            <ContactInfoTitle>00-0000-0000</ContactInfoTitle>
                        </ContactInfo>
                        <ContactInfo>
                            <IconWrapper>
                                <MdMail/>
                            </IconWrapper>
                            <ContactInfoTitle>ejemplo@mail.com</ContactInfoTitle>
                        </ContactInfo>
                        <ContactInfo>
                            <IconWrapper>
                                <IoLocationSharp/>
                            </IconWrapper>
                            <ContactInfoTitle>Calle 123</ContactInfoTitle>
                        </ContactInfo>
                    </ContactInfoWrapper>
                </ContactWrapper>
            </ContactContainer>
            
        </>
    )
}

export default ContactSection
