import React from 'react';

import HistoryStyled from './styled';
import DatePicker from '../DatePicker';

const DashboardHistory = () => {
    return (

        <HistoryStyled.HistoryWrapper>
            <HistoryStyled.HistoryTitle>Check your data from history</HistoryStyled.HistoryTitle>
            <HistoryStyled.HistoryBlock>
                <HistoryStyled.BlockDayPicker>
                    <DatePicker/>
                </HistoryStyled.BlockDayPicker>
                <HistoryStyled.BlockStatus>Active</HistoryStyled.BlockStatus>
                <HistoryStyled.BlockButton>Add User</HistoryStyled.BlockButton>
            </HistoryStyled.HistoryBlock>
           
        </HistoryStyled.HistoryWrapper>

    )
}

export default DashboardHistory;
