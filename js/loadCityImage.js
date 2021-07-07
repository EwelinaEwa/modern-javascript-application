//Get Unsplash image

export const loadCityImage = unsplashUrl => {
    fetch(unsplashUrl)
        .then(response => response.json())
        .then(locationImages => document.getElementById("locationImage").src = locationImages.results[0].urls.regular)
}

