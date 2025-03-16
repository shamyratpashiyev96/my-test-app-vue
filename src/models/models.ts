export interface ProductItem {
    id: number,
    name: string,
    price: number,
    imagePath: string,
    description: string
}

export interface OrderSubmission {
    formName: string;
    submittedAt: string;
    formData: {
        fullName: string,
        email: string,
        productCategory: string,
        quantity: number,
        deliveryDate: string,
        shippingMethod: string,
        additionalOptions: string[],
        shippingAddress: string,
        city: string,
        state: string,
        zipCode: string
    };
}
