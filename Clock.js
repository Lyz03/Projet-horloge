let Clock = function (secondsDiv, minutesDiv, hoursDiv) {

    this.showTime = function () {
        console.log('test')
        setInterval(function () {
            this.date = new Date;
            this.sec = this.date.getSeconds();
            this.secDeg = (this.sec * 6) + 90;
            this.minDeg = (this.sec * 0.1) + 90;
            this.hDeg = (this.sec * 0.0083333) +90;
            secondsDiv.style.transform = " translate(50px, 250px) rotate("+ this.secDeg.toString() +"deg)";
            minutesDiv.style.transform = " translate(90px, 250px) rotate("+ this.minDeg.toString() +"deg)";
            hoursDiv.style.transform = " translate(120px, 250px) rotate("+ this.hDeg.toString() +"deg)";
        }, 1000)
    }

}



