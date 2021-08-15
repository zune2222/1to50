import React, {useState} from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer"
let array = [];
for (let i = 1; i <= 25; i++) {
    array.push(i);
}
function OneToFifty() {
    const [numbers, setNumbers] = useState(array);
    const [gameFlag, setGameFlag] = useState(false);
    const [current, setCurrent] = useState(1);

    const handleClick = num => {
        if (num === current) {
            if (num === 50) {
                endGame();
            }
            const index = numbers.indexOf(num);
            setNumbers(numbers => [
                ...numbers.slice(0, index),num < 26 ? num + 25 : 0,...numbers.slice(index + 1)
            ]);
            setCurrent(current => current + 1);
        }
    };
    const startGame=()=>{
        setNumbers(shuffleArray(array));
        setCurrent(1);
        setGameFlag(true);
    }
    const endGame=()=>{
        setGameFlag(false);
    }
    return (
        <Container>
            <Board numbers={numbers} handleClick={handleClick}></Board>
            {gameFlag ? (
                <Timer/>
            ): (
                <StartButton onClick={startGame}>시작하기</StartButton>
            )}
        </Container>
    );
}
const shuffleArray=array=>{
    for(let i=array.length -1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}
const Container = styled.div`
    width:100%;
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:30px;
    box-shadow:5px 7px 7px 5px rgba(0,0,0,0.16);
    margin:auto;
`;
const StartButton = styled.button`
    margin-top:30px;
    width:100px;
    height:50px;
    border-radius:15px;
    border:0px;
    box-shadow:5px 7px 2px 3px rgba(0,0,0,0.16);
    &:hover{
        transform:scale(1.05);
        transition:.5s;
        color:#8B756D;
    }
    transition:.5s;
`;

export default OneToFifty;