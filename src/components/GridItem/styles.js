import styled from "styled-components";

export const Tr = styled.tr`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        background: #f8f8f8;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

export const Td = styled.td`
    padding: 10px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-word;

    svg {
        width: 18px;
        height: 18px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 8px;
        font-size: 12px;
        width: 100%;

        &::before {
            content: attr(data-label)":";
            font-weight: bold;
            color: #333;
            margin-right: 10px; 
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }
`;
