# CryptoCurrency Dashboard

This web application offers a comprehensive dashboard for monitoring and analyzing a wide range of cryptocurrencies. It delivers historical price data, real-time market values, and trading volumes through interactive charts and tables. Additionally, it seamlessly integrates a cryptocurrency exchange feature, simplifying the process of managing your crypto assets.

## Demo

## Installation

Install Cryptocurrency Dashboard with npm

bash

npm install

npm run dev

## Features

- Implement a Tailwind-based design for an aesthetically pleasing and user-friendly interface.
- Create a responsive design to ensure seamless user experience across various devices.
- Enable users to visually compare data for multiple currencies on a single graph.
- Provide duration buttons to allow users to access historical price data for up to one year.
- Offer a variety of chart types for users to choose from.
- Incorporate a search bar that enables users to easily find and select their desired cryptocurrencies.
- Integrate a feature for users to execute buy or sell orders on the exchange.
- Utilize a sidebar to display cryptocurrencies sorted by market capitalization sourced from an external API.
- Allow users to select their preferred currency, with USD set as the default base currency.
- Implement error handling using the react-hot-toast library to enhance user feedback and resolve issues gracefully.

## API Reference

https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en

https://api.coingecko.com/api/v3/exchange_rates

https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1690643662&to=1659087812

## Framework/dependencies

- ReactJs - https://reactjs.org/
- React-redux - https://react-redux.js.org/
- Redux-Toolkit - https://redux-toolkit.js.org/
- TailwindCSS - https://tailwindcss.com/
- Chart.js - https://www.chartjs.org/
- React-chartjs-2 - https://react-chartjs-2.js.org/
- Coingecko API - https://www.coingecko.com/en/api/documentation
- ReactIcon - https://react-icons.github.io/react-icons/
- React-Hot-Toast - https://react-hot-toast.com/

## Authors

- [Vanshita](https://github.com/VANSHI1194)

## Screenshots

![App Screenshot](https://github.com/abharani/CryptoCurrency-Dashboard/blob/c0c280697d0cee54cb001155cd4f6950fcb8ae30/cryptoDashboard.png)
