import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";
import ModalClass from "./Modal";
function Timer({show,handleClose,handleShow,time}){
    const [timeElpsed,setTimeElapsed]=useState(0);
    const record=useRef();
    record.current = timeElpsed;
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeElapsed(timeElpsed => timeElpsed+30);
        },30);
        return () =>{
            time(record.current/1000);
            handleShow();
            clearInterval(timer);
        };
    },[]);
    return(
        <Container>
            <Front>{Math.floor(timeElpsed / 1000)}:</Front>
            <Back>{(timeElpsed % 1000) / 10}</Back>
        </Container>
    )
}

const Container = styled.div`
    margin-top:30px;
    width:100px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
`;

const Front=styled.div`
    text-align:right;
`;

const Back = styled.div`
    width:1em;
`;

export default Timer;