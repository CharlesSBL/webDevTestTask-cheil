# Product JSON Map

### General Information

| Field Name | Data Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | Unique ID of the product record. |
| `popularity` | `integer` | Popularity score of the product. |
| `image` | `string` | Filename of the product's WebP image. |
| `name` | `string` | The model name of the product. |
| `type` | `string` | The general type of product (e.g., "Pralka"). |
| `line` | `string` | The specific product line (e.g., "QuickDrive™"). |
| `color` | `string` | The color of the product. |
| `full_name`| `string` | A composed display name from other fields: (`name`, `type`, `line`, `weight`, `color`). |

### Physical Attributes

| Field Name | Data Type | Description |
| :--- | :--- | :--- |
| `weight.amount` | `float` | The physical weight of the product appliance. |
| `weight.measure` | `string` | The unit of measure for the product's weight (e.g., "kg"). |
| `capacity.amount`| `float` | The load capacity value of the product. |
| `capacity.measure`| `string` | The unit of measure for capacity (e.g., "kg"). |
| `dimensions.G` | `integer` | The depth of the product. |
| `dimensions.S` | `integer` | The width of the product. |
| `dimensions.W` | `integer` | The height of the product. |
| `dimensions.measure` | `string` | The unit of measure for dimensions (e.g., "cm"). |

### Features & Specifications

| Field Name | Data Type | Description |
| :--- | :--- | :--- |
| `functionality` | `string[]` | An array of strings describing product features. |
| `energy_class` | `string` | The energy efficiency class of the product (e.g., "A"). |

### Pricing Information

| Field Name | Data Type | Description |
| :--- | :--- | :--- |
| `price` | `float` | The price of the product. |
| `currency` | `string` | The currency of the price (e.g., "zł"). |
| `price_expiration_date.from` | `string` | The start date of the promotional price in `YYYY-MM-DD` format. |
| `price_expiration_date.to` | `string` | The end date of the promotional price in `YYYY-MM-DD` format. |
| `installments.monthly_fee` | `float` \| `null` | The monthly payment amount for an installment plan. |
| `installments.rate` | `integer` \| `null` | The total number of installments. |