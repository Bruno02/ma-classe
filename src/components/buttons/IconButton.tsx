import styled from 'styled-components';

const IconButton = styled.button`
  height: 50px;
  width: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  background-color: transparent;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  color: gray;
  border: 0;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s;
  &:hover {
    transform: scale(${(props) => (props.disabled ? 1 : 1.05)});
  }
`;

export { IconButton };
