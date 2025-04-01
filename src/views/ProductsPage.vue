<template>
    <HeaderComponent />

    <h1>Form Display</h1>

    <div class="form-container">
        <div class="form-row" v-for="(item, index) in result" :key="index">
            <div class="form-label">{{ item.FormName }}</div>
            <div class="form-value long-text">
                <p>{{ item.FormData }}</p>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>

<script lang="ts" setup>
// import VueJsonPretty from 'vue-json-pretty';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { getData } from '@/services/FetchService';
import routes from '@/router/routes';
import type { OrderSubmission } from '@/models/models';
import { onMounted, ref } from 'vue';

const result = ref<OrderSubmission[]>([]);

onMounted(async () => {
    await getData(routes.BackendUrl + routes.FormSubmissionUrl)
        .then((data: OrderSubmission[]) => {
            result.value = data;
            console.log(data)
        });
})

</script>

<style>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    /* max-width: 1000px; */
    margin: 0 auto;
    /* padding: 20px; */
}

h1 {
    color: #2c3e50;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
}

.form-container {
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.form-row {
    display: flex;
    border-bottom: 1px solid #eee;
}

.form-label {
    flex: 0 0 200px;
    font-weight: bold;
    padding: 15px;
    background-color: #f8f9fa;
    border-right: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-value {
    flex: 1;
    padding: 15px;
    line-height: 1.5;
}

/* Additional styling for readability */
.long-text {
    white-space: pre-wrap;
    overflow-wrap: break-word;
}
</style>
