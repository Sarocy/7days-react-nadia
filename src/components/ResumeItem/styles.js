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
        width: 20%;
    

        p {
        font-size: 17px;
        }

        span {
        font-size: 20px;
        }

        svg {
        display: none;
        }
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
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`

export const Total = styled.span`
    font-size: 42px;
    font-weight: bold;
`;

