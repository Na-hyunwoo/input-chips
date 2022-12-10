import React, { useState } from "react";
import { InputChips } from "./InputChips";

interface Props {
  id: string,
  title?: string,
  keywords: Array<string>,
  placeholder?: string,
  tip?: string,
  onAdd: (arg0: string) => void,
  onDelete: (arg0: string) => void,
  disabled?: boolean
}

export default {
  title: "InputChips",
  component: InputChips
}

const Template = (args: Props) => <InputChips {...args}/>;

export const InputChipsWithTitle = () => {

  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAdd = (keyword: string) => {
    if(!keywords.includes(keyword)) {
      setKeywords((prev) => [...prev, keyword]);
    }
  }

  const handleDelete = (keyword: string) => {
    setKeywords((prev) => prev.filter((value) => value !== keyword));
  }

  return (
    <InputChips 
      id={"Enter Keyword"}
      title={"Enter Keyword"}
      keywords={keywords}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}


export const InputChipsWithTip = () => {

  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAdd = (keyword: string) => {
    if(!keywords.includes(keyword)) {
      setKeywords((prev) => [...prev, keyword]);
    }
  }

  const handleDelete = (keyword: string) => {
    setKeywords((prev) => prev.filter((value) => value !== keyword));
  }

  return (
    <InputChips 
      id={"Enter Keyword"}
      title={"Enter Keyword"}
      tip={"After writing keywords one by one, press Enter."}
      keywords={keywords}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}

export const InputChipsWithPlaceholder = () => {

  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAdd = (keyword: string) => {
    if(!keywords.includes(keyword)) {
      setKeywords((prev) => [...prev, keyword]);
    }
  }

  const handleDelete = (keyword: string) => {
    setKeywords((prev) => prev.filter((value) => value !== keyword));
  }

  return (
    <InputChips 
      id={"Enter Keyword"}
      title={"Enter Keyword"}
      tip={"After writing keywords one by one, press Enter."}
      placeholder={"내가 만든 쿠키 너를 위해 구웠지"}
      keywords={keywords}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}

export const NormalInputChips = () => {

  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAdd = (keyword: string) => {
    if(!keywords.includes(keyword)) {
      setKeywords((prev) => [...prev, keyword]);
    }
  }

  const handleDelete = (keyword: string) => {
    setKeywords((prev) => prev.filter((value) => value !== keyword));
  }

  return (
    <InputChips 
      keywords={keywords}
      onAdd={handleAdd}
      onDelete={handleDelete}
    />
  )
}
