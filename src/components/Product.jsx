import React, { useState } from 'react'
import { product } from '../data/api'
import { Link } from 'react-router-dom'
import { dress } from '../data/dress/page1'

const Product = () => {
  return (
    <div className='container'>
      <div className="row">
      {
        dress.map((x)=>{
          const [hoverproduct , setHoverproduct]= useState(x.imageUrl)
          return(
            <div className='col-md-4 col-lg-3 col-sm-6 col-12 my-2'>
<div className="card" style={{width: '100%'}}>
 <Link to={`/product/${x.id}`}>
 <img src={hoverproduct}

  className="card-img-top img-fluid py-3" alt="..."  style={{aspectRatio:3/2, objectFit:"contain", cursor:"pointer"}}/>
 </Link>
  <div className="card-body">
    <h5 className="card-title">{x.title.slice(0,20)}</h5>
    <p className="card-text">{x.description.slice(0,50)}</p>
<div className='d-flex justify-content-between'>
<p>
  <span className='price' >Price: {x.price} $</span>


</p>   <p>

</p>
</div>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


            </div>
          )
        })
      }
      
      </div>

    </div>
  )
}

export default Product
