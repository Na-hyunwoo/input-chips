import React, { useReducer } from "react";
import { InputChips } from "./lib/InputChips";

interface ActionProps {
  type: string;
  keyword: string;
}

const reducer = (state: string[], action: ActionProps): string[] => {
  switch (action.type) {
    case "ADD":
      return state.includes(action.keyword)
        ? state
        : [...state, action.keyword];
    case "DELETE":
      return state.filter((existing) => existing !== action.keyword);
    default:
      return state;
  }
};

const inputChips = {
  title: "Include Keywords",
  tip: "After entering the keywords one by one, press Enter.",
  placeholder: "내가 만든 쿠키 너를 위해 구웠지",
};

const App = () => {
  const [keywords, dispatch] = useReducer(reducer, []);

  const handleAdd = (keyword: string) => {
    dispatch({ type: "ADD", keyword: keyword });
  };

  const handleDelete = (keyword: string) => {
    dispatch({ type: "DELETE", keyword: keyword });
  };

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
};

export default App;
