import axios from "axios";

export async function getAllCategories() {
    const endpoint = "https://api.mercadolibre.com/sites/MLB/categories";
    const req = await axios.get(endpoint);
    const res = req.data;

    return res;
}