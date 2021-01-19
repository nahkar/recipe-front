import styled from "styled-components";
const Wrapper = styled.div`
  width: 280px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5px);
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 1px);
  }
`;
const RecipesImg = styled.img``;

const Information = styled.div`
  padding: 45px 20px 0 20px;
`;
const Name = styled.h2``;
const Description = styled.p``;

const AuthorWrapper = styled.div`
  display: flex;
`;

const AuthorImg = styled.img`
  border-radius: 100px;
`;
const AuthorInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
const AuthorName = styled.span`
  color: #242424;
  font-size: 0.8125rem;
  line-height: 0.8125rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const AuthorDate = styled.span`
  color: #898989;
  font-family: "Noto Serif";
  font-size: 0.6875rem;
  line-height: 0.8126rem;
  font-style: italic;
  padding-top: 5px;
`;

export default {
  Wrapper,
  RecipesImg,
  Information,
  Name,
  Description,
  AuthorWrapper,
  AuthorImg,
  AuthorInformation,
  AuthorName,
  AuthorDate,
};
