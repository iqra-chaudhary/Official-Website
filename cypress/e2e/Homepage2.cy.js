describe('Shayan Solutions Homepage', () => {
    beforeEach(() => {
      cy.visit('https://shayansolutions.com');
    });
  
    it('should display correct headline and CTA buttons', () => {
      cy.contains('Empowering IT agencies & startups').should('be.visible');
      cy.contains('Achieve 30% Savings on Staffing').should('be.visible');
      cy.contains('Schedule Free Call').should('be.visible');
      cy.contains('See Our Work').should('be.visible');
    });
  
    it('should click Schedule Free Call and navigate back', () => {
      cy.contains('Schedule Free Call').click();
      cy.wait(3000);
      cy.go('back');
      cy.url().should('match', /shayansolutions\.com/);
      cy.contains('Empowering IT agencies & startups').should('be.visible');
    });
  
    it('should click See Our Work and navigate back', () => {
      cy.contains('See Our Work').click();
      cy.wait(3000);
      cy.go('back');
      cy.url().should('match', /shayansolutions\.com/);
      cy.contains('Empowering IT agencies & startups').should('be.visible');
    });
  
    it('should auto-scroll client logos into view', () => {
      cy.scrollTo('bottom');
      cy.wait(3000);
      cy.get('img').should('be.visible'); // Adjust if logos have specific class
    });

    it('should display main heading and description in services section', () => {
        cy.contains('Streamline Your Business Operations with Our Innovative IT Services')
          .should('be.visible');
    
        cy.contains('We provide comprehensive offshoring services')
          .should('be.visible')
          .and('include.text', 'Saas Development')
          .and('include.text', 'ERP')
          .and('include.text', 'AI solutions');
  
          it('should display correct paragraph with all keywords', () => {
            cy.contains('We provide comprehensive offshoring services')
              .should('be.visible')
              .and('include.text', 'Saas Development')
              .and('include.text', 'ERP')
              .and('include.text', 'AI solutions');
          });
        
          it('should hover over each unique service card one by one', () => {
            cy.get('[data-id="563f6a2"] .elementor-column').each(($el) => {
                cy.wrap($el).trigger('mouseover', { force: true });
                cy.wait(300); // optional delay for visual effect
      });
    });
  });
});