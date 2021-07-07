"use strict";
class ProgressSteps {
    constructor() {
        this.currentActive = 1;
        this.progressElement = document.getElementById('progress');
        this.prevElement = document.getElementById('prev');
        this.nextElement = document.getElementById('next');
        this.circleElements = document.querySelectorAll('.circle');
        this.configure();
    }
    configure() {
        this.nextElement.addEventListener('click', this.nextBtnHandler.bind(this));
        this.prevElement.addEventListener('click', this.prevBtnHandler.bind(this));
    }
    nextBtnHandler() {
        this.currentActive++;
        if (this.currentActive > this.circleElements.length) {
            this.currentActive = this.circleElements.length;
        }
        this.update();
    }
    prevBtnHandler() {
        this.currentActive--;
        if (this.currentActive < 1) {
            this.currentActive = 1;
        }
        this.update();
    }
    update() {
        this.circleElements.forEach((circle, idx) => {
            idx < this.currentActive ? circle.classList.add('active') : circle.classList.remove('active');
        });
        const actives = document.querySelectorAll('.active');
        this.progressElement.style.width = (actives.length - 1) / (this.circleElements.length - 1) * 100 + '%';
        if (this.currentActive === 1) {
            this.prevElement.disabled = true;
        }
        else if (this.currentActive === this.circleElements.length) {
            this.nextElement.disabled = true;
        }
        else {
            this.prevElement.disabled = false;
            this.nextElement.disabled = false;
        }
    }
}
const prjProgressSteps = new ProgressSteps();
//# sourceMappingURL=app.js.map