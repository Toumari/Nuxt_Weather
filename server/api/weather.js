export default defineEventHandler(async (event) => {
  const { city } = getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  const apiKey = runtimeConfig.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch weather data" };
  }
});
