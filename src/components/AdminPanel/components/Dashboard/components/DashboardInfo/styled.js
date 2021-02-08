import styled from 'styled-components';

const BlocksInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const BlockInfo = styled.div`
  width: 25%;
  background-color: #fff;
  min-height: 100px;
  display: flex;
  box-sizing: border-box;
  margin-right: 15px;
  &:last-child {
    margin-right: 0px;
  }
`;

const BlockInfoIcon = styled.div`
  position: relative;
  min-width: 37%;
  background-color: ${(props) => props.color};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.img});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    filter: invert(1);
  }
`;

const BlockInfoData = styled.div`
  padding: 10px;
`;

const BlockInfoTitle = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  min-height: 40%;
  box-sizing: border-box;
`;

const BlockInfoNumber = styled.span`
  font-size: 20px;
`;

const DashboardHistory = styled.div`
  background-color: #fff;
`;

const InfoStyled = {
  BlocksInfoWrapper,
  BlockInfo,
  BlockInfoIcon,
  BlockInfoData,
  BlockInfoTitle,
  BlockInfoNumber,
  DashboardHistory,
};

export default InfoStyled;
