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

export const displayPluralityOfNights = (nights) => {
    return (nights > 1) ? 'noches' : 'noche';
}

export const displayPluralityOfGuests = (guests) => {
    return (guests > 1) ? 'huespedes' : 'huesped';
}