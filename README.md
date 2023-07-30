```tsx

import { useItexPay } from 'itexpay-react'

const options = {
    api_key: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    amount: 10,
    reference: 'randomReference',
    currency: 'NGN'
}

const PaymentScreen = () => {

    const { handlePay } = useItexPay(options, {
        onCompleted: () => console.log(completed), 
        onClose: () => console.log(onClose), 
        onCancel: () => {}
    })

    return (
        <button onClick = {handlePay}>Pay amount</button>
    )
    
};

export default PaymentScreen
```