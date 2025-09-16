import {TituloFormulario} from '../TituloFormulario'
import {CampoDeFormulario} from '../CampoDeFormulario'
import {Label} from '../Label'
import {CampoDeEntrada} from '../CampoDeEntrada'
import './formulario-de-eventos.estilos.css'

export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario id="nome" placeholder="Summer dev hits">
        <Label htmlFor="nome">
          Qual é o nome do evento?
        </Label>
        <CampoDeEntrada tipo="text" id="nome" placeholder="Summer dev hits">
        </CampoDeEntrada>
      </CampoDeFormulario>
    </form>
  )
}