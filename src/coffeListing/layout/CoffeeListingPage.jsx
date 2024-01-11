import { useState } from "react";
import { list } from "../../data/coffeeListing";
import { CoffeeCard } from "../components/CoffeeCard";
import "../styles/styles.css";

const soldOut = false;

export const CoffeeListingPage = () => {
  const [avaibleProduct, setavaibleProduct] = useState(false);
  const listingCoffeeSoldOut = list.filter((coffee) => coffee.stock != soldOut);
  const listingCoffee = !avaibleProduct ? list : listingCoffeeSoldOut;

  return (
    <div
      className="sm:w-9/12 lg:w-10/12 bg-color rounded-2xl text-white text-center h-auto mx-auto"
      style={{ position: "relative", top: "25vh" }}
    >
      <h1 className="heading  font-bold" style={{ paddingTop: "80px" }}>
        Our Collection
      </h1>
      <p className="lg:w-6/12 sm:9/12 mx-auto paragraph">
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>

      <div className="grid grid-cols-2 mt-3 mb-14">
        <div className="flex flex-row justify-end mr-2">
          <button
            onClick={(e) => {
              setavaibleProduct(false);
            }}
            style={{
              backgroundColor: "#6F757C",
              fontSize: "14px",
              fontWeight: "bold",
            }}
            className="text-white py-2 px-3 rounded-lg"
          >
            All Products
          </button>
        </div>
        <div className="flex flex-row justify-start ml-2">
          <button
            onClick={(e) => {
              setavaibleProduct(true);
            }}
            style={{
              backgroundColor: "transparent",
              fontSize: "14px",
              fontWeight: "bold",
            }}
            className="text-white py-2 px-3 rounded-lg"
          >
            Available Now
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
        {listingCoffee.map((coffee) => (
          <CoffeeCard key={coffee.name} {...coffee} text={"hola mundo"} />
        ))}
      </div>
    </div>
  );
};
