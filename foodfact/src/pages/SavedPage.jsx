import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem } from '../store/savedSlice'

function SavedPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const saved = useSelector((state) => state.saved.items)

  if (saved.length === 0) {
    return (
      <div className="page">
        <h2>Saved Items</h2>
        <p>You haven't saved anything yet. Search for a food and save it from the detail page.</p>
      </div>
    )
  }

  return (
    <div className="page">
      <h2>Saved Items ({saved.length})</h2>
      <div className="food-list">
        {saved.map((product) => (
          <div key={product.code} className="saved-item">
            <h3>{product.product_name || 'Unnamed product'}</h3>
            <p>{product.brands || 'Unknown brand'}</p>
             <button
                onClick={() =>
                  navigate(`/product/${product.code}`, { state: { product } })
                }
              >View Details</button>
            <button onClick={() => dispatch(removeItem(product.code))}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedPage