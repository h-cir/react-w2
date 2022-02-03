import React from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { loadWordFB } from "./redux/modules/word";
import { useDispatch } from "react-redux";

import Main from "./Main";
import Add from "./Add";
import Detail from "./Detail";

function App() {
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);
  return (
    <Appframe>
      <Header>
        <h1>프랑스어 단어장</h1>
      </Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </Appframe>
  );
}

const Appframe = styled.div`
  text-align: center;
  color: #fffcf2;
`;

const Header = styled.div`
  /* border-bottom: 4px solid #252422; */
  width: 100vw;
  height: 100px;
  h1 {
    margin: 0px;
    padding: 30px;
    color: #eb5e28;
    font-family: 'KyoboHandwriting2020A';
    font-size: 40px;
    min-width: 240px;
  }
`;

export default App;
