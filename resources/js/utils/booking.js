import { 
    getDefaultPeriod,
    formatPeriod,
    getMinDates
    
} from '@/utils/dates.js';

class Booking {

    startDate;
    endDate;
    period;

    constructor(StartDate, EndDate) {
        this.startDate = StartDate;
        this.endDate = EndDate;
        this.period = this.getDefaultPeriod();
    }

    getDefaultPeriod() {
        return getDefaultPeriod();
    }

    getMinDateSettings() {
        return getMinDates();
    }

    periodToString(PeriodDates = this.period) {
        return formatPeriod(PeriodDates);
    }

    periodToFormatString(Period = this.period) {
        return this.formatPeriod(Period);
    }

}

export default new Booking(getDefaultPeriod());