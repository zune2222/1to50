import React from "react";
import styled from "styled-components"

function Cell({ num, handleClick }) {
    return <Container className="fnt" onClick={() => handleClick(num)}>{num !==0 ? num : null}</Container>;
  }
const Container= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    border-radius:15px;
    border:0px;
    box-shadow:2px 5px 3px 2px rgba(0,0,0,0.16);
    margin:5px;
    &:hover{
        transform:scale(1.05);
        transition:.2s;
        color:#8B756D;
    }
    transition:.2s;
`;

export default Cell;