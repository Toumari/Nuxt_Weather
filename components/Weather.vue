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
        <div class="weather-co">


            <h1>Weather</h1>
            <input v-model="city" type="text" placeholder="Enter a city" />
            <div v-if="weather" class="results">


                <h2>{{ weather.name }}</h2>
                <p>{{ Math.round(weather.main.temp) }}°C</p>
                <p>{{ weather.weather[0].description }}</p>

            </div>
            <button @click="getWeather">Get Weather</button>
            <button class="clear" @click="clearWeather">Clear</button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #fff;
}

.container {
    color: #fff;
    margin-top: 15rem;
    padding-inline: 20;
    margin-inline: auto;
    border-radius: 5px;
    text-align: center;
}

.weather-co {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-inline: auto;
}

.results {
    margin-block: 2rem;
    padding: 20px;
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