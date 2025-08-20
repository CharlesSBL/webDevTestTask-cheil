# Product json map
<field: data-Type,  - description>

{
id:                 integer,        - id of product record 
popularity:         integer,        - popularity of product

full_name:          string,         - the compose of fields: 
                                        (name, type+line, capacity, color)

name:               string,         - name of product 
type:               string,         - type of product 
line:               string,         - specific product line
color:              string,         - color of product
image:              string,         - webp image of the product


capacity_amount:    integer,        - capacity value
capacity_measure:   integer,        - metric system of capacity

dimensions_G:       integer,        - depth of product 
dimensions_S:       integer,        - width of product 
dimensions_W:       integer,        - height of product 
dimensions_measure: string,         - metric system of measure
        

functionality:              string[],       - features of product 
energy_class:               string,         - energy class of product
        
price:                      integer,        - price of product
currency:                   string,         - currency of the price
        
price_expiration_date_from: string,         - start expiration date of price
price_expiration_date_to:   string,         - end expiration date of price

installments_monthly_fee:   integer,        - how much pay per month 
installments_rate:          integer,        - amount of installments
}