import { DateTime } from 'luxon';

/**
 * Get the default period for the datepicker today and tomorrow
 * @returns {Array} The default period
 * @example
 * getDefaultPeriod()
 * // returns ['2020-12-01', '2020-12-02']
 */
export const getDefaultPeriod = () => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 1));
    return [startDate, endDate];
};

export const getMinDates = () => {
    const date = DateTime.now();
    const min_year = date.year;
    const max_year = date.plus({ years: 2 }).year;
    const min_month = date.month;
    const max_month = date.plus({ years: 2 }).month;
    const min_date = date;
    const max_date = date.plus({ years: 2 });

    return {
        min_year,
        max_year,
        min_month,
        max_month,
        min_date: min_date.toString(),
        max_date: max_date.toString()
    }
}


/**
 * 
 * @param {[Date, Date]} PeriodDates 
 * @returns {String} The formatted period
 * @example
 * formatPeriod([new Date(), new Date(new Date().setDate(new Date().getDate() + 1))])
 * // returns 'mar, 01 dic - mié, 02 dic'
 */
export const formatPeriod = (PeriodDates) => {
    const [_StartDate, _EndDate] = PeriodDates ?? getDefaultPeriod(); 
    const start = DateTime.fromJSDate(_StartDate);
    const end = DateTime.fromJSDate(_EndDate ?? _StartDate);

    const startFormat = start.setLocale('es').toFormat('ccc, dd MMM');
    const endFormat = end.setLocale('es').toFormat('ccc, dd MMM');

    return `${startFormat} - ${endFormat}`;
};