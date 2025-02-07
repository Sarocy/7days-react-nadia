import styled from "styled-components";

export const Container = styled.div`
    height: 48vh;
    text-align: left;
    background: url('/images/header.jpg') center/cover no-repeat;
    position: relative;
    z-index: 1; 
    width: 100vw;



    @media (max-width: 768px) {
        height: 35vh; 
        width: 100vw;
    }
`;

export const Title = styled.h1`
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 30px;
    color: #fff;
    position: absolute;
    left: 85px;
    top: 120px;

    @media (max-width: 768px) {
        font-size: 20px; 
        left: 20px; 
        top: 80px;
        text-align: center;
    }
`;

export const ThemeButton = styled.button`
    background: ${({ theme }) => (theme.backgroundColor === "#C2C6C9" ? "#fff" : "#3E4B4B")};
    border: none;
    border-radius: 20px;
    gap: 10px; 
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    bottom: 32vh;
    left: 85px;
    transition: background-color 0.3s ease, transform 0.2s ease;

    .circle {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: ${({ theme }) => (theme.backgroundColor === "#C2C6C9" ? "#000000" : "#FFFDFD")};
    }

    svg {
        color: ${({ theme }) => (theme.backgroundColor === "#C2C6C9" ? "#000000" : "#FFFDFD")};
        transition: color 0.3s ease;
    }

    @media (max-width: 768px) {
        left: 20px;
        bottom: 25vh; 
        width: 50px;
        height: 25px;

        .circle {
            width: 15px;
            height: 15px;
        }

        .icon {
            width: 15px;
            height: 15px;
        }

    }
`;

