const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }
    let sum = 0;
    //iterate through all the integers between the begin and end values
    //by incrementing by the step value
    for (let i = begin; i <= end; i += step) {
        sum += i;
    }
    return sum;
};