export default class Country {
    constructor() {
        this.countries = [
            {"country": "Netherlands", "height": 181.0},
            {"country": "Iceland", "height": 179.8},
            {"country": "Norway", "height": 179.7},
            {"country": "Sweden", "height": 179.3},
            {"country": "Denmark", "height": 178.8},
            {"country": "Finland", "height": 178.4},
            {"country": "Eritrea", "height": 175.8},
            {"country": "Czech Republic", "height": 178.3},
            {"country": "Slovenia", "height": 178.1},
            {"country": "Luxembourg", "height": 178.0},
            {"country": "Croatia", "height": 177.6},
            {"country": "Germany", "height": 177.4},
            {"country": "Estonia", "height": 177.1},
            {"country": "Austria", "height": 177.0},
            {"country": "Belgium", "height": 176.6},
            {"country": "Serbia", "height": 176.5},
            {"country": "Switzerland", "height": 176.5},
            {"country": "United States", "height": 176.4},
            {"country": "Australia", "height": 176.3},
            {"country": "Poland", "height": 176.0},
            {"country": "Greece", "height": 175.7},
            {"country": "New Zealand", "height": 175.5},
            {"country": "United Kingdom", "height": 175.4},
            {"country": "Hungary", "height": 175.3},
            {"country": "Ukraine", "height": 175.0},
            {"country": "Ireland", "height": 175.0},
            {"country": "Russia", "height": 175.0},
            {"country": "Israel", "height": 175.0},
            {"country": "Lithuania", "height": 175.0},
            {"country": "Canada", "height": 174.3},
            {"country": "Lebanon", "height": 174.2},
            {"country": "Turkey", "height": 174.1},
            {"country": "France", "height": 174.1},
            {"country": "Uzbekistan", "height": 173.4},
            {"country": "Italy", "height": 173.2},
            {"country": "Senegal", "height": 173.0},
            {"country": "Jamaica", "height": 172.8},
            {"country": "Mali", "height": 172.5},
            {"country": "Spain", "height": 172.0},
            {"country": "Romania", "height": 172.0},
            {"country": "Azerbaijan", "height": 172.0},
            {"country": "Uruguay", "height": 171.8},
            {"country": "Argentina", "height": 171.3},
            {"country": "SouthKorea", "height": 171.0},
            {"country": "Syria", "height": 171.0},
            {"country": "Morocco", "height": 170.7},
            {"country": "Iran", "height": 170.6},
            {"country": "Portugal", "height": 170.5},
            {"country": "Ivory Coast", "height": 170.4},
            {"country": "Egypt", "height": 170.3},
            {"country": "Tunisia", "height": 170.3},
            {"country": "Algeria", "height": 170.2},
            {"country": "South Africa", "height": 170.0},
            {"country": "Cameroon", "height": 170.0},
            {"country": "Gambia", "height": 170.0},
            {"country": "Ghana", "height": 169.8},
            {"country": "Brazil", "height": 169.5},
            {"country": "Colombia", "height": 169.5},
            {"country": "Taiwan", "height": 169.3},
            {"country": "Chile", "height": 169.2},
            {"country": "Venezuela", "height": 169.0},
            {"country": "Paraguay", "height": 169.0},
            {"country": "Japan", "height": 168.6},
            {"country": "Hong Kong", "height": 168.5},
            {"country": "China", "height": 168.3},
            {"country": "Mexico", "height": 167.5},
            {"country": "Pakistan", "height": 167.0},
            {"country": "Singapore", "height": 166.6},
            {"country": "Thailand", "height": 166.4},
            {"country": "Mongolia", "height": 166.4},
            {"country": "Malaysia", "height": 166.0},
            {"country": "Sri Lanka", "height": 166.0},
            {"country": "Malawi", "height": 166.0},
            {"country": "Bahrain", "height": 165.6},
            {"country": "Iraq", "height": 165.4},
            {"country": "Nigeria", "height": 165.0},
            {"country": "Peru", "height": 164.3},
            {"country": "NorthKorea", "height": 163.8},
            {"country": "India", "height": 162.3},
            {"country": "Vietnam", "height": 162.1},
            {"country": "Philippines", "height": 162.0},
            {"country": "Indonesia", "height": 161.5},
            {"country": "Cambodia", "height": 160}
        ];
    }

    sortName() {
        return new Promise((resolve, reject) => {
            let countries = this.countries.sort((before, after) => {
                let countryBefore = before.country.toUpperCase(); // ignore upper and lowercase
                let countryAfter = after.country.toUpperCase(); // ignore upper and lowercase
                if (countryBefore < countryAfter) {
                    return -1;
                }
                if (countryBefore > countryAfter) {
                    return 1;
                }
                return 0;
            });
            resolve(countries);
        })
    };

    sortHeight() {
        return new Promise((resolve, reject) => {
            let countries = this.countries.sort((before, after) => {
                let countryBefore = before.height // ignore upper and lowercase
                let countryAfter = after.height; // ignore upper and lowercase
                if (countryBefore > countryAfter) {
                    return -1;
                }
                if (countryBefore < countryAfter) {
                    return 1;
                }
                return 0;
            });
            resolve(countries);
        })
    };

    searchCountry(heights, letters) {
        return new Promise((resolve, reject) => {
            let newCountries = this.countries.filter(country => {
                let letterStart = country.country.split("")[0];
                return heights.includes(country.height) && letters.includes(letterStart);
            });
            resolve(newCountries);
        });
    };

    totalHeight(countries) {
        let total = 0;
        countries.map(country => {
            total += country.height;
        });
        return total;
    }
}