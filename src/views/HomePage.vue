<template>
    <HeaderComponent />

    <section class="hero">
        <div class="hero-content">
            <h1>Premium Products for Modern Life</h1>
            <p>Discover high-quality, innovative products designed to enhance your lifestyle. From headphones to
                smart watches, we've got everything you need.</p>
            <a href="#" class="btn">Shop Now</a>
            <a href="#" class="btn btn-outline">Learn More</a>
        </div>
    </section>

    <section class="featured-section">
        <div class="section-header">
            <h2>Featured Products</h2>
            <p>Explore our most popular items, carefully selected for quality and innovation</p>
        </div>
        <div class="product-grid">
            <ProductCardComponent v-for="item in productsList" :key="item.id" :id="item.id" :name="item.name"
                :price="item.price" :imagePath="item.imagePath" :description="item.description"
                @OrderComponentOpen="orderComponentOpen" />
        </div>
    </section>

    <section class="features-section">
        <div class="features-container">
            <div class="section-header">
                <h2>Why Choose ElegantShop?</h2>
                <p>We're committed to providing the best shopping experience with premium products and exceptional
                    service</p>
            </div>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">🚚</div>
                    <div class="feature-title">Free Shipping</div>
                    <p>Free worldwide shipping on all orders over $100</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔄</div>
                    <div class="feature-title">Easy Returns</div>
                    <p>30-day hassle-free return policy for all products</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔒</div>
                    <div class="feature-title">Secure Payments</div>
                    <p>Multiple secure payment options for your convenience</p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🏆</div>
                    <div class="feature-title">Premium Quality</div>
                    <p>All products are quality tested and certified</p>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials-section">
        <div class="section-header">
            <h2>What Our Customers Say</h2>
            <p>Hear from people who have experienced our products and service</p>
        </div>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="quote">"</div>
                <p class="testimonial-text">The headphones I purchased from ElegantShop exceeded my expectations. The
                    sound quality is phenomenal and the battery life is impressive. Definitely worth every penny!</p>
                <div class="testimonial-author">
                    <div class="author-img"></div>
                    <div>
                        <div class="author-name">Michael Johnson</div>
                        <div class="author-title">Music Producer</div>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="quote">"</div>
                <p class="testimonial-text">I'm extremely happy with my smart watch purchase. The fitness tracking
                    features are accurate, and the battery lasts for days. The customer service was also exceptional!
                </p>
                <div class="testimonial-author">
                    <div class="author-img"></div>
                    <div>
                        <div class="author-name">Sarah Williams</div>
                        <div class="author-title">Fitness Instructor</div>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="quote">"</div>
                <p class="testimonial-text">The portable speaker is perfect for outdoor adventures. It survived a beach
                    trip and a rainy camping weekend without any issues. The sound quality is amazing for its size!</p>
                <div class="testimonial-author">
                    <div class="author-img"></div>
                    <div>
                        <div class="author-name">David Chen</div>
                        <div class="author-title">Adventure Enthusiast</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-container">
            <h2>Ready to Enhance Your Tech Experience?</h2>
            <p>Browse our collection of premium products designed to make your life more enjoyable and efficient.</p>
            <a href="#" class="btn cta-btn">Shop Now</a>
        </div>
    </section>

    <FooterComponent />

    <OrderComponent v-if="orderComponentVisible" @OrderComponentClose="orderComponentClose" />
</template>

<script lang="ts">
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import OrderComponent from '@/components/OrderComponent.vue';
import ProductCardComponent from '@/components/ProductCardComponent.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderComponent,
        FooterComponent,
        ProductCardComponent,
        OrderComponent,
    },
    data() {
        return {
            orderComponentVisible: false,
            productsList: [
                { id: 1, name: 'Premium Headphones', price: 199.99, imagePath: '/product_images/premium_headphones.jpeg', description: 'Wireless noise-cancelling headphones with premium sound quality and all-day comfort.' },
                { id: 2, name: 'Smart Watch', price: 149.99, imagePath: '/product_images/smart_watches.jpeg', description: 'Health and fitness tracking with smartphone notifications and sleek design.' },
                { id: 3, name: 'Portable Speaker', price: 89.99, imagePath: '/product_images/portable_speaker.jpeg', description: 'Waterproof Bluetooth speaker with 20-hour battery life and amazing sound.' }
            ]
        }
    },
    methods: {
        orderComponentOpen() {
            this.orderComponentVisible = true;
        },
        orderComponentClose() {
            this.orderComponentVisible = false;
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}



.hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Ecommerce_Banner_1920.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
}

.hero-content {
    max-width: 800px;
    padding: 0 2rem;
    z-index: 1;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
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

.featured-section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.2rem;
    color: #2d2d2d;
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.features-section {
    background-color: #f2f2f2;
    padding: 5rem 2rem;
}

.features-container {
    max-width: 1200px;
    margin: 0 auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.feature-item {
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-icon {
    font-size: 2.5rem;
    color: #6a11cb;
    margin-bottom: 1rem;
}

.feature-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.testimonials-section {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.testimonial-card {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
}

.quote {
    font-size: 1.5rem;
    color: #ddd;
    position: absolute;
    top: 1rem;
    right: 1.5rem;
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 1.5rem;
}

.testimonial-author {
    display: flex;
    align-items: center;
}

.author-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f0f0f0;
    margin-right: 1rem;
}

.author-name {
    font-weight: 600;
}

.author-title {
    font-size: 0.9rem;
    color: #666;
}

.cta-section {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    padding: 5rem 2rem;
    text-align: center;
}

.cta-container {
    max-width: 800px;
    margin: 0 auto;
}

.cta-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

.cta-section p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.cta-btn {
    background-color: white;
    color: #6a11cb;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
}
</style>