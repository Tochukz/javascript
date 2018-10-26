/*Executes a series of functions, passing the return value as argument to the next fro left to right*/
const pipe = (...funcs) => value => {
    return  funcs.reduce((currentVal, currentFunc) => {
                return currentFunc(currentVal);
            }, value);
};
/*Just like pipe but in the opposite direction - right to left */
const compose = (...funcs) => value => {
    return  funcs.reduceRight((currentVal, currentFunc) => {
                return currentFunc(currentVal);
            }, value);
};


const getCurrentTime = () => new Date();
const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});
const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12)? clockTime.hours - 12 : clockTime.hours
});
const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12)? 'PM' : 'AM'
});

const display = target => time =>target(time);
const formatClock = time => ({hours: time.hours, minutes: time.minutes, seconds: time.seconds, timeOfDay:time.ampm});
const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10)? "0" + clockTime[key] : clockTime[key]
})

const convertToCivilianTime = clockTime => pipe(appendAMPM, civilianHours)(clockTime);
const doubleDigits = civilianTime => pipe(
                                            prependZero("hours"),
                                            prependZero("minutes"), 
                                            prependZero("seconds")
                                        )(civilianTime);
const getClockTime = () =>  pipe( 
    getCurrentTime, 
    serializeClockTime, 
    convertToCivilianTime, 
    doubleDigits, 
    formatClock, 
)
export default getClockTime;