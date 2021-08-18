const catalogURL = 'http://localhost:3000/catalog';

const getResource = async (catalogURL) => {
    const res = await fetch(catalogURL);
  
    return res.json();
};
  
const getAllCatalogGoods = async () => {
    const res = await getResource(catalogURL);
    
    return res;
};

export default getAllCatalogGoods;
  