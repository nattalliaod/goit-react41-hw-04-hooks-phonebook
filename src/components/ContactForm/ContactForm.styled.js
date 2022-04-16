import styled from "@emotion/styled";

export const Phonebook = styled.form`
width: 400px;
  margin: auto;
  padding: 15px;
  border: 3px solid #d4d4d4;
  border-radius: 10px;
  `;

export const LabelName = styled.label`
 display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const InputContact = styled.input`
 padding: 10px 20px;
  border: 1px solid blueviolet;
  background-color: lightgray;
  border-radius: 5px;
  :focus {
  outline: transparent;
  border: 1px solid blue;
}
`;

export const AddContact = styled.button`
 display: block;
  padding: 10px 20px;
  border: transparent;
  border-radius: 5px;
  margin: auto;
  background-color: rgb(150, 191, 224);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  :hover,
  :focus {
  background-color: rgb(152, 233, 152);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;