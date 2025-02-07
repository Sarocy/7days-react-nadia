import React, {useState} from 'react'
import * as C from "./styles"
import Grid from '../Grid';

const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, SetAmount] = useState("");
    const [date, setDate] = useState("");
    const [isExpense, SetExpense] = useState(false);

    const generateID = () => Math.round(Math.random()*1000);

    const handleSave = () => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            date: date,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        SetAmount("");
        setDate("");
    };

    return(
        <>
            <C.Container>
                <C.Content>
                    <C.InputContent>
                        <C.Label>Data</C.Label>
                        <C.Input
                            value={date}
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </C.InputContent>

                    <C.InputContent>
                        <C.Label>Categoria</C.Label>
                        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </C.InputContent>

                    <C.InputContent>
                        <C.Label>Valor</C.Label>
                        <C.Input 
                        value={amount}
                        type='number'
                        onChange={(e) => SetAmount(e.target.value)}
                        />
                    </C.InputContent>
                    
                    <C.Button onClick={handleSave}>ADICIONAR</C.Button>
                </C.Content>

                <C.RadioGroupWrapper>
                <C.RadioGroup>
                    <C.Input
                        type='radio'
                        id='rIncome'
                        defaultChecked
                        name='group1'
                        onChange={() => SetExpense(!isExpense)}
                    />
                    <C.Label htmlFor='rIncome'>Entrada</C.Label>
                    <C.Input 
                        type='radio'
                        id='rExpenses'
                        name='group1'
                        onChange={() => SetExpense(!isExpense)}
                    />
                    <C.Label htmlFor='rExpenses'>Saída</C.Label>
                </C.RadioGroup>
                </C.RadioGroupWrapper>
                
            </C.Container>
            <Grid  itens={transactionsList} setItens={setTransactionsList} />
        </>
    )
}

export default Form;