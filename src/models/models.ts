export interface ProductItem {
    id: number,
    name: string,
    category: ProductCategory,
    price: number,
    imagePath: string,
    description: string
}

export interface OrderSubmission {
    formName: string;
    submittedAt: string;
    formData: {
        buyerFullName: string,
        buyerEmail: string,
        productName: string,
        productCategory: ProductCategory,
        quantity: number,
        deliveryDate: string,
        shippingMethod: ShippingMethod,
        additionalOptions: string[],
        shippingAddress: string,
        city: string,
        state: string,
        zipCode: string
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
