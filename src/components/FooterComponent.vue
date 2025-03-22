<template>
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>ElegantShop offers premium products with exceptional quality and customer service. We strive to make
                    your shopping experience pleasant and convenient.</p>
            </div>

            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#">Returns Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Contact Us</h3>
                <ul>
                    <li>Email: support@elegantshop.com</li>
                    <li>Phone: +1 (555) 123-4567</li>
                    <li>Address: 123 Commerce St, Anytown, USA</li>
                </ul>
            </div>

            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="#">FB</a>
                    <a href="#">TW</a>
                    <a href="#">IG</a>
                    <a href="#">YT</a>
                </div>
            </div>

            <div class="copyright">
                &copy; 2025 ElegantShop. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
footer {
    background-color: #333;
    color: #fff;
    padding: 2rem 0;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.footer-section {
    flex: 1 1 250px;
    margin-bottom: 1.5rem;
}

.footer-section h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #2575fc;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section ul li a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-section ul li a:hover {
    color: #2575fc;
}

.social-icons a {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 1rem;
    text-decoration: none;
}

.copyright {
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #444;
    font-size: 0.9rem;
    color: #aaa;
}
</style>