let Clock = function (secondsDiv, minutesDiv, hoursDiv) {

    this.showTime = function () {
        setInterval(function (){
            this.date = new Date;

            this.sec = this.date.getSeconds();
            this.min = this.date.getMinutes();
            this.h = this.date.getHours();

            if (this.h > 12) {
                this.h -= 12;
            }

            this.secDeg = (this.sec * 6) + 90;
            this.minDeg = (this.min * 6) + 90;
            this.hDeg = (this.h * 30) +90;

            secondsDiv.style.transform = " translate(70px, 250px) rotate("+ this.secDeg.toString() +"deg)";
            minutesDiv.style.transform = " translate(90px, 250px) rotate("+ this.minDeg.toString() +"deg)";
            hoursDiv.style.transform = " translate(120px, 250px) rotate("+ this.hDeg.toString() +"deg)";
        }, 1000)
    }

}



