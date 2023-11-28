import {cashfree} from "./util"

import React from 'react'

const Cashfree = () => {
    const getSessionId=(e)=>{
        e.preventDefault();
        setLoading(true);
        axios.post('api/apyment',{version})
        .then((res)=>{
            setLoading(false)
            setSessionId(res.data)
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err)
        })
    }
    const handelPayment=()=>{
        let checkoutOptions = {
            paymentSessionId: "payment-session-id",
            returnUrl: "https://test.cashfree.com/pgappsdemos/v3success.php?myorder={order_id}",
            
        }
        cashfree.checkout(checkoutOptions).then(function(result){
            if(result.error){
                alert(result.error.message)
            }
            if(result.redirect){
                console.log("Redirection")
            }
        });
    }
  return (
    <div>Cashfree</div>
  )
}

export default Cashfree