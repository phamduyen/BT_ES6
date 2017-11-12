export default class Day {
    constructor() {
        this.EnlishDays = [
            {name: "Monday", number: 2},
            {name: "Tuesday", number: 3},
            {name: "Wednesday", number: 4},
            {name: "Thursday", number: 5},
            {name: "Friday", number: 6},
            {name: "Saturday", number: 7},

        ]
    };

    getNumber(daysString) {
        let days = daysString.split([""]);
        return days.filter(item => (item >= 2 && item <= 7));
    }

    getEnglishDay(daysString) {
        let dayNumbers = this.getNumber(daysString);
        let arrDays = [];
        dayNumbers.map(number => {
            let englishDay = this.EnlishDays.find(englishDay => englishDay.number == number);
            arrDays.push(englishDay.name);
        });
        return arrDays;
    }
}