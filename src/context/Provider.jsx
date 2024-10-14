import { useEffect, useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";
import { getAllCategories } from "../helpers/fetchApi";

export default function Provider({ children }) {
  const [data, setData] = useState(null);
  const [dataCategorieIds, setDataCategorieIds] = useState(null);

  useEffect(() => {
    const LScategories = localStorage.getItem("lsCategories");

    const fetchApi = async () => {
      if (!LScategories) {
        const response = await getAllCategories();
        setData(response);
        localStorage.setItem("lsCategories", JSON.stringify(response));
      } else {
        setData(JSON.parse(LScategories));
      }
    };

    fetchApi();
  }, []);

  const contextValue = {
    data,
    setData,
    dataCategorieIds,
    setDataCategorieIds,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
