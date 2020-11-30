export const formatMillisecondsToTime = (timeInMillis) => {
    let date = new Date(timeInMillis * 1000);

    let hours = date.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
};

export const getDayOfWeekFromMillis = (timeInMillis) => (new Date(timeInMillis * 1000)).getDay();

export const getDayOfMonthFromMillis = (timeInMillis) => {
    let date = new Date(timeInMillis * 1000);
    return `${date.getDate()}th of ${getMonth(date.getMonth())}`;
};

export const getHoursFromMillis = (timeInMillis) => `${new Date(timeInMillis * 1000).getHours()}:00`;

export const getLastItemInArray = (array) => {
    return array[array.length - 1];
};

const getMonth = (index) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
        'December'];
    return months[index];
};
