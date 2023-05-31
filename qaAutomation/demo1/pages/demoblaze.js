import basePage from './basePage'

const demoblaze = {
  url: 'https://www.demoblaze.com/index.html',
  card_title: ".card-title",
  tbodyid: ".tbodyid tr",

  getCardItens () {

    let qtd = 0

    cy.get(this.tbodyid).its('length').then((rowCount) => {
        qtd = rowCount
    })

    return qtd
  },

  goto () {
    cy.visit(this.url)
  }
}
export default { ...demoblaze }
