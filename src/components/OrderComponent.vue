<template>
    <div class="form-container-wrapper">
        <div class="form-container">
            <button class="close-btn" aria-label="Close" @click="closeForm">&times;</button>
            <h1>Place Your Order</h1>
            <form id="order-form">
                <!-- Text input fields -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="full-name">Full Name</label>
                        <input type="text" id="full-name" name="fullName" v-model="itemDetails.formData.fullName"
                            required />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" v-model="itemDetails.formData.email" required />
                    </div>
                </div>

                <!-- Drop-down field -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="product-category">Product Category</label>
                        <select id="product-category" name="productCategory"
                            v-model="itemDetails.formData.productCategory" required>
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="home">Home Goods</option>
                            <option value="beauty">Beauty & Personal Care</option>
                            <option value="sports">Sports & Outdoors</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1"
                            v-model="itemDetails.formData.quantity" required />
                    </div>
                </div>

                <!-- Date input field -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="delivery-date">Preferred Delivery Date</label>
                        <input type="date" id="delivery-date" name="deliveryDate"
                            v-model="itemDetails.formData.deliveryDate" required>
                    </div>
                </div>

                <!-- Radio buttons -->
                <div class="form-row">
                    <div class="form-group full-width">
                        <label class="label-header">Shipping Method</label>
                        <div class="radio-group">
                            <div class="radio-option">
                                <input type="radio" id="standard" name="shipping" value="standard"
                                    v-model="itemDetails.formData.shippingMethod" checked>
                                <label for="standard">Standard Shipping (3-5 days)</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" id="express" name="shipping" value="express"
                                    v-model="itemDetails.formData.shippingMethod">
                                <label for="express">Express Shipping (1-2 days)</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" id="next-day" name="shipping" value="next-day"
                                    v-model="itemDetails.formData.shippingMethod">
                                <label for="next-day">Next Day Delivery</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Checkbox options -->
                <div class="form-row">
                    <div class="form-group full-width">
                        <label class="label-header">Additional Options</label>
                        <div class="checkbox-group">
                            <div class="checkbox-option">
                                <input type="checkbox" id="gift-wrap" name="additionalOptions[]" value="gift-wrap"
                                    v-model="itemDetails.formData.additionalOptions" />
                                <label for="gift-wrap">Gift Wrap ($5.00)</label>
                            </div>
                            <div class="checkbox-option">
                                <input type="checkbox" id="insurance" name="additionalOptions[]" value="insurance"
                                    v-model="itemDetails.formData.additionalOptions" />
                                <label for="insurance">Shipping Insurance ($3.50)</label>
                            </div>
                            <div class="checkbox-option">
                                <input type="checkbox" id="newsletter" name="additionalOptions[]" value="newsletter"
                                    v-model="itemDetails.formData.additionalOptions" />
                                <label for="newsletter">Subscribe to newsletter</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Address fields -->
                <div class="form-row">
                    <div class="form-group">
                        <label for="address">Shipping Address</label>
                        <input type="text" id="address" name="address" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" required>
                    </div>
                    <div class="form-group">
                        <label for="state">State/Province</label>
                        <input type="text" id="state" name="state" required>
                    </div>
                    <div class="form-group">
                        <label for="zip">Zip/Postal Code</label>
                        <input type="text" id="zip" name="zip" required>
                    </div>
                </div>

                <button type="submit" class="btn">Place Order</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import type { OrderSubmission } from '@/models/models';

export default {

    methods: {
        closeForm() {
            this.$emit('OrderComponentClose');
        },
    },
    data() {
        return {
            itemDetails: {
                formName: 'ProductOrderForm',
                submittedAt: new Date().toDateString(),
                formData: {
                    additionalOptions: [],
                    city: '',
                    deliveryDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    email: '',
                    fullName: '',
                    productCategory: '',
                    quantity: 1,
                    shippingAddress: '',
                    shippingMethod: 'standard',
                    state: '',
                    zipCode: ''
                }
            } as OrderSubmission,
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

.form-container-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.form-container {
    background-color: white;
    border-radius: 10px;
    padding: 2.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    width: 700px;
    margin: 0 auto;
    overflow-y: scroll;
    max-height: 95vh;
}

/* Close button styles */
.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    line-height: 24px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    transition: all 0.3s ease;
}

.close-btn:hover {
    background-color: #f0f0f0;
    color: #333;
}

.close-btn:focus {
    outline: none;
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #2d2d2d;
    font-weight: 600;
}

.form-row {
    display: flex;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.form-group {
    flex: 1 1 300px;
}

.full-width {
    flex-basis: 100%;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #555;
}

.label-header {
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: #444;
}

input,
select,
textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border 0.3s;
}

input:focus,
select:focus,
textarea:focus {
    outline: none;
    border-color: #6a11cb;
}

/* Radio button styles */
.radio-group,
.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.5rem 0;
}

.radio-option,
.checkbox-option {
    display: flex;
    align-items: center;
}

.radio-option input[type="radio"],
.checkbox-option input[type="checkbox"] {
    width: auto;
    margin-right: 0.75rem;
    cursor: pointer;
}

.radio-option label,
.checkbox-option label {
    margin-bottom: 0;
    cursor: pointer;
}

.btn {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    margin-top: 2rem;
    font-weight: 600;
    letter-spacing: 1px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 117, 252, 0.3);
}

.btn:active {
    transform: translateY(0);
}

/* Custom styling for date input */
input[type="date"] {
    padding: 0.75rem;
}

/* Custom styling for select dropdown */
select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
    padding-right: 1.5rem;
}
</style>