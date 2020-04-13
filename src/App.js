import React, { useState, useEffect } from "react";
// import { Container } from './styles';

import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "FrontEnd web",
  ]);
  //retorna um array com 2 posições
  //
  //1. Variável com valor inicial
  //2. Função para atualizarmo ese valor

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects([...projects, response]);
    });
  }, []);

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`); //adiciona um novo projeto no projects

    setProjects([...projects, `Novo projeto ${Date.now()}`]); //copia os projetos que estavam antigamente, e depois adiciona um novo projeto, aplicando assim a imutabilidade.

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((
          project //map vai percorrer o array projetos e retornar cada projeto dentro dele.
        ) => (
          <li key={project}>{project}</li> //devemos colocar a key pois é algo único da lista, geralmente é o id
        ))}

        <button type="button" onClick={handleAddProject}>
          {/* Botão que chama a função para adicionar um novo projeto */}
          Adicionar projeto
        </button>
      </ul>
    </>
  );
}
