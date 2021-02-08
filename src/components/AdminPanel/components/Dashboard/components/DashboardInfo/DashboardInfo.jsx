import React from 'react';

import InfoStyled from './styled';

import finishImg from '../../img/finish.png';
import emailImg from '../../img/email.png';
import folderImg from '../../img/folder.png';
import starImg from '../../img/star.png';

const DashboardInfo = () => {
    return (
        <InfoStyled.BlocksInfoWrapper>
            <InfoStyled.BlockInfo>
                <InfoStyled.BlockInfoIcon color='rgb(79, 220, 255)' img={ emailImg }></InfoStyled.BlockInfoIcon>
                <InfoStyled.BlockInfoData>
                    <InfoStyled.BlockInfoTitle>Total Users</InfoStyled.BlockInfoTitle>
                    <InfoStyled.BlockInfoNumber>4</InfoStyled.BlockInfoNumber>
                </InfoStyled.BlockInfoData>
            </InfoStyled.BlockInfo>
            <InfoStyled.BlockInfo>
                <InfoStyled.BlockInfoIcon color='rgb(122, 207, 88);' img={ finishImg }></InfoStyled.BlockInfoIcon>
                <InfoStyled.BlockInfoData>
                    <InfoStyled.BlockInfoTitle>Users Active</InfoStyled.BlockInfoTitle>
                    <InfoStyled.BlockInfoNumber>4</InfoStyled.BlockInfoNumber>
                </InfoStyled.BlockInfoData>
            </InfoStyled.BlockInfo>
            <InfoStyled.BlockInfo>
                <InfoStyled.BlockInfoIcon color='rgb(252, 172, 67);' img={ folderImg }></InfoStyled.BlockInfoIcon>
                <InfoStyled.BlockInfoData>
                    <InfoStyled.BlockInfoTitle>Users Inactive</InfoStyled.BlockInfoTitle>
                    <InfoStyled.BlockInfoNumber>4</InfoStyled.BlockInfoNumber>
                </InfoStyled.BlockInfoData>
            </InfoStyled.BlockInfo>
            <InfoStyled.BlockInfo>
                <InfoStyled.BlockInfoIcon color='rgb(255, 32, 32);' img={ starImg }></InfoStyled.BlockInfoIcon>
                <InfoStyled.BlockInfoData>
                    <InfoStyled.BlockInfoTitle>Total Users</InfoStyled.BlockInfoTitle>
                    <InfoStyled.BlockInfoNumber>4</InfoStyled.BlockInfoNumber>
                </InfoStyled.BlockInfoData>
            </InfoStyled.BlockInfo>
        </InfoStyled.BlocksInfoWrapper>
    )
}

export default DashboardInfo;
