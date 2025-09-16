import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import './formulario-de-eventos.estilos.css'

export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual é o nome do evento?
          </Label>
          <CampoDeEntrada
            tipo="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          >
          </CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento
          </Label>
          <CampoDeEntrada
            tipo="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="XX/XX/XXXX"
          >
          </CampoDeEntrada>
        </CampoDeFormulario>
      </div>
    </form>
  )
}