import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./Components/Header/Header"
import Form from './Components/Form/form.js';
import MiOrg from './Components/MiOrg';
import Team from './Components/Team/index.js';
import Footer from './Components/Footer';

function App() {
  const [showForm, aptShow] = useState(false)
  const [collaborators, aptCollaborators] = useState([{
    id: uuid(),
    team: "Front-end",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Karen Campo",
    puesto: "React Developer",
    fav: true
  },
  {
    id: uuid(),
    team: "cross-platform Front-end",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Milton Oviedo",
    puesto: "Desarrollador Android, multiplataforma e instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    team: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])

  const [team, aptTeams] = useState([
    {
      id: uuid(),
      titulo: "Cross-platform Frontend",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Frontend",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    aptShow(!showForm)
  }

  //Registrar colaborador

  const registrarColaborador = (collaborator) => {
    console.log("Nuevo colaborador", collaborator)
    //Spread operator
    aptCollaborators([...collaborators, collaborator])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = collaborators.filter((collaborator) => collaborator.id !== id)
    aptCollaborators(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const aptColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = team.map((team) => {
      if (team.id === id) {
        team.colorPrimario = color
      }

      return team
    })

    aptTeams(equiposActualizados)
  }

  //Create team
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    aptTeams([...team, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = collaborators.map((collaborator) => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })

    aptCollaborators(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        showForm && <Form
          teams={team.map((team) => team.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        team.map((team) => <Team
          datos={team}
          key={team.titulo}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.titulo)}
          eliminarColaborador={eliminarColaborador}
          aptColor={aptColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
