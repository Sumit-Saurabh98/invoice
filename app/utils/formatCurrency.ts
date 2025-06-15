interface IcurrencyProps {
    amount: number,
    currency: 'USD' | 'EUR' | 'INR'
}

export function formatCurrency({amount, currency}: IcurrencyProps) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount)
}