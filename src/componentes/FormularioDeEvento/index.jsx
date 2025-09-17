import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Label } from '../Label'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'
import './formulario-de-eventos.estilos.css'

export function FormularioDeEvento({temas, aoSubmeter}) {

  function aoFormSubmetido (formData) {

    const evento = {
      capa: formData.get('capa'),
      tema: formData.get('tema'),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
    }

    aoSubmeter(evento)
  }

  return (
    <form className='form-evento' action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual é o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            name="nomeEvento"
            placeholder="Summer dev hits"
          >
          </CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="capa">
            Url da imagem de capa do evento
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            name="capa"
            placeholder="https://..."
          >
          </CampoDeEntrada>
        </CampoDeFormulario>

        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do Evento
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
            placeholder="XX/XX/XXXX"
          >
          </CampoDeEntrada>
        </CampoDeFormulario>
        
        <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do Evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}>
          </ListaSuspensa>
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  )
}