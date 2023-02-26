import {PracticePage} from "../../pageLocators/practice_page"
const practicePage = new PracticePage()


describe('Easygenerator automation assignemnt - of rahul shetty practice website', () => {
    beforeEach(() => {
        cy.visit( Cypress.env('base_url') + '/AutomationPractice')
    })

    it('Go to this website: https://rahulshettyacademy.com/AutomationPractice/#', () => {
        cy.contains('Practice Page')
      })

    it('Cover its essential elements (iFrame)', () => {
        practicePage.getIframe().find(practicePage.practicePage_menuClass).contains('Blog').click()
    })

    it('Cover its essential elements (mouse hover)', () => {
        cy.get(practicePage.practicePage_mouseHoverClass).invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })

    it('Cover its essential elements (alert window)', () => {
        practicePage.windowAlert()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })

    it('Cover its essential elements (confirm alert window)', () => {
        practicePage.windowConfirmAlert()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Handling new Browser Tab', function() {
            practicePage.newBrowserTab()
            cy.url()
              .should('eq', 'https://www.rahulshettyacademy.com/')
    })

    it('scrollable table view', function() {
        practicePage.scrollableTable()           
    })

    it('Handling New browser Window', function () {
        const newUrl = "http://www.qaclickacademy.com/";
        cy.window().then(win => {
          cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#openwindow').click();
        cy.get('@windowOpen').should('be.calledWith', newUrl);
      })

    it('Mock the request using fixture file', () => {
        cy.visit(Cypress.env('base_url'))
        cy.intercept('GET', '/api/course', { fixture: 'courses.json' }).as('getAllCourses')
    })
  })