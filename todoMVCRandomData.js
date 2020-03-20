// Run this second.

var rando = new function(){

    //This help me to create a random number.
    function getRandomInt(x){
        return Math.floor(Math.random()*x)
    }

    //Here I make that the random number don't be higher that the last todo.
    function getRandomItemIndex(){
        max = document.querySelectorAll("ul.todo-list li").length;
        if (max === 0){
            console.log("No Items");
            return 0;
        }
        x = getRandomInt(max)+1;
        return x
    }

    this.toggleAll = function(){
        console.log("toggle all");
        autoTodo.toggleAll();
    }    

    this.selectRandomItem = function(){
        x = getRandomItemIndex();
        if(x>0){
            console.log("Select item "+x);
            autoTodo.selectItemX(x);
        }
    }

    this.deleteRandomItem = function(){
        x = getRandomItemIndex();
        if(x>0){
            console.log("delete item "+x);
            autoTodo.deleteItemX(x)
            autoTodo.createTodo("False");
        }
    }

    this.clearCompleted = function(){
        console.log("clear completed");
        autoTodo.clearCompleted()
        autoTodo.createTodo("False");
    }

    this.filterCompleted = function(){
        console.log("filter completed");
        autoTodo.clearCompleted();
    }

    this.filterActive  =function(){
        console.log("filter active");
        autoTodo.filterActive();
    }

    this.filterAll = function(){
        console.log("filter all");
        autoTodo.filterAll();
    }
    
    this.createRandomTodo = function(){
        console.log("create a todo");
        autoTodo.createTodo("random todo " + Date.now());
    }

    this.amendRandomTodo = function(){
        x = getRandomItemIndex();
        if(x>0){
            console.log("amend todo "+x);
            autoTodo.amendTodo(x, "amenden random todo "+ Date.now());
        }
    }
}