import 'tailwindcss/tailwind.css'
import Todo from '../../src/component/Todo.jsx'
describe('Todo.cy.jsx', () => {
  it('should run the Todo component', () => {
    cy.mount(<Todo />)
  })
  it('should add new todo', () => {
    cy.mount(<Todo />)
    cy.get('input').type('test')
    cy.get('button').contains('Add').click()
    cy.get('input').clear()
    cy.get('input').should('have.value', '')
  })
  it('should remove todo', () => {
    cy.mount(<Todo />)

    cy.get('button').eq(1).contains('remove').click()
  })
  it('should done and undo ', () => {
    cy.mount(<Todo />)

    cy.get('button').eq(0).contains('done').click()
    cy.get('button').eq(0).contains(' undo').click()
  })
  it('should edit todo ', () => {
    cy.mount(<Todo />)
    cy.get('button').eq(2).contains('edit').click()
    cy.get('input').eq(0).clear()
    cy.get('input').eq(0).type('test edit')
    cy.get('button').eq(0).contains('Done').click()
  })
})
