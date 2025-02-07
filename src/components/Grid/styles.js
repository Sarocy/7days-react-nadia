import styled from "styled-components";

export const Table = styled.table`
    width: 82vw;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    max-width: 1120px;
    margin: 10px auto;
    overflow-x: auto; 

    @media (max-width: 750px){
        width: 82vw;
        display: block; 
        overflow-x: auto;
        white-space: nowrap; 
        padding: 10px; 
    }
`;

export const Thead = styled.thead`
    @media (max-width: 768px) {
        display: none; 
    }
`;

export const Tbody = styled.tbody`
    @media (max-width: 768px) {
        display: block;
    }
`;

export const Tr = styled.tr`

    @media (max-width: 768px) {
        display: block;
        margin-bottom: 10px;
        border: 1px solid #ccc; 
        padding: 1px;
        border-radius: 10px;
        background: #f9f9f9;
        font-size: 10px;
    }
`;




export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;
    padding-right: 30px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};

    @media (max-width: 768px) {
        padding-right: 10px;
    }
`;

export const TableContainer = styled.div`
    width: 100%;
    overflow-x: auto;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;
