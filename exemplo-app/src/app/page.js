"use client"
import { useState } from "react";
import styles from "./page.module.css";

const comidas = require("./dados.json");

export default function Home() {
  return (
    <main>
      <h1>Lista de Comidas</h1>
      <section className={styles.listaComidas} onClick={Comida.quandoClicar}>
        {
          comidas && comidas.map((comida) => {
            return <Comida {...comida}/>
          })
        }
      </section>
    </main>
  );
}

function Comida({nome, doce, vegana, validade}) {
  const [selecionada, setSelecionada] = useState(false);

  const quandoClicar = () => {
    setSelecionada(!selecionada);
  }

  return(
    <section className={selecionada ? styles.comida : styles.comidaSelecionada}>
      <h1>{nome}</h1>
      <div>
        <div>É doce: {doce ? "Sim" : "Não"}</div> 
        <div>É vegana: {vegana ? "Sim" : "Não"}</div> 
        <div>Validade: {validade}</div> 
      </div>
    </section>
  )
}