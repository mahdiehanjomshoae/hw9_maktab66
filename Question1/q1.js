const timeToConvert = input => {
    const [time, ap] = input.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
        hours = '00';
    };
    if (ap === 'p.m.') {
        hours = parseInt(hours, 10) + 12;
    };
    return [+hours,+minutes];
}
const timetoduration = input => {

    if(typeof input !== "string"){
        throw "please enter string";
    }
    const res = timeToConvert(input);
    let houre = res[0];
    let minute = res[1];
    if(houre>=0 && houre <= 7){
        houre = 7 - houre;
    }else if(7 < houre  && houre  <= 12){
        houre = 12 - houre;
    }else if(12 < houre  && houre  <= 19){
        houre = 19 - houre;
    }else if(19 < houre  && houre  <= 23){
        houre = houre - 12;
        houre = 19 - houre;
    }
    if(minute === 00){
        minute === 0;
    }else{
        minute = 60 - minute;
        houre--;
    }

    return [houre , minute];
}
console.log(timetoduration("2:00 p.m."));
console.log(timetoduration("5:50 a.m."));