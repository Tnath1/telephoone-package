// observer class
class Observer {
  notify() {}
}

class PrintPhoneNumberObserver extends Observer {
  notify(phoneNumber) {
    console.log("Phone number: " + phoneNumber);
  }
}

class PrintDialingMessageObserver extends Observer {
  notify(phoneNumber) {
    console.log("Now Dialing " + phoneNumber);
  }
}

class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  // Method to add a phone number
  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  // Method to remove a phone number
  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  // Method to dial a phone number
  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      // Notify all observers
      this.notifyObservers(phoneNumber);
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
  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => {
      observer.notify(phoneNumber);
    });
  }
}

const telephone = new Telephone();

// Creating observers
const observer1 = new PrintPhoneNumberObserver();
const observer2 = new PrintDialingMessageObserver();

// Adding observers to the telephone
telephone.addObserver(observer1);
telephone.addObserver(observer2);

//implementation
telephone.addPhoneNumber("2347023232");
telephone.addPhoneNumber("2348143837");
telephone.addPhoneNumber("2347097363");

telephone.dialPhoneNumber("2347023232");
