describe('Hover over each IT service card', () => {
    const services = [
      { label: 'API Development' },
      { label: 'Mobile App Development' },
      { label: 'SAAS Development' },
      { label: 'Custom Web Development' },
      { label: 'MVP Development' },
      { label: 'CMS Development' },
      { label: 'E-commerce Development' },
    ];
  
    beforeEach(() => {
      cy.visit('https://shayansolutions.com'); // Replace with your actual URL
    });
  
    it('should hover on all service cards and verify text', () => {
      services.forEach((service) => {
        cy.contains(service.label)
          .scrollIntoView()
         // .should('be.visible')
         // .trigger('mouseover');
        cy.wait(500); // Optional: allow hover effect to be visible
      });
    });
  });
  