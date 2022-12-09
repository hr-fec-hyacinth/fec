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

// Renders the Headers if invoked with the Column text
export const renderTableHeader = (columnNumber, arrayOfColumnHeader) => {
    let defaultHeader = [1, 2, 3, 4, 5] || arrayOfColumnHeader;
    return (
      <tbody>
        <trow>
        {Array.from({length: columnNumber}, (v, i) => {
          <td key={'colHeader'+i}>{defaultHeader[i]}</td>
        })}
        </trow>
      </tbody>
    )
  }