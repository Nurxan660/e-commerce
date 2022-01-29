import React from 'react';
import "../css/Category.css";

function Category() {
    const itemsByCategory = [
        {
            categoryName:"Smartphones",
            name: "Iphone 10",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            categoryName: "Smartphones",
            name: "Iphone 11",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            categoryName: "Smartphones",
            name: "Iphone 12",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            categoryName: "Smartphones",
            name: "Iphone 13",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            categoryName: "Smartphones",
            name: "Iphone 8",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            categoryName: "Smartphones",
            name: "Iphone 9",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
    ]
    
  return (
      <div className="category">
          <div className="category-name">
              <span>All products / Phones</span>
          </div>
          <div className="category-content">
              <div className="category-filter">
                  <ul className="filter-content">
                      <li className="filter-content-item">
                          <h3>Brands</h3>
                          <div className="flex-check">
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="apple" name="horns"/>
                                      <label for="horns">Apple</label>
                              </div>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="apple" name="horns" />
                                  <label for="horns">Samsung</label>
                              </div>
                              <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="apple" name="horns" />
                                  <label for="horns">Redmi</label>
                              </div>

                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Category;
