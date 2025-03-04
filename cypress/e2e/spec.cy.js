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

    cy.contains(
      'h1',
      'Hello! Your browser is set to English.'
    ).should('be.visible')
  })

  it("renders in es-es", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'es-es'
        })
      }
    })

    cy.contains(
      'h1',
      '¡Hola! Tu navegador está configurado en Español.'
    ).should('be.visible')
  })

  it("renders in fr-fr", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'fr-fr'
        })
      }
    })

    cy.contains(
      'h1',
      'Bonjour! Votre navigateur est défini sur Français.'
    ).should('be.visible')
  })

  it("renders in pt-br", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'pt-br'
        })
      }
    })

    cy.contains(
      'h1',
      'Olá! Seu navegador está definido para Português.'
    ).should('be.visible')
  })
})
