
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import "./css/main.scss";
import ProductListing from './feature/product-listing/ProductListing';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductListing></ProductListing>
  </StrictMode>
)