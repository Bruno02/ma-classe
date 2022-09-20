import styled from 'styled-components';

interface IBlock {
  direction?: 'row' | 'column';
}
const Block = styled.div<IBlock>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'column'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { Block };
