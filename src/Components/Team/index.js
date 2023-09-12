import "./team.css"
import Collaborator from "../Collaborator"
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { collaborators, eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }


    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            collaborators.length > 0 &&
            <section className="team" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="collaborator">
                    {
                        collaborators.map((collaborator, index) => <Collaborator
                            datos={collaborator}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Team