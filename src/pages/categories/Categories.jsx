import ProductsSec from "../../components/dynamic/ProductsSec";
import { useGetProductsQuery } from "../../services/products";

const Categories=()=>{
    const { data } = useGetProductsQuery();

    return(
        <>
        <div style={{margin:200}}>
       <ProductsSec filteredData={data} />
       </div>
        </>
    )
}

export default Categories