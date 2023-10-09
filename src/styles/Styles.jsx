import styled from "styled-components";

const SubmitBtn = styled.button`
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #a5a5a5;
    cursor: pointer;

    &:hover {
        background-color: #80aef3;
    }
`;

const Delete = styled.button`
    margin-left: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #a5a5a5;
    cursor: pointer;

    &:hover {
        background-color: #80aef3;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 170px;
    justify-content: space-evenly;
`;

const FormSearch = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const List = styled.li`
    display: flex;
    list-style: none;
    width: 350px;
    align-items: center;
    justify-content: space-between;
`;

const Setul = styled.ul`
    padding: 0;
    margin: 0;
`;


export {SubmitBtn, Delete, Form, FormSearch, List, Setul};