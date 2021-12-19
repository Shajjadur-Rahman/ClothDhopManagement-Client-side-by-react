import React, { useEffect, useState, useRef } from 'react'
import ReactLoading from 'react-loading'
import { Modal } from './../../../UI/Modal/Modal';
import {connect} from 'react-redux'
import { productList, addProduct, updateProduct, deactivateProduct } from './../../../Services/Actions/StockActions';
import { allImportInvoices } from './../../../Services/Actions/ImportInvoiceActions';
import StockItem from './StockItem';
import AddStockItem from './AddStockItem/AddStockItem';
import { allCompanies } from './../../../Services/Actions/CompanyActions';
import { allCategories } from './../../../Services/Actions/CategoryActions';
import { addToCart } from '../../../Services/Actions/CartActions'
// import './Stock.css'
import { SaleModal } from '../../../UI/Modal/SaleModal';
import SaleProduct from '../SaleProduct/SaleProduct';




function Stock ({
  products,
  loading,
  productList,
  updateProduct,
  addProduct,
  allImportInvoices,
  allCompanies,
  allCategories,
  deactivateProduct,
  companies,
  categories,
  addToCart,
  invoices,
  customer,
}){
    
    useEffect(() => {
        document.title = `Stock ${new Date().toLocaleDateString()}`
    })

    const [sale, setSale] = useState(false)


    useEffect(() => {
      allImportInvoices()
      allCompanies()
      allCategories()
    }, [productList, allImportInvoices, allCompanies, allCategories, sale])

    const [product, setProduct] = useState({
      id: null,
      invoice: null,
      company: null,
      category: null,
      name: '',
      p_type: '',
      size: '',
      color: '',
      p_image_url: '',
      gsm: '',
      panna: '',
      len_qty: '',
      quantity: '',
      unit_tag: '',
      price: '',
      min_sale_price: ''
    })

    useEffect(() => {
      productList()

    }, [productList])

    const calcQty = useRef()

    const [qtyConvert, setQtyConvert] = useState(false)

    const toggleConvert = () => setQtyConvert(!qtyConvert)

    const [p_image, setP_image] = useState(null)

    const [calculated_qty, setCalculated_qty] = useState(null) // storing value as a meter

    const qtyHandler = event => {   // this function calculate meter to yard 
      const yard = parseFloat(event.target.value) * 1.09
      const caculatedValue = yard.toFixed(2)
      setCalculated_qty(caculatedValue)
    }



    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)

    const [click, setClick] = useState(false)

    const toggleAdd = () => setClick(!click)

    const modalShow = () => {
      setShow(true)
    }

    const modalHide = () => {
      setEdit(false)
      setShow(false)
      clear()
      setCalculated_qty(null)
      setP_image(null)
    }

    const imageHandler = event => setP_image(event.target.files[0])

    const onChangeHandler = event => {
      setProduct({
        ...product,
        [event.target.name]: event.target.value
      })
    }

    const clear = () => {
      setProduct({
        id: null,
        invoice: null,
        company: null,
        category: null,
        name: '',
        p_type: '',
        size: '',
        product_color: '',
        p_image_url: '',
        gsm: '',
        panna: '',
        len_qty: '',
        quantity: '',
        unit_tag: '',
        price: '',
        min_sale_price: ''
      })
    }

    const editProduct = product => {
      setProduct({
        id: product.id,
        invoice: product.invoice.id,
        company: product.company.id,
        category: product.category.id,
        name: product.name,
        p_type: product.p_type,
        size: product.size,
        product_color: product.product_color,
        p_image_url: product.p_image_url,
        gsm: product.gsm,
        panna: product.panna,
        len_qty: product.len_qty,
        quantity: product.quantity,
        unit_tag: product.unit_tag,
        price: product.price,
        min_sale_price: product.min_sale_price
      })
      modalShow()
      setEdit(true)
    }


    const onSubmitHandler = event => {
      event.preventDefault()
      if(edit){
        updateProduct(product)
        modalHide()
      }else{
        let productObj = new FormData()
            productObj.append("invoice", product.invoice)
            productObj.append("company", product.company)
            productObj.append("category", product.category)
            productObj.append("name", product.name)
            productObj.append("p_type", product.p_type)
            productObj.append("size", product.size)
            productObj.append("product_color", product.product_color)
            p_image && productObj.append("p_image", p_image, p_image.name)
            product.p_image_url && productObj.append("p_image_url", product.p_image_url)
            productObj.append("gsm", product.gsm)
            productObj.append("panna", product.panna)
            product.len_qty && productObj.append("len_qty", product.len_qty)
            calculated_qty && productObj.append("len_qty", calculated_qty)
            productObj.append("quantity", product.quantity)
            productObj.append("unit_tag", product.unit_tag)
            productObj.append("price", product.price)
            productObj.append("min_sale_price", product.min_sale_price)
            addProduct(productObj)
            modalHide()
      }
    }




    const [saleError, setSaleError] = useState('')

    const [productItem, setProductItem] = useState({
      product: null,
      product_name: '',
      purchasing_price: null,
      min_sale_price: null,
      unit_tag: '',
      len_qty: null,
      quantity: null
    })

    const saleProduct = product => {
      setProductItem({
        product: product.id,
        product_name: product.name,
        purchasing_price: product.price,
        min_sale_price: product.min_sale_price,
        unit_tag: product.unit_tag,
        len_qty: product.len_qty,
        quantity: product.quantity,
        p_image: product.p_image,
        p_image_url: product.p_image_url
      })
      saleOpen()
    }

    // fabric lenth convertion yard to meter !

    const getYard = () => {
      let value = null
      const x = parseFloat(cart.goj)
      const y = parseFloat(cart.gira)/16
      if(x > 0 && y > 0){
          value = x + y
      }else if(y){
          value = y + 0
      }else{
          value = x
      }
      return value.toFixed(2) 

    }

 
    const [cusId, setCusId] = useState(null)
    const [cart, setCart] = useState({
      goj: 0,
      gira: 0,
      name: '',
      phone: '',
      product: null,
      price: null,
      quantity: null,
      len_qty: null,
      purchasing_price: null,
      discount: 0
    })

    const cartClear = () => {
      setCart({
        goj: 0,
        gira: 0,
        name: '',
        phone: '',
        product: null,
        price: null,
        quantity: null,
        len_qty: null,
        purchasing_price: null,
        discount: 0
      })
    }


    const [saleShow, setSaleShow] = useState(false)
    const saleOpen = () => setSaleShow(true)

    const saleHide = () => {
      setSaleShow(false)
      clear()
      cartClear()
      setCusId(null)
      setSaleError('')
    }
    const inputHandler = event => {
      setCart({
        ...cart,
        [event.target.name]: event.target.value
      })
    }
    const submitHandler = event => {
      event.preventDefault()
      const cartObj = new FormData()
      cusId && cartObj.append("id", cusId)
      customer && cartObj.append("id", customer.id)
      cartObj.append("name", cart.name)
      cartObj.append("phone", cart.phone)
      cartObj.append("product", productItem.product)
      cartObj.append("price", cart.price)
      cartObj.append("purchasing_price", productItem.purchasing_price)
      cart.quantity && cartObj.append("quantity", cart.quantity)
      getYard && cartObj.append("len_qty", getYard())
      cartObj.append("discount", cart.discount)
      cartObj.append("unit_tag", productItem.unit_tag)

      if(cart.quantity){
        if(parseFloat(cart.quantity) > productItem.quantity || parseFloat(cart.quantity) <= 0){
          setSaleError("You have inputed invalid product quantity !!")
        }else{
          addToCart(cartObj, cart.quantity, getYard(), productItem.product)
          saleHide()
          setSale(true)
          setSaleError('')
        } 
        
      }else{
        if(getYard() > productItem.len_qty || parseFloat(getYard()) <= 0.00){
          setSaleError("You have inputed invalid product quantity !!")
        }else{
          addToCart(cartObj, cart.quantity, getYard(), productItem.product)
          saleHide()
          setSale(true)
          setSaleError('')
        }
      }
    }


    return <>
                  <Modal show={show}>
                    <AddStockItem 
                    calcQty={calcQty}
                    click={click}
                    edit={edit}
                    product={product} 
                    modalHide={modalHide} 
                    invoices={invoices} 
                    companies={companies}
                    categories={categories}
                    toggleAdd={toggleAdd}
                    toggleConvert={toggleConvert}
                    qtyConvert={qtyConvert}
                    p_image={p_image}
                    onChangeHandler={onChangeHandler} 
                    onSubmitHandler={onSubmitHandler} 
                    calculated_qty={calculated_qty}
                    qtyHandler={qtyHandler}
                    imageHandler={imageHandler}/>
                  </Modal>

                  <SaleModal show={saleShow}>
                     <SaleProduct 
                     cart={cart} 
                     getYard={getYard}
                     saleHide={saleHide} 
                     setCusId={setCusId}
                     customer={customer}
                     saleError={saleError}
                     product={productItem} 
                     inputHandler={inputHandler}
                     submitHandler={submitHandler}/>
                  </SaleModal>


                  <div className="page-header">
                      <h2>Today's Stock Status</h2>
                      <strong>{ new Date().toLocaleDateString()}</strong>
                  </div>
                  {loading ? (
                    <ReactLoading style={{ height: '100px', width: '80px', margin: '80px auto', display: 'block'}} type='spin'/>
                  ) : (
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th scope="col">Product ID</th>
                            <th scope="col">Product</th>
                            <th scope="col">Category</th>
                            <th scope="col">Brand</th>
                            <th scope="col">In Stock Qty</th>
                            <th scope="col">Unit</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Product Image</th>
                            <th scope="col"><button className="action--btn btn--info" onClick={() => modalShow()}>Add</button></th>
                          </tr>
                        </thead>
                        <tbody>
                          
                        {
                          
                          products && products.map(product => (
                            <StockItem 
                            key={product.id} 
                            product={product} 
                            loading={loading} 
                            editProduct={editProduct} 
                            saleProduct={saleProduct} 
                            deactivateProduct={deactivateProduct}/>
                          ))
                        }
                        </tbody>
                        <tfoot>
                          <tr>
                            <th></th>
                            <th colSpan="3">Total Qty</th>
                            <th>1000</th>
                            <th colSpan="2">Total Price</th>
                            <th colSpan="5">12000000.00</th>
                          </tr>
                          </tfoot>
                      </table>
                  )}
                    
    </>
}
const mapStateToProps = state => ({
  products: state.stockReducer.products,
  loading: state.stockReducer.loading,
  invoices: state.ImportInvoiceReducer.invoices,
  companies: state.CompanyReducer.companies,
  categories: state.CategoryReducer.categories,
  customer: state.CustomerReducer.customer
})
export default connect(mapStateToProps,
   {productList,
   allImportInvoices, 
   allCompanies, 
   allCategories, 
   addProduct,
   updateProduct, 
   deactivateProduct,
   addToCart})(Stock)