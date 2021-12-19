import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import CartView from './CartView'



const OrderPdf = () => {
    const componentRef = useRef()

    return (
        <div>
          <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => componentRef.current}
          />
          <CartView ref={componentRef} />
        </div>
      )
    }
export default OrderPdf