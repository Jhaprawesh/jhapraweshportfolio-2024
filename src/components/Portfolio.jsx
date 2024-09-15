import React, { useState, useCallback, useMemo } from "react";
import Button from "../components/Button";
import Data from "../components/Data";
import PortfolioCard from "./PortfolioCard";
import Title from "./Title";

const Portfolio = () => {
  const [items, setItems] = useState(Data);

  // Memoize menu items to avoid recalculating on every render
  const menuItems = useMemo(
    () => [...new Set(Data.map((val) => val.category))],
    []
  );

  // Memoize filter function to avoid recreating on every render
  const filterItem = useCallback((targetItem) => {
    if (targetItem === "All") {
      setItems(Data);
    } else {
      const newItem = Data.filter((item) => item.category === targetItem);
      setItems(newItem);
    }
  }, []);

  return (
    <div className="container">
      <div className="portfolio mb-4">
        <Title
          title={"Portfolio Showcase"}
          subTitle={" Discover our latest projects and success stories"}
          className={"tw-text-blue-800"}
        />
        <section className="tw-portfolio-section tw-py-5 tw-px-4">
          <div className="tw-container tw-mx-auto">
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-mb-8 md:tw-justify-center">
              <Button filterItem={filterItem} menuItems={menuItems} />
            </div>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-10">
              {items.map((project, index) => (
                <PortfolioCard project={project} key={project.id || index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
