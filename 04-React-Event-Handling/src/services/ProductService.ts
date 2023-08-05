import {IProduct} from "../component/watches/models/IProduct";

export class ProductService {
    static products: IProduct[] = [
        {
            id: "AA01",
            name: "NoiseFit",
            imageUrl: "https://www.fireboltt.com/cdn/shop/products/ninja-calling-pro-black_1.png?v=1661750050",
            price: 1299,
            qty: 1
        },
        {
            id: "AA02",
            name: "Pebbel",
            imageUrl: "https://cdn1.smartprix.com/rx-i8WNpdf4X-w1200-h1200/8WNpdf4X.jpg",
            price: 1999,
            qty: 1
        },
        {
            id: "AA03",
            name: "Fire-Boult",
            imageUrl: "https://cdn1.smartprix.com/rx-iGbU59NWQ-w1200-h1200/GbU59NWQ.jpg",
            price: 1499,
            qty: 1
        },
        {
            id: "AA04",
            name: "Boat",
            imageUrl: "https://i.gadgets360cdn.com/products/large/boat-watch-db-616x800-1658561008.jpg",
            price: 2999,
            qty: 1
        },
        {
            id: "AA05",
            name: "Fast-Track",
            imageUrl: "https://m.media-amazon.com/images/I/51fgQjZgXGL._SL1080_.jpg",
            price: 1899,
            qty: 1
        }
    ]

    static getAllProducts(): IProduct[] {
        return this.products;
    }
}