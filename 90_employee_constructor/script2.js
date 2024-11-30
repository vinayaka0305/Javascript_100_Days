function StopWatch(){
    let starTime;
    this.duration = 0;
    let clockRunning = false;

    this.start = function(){
        if(clockRunning){
            return `stop watch is already running`;
        }
        starTime = new Date();
        clockRunning = true;
        return this.duration;
    }

    this.stop = function(){
        if(!clockRunning){
            return `stop watch is not started`
        }
        const currTime = new Date();
        const timeDiff = currTime - starTime;
        this.duration += timeDiff;
        return this.duration;
    }

    this.reset = function(){
        clockRunning = false;
        starTime = undefined;
        this.duration = 0;
        return this.duration;
    }
}


const watch1 = new StopWatch();
watch1.start();

setTimeout(()=>{
    watch1.stop();
    console.log(watch1.duration);
},1000);

const watch2 = new StopWatch();
watch2.start();
console.log(watch2.start());

watch2.stop();
console.log(watch2.stop());