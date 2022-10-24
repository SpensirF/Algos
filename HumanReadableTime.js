


function humanReadable (seconds) {
    //given seconds
    //want output in 2 digit chunks in format
    // 00:00:00, where it's hours:minutes:seconds
    let time = []; //will hold [hours,minutes,seconds] [ 0,9,9]
    const hour = 60*60;//sixty minutes that are sixty seconds each
    const minute = 60; //sixty seconds in a minute
    time.push(Math.floor(seconds/hour));//floor how many hours are in seconds;
    time.push(Math.floor((seconds%hour)/minute));//floor the remainder of hours for minutes
    time.push(seconds%minute);//remainder in seconds
    
    //format to be double digit always
    let strTime = time.map(n=>String(n).padStart(2,'0')); //['00','09','09']
    
    return strTime.join(':');
}



(humanReadable(59), '00:00:59', 'humanReadable(59)');
// (humanReadable(60), '00:01:00', 'humanReadable(60)');
// (humanReadable(90), '00:01:30', 'humanReadable(90)');
// (humanReadable(3599), '00:59:59', 'humanReadable(3599)');
// (humanReadable(3600), '01:00:00', 'humanReadable(3600)');
// (humanReadable(45296), '12:34:56', 'humanReadable(45296)');
// (humanReadable(86400), '24:00:00', 'humanReadable(86400)');
// (humanReadable(359999), '99:59:59', 'humanReadable(359999)');