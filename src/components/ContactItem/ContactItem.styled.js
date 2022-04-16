import styled from "@emotion/styled";

export const ContactName = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const ContactNumber = styled.a`
  margin-right: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
  color: #2196f3;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
  `;

export const ContactDelete = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: transparent;
  background-color: rgb(150, 191, 224);
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  :hover, 
  :focus {
  background-color: rgb(235, 152, 152);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;