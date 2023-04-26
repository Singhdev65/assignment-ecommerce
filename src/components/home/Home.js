import { CartState } from "../../context/Context"
import SingleProduct from "../singleProduct"

const Home = () => {
  const {
    state: { products }
  } = CartState()

  const transformProducts = () => {
    let sortedProducts = products

    return sortedProducts
  }

  return (
    <div className='home'>
      <div className='productContainer'>
        {transformProducts().map(prod => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
