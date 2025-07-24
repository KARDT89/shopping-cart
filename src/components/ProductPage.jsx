
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const {name} = useParams()
  return (
    <div>ProductPage{name}</div>
  )
}

export default ProductPage