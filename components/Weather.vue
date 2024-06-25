<script setup>

import { ref } from 'vue';

const weather = ref(null);
const city = ref('Barnsley');

async function getWeather() {
    console.log("This is the city: " + city.value);
    const response = await fetch(`/api/weather?city=${city.value}`);
    const data = await response.json();
    // Use the weather data here
    weather.value = data;
}
</script>

<template>
    <div>
        <h1>Weather</h1>
        <input v-model="city" type="text" placeholder="Enter a city" />
        <div v-if="weather">


            <h2>{{ weather.name }}</h2>
            <p>{{ Math.round(weather.main.temp) }}°C</p>
            <p>{{ weather.weather[0].description }}</p>

        </div>
        <button @click="getWeather">Get Weather</button>
    </div>
</template>

<style scoped>
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

input {
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
}

button {
    padding: 0.5rem;
    background-color: #333;
    color: #fff;
    border: none;
    width: 100%;
    cursor: pointer;
}

button:hover {
    background-color: #444;
}

button:active {
    background-color: #555;
}
</style>