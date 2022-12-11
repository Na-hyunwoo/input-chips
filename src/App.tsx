import React, { useReducer } from 'react';
import { InputChips } from "./lib/InputChips";

interface ActionProps {
  type: string,
  keyword: string
}

const reducer = (state: string[], action: ActionProps) : string[] => {
  switch (action.type) {
    case "ADD":
      return state.includes(action.keyword) ? state : [...state, action.keyword];
    case "DELETE":
      return state.filter((existing) => existing !== action.keyword);
    default: 
      return state;
  }
}

const inputChips = {
  title: "포함 키워드",
  tip: "키워드를 한 개씩 작성한 후 Enter를 눌러주세요.",
  placeholder: "코드",
}

const App = () => {

  const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({ type: "ADD", keyword: keyword });
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({ type: "DELETE", keyword: keyword });
  }

  return (
    <InputChips 
      id={inputChips.title}
      title={inputChips.title} 
      tip={inputChips.tip}
      placeholder={inputChips.placeholder}
      keywords={keywords}
      onDelete={handleDelete}
      onAdd={handleAdd}
    />
  );
}

export default App;
