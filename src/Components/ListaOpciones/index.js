import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.aptTeam(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
        </select>
    </div>
}

export default ListaOpciones