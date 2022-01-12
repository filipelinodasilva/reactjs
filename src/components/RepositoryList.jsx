import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

// useEffect serve para disparar uma função quando algo(Variavel mudou, disparo de funcção  etc) acontecer na aplicação

import '../styles/repositories.scss';

// api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    // Estado que Armazena uma Listagem de Repositorios
    const [repositories, setRepositories] = useState([]);

    // useEffect sempre vai precisar de dois parametros
    // useEffect utilizado para chamada da API para requisição dos dados do GitHub da Rocketseat
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">

            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}