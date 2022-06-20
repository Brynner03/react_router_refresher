import { useParams } from 'react-router-dom'

function ProductDetails() {
  const params = useParams()

  console.log(params.productId)

  return (
    <section>
        <h1>ProductDetails</h1>
        <p>{params.productId}</p>
    </section>
  )
}

export default ProductDetails