import React from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";
import * as C from "./styles";

const GridItem = ({ item, onDelete }) => {
    return (
        <C.Tr>
            <C.Td data-label="Data">{item.date}</C.Td>
            <C.Td data-label="Categoria">{item.desc}</C.Td>
            <C.Td data-label="Valor">R$ {item.amount}</C.Td>
            <C.Td data-label="Tipo" alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="green" />
                )}
            </C.Td>
            <C.Td data-label="Ações" alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
    );
};

export default GridItem;

