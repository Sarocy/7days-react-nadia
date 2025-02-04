import styled  from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    border-radius: 20px;
    padding: 15px 0px;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

export const Label = styled.label`
    margin: 15px 25px 15px 5px;
`;

export const Input = styled.input`
    outline: none;
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 15px;
    border: none;
    background-color: #D9D9D9;
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    color: white;
    background-color: #1A5755;
    width: 160px;
    height: 40px;
    margin-top: auto;
    transition: background-color 0.3s ease;

        &:hover {
        background-color: #12807A; 
    }
`;

export const RadioGroupWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    `;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
    }
`;

