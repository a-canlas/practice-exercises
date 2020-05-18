function getDayName(dateString) {
    let dayName;
    // Write your code here
    if(!dateString.includes('/')) return;
    let dateArr = dateString.split('/').map(index => parseInt(index));
    if(dateArr.length !== 3){
        return;
    }
    let inputtedDate = new Date(dateArr[2], dateArr[0] - 1, dateArr[1]);
    let testDay = inputtedDate.getDay();
    switch(testDay){
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = '';
            break;
    }
    return dayName;
}
