/* eslint-disable no-unused-vars */
  import React, { useEffect, useState } from "react";
  import "./css/Products.css";
  import arrow from "../Assets/arrow-left.png";
  import { fetchProducts } from "../service/api";
  import ProductsCard from "./ProductsCard";
  import CategoryOption from "./CategoryOption";

  const Products = () => {
    const [toggle, setToggle] = useState(false);
    const [filter, setFilter] = useState("Show Filter");
    const [zind, setZind] = useState("");
    const [adjuststyle, setAdjustStyle] = useState("products");
    const [idealfor, setIdealfor] = useState(false);
    const [rotate, setRotate] = useState("rotate90deg");
    const [occasion, setOccasion] = useState(false);
    const [work, setWork] = useState(false);
    const [fabric, setFabric] = useState(false);
    const [segment, setsegment] = useState(false);
    const [suitable, setsuitable] = useState(false);
    const [rawmaterials, setrawmaterials] = useState(false);
    const [patern, setpattern] = useState(false);
    const [icocls, setIcocls] = useState("rotate90deg");
    const [workcls, setworkcls] = useState("rotate90deg");
    const [fabriccls, setfabriccls] = useState("rotate90deg");
    const [segmentcls, setsegmentcls] = useState("rotate90deg");
    const [suitablecls, setsuitablecls] = useState("rotate90deg");
    const [rawcls, setrawcls] = useState("rotate90deg");
    const [patterncls, setpatterncls] = useState("rotate90deg");
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOption, setSortOption] = useState("Recommended");

    // Fetching products from API
    const getProducts = async () => {
      try {
        const res = await fetchProducts();
        setProducts(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    // Category filter handlers
    const handleCategoryChange = (category) => {
      setSelectedCategories((prevSelected) =>
        prevSelected.includes(category)
          ? prevSelected.filter((cat) => cat !== category)
          : [...prevSelected, category]
      );
    };

    // Sorting function
    const sortedProducts = [...products].sort((a, b) => {
      switch (sortOption) {
        case "Newest first":
          return b.id - a.id;
        case "Popular":
          return b.rating.rate - a.rating.rate;
        case "hight to low":
          return b.price - a.price;
        case "low to high":
          return a.price - b.price;
        default:
          return 0;
      }
    });

    // Handle filter visibility
    const handleFilterVisibility = () => {
      setToggle(!toggle);
      setFilter(toggle ? "Show Filter" : "Hide Filter");
      setAdjustStyle(toggle ? "products width75" : "products");
    };

    const handleZindex = () => {
      setZind(toggle ? "" : "zind2");
    };

    // Category options for filtering
    const categoryOptions = [
      { label: "IDEAL FOR", state: idealfor, handler: () => setIdealfor(!idealfor), cls: rotate },
      { label: "OCCASION", state: occasion, handler: () => setOccasion(!occasion), cls: icocls },
      { label: "WORK", state: work, handler: () => setWork(!work), cls: workcls },
      { label: "FABRIC", state: fabric, handler: () => setFabric(!fabric), cls: fabriccls },
      { label: "SEGMENT", state: segment, handler: () => setsegment(!segment), cls: segmentcls },
      { label: "SUITABLE FOR", state: suitable, handler: () => setsuitable(!suitable), cls: suitablecls },
      { label: "RAW MATERIALS", state: rawmaterials, handler: () => setrawmaterials(!rawmaterials), cls: rawcls },
      { label: "PATTERN", state: patern, handler: () => setpattern(!patern), cls: patterncls },
    ];

    // Category change handler
    const handleCheckboxChange = (value) => {
      setSelectedCategories((prev) =>
        prev.includes(value)
          ? prev.filter((category) => category !== value)
          : [...prev, value]
      );
    };

    useEffect(() => {
      getProducts();
    }, []);

    return (
      <>
        <section className="filter">
          <span className="showfilter">
            <span className="qty">3425 ITEMS</span>
            <span className="hidefilter" onClick={handleFilterVisibility}>
              <span className="ico">
                <img src={arrow} alt="arrow" />
              </span>
              <span className="txt">{filter}</span>
            </span>
          </span>
          <span className="filterlogo" onClick={handleZindex}>FILTER</span>
          <span className="sort">
            <span className="txt">
              <select
                name="sortOptions"
                id="select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="Recommended">RECOMMENDED</option>
                <option value="Newest first">NEWEST FIRST</option>
                <option value="Popular">POPULAR</option>
                <option value="hight to low">PRICE: HIGH TO LOW</option>
                <option value="low to high">PRICE: LOW TO HIGH</option>
              </select>
            </span>
          </span>
        </section>
        <section className="body-content">
          {toggle && (
            <aside id="filter" className={zind}>
              {categoryOptions.map((option, index) => (
                <div key={index} className="category-option">
                  <span>
                    {option.label}{" "}
                    <img
                      src={arrow}
                      alt=""
                      onClick={option.handler}
                      className={option.cls}
                    />
                  </span>
                  {option.state && (
                    <CategoryOption
                      handleCheckboxChange={handleCheckboxChange}
                      selectedCategories={selectedCategories}
                    />
                  )}
                </div>
              ))}
            </aside>
          )}

          <section className={adjuststyle}>
            {sortedProducts
              .filter((item) =>
                selectedCategories.length === 0 || selectedCategories.includes(item.category)
              )
              .map((item, index) => (
                <div className="card" key={index} style={{ width: "240px", height: "370px", marginRight: "10px" }}>
                  <ProductsCard items={item} />
                </div>
              ))}
          </section>
        </section>
      </>
    );
  };

  export default Products;







