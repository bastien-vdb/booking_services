import { Periods } from '@prisma/client';

const isDateBlocked = (date: Date, periods:Periods[]) => {
    return periods.some((period) => {
        const jsStartFormatPeriod = new Date(period.start);
        const jsEndFormatPeriod = new Date(period.end);
        return date >= jsStartFormatPeriod && date <= jsEndFormatPeriod;
    });
};

export default isDateBlocked;