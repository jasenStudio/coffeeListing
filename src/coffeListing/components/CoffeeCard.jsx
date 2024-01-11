import { RatingCoffeeCard } from "./RatingCoffeeCard";


export const CoffeeCard = (
   {
    name, 
    rating,
    votes,
    price,
    stock,
    popular,
    img
    }) => {

     

  return (
    <div className="card-coffee mx-auto sm:mb-20">
      {popular && <h3 className="tag-popular label-popular">Popular</h3>}
        
        <img className="img-card-coffee" src={img ? img : ""} alt={name} />
        <div className="flex flex-row justify-between mt-2 mb-1 items-center">
          <span className="text-base font-bold ml-4">{name}</span>
          <span className="label-price text-xs rounded mr-4">${price.toFixed(2)}</span>
        </div>
        <RatingCoffeeCard data={ {rating,popular,stock,votes} } />
    </div>
  )
}



