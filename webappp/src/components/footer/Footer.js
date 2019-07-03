import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    text-align: center;
    display: grid;
    grid-template-columns: auto ;
    justify-content: space-evenly;
    align-content: center;
    background-color: #777777;
    color: #eeeeee;
    font-family: Lucida Sans Unicode;
`;

const FooterLink = styled.a`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const Footer = (props) =>
    <FooterWrapper>
        <FooterLink>
            Hilfe
        </FooterLink>
    </FooterWrapper>

export default Footer;