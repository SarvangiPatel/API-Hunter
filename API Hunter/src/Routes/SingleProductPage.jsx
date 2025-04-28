import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
function SingleProductPage(){

    const [data,setdata]=useState("");
    const { id } = useParams(); 

    const handleget=()=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then(response => {
            setdata(response.data);
            console.log(response.data);
        })
    }

    useEffect(()=>{
        handleget();
    },[id]);

    

    return (
        <div data-testid="products-container">   
            <div>

                <h3 data-testid="product-brand">{data.data?.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={data.data?.img}/>
            </div>
            <div data-testid="product-category">
                <h3>{data.data?.category}</h3>
            </div>
           
            <div data-testid="product-details">
                <h3>{data.data?.details}</h3>
            </div>
            <div data-testid="product-price">
                <h3>{data.data?.price}</h3>
            </div>

            </div>
    )
}
export default SingleProductPage