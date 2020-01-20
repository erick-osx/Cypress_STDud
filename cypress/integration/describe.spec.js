/// <reference types = "cypress" />

it.only('An external test...', () => {

})

describe('Should group test...', () => {
    describe('Should group more specific tests...', () => {
        it('Specific test...', () => {

        })
    })

    it.only('An internal test...', () => {

    })
})