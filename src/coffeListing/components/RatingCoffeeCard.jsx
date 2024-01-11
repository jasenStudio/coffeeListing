
export const RatingCoffeeCard = ({data}) => {

  const {rating ,popular,stock, votes} = data;

  return (
    <>
    { rating ? 
    <div className="flex">
      <img src="/src/assets/Star_fill.svg" 
      className="inline-block ml-2"
      alt={rating} />
      <span>{rating}</span>
      <span className="label-votes ml-1"> ({votes} votes)</span>
      {!stock && <span className="relative left-24 label-sold-out">Sold Out </span>}
    </div>
    
    : 
    
    <div className="flex">
    <img className="inline-block ml-2 mr-2" src="/src/assets/Star.svg" alt="star_rating" />
    <span>No ratings</span>
  </div>
    
    }
    </>
  )
}
