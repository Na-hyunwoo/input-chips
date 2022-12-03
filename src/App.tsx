import React, { useState } from 'react';
import InputWithChips from "./lib/InputWithChips";

function App() {

  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAdd = (keyword: string) => {
    if (!keywords.includes(keyword)) setKeywords((prev) => [...prev, keyword]);
  };

  const handleDelete = (keyword: string) => {
    setKeywords((prev) => prev.filter((existing) => existing !== keyword))
  }

  return (
    <InputWithChips 
      title={"포함 키워드"}
      tip={"* 키워드를 한 개씩 작성한 후 Enter를 눌러주세요."}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      enteredKeywords={keywords}
      placeholder={"코드"}
    />
  );
}

export default App;
