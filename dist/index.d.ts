import * as React from 'react';

declare const Button: () => React.JSX.Element;

interface ItexPayProps {
    api_key: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    amount: number;
    reference: string;
    currency: 'NGN' | 'USD' | 'EUR' | 'CAD';
}

interface UseItexPayReturn {
    handlePay: () => void;
    loaded: boolean;
}
interface UseItexPayOptions {
    onClose: (e: any) => void;
    onError: (e: any) => void;
    onCompleted: (e: any) => void;
}
declare const useItexPay: (paymentDetails: ItexPayProps, { onCompleted, onClose, onError }: UseItexPayOptions) => UseItexPayReturn;
/**
 * {
    "transaction": {
        "merchantreference": "ZIJELA-TEST-9135",
        "linkingreference": "ITX049489471690749414309",
        "paymentlinkreference": "PLR-dEYuNUeD436dW6MXG4DtRjrCqUaO8YD4RKkcqGry",
        "modalreference": "checkout",
        "paymentid": "TEST_IBK_266921501690749390157"
    },
    "order": {
        "amount": "10.00",
        "currency": "NGN"
    },
    "source": {
        "customer": {
            "card": {
                "number": "512345******0008",
                "first6": "512345",
                "last4": "0008"
            },
            "account": {}
        }
    },
    "chargetype": "card",
    "code": "00",
    "message": "approved"
}
 */

export { Button as ItexPayButton, ItexPayProps, useItexPay };
