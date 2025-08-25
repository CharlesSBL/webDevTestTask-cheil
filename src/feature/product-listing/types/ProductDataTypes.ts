export default interface ProductDataTypes {
    "id": number,
    "popularity": number,
    "image": string,
    "name": string,
    "type": string,
    "line": string,
    "color": string,
    "full_name": string,
    "weight": {
        "amount": number,
        "measure": string
    },
    "capacity": {
        "amount": number,
        "measure": string
    },
    "dimensions": {
        "G": number,
        "S": number,
        "W": number,
        "measure": string
    },
    "functionality": string[],
    "energy_class": string,
    "price": number,
    "currency": string,
    "price_expiration_date": {
        "from": Date,
        "to": Date
    },
    "installments": {
        "monthly_fee": number,
        "rate": number
    }
}

