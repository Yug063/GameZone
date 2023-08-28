import { styled } from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #bb9457;
  color: #6f1d1b;
  min-width: 220px;
  border: none;
  border: 1px solid transparent;
  transition: 0.3s ease-in;
  font-weight: bold;
  &:hover {
    background-color:  #6f1d1b;
    border: 1px solid #6f1d1b;
    color: white;
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
