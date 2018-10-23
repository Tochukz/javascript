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

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);
const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});
// const civilianHours = clockTime => ({
//     ...clockTime,
//     hours: (clockTime.hours > 12)? clockTime.hours - 12 : clockTime.hours
// });
// const appendAMPM = clockTime => ({
//     ...clockTime,
//     ampm: (clockTime.hours >= 12)? 'PM' : 'AM'
// });
const civilianHours = clockTime => Object.assign({}, clockTime, {hours: (clockTime.hours > 12)? clockTime.hours - 12 : clockTime.hours});
const appendAMPM =  clockTime => Object.assign({}, clockTime, {ampm: (clockTime.hours >= 12)? 'PM' : 'AM'});

const display = target => time =>target(time);
const formatClock = format => time => format.replace("hh", time.hours)
                                            .replace("mm", time.minutes)
                                            .replace("ss", time.seconds)
                                            .replace("tt", time.ampm);
// const prependZero = key => clockTime => ({
//     ...clockTime,
//     [key]: (clockTime[key] < 10)? "0" + clockTime[key] : clockTime[key]
// })
const prependZero = key => clockTime =>  Object.assign({}, clockTime, {[key]: (clockTime[key] < 10)? "0" + clockTime[key] : clockTime[key]});

const convertToCivilianTime = clockTime => pipe(appendAMPM, civilianHours)(clockTime);
const doubleDigits = civilianTime => pipe(
                                                prependZero("hours"),
                                                prependZero("minutes"), 
                                                prependZero("seconds")
                                            )(civilianTime);
const getClockTime = () => setInterval( pipe( 
                                                clear, 
                                                getCurrentTime, 
                                                serializeClockTime, 
                                                convertToCivilianTime, 
                                                doubleDigits, 
                                                formatClock("hh:mm:ss tt"), 
                                                display(log)
                                            ), oneSecond()
                                        );
export default getClockTime;