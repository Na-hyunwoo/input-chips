import React, { useReducer, useState } from 'react';
import InputChips from "./lib/InputChips";

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

const App = () => {

  const [ keywords, dispatch ] = useReducer(reducer, []);

  const handleAdd = ( keyword: string ) => {
    dispatch({type: "ADD", keyword: keyword});
  }

  const handleDelete = ( keyword: string ) => {
    dispatch({type: "DELETE", keyword: keyword});
  }

  return (
    <InputChips 
      title={"포함 키워드"} 
      tip={"* 키워드를 한 개씩 작성한 후 Enter를 눌러주세요."}
      onDelete={handleDelete}
      onAdd={handleAdd}
      keywords={keywords}
      placeholder={"코드"}
    />
  );
}

export default App;
