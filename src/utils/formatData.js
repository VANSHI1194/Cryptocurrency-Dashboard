// Function to process data for creating a portfolio pie chart
export const dataForPortfolio = (rawData) => {
   const label = [];
   const dataSets = [];

   for (const element of rawData) {
      dataSets.push(Number(element.market_cap.toFixed(0)));
      label.push(element.name);
   }

   const processedData = {
      labels: label,
      datasets: [
         {
            label: [],
            data: dataSets,
            backgroundColor: ["#5ac8ae", "#eae31f", "#50a3f0", "#f98e8e"],
            borderColor: ["white"],
            borderWidth: 0,
            hoverOffset: 10,
            hoverBorderwidth: 4,
         },
      ],
   };

   const totalValue = (
      dataSets.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(0)
   );

   return {
      processedData,
      totalValue,
   }
}

const colors = [
   {
      backgroundColor: 'purple',
      borderColor: '#800080', // Darker shade of purple
   },
   {
      backgroundColor: 'green',
      borderColor: '#006400', // Darker shade of green
   },
   {
      backgroundColor: 'darkblue',
      borderColor: '#00008B', // Darker shade of dark blue
   },
   {
      backgroundColor: 'red',
      borderColor: '#800000', // Darker shade of red
   },
   {
      backgroundColor: 'brown',
      borderColor: '#5D4037', // Darker shade of brown
   },
   {
      backgroundColor: 'orange',
      borderColor: '#FF4500', // Darker shade of orange
   },
   {
      backgroundColor: 'teal',
      borderColor: '#008080', // Darker shade of teal
   },
   {
      backgroundColor: 'navy',
      borderColor: '#000080', // Darker shade of navy
   },
   {
      backgroundColor: 'maroon',
      borderColor: '#800000', // Darker shade of maroon
   },
   {
      backgroundColor: 'indigo',
      borderColor: '#4B0082', // Darker shade of indigo
   },  
];

// Function to convert Unix timestamps to formatted date strings
const unixToData = (unixTime) => {
   const date = new Date(unixTime);
   const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric' };
   const formattedTime = date.toLocaleString('en-US', options).split(',')[0];
   return formattedTime;
}

// Function to create a dataset for charting historical crypto prices
const createDataSet = (item, idx, coin) => {
   const label = coin.label;
   const prices = item.map((item) => item[1]);
   const backgroundColor = colors[idx].backgroundColor;
   const borderColor = colors[idx].borderColor;

   return {
      label,
      data: prices,
      backgroundColor,
      borderColor
   }
}

// Function to process data for creating historical crypto price charts
export const processedData = (response, coins) => {
   const dates = response[0].map((item) => unixToData(item[0]));

   const dataSets = response.map((item, idx) => createDataSet(item, idx, coins[idx]));

   const data = {
      labels: dates,
      datasets: dataSets
   }

   return data;
}
