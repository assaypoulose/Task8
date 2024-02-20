// Fetching data from the API
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Get all countries from Asia using filter
        const asiaCountries = data.filter(country => country.region && country.region.includes('Asia'));

        console.log('Countries in Asia:', asiaCountries);

        // Get countries with a population of less than 2 lakhs using filter
        const lowPopulationCountries = data.filter(country => country.population && country.population < 200000);

        console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);

        // Print details using forEach
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital && country.capital[0]}, Flag: ${country.flags && country.flags.svg}`);
        });

        // Calculate total population using reduce
        const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);

        console.log('Total Population:', totalPopulation);

        // Find country that uses US dollars as currency
        const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);

        console.log('Country using US dollars:', usDollarCountry);
    })
    .catch(error => console.error('Error fetching data:', error));
