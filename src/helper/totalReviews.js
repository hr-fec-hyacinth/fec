const totalReviews = (reviews) => {
  return Object.keys(reviews).reduce((acc, key) => acc + Number(reviews[key]), 0);
};

export default totalReviews;