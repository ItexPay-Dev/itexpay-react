export interface ItexPayProps {
    api_key: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    amount: number;
    reference: string;
    currency: 'NGN' | 'USD' | 'EUR' | 'CAD';
}
