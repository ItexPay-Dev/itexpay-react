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
declare const useItexPay: (paymentDetails: ItexPayProps, { onCompleted, onClose, onError }: UseItexPayOptions) => UseItexPayReturn;
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
