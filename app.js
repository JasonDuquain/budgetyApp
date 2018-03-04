

// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        
        allItems: {
            exp: [],
            inc: []
        },
        
        totals: {
            exp: 0,
            inc: 0
        }    
        
    }
    
})();



// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return {
        getInput() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value, 
                value: document.querySelector(DOMstrings.inputValue).value        
            }
            
        },
        
        getDOMstrings() {
            return DOMstrings;
        }
    };
    
})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)
        document.addEventListener('keypress', (e) => {
            if (e.key.toLowerCase().includes('enter')) {
                ctrlAddItem();
            }
        });    
    }
    
    
    
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();


        // 2. Add the item to the budget controller


        // 3. Add the item to the UI


        // 4. Calculate the budget


        // 5. Display the budget 
        
    };
    
    return {
        init() {
            console.log('app started');
            setupEventListeners();
        }        
    };
    
    
    
})(budgetController, UIController);


controller.init();
















