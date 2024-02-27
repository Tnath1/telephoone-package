// Observer class
class Observer {
    update(number) {
        // To be implemented by concrete observer classes
    }
}

// Concrete observer class to print the phone number
class PrintPhoneNumberObserver extends Observer {
    update(number) {
        console.log("Dialing", number);
    }
}

// Concrete observer class to print a custom message
class PrintCustomMessageObserver extends Observer {
    update(number) {
        console.log("Now Dialing", number);
    }
}

// Telephone class
class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }

    // Method to add a phone number
    addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    // Method to remove a phone number
    removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    // Method to dial a phone number
    dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.notifyObservers(number);
        } else {
            console.log("Error: Phone number not found.");
        }
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Method to notify all observers
    notifyObservers(number) {
        this.observers.forEach(observer => {
            observer.update(number);
        });
    }
}

// Usage
const telephone = new Telephone();

// Creating observers
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new PrintCustomMessageObserver();

// Adding observers to the telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

// Adding a phone number
telephone.addPhoneNumber("2347023232");

// Dialing the phone number
telephone.dialPhoneNumber("2347023232");
