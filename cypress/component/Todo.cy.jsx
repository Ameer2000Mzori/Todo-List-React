import 'tailwindcss/tailwind.css'
import Todo from '../../src/component/Todo.jsx'
describe('Todo.cy.jsx', () => {
  it('should run the Todo component', () => {
    cy.mount(<Todo />)
  })
  it('should add new todo', () => {
    cy.mount(<Todo />)
    cy.get('input').type('text')
  })
})
