import styled from "@emotion/styled";

export const Text = styled.label`
display: flex;
  flex-direction: column;
  width: 400px;
  font-weight: 500;
  margin: auto;
  margin-bottom: 15px;
`;

export const FindContact = styled.input`
padding: 10px 20px;
  border: 1px solid blueviolet;
  background-color: lightgray;
  border-radius: 5px;
  :focus {
  outline: transparent;
  border: 1px solid blue;
}
`;