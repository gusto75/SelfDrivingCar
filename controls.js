class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "a":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "d":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "w":
                    this.forward=true;
                    break;
                case "ArrowDown" || "s":
                    this.reverse=true;
                    break;
                case "s":
                    this.reverse=true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            console.log(event.key);
            switch(event.key){
                case "ArrowLeft": 
                    this.left=false;
                    break;
                case "a":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "d":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "w":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
                case "s":
                    this.reverse=false;
                    break;
            }
        }
    }
}