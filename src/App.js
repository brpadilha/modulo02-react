import React, { useState, useEffect } from "react";
// import { Container } from './styles';

import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([]);
  //retorna um array com 2 posições
  //
  //1. Variável com valor inicial
  //2. Função para atualizarmo ese valor

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`); //adiciona um novo projeto no projects

    // setProjects([...projects, `Novo projeto ${Date.now()}`]); //copia os projetos que estavam antigamente, e depois adiciona um novo projeto, aplicando assim a imutabilidade.
    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      owner: "Diego fernandes",
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((
          project //map vai percorrer o array projetos e retornar cada projeto dentro dele.
        ) => (
          <li key={project.id}>{project.title}</li> //devemos colocar a key pois é algo único da lista, geralmente é o id
        ))}
        {/* <input type="text" /> */}
        <button type="button" onClick={handleAddProject}>
          {/* Botão que chama a função para adicionar um novo projeto */}
          Adicionar projeto
        </button>
      </ul>
    </>
  );
}
