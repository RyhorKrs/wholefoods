const reviewsURL = 'http://localhost:3000/reviews';

const getResource = async (reviewsURL) => {
    const res = await fetch(reviewsURL);
  
    return res.json();
};
  
const getAllReviews = async () => {
    const res = await getResource(reviewsURL);
    
    return res;
};

export default getAllReviews;
  