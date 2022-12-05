// calculates Average Rating i:Object o: average num

export const calculateAverageRating = (metaRatings) => {
  let totalRating = 0;
  let totalVotes = 0;

  Object.keys(metaRatings).forEach(el => {
    totalRating += Number(metaRatings[el]) * el;
    totalVotes += Number(metaRatings[el]);
  })

  // return parseFloat((totalRating / totalVotes)).toFixed(2) ;
  return (totalRating / totalVotes).toFixed(1);
}