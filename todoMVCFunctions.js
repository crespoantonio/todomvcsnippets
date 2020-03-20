//Base URL = http://todomvc.com/examples/vanillajs/#/
// Run this first of all.
//Use this as Snippets on Google Chrome.
//You can create a Snippets going to the DevTools > Sources >> Snippets.
//Contact: lic.crespoantonio@gmail.com

var autoTodo = new function() {

    this.clickItem = function(item) {
        item.click();
    }
    this.toggleAll = function() {
        document.querySelector("#toggle-all").click();
    }

    this.selectItemX = function(x) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle').click()
    }

    this.deleteItemX = function(x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click()
    }

    this.clearCompleted = function() {
        document.querySelector("button.clear-completed").click()
    }

    this.filterCompeted = function() {
        location.hash = "/completed"
    }

    this.filterActive = function() {
        location.hash = "/active"
    }

    this.filterAll = function() {
        location.hash = "/"
    }

    this.createTodo = function(name) {
        document.querySelector("input.new-todo").value = name;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }

    this.amendTodo = function(x, amend) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") > div > label").dispatchEvent(new Event('dblclick',{
            'bubbles': true
        }));
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value = amend;
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur'));
    }

}
