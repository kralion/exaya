import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import React from 'react';

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

export function EncomiendasCalendar() {
    const { token } = theme.useToken();

    const wrapperStyle: React.CSSProperties = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div style={wrapperStyle}>
            <Calendar className='hover:scale-105 hover:-rotate-3 hover:shadow-lg duration-300' fullscreen={false} onPanelChange={onPanelChange} />
        </div>
    );
}
