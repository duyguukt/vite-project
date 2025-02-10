describe('form validation', () => {
    it('Shows error if email is inconnect', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Please enter a valid email address');

    })
})