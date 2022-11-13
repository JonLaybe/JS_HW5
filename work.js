function sayError() {
    alert('Some error occurred!');
}
function showError(x) {
    alert(`Error ${x}`);
}
function createHeaders(n) {
    for (let i = 0; i < n; i++) {
        document.write(`<h2>Header${i + 1}</h2>`);
    }
}
function checkPassword(x) {
    if (x === 'Step' || x === 'Web' || x === 'JavaScript')
        return true;
    return false;
}
function sign(x) {
    if (x === 0)
        return 0;
    else if (x > 0)
        return 1;
    else if (x < 0)
        return -1;
}
function DayWeek(day_status) {
    switch (day_status) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        default:
            return null;
    }
}
sayError();
showError('Out of memory');
createHeaders(5);
alert(checkPassword('Step'));
alert(sign(50));
alert(DayWeek(6))