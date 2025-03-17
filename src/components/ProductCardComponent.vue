<template>
    <div class="product-card">
        <div class="product-img">
            <img :src="product.imagePath" :alt="product.name">
        </div>
        <div class="product-info">
            <div class="product-title">{{ product.name }}</div>
            <div class="product-price">${{ product.price }}</div>
            <div class="product-description">{{ product.description }}</div>
            <button class="btn" @click="OrderComponentOpen(product)">Order</button>
        </div>
    </div>


</template>

<script lang="ts">
import type { ProductItem } from '@/models/models';
export default {
    name: 'ProductCardComponent',
    props: {
        product: {} as ProductItem
    },
    methods: {
        OrderComponentOpen(product: ProductItem) {
            this.$emit("OrderComponentOpen", product);
        },
    }
}
</script>

<style>
.order-component-wrapper {
    position: fixed;
    content: '';
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.product-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-img {
    width: 100%;
    height: 200px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-img img {
    max-width: 100%;
    max-height: 100%;
}

.product-info {
    padding: 1.5rem;
}

.product-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 1.3rem;
    font-weight: 700;
    color: #6a11cb;
    margin-bottom: 1rem;
}

.product-description {
    color: #666;
    margin-bottom: 1.5rem;
}

.btn {
    display: inline-block;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 117, 252, 0.3);
}

.btn-outline {
    background: transparent;
    border: 2px solid white;
    margin-left: 1rem;
}
</style>