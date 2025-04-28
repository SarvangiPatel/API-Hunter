import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import { AuthContext } from "../Context/AuthContext";


function Dashboard() {

  const [data,setdata] = useState([])

  const { authState,  logoutUser } = useContext(AuthContext)

    const {token} = authState
  

  function fetchData(){

    fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>res.json())
    .then((data)=>setdata(data.data))
    .catch((err)=>console.log(err))
   }

   useEffect(()=>{
    fetchData()
   },[])


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={data}/>
      </div>
    </div>
  );
}

export default Dashboard;
