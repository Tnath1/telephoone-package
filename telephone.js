const readline = require('readline');

// Step 1: Create Observer Class
class Observer {
    update(number) {
        // To be implemented by concrete observer classes
    }
}

// Step 2: Create Concrete Observer Classes
class PrintPhoneNumberObserver extends Observer {
    update(number) {
        console.log("Dialing", number);
    }
}

class PrintCustomMessageObserver extends Observer {
    update(number) {
        console.log("Now Dialing", number);
    }
}

// Step 3: Create Telephone Class
class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.notifyObservers(number);
        } else {
            console.log("Error: Phone number not found.");
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(number) {
        this.observers.forEach(observer => {
            observer.update(number);
        });
    }
}

// Step 4: Instantiate Objects
const telephone = new Telephone();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Step 5: Add Observers to Telephone
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new PrintCustomMessageObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Step 6: Create a function to handle user input
function handleUserInput() {
    rl.question("Enter a phone number to add (or 'q' to quit): ", function(number) {
        if (number.toLowerCase() === 'q') {
            rl.close();
            console.log("Goodbye!");
            return;
        }
        telephone.addPhoneNumber(number);
        console.log("Phone number added:", number);
        handleUserInput();
    });
}

// Step 7: Start the application
console.log("Welcome to the telephone app!");
handleUserInput();

// Step 8: Test the Application (Input phone numbers in the terminal)
