export const formatMillisecondsToTime = (timeInMillis) => {
    let date = new Date(timeInMillis * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
};
