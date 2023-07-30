import * as React from 'react';
import useLoadedScript from './useLoadedScript';
import { ItexPayProps } from '../types';

interface UseItexPayReturn {
    handlePay: () => void;
    loaded: boolean;
}

interface UseItexPayOptions {
    onClose: (e: any) => void;
    onError: (e: any) => void;
    onCompleted: (e: any) => void;
}

const useItexPay = (paymentDetails: ItexPayProps, { onCompleted, onClose, onError }: UseItexPayOptions): UseItexPayReturn => {
    const { loaded, error } = useLoadedScript()

    if (error) {
        throw new Error('Unable to load ITEXPay script');
    }

    const handlePay = React.useCallback(() => {
        const ITEXPay = new (window as any).ItexPayNS.ItexPay({
            api_key: paymentDetails.api_key,
            first_name: paymentDetails.first_name,
            last_name: paymentDetails.last_name,
            phone_number: paymentDetails.phone_number,
            email: paymentDetails.email,
            amount: paymentDetails.amount,
            reference: paymentDetails.reference,
            currency: paymentDetails.currency,
            onCompleted,
            onClose,
            onError
        })

        ITEXPay.init();
    }, [])

    return { handlePay, loaded }
}

export default useItexPay;

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