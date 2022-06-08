import styled from 'styled-components';

const Td =styled.span`
border-radius: 10%;
background-color: aqua;
`
const Div = styled.div`
  background-color: #ffffff;
  border-radius: 1ch;
  padding-top: 2ch;
  padding-left: 2ch;
  padding-right: 2ch;
  padding-bottom: 4ch;
  position: relative;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8), 2px 2px 7px rgba(0, 0, 0, 0.5),
    0px 1px 5px rgba(0, 0, 0, 0.03);
`;
const Form = styled.form`
  background-color: #8f8f8f16;


`;
const Input = styled.input`
  background-color: #ffffff;
  display: flex;
  width: max-content;
  border: none;
  height: 5ch;
  margin-left: 5ch;
  margin-bottom: 2ch;
  border-width: 0.2ch;
  border-radius: 1ch;
  padding-left: 2ch;
  ::placeholder{
        color: #8d8a8a;
    }
  :hover {
    zoom: 101%;
    color: #000000;
    ::placeholder{
     color: black;}
  }
`;

const H1 = styled.h1`
  margin-top: 2ch;
  margin-left: 5ch;
  font-family: "Roboto Condensed", sans-serif;
  font-style: italic;
  color: #000000d1;
  font-size: 1.8ch;
  font-weight: bold;
`;

const Title = styled.h1`
  margin-left: 5ch;
  font-family: "Roboto Condensed", sans-serif;
  color: #000000d1;
  font-size: 3ch;
  justify-content: first baseline;
`;


const ButtonSucces = styled.button`
  padding-top: 1ch;
  padding-bottom: 1ch;
  padding-left: 1ch;
  padding-right: 2ch;
  border-radius: 1ch;
  color: #252525;
  background-color: #30eeb5;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  width: fit-content;
  border-width: 0ch;
  margin-top: 4ch;
  margin-left: 6ch;
  :hover {
    color: #000000;
    zoom: 101%;
  }
`;


const Select = styled.select`
 
  height:35px;
  background: white;
  color: gray;

  font-size: 14px;

  border-radius: 1ch;
 
  display: flex;
  width: 5cm;
  margin-bottom: 2ch;
  
`


const Alert = styled.p`
font-size: 2ch;
font-weight: bold;
background-color: red;
color: #ffffff;
border-radius: 1ch;
padding-left: 3ch;
padding-right: 2ch;
max-width: max-content;
:hover{
  zoom: 101%;
}
`


const TextArea = styled.textarea`
 border: none;
 margin-left: 6ch;
 border-radius: 1ch;
 padding-left: 1ch;
 padding-right: 3ch;
 padding-bottom: 9ch;
 :hover{
   zoom: 101%;
   ::placeholder{
     color: black;
     
   }
 }
`
const Modal = styled.div`
background-color: #ffffff;
  border-radius: 1ch;
  width:fit-content ;
  padding-top: 2ch;
  padding-left: 2ch;
  padding-right: 2ch;
  padding-bottom: 4ch;
  position: relative;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.8), 8px 6px 8px rgba(0, 0, 0, 0.5),
    0px 1px 16px rgba(0, 0, 0, 0.03);
`
const Optional = styled.p`
font-size: 1ch;
color: black;
margin-top: -2ch ;
border-radius: 1ch;
padding-left: 8ch;
padding-right: 2ch;
max-width: max-content;
`
const Table = styled.table``


export {Select , ButtonSucces,H1, Input, Form, Div, Title, Alert, TextArea, Modal,Optional, Table,Td }
