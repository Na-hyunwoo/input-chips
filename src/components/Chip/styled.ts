import styled from "styled-components";

export const Wrapper = styled.button<{ background?: string }>`
  display: flex;
  align-items: center;

  background-color: #ffffff;

  padding: 4px 12px;
  border: 1px solid #d1d7ed;
  border-radius: 30px;
  gap: 4px;

  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: ${({ background }) => background};
  }
`;

export const Keyword = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;
