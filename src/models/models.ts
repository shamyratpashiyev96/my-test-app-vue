export interface ProductItem {
    id: number,
    name: string,
    category: ProductCategory,
    price: number,
    imagePath: string,
    description: string
}

export interface OrderSubmission {
    FormName: string;
    SubmittedAt: string;
    FormData: {
        BuyerFullName: string,
        BuyerEmail: string,
        ProductName: string,
        ProductCategory: ProductCategory,
        Quantity: number,
        DeliveryDate: string,
        ShippingMethod: ShippingMethod,
        AdditionalOptions: string[],
        ShippingAddress: string,
        City: string,
        State: string,
        ZipCode: string
    };
}

export enum ProductCategory {
    Electronics = "Electronics",
    Clothing = "Clothing",
    HomeGoods = "Home Goods",
    BeautyPersonalCare = "Beauty & Personal Care",
    SportsOutdoors = "Sports and Outdoors"
}

export enum ShippingMethod {
    Standard = 'Standard Shipping (3-5 days)',
    Express = 'Express Shipping (1-2 days)',
    NextDay = 'Next Day Delivery',
}
