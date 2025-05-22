describe('Shayan Solutions Homepage', () => {
    beforeEach(() => {
      cy.visit('https://shayansolutions.com');
    });
  
    it('should display correct headline and CTA buttons', () => {
      // Headline text check
      cy.contains('Empowering IT agencies & startups').should('be.visible');
  
      // Sub-heading check
      cy.contains('Achieve 30% Savings on Staffing').should('be.visible');
  
      // Check both CTA buttons are visible
      cy.contains('Schedule Free Call').should('be.visible');
      cy.contains('See Our Work').should('be.visible');
    });
  
    it('should click Schedule Free Call and navigate back', () => {
      cy.contains('Schedule Free Call').click();
  
      // Wait for external Calendly to load, then go back
      cy.wait(3000);
      cy.go('back');
  
      // Confirm back on homepage
      cy.url().should('match', /shayansolutions\.com/);

      cy.contains('Empowering IT agencies & startups').should('be.visible');
    });
  
    it('should click See Our Work and navigate back', () => {
      cy.contains('See Our Work').click();
  
      // Wait and then go back
      cy.wait(3000);
      cy.go('back');
  
      // Confirm back on homepage
      cy.url().should('match', /shayansolutions\.com/);
      cy.contains('Empowering IT agencies & startups').should('be.visible');
    });
  
    it('should auto-scroll client logos into view', () => {
      cy.scrollTo('bottom');
      cy.wait(3000);
      cy.get('img').should('be.visible');
    });
  });
  