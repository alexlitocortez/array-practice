

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const entertainers = [
    'Graham, Aubrey', 'Lamar, Kendrick', 'Cole, Jermaine',
    'Fab, Mistah', 'Hendrixx, Future', 'Jackson, Michael',
    'Bryant, Kobe', 'Curry, Stephen', 'Green, Draymond'
];

// 1. Filter the list of inventors for those who were born in the 1500's

// * filters work by passing a function and that function loops over through
// every single item of that array
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)

console.table(fifteen);

// 2. Give array of the inventory first and last names
// * Will always return same amount of items given
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);

console.log(fullNames);

// 3. sort() lets you display from greatest to least
// returning years from birth & death (greatest to least)
const ordered = inventors.sort(function(a, b) {
    if(a.year > b.year) {
        return -1;
    } else {
        return 1;
    }
});

console.table(ordered);

// 4. Using reduce() method to find total years inventors lived
const totalYears = inventors.reduce(function(total, inventor) {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sorting inventors by years lived
const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);

// 6. Sorting entertainers alphabetically by last name
const alpha = entertainers.sort(function(lastOne, nextOne) {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.log(alpha);