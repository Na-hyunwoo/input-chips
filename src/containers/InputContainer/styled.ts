import { FormEvent, KeyboardEvent } from "react";

import styled from "styled-components";

interface InputProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange(arg0: FormEvent<HTMLInputElement>): void;
  onKeyDownCapture(arg0: KeyboardEvent<HTMLInputElement>): void;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  name?: string;
  readOnly?: boolean;
  required?: boolean;
  background?: string;
  border?: string;
}

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
`;

export const Input = styled.input<InputProps>`
  background: ${({ background }) => background};

  border-radius: 8px;
  width: 100%;
  resize: none;
  padding: 8px 16px;

  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #3b3f4e;

  border: 0;
  outline: 0;

  &::placeholder {
    color: #c4c9d7;
  }

  &:focus {
    padding: 7px 15px;
    border: ${({ border }) => border && `1px solid ${border}`};
  }
`;
