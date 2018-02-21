class Person {

    static species() {
        return 'Homo sapiens'
    }

    static speciesSentence() {
        return `Humans are considered ${this.species()}`
    }

    constructor(firstName, lastName) {
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

    setLastName(lastName){
        this.lastName = lastName
    }
}

class Worker extends Person {
    constructor(firstName, lastName, job){
        super(firstName, lastName)
        this.job = job
        this.hasJob =  false
    }

    setJob(job){
        this.job = job
    }
}