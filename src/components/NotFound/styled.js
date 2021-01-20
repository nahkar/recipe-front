import styled from 'styled-components';

const StyledLink = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
  background-color: rgb(32, 197, 68);
  margin-top: 20px;
  margin-left: 20px;
  min-width: 100px;
  text-align: center;
  &:hover {
    background-color: rgba(32, 197, 68, 0.7);
    color: #fff;
    transition: 0.5s;
    border-radius: 5px;
  }
`;

export default {
  StyledLink,
};
