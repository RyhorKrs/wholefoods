import regeneratorRuntime from 'regenerator-runtime';

const specialsURL = 'http://localhost:3000/specials';

const getResource = async (specialsURL) => {
    const res = await fetch(specialsURL);
  
    return res.json();
};
  
const getSpecialItems = async () => {
    const res = await getResource(specialsURL);
    
    return res;
};

export default getSpecialItems;
  