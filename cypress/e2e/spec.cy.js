// https://stackoverflow.com/questions/54671266/setting-the-browser-language-in-cypress

describe('Lang App', () => {
  it("renders in en-en", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'en-en'
        })
      }
    })
  })

  it("renders in es-es", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'es-es'
        })
      }
    })
  })

  it("renders in fr-fr", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'fr-fr'
        })
      }
    })
  })

  it("renders in pt-br", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'pt-br'
        })
      }
    })
  })
})
