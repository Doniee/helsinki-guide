import styled from 'styled-components';

const Tag = styled.li`
  display: inline-block;
  background: ${props => props.theme.yellow};
  padding: 2px 10px;
  margin: 5px 5px 5px 0;
  color: #fff;
  border-radius: 5px;
  font-size: 0.9rem;
`;

export default Tag;
