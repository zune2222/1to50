import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board({ numbers, handleClick }) {
  return (
    <Container>
      {numbers.map((num, index) => (
        <Cell num={num} key={index} handleClick={handleClick}></Cell>
      ))}
    </Container>
  );
}


const Container = styled.div`
    width:90vw;
    height:90vw;
    max-width:400px;
    max-height:400px;
    border-radius:15px;
    border:0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;

export default Board;