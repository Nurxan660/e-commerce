import React from 'react'
import '../css/ItemDescription.css'
import DescriptionSlider from '../ItemDescriptionSlider/DescriptionSlider'
function ItemDescription() {
  return (
    <div className="item-category">
        <div className="category-name">
              <span>All products / Phones</span>
          </div>
          <div className="item-description-content">
          <DescriptionSlider/>
          <div className="item-description">
              <h1>Iphone 10</h1>
              <h2 className="item-price">1000000</h2>
              <button>Add to cart</button>
              <h2 className='details'>Details</h2>
              <h3 className="details-key">Brand<span className="details-value">Iphone</span></h3>
              <h2 className='details'>Description</h2>
              <div className='details-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore placeat hic fuga laudantium eos fugit aspernatur ad error quae minima? Quis tempora mollitia perspiciatis sint odio voluptate et perferendis voluptas?
                Pariatur veritatis itaque quisquam, minima dolores dolor hic dolorem veniam placeat quasi numquam at id eius cumque saepe illo explicabo. Dignissimos et, veniam exercitationem provident quisquam enim dolorem commodi incidunt?
                Modi illum placeat perferendis. Aut quia ullam veniam a adipisci temporibus eius quas! Corporis laboriosam, nihil aliquid ex reiciendis ipsum necessitatibus pariatur? Blanditiis deserunt aperiam quis omnis quibusdam voluptatibus sapiente.
                Placeat, eligendi cum non voluptatibus doloremque facere ipsam odio velit, hic laborum maiores, officiis possimus libero dicta deleniti quos. Ipsa, necessitatibus doloremque quasi beatae pariatur voluptate corporis odio unde expedita.
                Libero illum obcaecati et eveniet voluptates incidunt, natus ullam pariatur dolorum maxime explicabo molestiae corporis deserunt nulla doloribus recusandae culpa veniam ab. Facere, repellat nulla! Dignissimos voluptatum excepturi molestiae ipsa?
                Perferendis praesentium sit repellat mollitia nisi molestiae quis dignissimos aliquam officiis ipsa tempora impedit rerum, distinctio error unde. Ullam quam, amet nemo veniam mollitia expedita fugiat molestiae voluptate eligendi eum.
                Ducimus quasi laboriosam fuga id itaque natus ab eaque delectus amet nam harum tempore quas expedita consequatur, cupiditate voluptas libero tempora quisquam voluptatem nostrum, iure vero. Doloribus vel sunt nulla.
              </div>
          </div>
          </div>
        </div>
  )
}

export default ItemDescription