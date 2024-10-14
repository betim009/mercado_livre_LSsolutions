import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategorieById } from "../../helpers/fetchApi";

export default function Categories() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategorieid = async (id) => {
      const lsCategories = localStorage.getItem("lsIds");

      // Verifica se existe algo no localStorage
      if (!lsCategories) {
        const categorie = await getCategorieById(id);
        const newData = [id]; // Cria um array com o ID
        setData(categorie.results);
        localStorage.setItem("lsIds", JSON.stringify(newData)); // Salva o ID no localStorage
      } else {
        // Se já existe o lsIds, converte o valor do localStorage em um array
        const parsedCategories = JSON.parse(lsCategories);

        // Verifica se o ID já existe no localStorage para evitar duplicação
        if (!parsedCategories.includes(id)) {
          const categorie = await getCategorieById(id);
          const updatedCategories = [...parsedCategories, id]; // Adiciona o novo ID ao array existente
          setData(categorie.results);
          localStorage.setItem("lsIds", JSON.stringify(updatedCategories)); // Atualiza o localStorage com o novo ID
        } else {
          console.log("ID já existe no localStorage:", id);
        }
      }
    };

    fetchCategorieid(id); // Certifique-se de que 'id' está disponível no escopo do componente
  }, [id]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <h2>Categories</h2>
    </>
  );
}
