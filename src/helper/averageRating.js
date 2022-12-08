const averageRating = (ratings) => {
  let reviewCount = 0;
  let totalStars = 0;
  Object.keys(ratings).forEach(score => {
    let count = Number(ratings[score])
    score = Number(score);
    totalStars += count * score;
    reviewCount += count;
  })
  return totalStars/reviewCount;
}

export default averageRating;