import React from 'react'

const CategoryOption = ({handleCheckboxChange, category}) => {
  return (
    <div>
        <span className="category">Unselect all</span>
                  <div className="catagory-type">
                    <span className="men">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("men's clothing")}
                        checked={category === "men's clothing"}
                      />
                      <span> Men</span>
                    </span>

                    <span className="women">
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange("women's clothing")}
                        checked={category === "women's clothing"}
                      />
                      <span>Women</span>
                    </span>
                    <span className="jewelery, baby">
                      <input type="checkbox"  onChange={() => handleCheckboxChange("jewelery")}
                        checked={category === "jewelery"}/> <span>jewelery</span>
                    </span>
                  </div> 
    </div>
  )
}

export default CategoryOption