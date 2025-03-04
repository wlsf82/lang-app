// https://stackoverflow.com/questions/54671266/setting-the-browser-language-in-cypress

describe('Lang App', () => {
  it("renders with the default language (en-*)", () => {
    cy.visit('./index.html')

    cy.contains(
      'h1',
      'Hello! Your browser is set to English.'
    ).should('be.visible')
  })

  it("renders in en-US", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'en-US'
        })
      }
    })

    cy.contains(
      'h1',
      'Hello! Your browser is set to English.'
    ).should('be.visible')
  })

  it("renders in es-ES", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'es-ES'
        })
      }
    })

    cy.contains(
      'h1',
      '¡Hola! Tu navegador está configurado en Español.'
    ).should('be.visible')
  })

  it("renders in fr-FR", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'fr-FR'
        })
      }
    })

    cy.contains(
      'h1',
      'Bonjour! Votre navigateur est défini sur Français.'
    ).should('be.visible')
  })

  it("renders in pt-BR", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'pt-BR'
        })
      }
    })

    cy.contains(
      'h1',
      'Olá! Seu navegador está definido para Português.'
    ).should('be.visible')
  })

  it("renders with a not listed language", () => {
    cy.visit('./index.html', {
      onBeforeLoad (win) {
        Object.defineProperty(win.navigator, 'language', {
          value: 'nb-NO'
        })
      }
    })

    cy.contains(
      'h1',
      "Hello! Your browser's language is not listed."
    ).should('be.visible')
  })
})
