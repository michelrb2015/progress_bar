class ProgressSteps {
    progressElement: HTMLDivElement;
    prevElement: HTMLButtonElement;
    nextElement: HTMLButtonElement;
    circleElements: NodeListOf<HTMLDivElement>;
  
    currentActive = 1;

    constructor() {
      this.progressElement = document.getElementById('progress')! as HTMLDivElement;
      this.prevElement = document.getElementById('prev')! as HTMLButtonElement;
      this.nextElement = document.getElementById('next')! as HTMLButtonElement;
      this.circleElements = document.querySelectorAll('.circle')! as NodeListOf<HTMLDivElement>;
      this.configure();
    }

    configure(){
      this.nextElement.addEventListener('click', this.nextBtnHandler.bind(this));
      this.prevElement.addEventListener('click', this.prevBtnHandler.bind(this));
    }

    nextBtnHandler(){
      this.currentActive++;

      if(this.currentActive > this.circleElements.length){
        this.currentActive = this.circleElements.length;
      }
      
      this.update();
    }
    
    prevBtnHandler(){
      this.currentActive--;

      if(this.currentActive < 1){
        this.currentActive = 1;
      }
      
      this.update()
    }

    update(){
      this.circleElements.forEach((circle, idx) => {
        idx < this.currentActive ? circle.classList.add('active') : circle.classList.remove('active')
      });

      const actives = document.querySelectorAll('.active')! as NodeListOf<HTMLDivElement>;
      this.progressElement.style.width = (actives.length -1)/(this.circleElements.length-1)*100+'%';

      if(this.currentActive === 1){
        this.prevElement.disabled = true;
      }
      else if(this.currentActive === this.circleElements.length){
        this.nextElement.disabled = true;
      }
      else{
        this.prevElement.disabled = false;
        this.nextElement.disabled = false;
      }
    }


  }
  
  const prjProgressSteps = new ProgressSteps();