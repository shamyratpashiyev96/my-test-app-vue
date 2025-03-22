<template>
    <header>
        <div class="header-container">
            <div class="logo">ElegantShop</div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>
header {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    padding: 1.5rem 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 1px;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 2rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
}

nav ul li a:hover {
    opacity: 0.8;
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        align-items: flex-start;
    }

    nav ul {
        margin-top: 1rem;
    }

    nav ul li {
        margin-left: 0;
        margin-right: 1.5rem;
    }

    .hero h1 {
        font-size: 2.2rem;
    }

    .btn-outline {
        margin-left: 0;
        margin-top: 1rem;
        display: inline-block;
    }
}
</style>