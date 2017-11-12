import './app.css';
import Country from './Country';
import Day from './Day'

$('#bt1').append(
    `<div class="birthDay">
        <label>Birthday</label>
        <input type="date" placeholder="Birthday" id="birthday">
        <input type="button" value="Submit" id="getAge">
    </div>
    <div >Age: <span id="age"></span></div>`
);


// Bai tap 1
$(`#getAge`).click(() => {
    let current = new Date();
    let birthday = new Date($(`#birthday`).val());
    let age = Math.abs(current.getYear() - birthday.getYear());
    if (current.getMonth() <= birthday.getMonth() && current.getDate() >= birthday.getDate()) {
        age = age - 1;
    }
    $(`#age`).text(age);
});

/*
 * Bai tap 2*/


$(`#bt2`).append(
    `<div>
        <input type="button" id="sortName" value="Sort Countries name">
        <input type="button" id="sortHeight" value="Sort Countries height">
        <input type="button" id="search" value="Country with height (160,170) name start with B or C">
        <input type="button" id="total" value="Total height 2c">
        <div  class='scroll' id="result" style="width: 100%; height: 300px; overflow:auto; border: 2px">
        </div>
    </div>`
);

let country = new Country();
const heights = [160, 170];
const letter = ['B', 'C'];
$(`#sortName`).click(() => {
    $(`#result`).text('');
    country.sortName().then(countries => {
        countries.map(displayCountry => {
            $(`#result`).append(`<div>${JSON.stringify(displayCountry)}</div>`);
        })
    });
});

$(`#sortHeight`).click(() => {
    $(`#result`).text('');
    country.sortHeight().then(countries => {
        countries.map(displayCountry => {
            $(`#result`).append(`<div>${JSON.stringify(displayCountry)}</div>`);
        })
    });
});

$(`#search`).click(() => {
    $(`#result`).text('');
    country.searchCountry(heights, letter).then(countries => {
        countries.map(displayCountry => {
            $(`#result`).append(`<div>${JSON.stringify(displayCountry)}</div>`);
        })
    });
});

$(`#total`).click(() => {
    country.searchCountry(heights, letter).then(countries => {
        $(`#result`).append(`<div>Total Height : ${country.totalHeight(countries)}</div>`);
    });
});


/*
 * Bai tap 3*/

$('#bt3').append(`<div>
        <label>Input</label>
        <input type="text" placeholder="Days" id="days">
        <input type="button" value="Transfer" id="getEnglishDays">
        <input type="button" value="Get number" id="getNumber">
        <span><b>Result:</b> <span id="dayResult"></span></span>
    <div>
    <i>Template: thu 2, thu 5, thu 4, thu 3, thu 6, thu 7</i></div>`)

const day = new Day();
$(`#getNumber`).click(() => {
    let daysString = $(`#days`).val();
    let daysNumber = day.getNumber(daysString);
    $(`#dayResult`).text(daysNumber);
});

$(`#getEnglishDays`).click(() => {
    let daysString = $(`#days`).val();
    $(`#dayResult`).text(day.getEnglishDay(daysString));
});



