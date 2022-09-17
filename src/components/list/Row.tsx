import styled from 'styled-components';

interface IRow {
  animated?: boolean;
}

const Row = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: white;
  box-shadow: 0 4px 16px hsla(0, 0%, 0%, 0.16);
  color: gray;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  cursor: ${(props) => (props.animated ? 'mouse' : 'pointer')};
  transition: transform 0.2s;
  &:hover {
    transform: scale(${(props) => (props.animated ? 1.05 : 1)});
  }
`;

export { Row };
