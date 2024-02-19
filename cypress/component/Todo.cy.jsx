import 'tailwindcss/tailwind.css'
import Todo from '../../src/component/Todo.jsx'
describe('Todo.cy.jsx', () => {
  it('should run the Todo component', () => {
    cy.mount(<Todo />)
  })
  it('should add new todo', () => {
    cy.mount(<Todo />)
    cy.get('input').type('text')
    cy.get('button').contains('Add').click()
    cy.get('input').clear()
    cy.get('input').should('have.value', '')
  })
  it('should remove todo', () => {
    cy.mount(<Todo />)
    cy.get('input').type('text')
    cy.get('button').eq(1).contains('remove').click()
  })
})
