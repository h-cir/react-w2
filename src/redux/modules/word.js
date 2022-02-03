import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
const UPDATE = "word/UPDATE";
const DELETE = "word/DELETE";

const initialState = { list: [] };

export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

export const updateWord = (word_index,newdata) => {
  return { type: UPDATE, word_index, newdata};
};

export const deleteWord = (word_index) => {
  return { type: DELETE, word_index};
}

//middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "france"));

    let word_list = [];

    word_data.forEach((w) => {
      word_list.push({ id: w.id, ...w.data() });
    });
    dispatch(loadWord(word_list));
  };
};

export const createWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "france"), word);
    dispatch(createWord({ id: docRef.id, ...word }));
  };
};

export const updateWordFB = (updateword,word_id) => {
  return async function (dispatch,getState) {
    const docRef = doc(db, "france", word_id);
    await updateDoc(docRef, {...updateword});
    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((w)=> {
      return w.id === word_id;
    })
    updateword = {...updateword,id:word_id};
    dispatch(updateWord(word_index,updateword));
  };
};

export const deleteWordFB = (word_id) => {
  return async function (dispatch, getState) {
    if(!word_id){
      window.alert("아이디가 없네요!");
     return; 
    }
    const docRef = doc (db, "france", word_id);
    await deleteDoc(docRef);
    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((b)=> {
      return b.id === word_id;
    });
    dispatch(deleteWord(word_index));
  }
}

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return { list: action.word_list };
    }
    case "word/CREATE": {
      const new_word_list = [...state.list, action.word];
      return { list: new_word_list };
    }
    case "word/UPDATE": {
      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.word_index) === idx) {
          return action.newdata;
        } else {
          return l;
        }
      });
      return { list: new_word_list };
    }

    case "word/DELETE":{
      const new_word_list = state.list.filter((e,i)=> {
        return parseInt(action.word_index) !== i
      })
      return { list: new_word_list};
    }

    default:
      return state;
  }
}
