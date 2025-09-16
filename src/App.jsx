import './App.css'

function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento</h2>
      <fieldset>
        <label htmlFor="">
          Qual é o nome do evento?
        </label>
        <input type="text" id="nome"/>
      </fieldset>
    </form>
  )
}

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento/>
    </main>
  )
}

export default App
