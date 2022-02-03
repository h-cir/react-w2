import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateWordFB } from "./redux/modules/word";

function Detail() {
  let navigate = useNavigate();
  const word = React.useRef([]);
  const dispatch = useDispatch();
  const params = useParams();
  //리덕스에서 useSelector를 사용해 데이터를 받아옴
  const word_list = useSelector((state) => state.word.list.filter(word => word.id === params.id));
  const updateWordList = () => {
    dispatch(
      updateWordFB({
        word: word.current[0].value,
        pron: word.current[1].value,
        mean: word.current[2].value,
        exam: word.current[3].value,
      },word_list[0].id)
    );
  };

  return (
    <Form>
      <div>
        <h2>단어를 수정해볼까요?</h2>
        <div>
          <h3>단어<input type="text" ref={(el) => (word.current[0] = el)} defaultValue={word_list[0].word}/></h3>
        </div>
        <div>
          <h3>발음<input type="text" ref={(el) => (word.current[1] = el)} defaultValue={word_list[0].pron}/></h3>
        </div>
        <div>
          <h3>뜻<input type="text" ref={(el) => (word.current[2] = el)} defaultValue={word_list[0].mean}/></h3>
        </div>
        <div>
          <h3>예시<input type="text" ref={(el) => (word.current[3] = el)} defaultValue={word_list[0].exam}/></h3>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(-1);
          updateWordList();
        }}
      >
        내용 수정하기
      </button>
    </Form>
  );
}

const Form = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  width: 40vw;
  max-width: 400px;
  min-width: 180px;
  padding: 30px 60px;
  border: 1px solid #ccc5b9;
  border-radius: 30px;
  background-color: #252422;
  opacity: 0.8;
  box-shadow: 3px 6px 10px #fffcf266;

  h2 {
    margin: 0px;
  }

  h3 {
    text-align: left;
  }
`;

export default Detail;
