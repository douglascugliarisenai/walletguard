/* eslint-disable */
import { createContext, useState, useEffect } from "react";

export const DespesaContext = createContext();
export const DespesaContextProvider = ({ children }) => {
 const [despesas, setDespesas] = useState([]);
 const [totalDespesas, setTotalDespesas] = useState(0);

 useEffect(() => {
  getDespesa();
 }, []);

 async function getDespesa() {
  const response = await fetch("http://localhost:3000/despesas");
  const data = await response.json();

  setDespesas(data);
  // setTotalDespesas(data.valor);
 }

 async function getDespesaPorId(idConsulta) {
  const response = await fetch("http://localhost:3000/despesas/" + idConsulta);
  const dados = await response.json();
  return dados;
 }

 function cadastrarDespesa(dadosDespesa) {
  if (dadosDespesa.descricao == "") {
   alert("A despesa precisa ter uma descrição!");
  }

  fetch("http://localhost:3000/despesas", {
   method: "POST",
   body: JSON.stringify(dadosDespesa),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    setTotalLocais(totalLocais + 1);
    alert("Despesa cadastrado com sucesso!");
    getDespesa();
   })
   .catch(() => alert("Erro ao cadastrar Despesa!"));
 }

 function editarDespesa(dadosDespesa, id) {
  const despesaAtualizar = {
   ...dadosDespesa,
   id: id
  };

  fetch("http://localhost:3000/despesas/" + id, {
   method: "PUT",
   body: JSON.stringify(despesaAtualizar),
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(() => {
    alert("Despesa Editado com sucesso!");
    getDespesa();
   })
   .catch(() => alert("Erro ao editar Despesa!"));
 }

 function removerDespesa(id) {
  fetch("http://localhost:3000/despesas/" + id, {
   method: "DELETE"
  })
   .then(() => {
    setTotalLocais(totalLocais - 1);
    alert("Despesa removido com sucesso!");
    getDespesa();
   })
   .catch(() => alert("Erro ao remover Despesa!"));
 }

 return (
  <DespesaContext.Provider
   value={{
    despesas,
    setDespesas,
    cadastrarDespesa,
    getDespesa,
    editarDespesa,
    removerDespesa,
    getDespesaPorId
   }}>
   {children}
  </DespesaContext.Provider>
 );
};
