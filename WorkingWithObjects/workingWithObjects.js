(function () {
// Создайте массив объектов-стран (пусть будет несколько стран)
// У страны есть название и список городов (пусть будет по несколько городов)
// У города есть название и численность населения
    const countries = [
        {
            name: "Spain",
            cities: [
                {
                    name: "Barcelona",
                    population: 1620000
                },
                {
                    name: "Valencia",
                    population: 791413
                },
                {
                    name: "Malaga",
                    population: 571026
                }
            ]
        },
        {
            name: "Turkey",
            cities: [
                {
                    name: "Antalya",
                    population: 2222562
                },
                {
                    name: "Istanbul",
                    population: 15460000
                },
                {
                    name: "Bodrum",
                    population: 175000
                },
                {
                    name: "Adana",
                    population: 1769000
                }
            ]
        },
        {
            name: "Germany",
            cities: [
                {
                    name: "Berlin",
                    population: 3645000
                },
                {
                    name: "Gamburg",
                    population: 1841000
                }
            ]
        },
        {
            name: "Argentina",
            cities: [
                {
                    name: "Kordova",
                    population: 325708
                },
                {
                    name: "Salta",
                    population: 640000
                },
                {
                    name: "Mendosa",
                    population: 1115041
                },
                {
                    name: "Buenos Aires",
                    population: 3150000
                }
            ]
        }
    ];

// Найдите страну/страны с максимальным количеством городов
    function getCountriesNamesWithMaxCitiesCount(countries) {
        let maxCitiesCount = 0;
        let countryNameWithMaxCitiesCount = [];

        countries.forEach(country => {
            if (country.cities.length > maxCitiesCount) {
                maxCitiesCount = country.cities.length;
                countryNameWithMaxCitiesCount = [];
                countryNameWithMaxCitiesCount.push(country);
                return;
            }

            if (country.cities.length === maxCitiesCount) {
                countryNameWithMaxCitiesCount.push(country);
            }
        });

        return countryNameWithMaxCitiesCount;
    }

    console.log(getCountriesNamesWithMaxCitiesCount(countries));

// Получите объект с информацией по всем странам такого
// вида: ключ – название страны, значение – суммарная
// численность по стране
    function getCountriesPopulations(countries) {
        let countriesPopulations = {};

        countries.forEach(country => {
            let totalPopulation = 0;

            country.cities.forEach((city) => {
                totalPopulation += city.population;
            });

            countriesPopulations[country.name] = totalPopulation;
        })

        return countriesPopulations;
    }

    getCountriesPopulations(countries);
})();