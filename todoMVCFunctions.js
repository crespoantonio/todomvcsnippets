//Base URL = http://todomvc.com/examples/vanillajs/#/
// Run this first of all.
//Use this as Snippets on Google Chrome.
//You can create a Snippets going to the DevTools > Sources >> Snippets.
//Contact: lic.crespoantonio@gmail.com

var autoTodo = new function() {

    this.clickItem = function(item) {
        item.click();
    }

    //Select All
    this.toggleAll = function() {
        document.querySelector("#toggle-all").click();
    }

    //Select only one item
    this.selectItemX = function(x) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle').click()
    }

    //Delete an item
    this.deleteItemX = function(x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click()
    }

    //Clear all completed
    this.clearCompleted = function() {
        document.querySelector("button.clear-completed").click()
    }

    //Filter all completed.
    //Here I use Event Listeners that the page have.
    this.filterCompeted = function() {
        location.hash = "/completed"
    }

    //Filter all active.
    //Here I use Event Listeners that the page have.
    this.filterActive = function() {
        location.hash = "/active"
    }

    //filter All.
    //Here I use Event Listeners that the page have.
    this.filterAll = function() {
        location.hash = "/"
    }

    //Create a new todo.
    this.createTodo = function(name) {
        document.querySelector("input.new-todo").value = name;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }

    //Amend a todo.
    this.amendTodo = function(x, amend) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") > div > label").dispatchEvent(new Event('dblclick',{
            'bubbles': true
        }));
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = amend;
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));
    }

}
