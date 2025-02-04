import styled from "styled-components";

export const Table = styled.table`
    width: 98%;
    background-color: #fff;
    padding: 40px;
    border-radius: 20px;
    max-width: 1120px;
    margin: 10px auto;
`;

export const Thead = styled.thead`
    
`;

export const Tbody = styled.tbody`
`;

export const Tr = styled.tr`
    
`;

export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 5px;
    padding-right: 50px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
    
`;