describe('Navigation Test - About Us -> Why Us (Desktop View)', () => {
  beforeEach(() => {
    // ✅ Set desktop viewport size
    cy.viewport(1440, 900)

    // ✅ Visit the homepage
    cy.visit('https://www.shayansolutions.com/')

    // ✅ Wait for page to fully load (can be optimized with intercepts)
    cy.wait(4000)
  })

  it('Navigates to "Why Us?" section and validates content', () => {
    // ✅ Hover on "About Us" in navbar
    cy.contains('About Us').realHover()
    cy.wait(2000)

    // ✅ Click "Why Us?" from dropdown
    cy.contains('Why Us?').click({ force: true })

    // ✅ Validate section heading is visible
    cy.contains('14 YEARS EXPERIENCE IN SOFTWARE DEVELOPMENT').should('be.visible')

    // ✅ Scroll to first card section
    cy.contains('Expertise & Experience').scrollIntoView()

    // ✅ Check all three value proposition cards are visible
    cy.contains('Expertise & Experience').should('be.visible')
    cy.contains('Customized Solutions').should('be.visible')
    cy.contains('Quality Assurance').should('be.visible')

    // ✅ Scroll to and click "Schedule Free Call" CTA button
    cy.contains('Schedule Free Call').scrollIntoView().should('be.visible').click()

    // ✅ Verify form page or next section loaded properly
    cy.contains('Build remote Development teams in 48 hours').should('be.visible')
  })
})

describe('Navigation Test - About Us -> Our Leadership Team (Desktop View)', () => {
  beforeEach(() => {
    // ✅ Set desktop viewport size
    cy.viewport(1440, 900)

    // ✅ Visit the homepage
    cy.visit('https://www.shayansolutions.com/')

    // ✅ Wait for page to fully load (can be optimized with intercepts)
    cy.wait(4000)
  })

  it('Navigates to "Our Leadership Team" and validates team member card', () => {
    // ✅ Hover on "About Us" in navbar
    cy.contains('About Us').realHover()
    cy.wait(1000)

    // ✅ Click "Our Leadership Team"
    cy.contains('Our Leadership Team').click({ force: true })
    cy.wait(2000)

    // ✅ Check team section loaded
    cy.contains('Meet the expert team behind Shayan Solutions').should('be.visible')

    // ✅ Scroll to a specific team member card
    cy.contains('Iqra Chaudhary').scrollIntoView().should('be.visible')

    // ✅ Hover over the card to trigger flip effect
    cy.contains('Iqra Chaudhary').realHover()

    // ✅ Validate flip side content
    cy.contains('Iqra Chaudhary ensures software quality').should('be.visible')
  })
})
describe('Navigation Test - About Us -> Life at Shayan Solutions (Desktop View)', () => {
  beforeEach(() => {
    // ✅ Set desktop viewport size
    cy.viewport(1440, 900);
    // ✅ Visit the homepage
    cy.visit('https://www.shayansolutions.com/');
    // ✅ Wait for page to fully load
    cy.wait(4000);
  });

  it('Navigates to "Life at Shayan Solutions" and validates content', () => {
    // ✅ Hover on "About Us" in navbar
    cy.contains('About Us').realHover();
    cy.wait(1000);
    
    // ✅ Click "Life at Shayan Solutions"
    cy.contains('Life At Shayan Solutions').click({ force: true });
    cy.wait(2000);
    
    // ✅ Check that the section loaded
    cy.contains('Empowering employees through creativity, collaboration, and endless learning opportunities').should('be.visible');
    
    // ✅ Validate additional content or sections as needed
    cy.contains(/Where Creativity Meets Collaboration for a Brighter Tomorrow/i)
    .scrollIntoView()
    .should('be.visible')
    cy.contains('Our Space').should('be.visible');
    cy.contains('Our Activities').should('be.visible');
    
  });
});
