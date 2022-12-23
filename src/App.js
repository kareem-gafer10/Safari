import React, { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Pagination from "./Components/Pagination/Pagination";
import Services from "./Components/Services/Services";
import SortInput from "./Components/SortInput/SortInput";
import Tours from "./Components/Tours/Tours";
import { toursList } from "./Data";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recomended");

  // Pagination
  const perPages = 3;
  const pages = Math.ceil(toursList.length / perPages);
  const startIndex = (currentPage - 1) * perPages;
  const finishIndex = currentPage * perPages;

  //  Sort Tour
  const sortTour =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);

  const orderedTourList = sortTour.slice(startIndex, finishIndex);

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <SortInput toursLength={toursList.length} setSortItem={setSortItem} />
      <Tours toursList={orderedTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
