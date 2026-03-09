// Basic SDK for Element Operations

class ElementSDK {
    constructor() {
        this.elements = {};
    }

    addElement(name, element) {
        this.elements[name] = element;
    }

    getElement(name) {
        return this.elements[name];
    }

    removeElement(name) {
        delete this.elements[name];
    }

    listElements() {
        return Object.keys(this.elements);
    }
}

// Example usage:
// const sdk = new ElementSDK();
// sdk.addElement('button', '<button>Click me</button>');
// console.log(sdk.listElements());

export default ElementSDK;