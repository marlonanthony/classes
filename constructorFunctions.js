function Person (firstName, lastName) {
    const secret = 'muahahahha Im a diabolical secret!'

    this.firstName = firstName
    this.lastName = lastName
    this.hasJob = true

    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`.toUpperCase()
    }

    this.setFirstName = function(firstName) {
        this.firstName = firstName
    }

    this.setLastName = function(lastName) {
        this.lastName = lastName
    }

    this.getSecret = function() {
        return secret
    }
}