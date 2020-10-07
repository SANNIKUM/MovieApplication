
import React,{useEffect,Fragment,useState} from 'react';
import PropTypes from "prop-types";
import {productValues} from "../../action/moviedata";
import {connect} from 'react-redux';
import Products from './Products';
import axios from 'axios';

export const TestCard = ({movieProfiles:{image,id,display_order,name},prodData:{productData,loading},productValues}) => {

    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    
    // useEffect(() => {
    // },[]);
    const handleClick = async (e,id) =>{
        e.preventDefault();
        try{
      const res = await axios.get(
          "https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1",
          {
              params: {category_id:id}
            }
        );
      //   console.log("ppppp")
      //   console.log(res.data.products);
         setProduct(res.data.products);
        
      }
      catch(err)
      {
          
      }
    }

    // setCount(0);
 return (
     <>
    <div className="grid-container-2-80">

      <div className="vertical-flex">
      {/* {setNotificationData.map((data)=>(
          <p>{data}</p>
      ))} */}
     <button class="center-service" onClick={(e)=>handleClick(e,id)}>
                <div class="service">
                    <img src={image} />
                    <h3 class="center">{name}</h3>
                </div>
            </button>

            </div>
            
            <div className="vertical-flex">
                {loading === false && product.map((productdata) => (
                    <Products
                    key={productdata.product_id}
                    productData={productdata}
                    count={count}
                    />
                  ))}

               </div>
              </div>
</>
    )
}

function mapStateToProps(state){
  debugger
  return {
    prodData: state.moviedata
  }
}




TestCard.propTypes = {
    movieProfiles: PropTypes.object.isRequired,
    productValues: PropTypes.func.isRequired,
    productData: PropTypes.object.isRequired
  };

  export default connect(mapStateToProps,{productValues})(TestCard);
