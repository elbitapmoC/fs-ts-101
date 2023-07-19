// number
var id = 999990;
// string
var intro = "Hello World!";
// boolean
var spicy = true;
// any
var x = "Ok cool";
x = true;
// array
var fruits = ["🍒", "🍑", "🍇", "🍍", "🫐"];
var person = [
    "Seven",
    {
        asleep: false,
        hungry: false,
        age: 22,
        name: "Maybaleene",
    },
];
// tuples
var business;
business = [
    ["Aug", 20, 2020],
    ["Jul", 18, 2023],
];
// Union
var availability;
availability = false;
availability = 12;
// Enum - comes in two flavors, String or numeric
// Used to define a set of named contstants
// initial value is 0...
// b/c we set
var WorkDays;
(function (WorkDays) {
    WorkDays["Monday"] = "Mon";
    WorkDays["Tuesday"] = "Tue";
    WorkDays["Wednesday"] = "Wed";
    WorkDays["Thursday"] = "Thur";
})(WorkDays || (WorkDays = {}));
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Friday"] = 6] = "Friday";
    WeekDays[WeekDays["Saturday"] = 7] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 1] = "Sunday";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.Friday);
console.log(WorkDays.Monday);
