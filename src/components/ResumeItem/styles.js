import styled from "styled-components";

export const Container = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 15px 15px 22px 15px;
    width: 31%;
    gap: 10px;

    @media (max-width: 750px){
        width: 82%; 
        padding: 2vw;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    svg {
        width: 25px;
        height: 25px;
        
        @media (max-width: 750px) {
            width: 3vw; 
            height: 3vh;
        }
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;

    @media (max-width: 750px) {
        font-size: 10px;
    }
`;

export const Total = styled.span`
    font-size: 42px;
    font-weight: bold;

    @media (max-width: 750px) {
        font-size: 15px; 
    }
`;

