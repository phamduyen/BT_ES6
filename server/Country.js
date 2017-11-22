import Data from './country.json';

export default class Country {
    constructor() {
        this.countries = Data.countries;
    }

    sortName() {
        return this.countries.sort((before, after) => {
            let countryBefore = before.country.toUpperCase(); // ignore upper and lowercase
            let countryAfter = after.country.toUpperCase(); // ignore upper and lowercase
            return countryBefore.localeCompare(countryAfter);
        });
    };

    sortHeight() {
        return this.countries.sort((before, after) => {
            let countryBefore = before.height;
            let countryAfter = after.height;
            return countryAfter - countryBefore;
        });
    };

    searchCountry(letters) {
        return this.countries.filter(country => {
                return (country.height >= 160 && country.height <= 170) && (letters.includes(country.country.charAt(0)));
            })
    };

    totalHeight(countries) {
        let total = 0;
        countries.map(country => {
            total += country.height;
        });
        return total;
    }
}