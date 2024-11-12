import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFomularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('EnioNascimento');
  return (
    <>
    
    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFomularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App
