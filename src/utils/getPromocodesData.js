const promoURL = 'http://localhost:3000/promocodes';

const getResource = async (promoURL) => {
    const res = await fetch(promoURL);
  
    return res.json();
};
  
const getPromocodes = async () => {
    const res = await getResource(promoURL);
    
    return res;
};

export default getPromocodes;
  