import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './main.css';
import firebase from 'firebase/app';
import 'firebase/database'
import config from "./config";
import {useHistory} from 'react-router';
firebase.initializeApp(config);
function ModalClass({ show, handleShow, handleClose, time }) {

    const history = useHistory();
    const database = firebase.database();
    const [name, setName] = useState('');
    const onChange = (e) => {
        setName(e.target.value);
    };

    const rankWrite = () => {
        if (name !== "") {
            database.ref("user/").push({
                name: name,
                time: time
            })
            handleClose();
            history.push('/rank');

        }
        else{
            alert("빈칸은 안돼요!");
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>당신의 기록 : {time} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center row">
                        <div className="text-center my-2">이름을 적어주세요. 순위를 기록합니다 !</div>
                        <input type="text" onChange={onChange} value={name}></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={rankWrite}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalClass;