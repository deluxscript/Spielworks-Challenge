import FormBuilder from "."
import ReactDOM from 'react-dom'


describe('Form builder component tests', () => {
   let container:HTMLDivElement

   beforeEach(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
      ReactDOM.render(<FormBuilder />, container)
   })

   afterEach(() => {
      document.body.removeChild(container)
      container.remove()
   })

   it('Renders the FormBuilder component correctly', () => {
      const input = container.querySelector('input')
      expect(input).toBeInTheDocument
      expect(input?.name).toBe('accountName')

   })
})