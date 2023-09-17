import RecommendedProduct from "../../components/dynamic/RecommendedProduct"
import { useGetProductsQuery } from "../../services/products";

const SearchResult=()=>{
    const { data } = useGetProductsQuery();

    return(
    <>
    <div style={{margin:200}}>

      <RecommendedProduct data={data} />
      </div>
    </>
    )
}
export default SearchResult