import styled from 'styled-components';

const Button = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  background-color: ${(props) => (props.disabled ? 'lightgray' : 'royalblue')};
  color: white;
  border: 0;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s;
  &:hover {
    transform: scale(${(props) => (props.disabled ? 1 : 1.05)});
  }
`;

export { Button };
