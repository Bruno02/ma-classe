import styled from 'styled-components';

interface IButton {
  isDisabled?: boolean;
}
const Button = styled.button<IButton>`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  background-color: ${(props) =>
    props.isDisabled ? 'lightgray' : 'royalblue'};
  color: white;
  border: 0;
  cursor: ${(props) => (props.isDisabled ? 'mouse' : 'pointer')};
`;

export { Button };
