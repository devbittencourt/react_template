import { Navbar } from "./components/Navbar"
import { Section } from "./components/Section"

function App() {

  return (
    <>
      <Navbar />
      <Section title="Hello World">
        <p>Section content</p>
        <p>Section content</p>
      </Section>

      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default App
