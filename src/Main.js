import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { HiPlus, HiX, HiPencil } from "react-icons/hi";
import { deleteWordFB } from "./redux/modules/word";


function Main() {
  let navigate = useNavigate();
  let dispatch = useDispatch(); 
  const words = useSelector((state) => state.word.list);

  return (
    <Container>
      {words.map((list, index) => {
        return (
          <div key={index}>
            <h2>{list.word}</h2>
            <p className="icon">
              <HiPencil className="edit" onClick={() => {
              navigate(`/Detail/${list.id}`);
            }}/>
              <HiX className="delete" onClick={() => {
                dispatch(deleteWordFB(list.id));
              }}/>
            </p>
            <hr></hr>
            <p style={{ textAlign: "right", color: "#CCC5B9" }}>
              [{list.pron}]
            </p>
            <p style={{ fontSize: "18px" }}>{list.mean}</p>
            <p style={{ color: "#4895ef" }}>{list.exam}</p>
          </div>
        );
      })}
      <span
        onClick={() => {
          navigate(`/Add`);
        }}
      >
        <HiPlus className="plus" />
      </span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  text-align: left;
  justify-content: center;

  div {
    border: 1px solid #ccc5b9;
    border-radius: 20px;
    margin: 20px;
    padding: 10px 30px;
    width: 180px;
    max-height: 400px;
    max-width: 300px;
    min-width: 200px;
    background-color: #252422;
    word-break: break-all;
    opacity: 0.8;
    box-shadow: 3px 6px 10px #fffcf266;
    &:hover {
      background-color: transparent;
    }
  }

  h2 {
    text-align: center;
    font-family: "KyoboHandwriting2020A";
    font-size: 30px;
    font-weight: bold;
    color: #eb5e28;
    margin-bottom: 5px;
  }
  .icon {
    font-size: 25px;
    margin: 0 0 0 140px;
    color: #ccc5b9;
    .edit{
      &:hover{
        color: #cee023;
        cursor: pointer;
      }
    }
    .delete {
      margin-left: 5px;
      &:hover {
        color: red;
        cursor: pointer;
      }
    }
  }
  hr {
    margin-top: 3px;
  }

  span {
    background-color: #eb5e28;
    position: fixed;
    right: 6%;
    bottom: 5%;
    z-index: 1;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    box-shadow: inset 0 1px 20px orange;
    cursor: pointer;
    &:hover {
      background-color: yellow;
      box-shadow: inset 0 1px 30px #eb5e28;
    }
  }
  .plus {
    font-size: 64px;
    color: #fffcf2;
    opacity: 0.9;
    &:hover {
      color: #eb5e28;
    }
  }
`;

export default Main;
