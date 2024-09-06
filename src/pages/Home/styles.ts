import styled from 'styled-components';
import { animated } from 'react-spring';


export default {
    Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
    }
`,

Section: styled(animated.section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`,

Title: styled.h1`
    font-size: 30px;
    margin-bottom: 16px;
    color: #333;

    @media (max-width: 768px) {
        font-size: 28px;
        text-align: center;
    }
`,

Description: styled.p`
    font-size: 17px;
    margin-bottom: 14px;
    color: #555;
    line-height: 1.3;

    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }
`,

IconContainer: styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 10px;
    }
`,

Icon: styled.div`
    font-size: 32px;
    color: ${(props) => props.iconColor || '#555'};
    background: ${(props) => props.bgColor || 'gray'};
    border-radius: 50%;
    width: ${(props) => props.width || '50px'};
    height: ${(props) => props.height || '50px'};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
        background: ${(props) => props.hoverBgColor || '#E0E0E0'};
    }

    @media (max-width: 768px) {
        width: ${(props) => props.width || '40px'};
        height: ${(props) => props.height || '40px'};
    }
`,

Image: styled.img`
    width: 90%;
    height: 40%;
    margin: 0.0%;
    
    
    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
    }
`,

Card: styled.div`
    background: white;
    border-radius: 2%;
    width: 30%;
    height: 850px;
    padding: 3%;
    margin: 2%;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin: 10px 0;
    }
`,
SocialContainer: styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`,

SocialIcon: styled.div`
margin: 0 10px;
font-size: 24px;
color: #000;
transition: color 0.3s;

&:hover {
    color: #007bff;
}
`
};
