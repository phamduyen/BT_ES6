export default class Day {
    constructor() {
        this.EnglishDays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
    };

    getNumber(daysString) {
        let days = daysString.replace(/thu/g, '').split(', ');
        return days;
    }

    getEnglishDay(daysString) {
        let dayNumbers = this.getNumber(daysString);
        let arr = dayNumbers.map((number) => {
            let englishDay = this.EnglishDays[number - 2];
            return `on  ${englishDay}`;
        });
        return arr.join(', ');
    }
}