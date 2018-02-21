class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.hasJob = true
    }
    
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    setFirstName(firstName) {
        this.firstName = firstName
    }

    setLastName(lastName) {
        this.lastName = lastName
    }
}