export class PracticePage {

    practicePage_openNewTab  = '#opentab'
    practicePage_openWindow = '#openwindow'
    practicePage_iFrameId = '#courses-iframe'
    practicePage_menuClass = '.main-menu'
    // practicePage_mouseHoverId = '#mousehover'
    practicePage_mouseHoverClass = '.mouse-hover-content'
    practicePage_alertBtnId= '#alertbtn'
    practicePage_confirmBtnId = '#confirmbtn'
    practicePage_tableBody = 'body > div:nth-child(5)'
    practicePage_tableClass = '.tableFixHead'

    openBrowserWindow(){
        cy.get(this.practicePage_openWindow).click()
    }
    openBrowserNewTab(){
        cy.get(this.practicePage_openNewTab).click()
    }
    getIframe(){
        return cy.get(this.practicePage_iFrameId).its('0.contentDocument.body').should('be.visible').then(cy.wrap) 
    }
    windowAlert(){
        cy.get(this.practicePage_alertBtnId).click()
    }
    windowConfirmAlert(){
        cy.get(this.practicePage_confirmBtnId).click()
    }
    newBrowserTab(){
        cy.get(this.practicePage_openNewTab).invoke('removeAttr', 'target').click()
    }
    scrollableTable(){
        cy.get(this.practicePage_tableBody).scrollIntoView().within(() => {
            cy.get('tbody>tr').should('have.length', 20)
            cy.get(this.practicePage_tableClass).scrollTo('bottom')
            cy.get('tbody>tr').eq(19).should('contain', 'Cricketer')
        })
    }

}