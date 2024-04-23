describe('My Website', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Index.html'); // Replace 'path_to_your_html_file' with the actual path
  });

  it('Generates random numbers', () => {
    cy.get('#randomNumber').should('contain', '0'); // Initial check

    cy.wait(4000); // Wait for the random number to change (adjust as needed)

    cy.get('#randomNumber').should('not.contain', '0'); // Check if the random number has changed
  });

  it('Toggles row buttons display', () => {
    cy.get('#SBButton').click(); // Click on SB button
    cy.get('#SBButtons').should('be.visible'); // Check if the SB row buttons are displayed

    cy.get('#BTNButton').click(); // Click on BTN button
    cy.get('#SBButtons').should('not.be.visible'); // Check if the SB row buttons are hidden
    cy.get('#BTNButtons').should('be.visible'); // Check if the BTN row buttons are displayed
  });

  it('Displays image on button click', () => {
    cy.get('#SBButton').click(); // Click on SB button
    cy.get('#SBButtons').should('be.visible'); // Check if the SB row buttons are displayed
    cy.get('#100BBbtn').click(); // Click on 100bb button
    cy.get('#image').should('have.attr', 'src').should('include', 'SB.png'); // Check if the image source is set correctly
    cy.get('#40BBbtn').click(); // Click on 40bb button
    cy.get('#image').should('have.attr', 'src').should('include', 'SB.png'); // Check if the image source is set correctly
  });
});