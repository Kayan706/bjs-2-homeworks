class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null
    }
    addClock(time, callback){
        if ((time == undefined) == true || (callback == undefined) == true){
            throw new Error('Отсутствуют обязательные аргументы')
        } else if (this.alarmCollection.some((timeTest) => timeTest.time == time) == true){
            console.warn('Уже присутствует звонок на это же время')
        } 
        this.alarmCollection.push({callback, time, canCall: true})
    }

    removeClock (time){
        this.alarmCollection = this.alarmCollection.filter(timeDelete => timeDelete.time != time);
    }

    getCurrentFormattedTime(){
        let t = new Date().toLocaleTimeString().slice(0,-3);
        return t

    }
    start(){
        if( (this.intervalId == null) == false){
            return
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((timeTest) => {
                if(timeTest.time == this.getCurrentFormattedTime() && timeTest.canCall == true){
                    timeTest.canCall = false
                    timeTest.callback();
                }
            })
        }, 1000)
        
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId =  null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((x) => {
            x.canCall = true
        });
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
