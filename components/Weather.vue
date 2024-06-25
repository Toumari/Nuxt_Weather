<script setup>

import { ref } from 'vue';

const weather = ref(null);
const city = ref('');

async function getWeather() {
    console.log("This is the city: " + city.value);
    const response = await fetch(`/api/weather?city=${city.value}`);
    const data = await response.json();
    // Use the weather data here
    weather.value = data;
}

function clearWeather() {
    weather.value = null;
}

</script>

<template>
    <div class="container">
        <h1>Weather</h1>
        <input v-model="city" type="text" placeholder="Enter a city" />
        <div v-if="weather">


            <h2>{{ weather.name }}</h2>
            <p>{{ Math.round(weather.main.temp) }}°C</p>
            <p>{{ weather.weather[0].description }}</p>

        </div>
        <button @click="getWeather">Get Weather</button>
        <button class="clear" @click="clearWeather">Clear</button>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.clear {
    background-color: #dc3545;
}


button:active {
    background-color: #0056b3;
}
</style>