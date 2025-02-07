import styled from "styled-components";

export const Container = styled.div`
    max-width: 82vw;
    margin: 0 auto;
    display: flex;
    margin-top: -50px;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 5vw; 
        margin-top: -20px;
    }
`;
