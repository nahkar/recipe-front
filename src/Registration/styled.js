import styled from "styled-components";

const WrapperForRegistration = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperForButton = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Heading = styled.div`
  margin: 0;
  padding: 10px 0 0 0;
`;

const Error = styled.div`
  margin: 0;
  padding: 0 0 0 0;
  color: red;
`;
export default {
  WrapperForRegistration,
  WrapperForButton,
  Heading,
  Error,
};
