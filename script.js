
    const labels =['01/2019','02/2019','03/2019','04/2019','05/2019','06/2019','07/2019','08/2019','09/2019','10/2019','11/2019','12/2019',
                  '01/2020','02/2020','03/2020','04/2020','05/2020','06/2020','07/2020','08/2020','09/2020','10/2020','11/2020','12/2020',
                  '01/2021','02/2021','03/2021','04/2021','05/2021','06/2021','07/2021','08/2021','09/2021','10/2021','11/2021'];
//    console.log("labels");
//    console.log(labels);

// These are colors from chart.js utils
    const CHART_COLORS = {
      amethyst: 'rgb(240,163,255)',
      blue: 'rgb(0,117,220)',
      caramel: 'rgb(153,63,0)',
      damson: 'rgb(76,0,92)',
      ebony: 'rgb(25,25,25)',
      forest: 'rgb(0,92,49)',
      green: 'rgb(43,206,72)',
      honeydew: 'rgb(255,204,153)',
      iron: 'rgb(128,128,128)',
      khaki: 'rgb(143,124,0)',
      lime: 'rgb(157,204,0)',
      mallow: 'rgb(194,0,136)',
      orpiment: 'rgb(255,164,5)',
      pink: 'rgb(255,168,187)',
      red: 'rgb(255,0,16)',
      sky: 'rgb(94,241,242)',
      turquoise: 'rgb(0,153,143)',
      violet: 'rgb(116,10,255)',
      wine: 'rgb(153,0,0)',
      yellow: 'rgb(255,255,0)',
      grey: 'rgb(201, 203, 207)',
      orange: 'rgb(255, 159, 64)'

    };
//    console.dir(CHART_COLORS);

    const CHART_COLORS_50_Percent = {
      amethyst: 'rgba(240,163,255,0.5)',
      blue: 'rgba(0,117,220,0.5)',
      caramel: 'rgba(153,63,0,0.5)',
      damson: 'rgba(76,0,92,0.5)',
      ebony: 'rgba(25,25,25,0.5)',
      forest: 'rgba(0,92,49,0.5)',
      green: 'rgba(43,206,72,0.5)',
      honeydew: 'rgba(255,204,153,0.5)',
      iron: 'rgba(128,128,128,0.5)',
      khaki: 'rgba(143,124,0,0.5)',
      lime: 'rgba(157,204,0,0.5)',
      mallow: 'rgba(194,0,136,0.5)',
      orpiment: 'rgba(255,164,5,0.5)',
      pink: 'rgba(255,168,187,0.5)',
      red: 'rgba(255,0,16,0.5)',
      sky: 'rgba(94,241,242,0.5)',
      turquoise: 'rgba(0,153,143,0.5)',
      violet: 'rgba(116,10,255,0.5)',
      wine: 'rgba(153,0,0,0.5)',
      yellow: 'rgba(255,255,0,0.5)',
      grey: 'rgba(201, 203, 207,0.5)',
      orange: 'rgba(255, 159, 64,0.5)'
    };
//    console.log(CHART_COLORS_50_Percent);
//    end utils

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Total nonfarm',
          data: [],
          borderColor: CHART_COLORS.amethyst,
          backgroundColor: CHART_COLORS_50_Percent.amethyst,
          hidden: true
        },
        {
          label: 'Total private',
          data: [],
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS_50_Percent.blue,
          hidden: true
        },
        {
          label: 'Goods-producing',
          data: [],
          borderColor: CHART_COLORS.caramel,
          backgroundColor: CHART_COLORS_50_Percent.caramel,
          hidden: true
        },
        {
          label: 'Service-providing',
          data: [],
          borderColor: CHART_COLORS.damson,
          backgroundColor: CHART_COLORS_50_Percent.damson,
          hidden: true
        },
        {
          label: 'Private service-providing',
          data: [],
          borderColor: CHART_COLORS.ebony,
          backgroundColor: CHART_COLORS_50_Percent.ebony,
          hidden: true
        },
        {
          label: 'Mining and logging',
          data: [],
          borderColor: CHART_COLORS.forest,
          backgroundColor: CHART_COLORS_50_Percent.forest,
          hidden: true
        },
        {
          label: 'Construction',
          data: [],
          borderColor: CHART_COLORS.green,
          backgroundColor: CHART_COLORS_50_Percent.green,
          hidden: true
        },
        {
          label: 'Manufacturing',
          data: [],
          borderColor: CHART_COLORS.honeydew,
          backgroundColor: CHART_COLORS_50_Percent.honeydew,
          hidden: true
        },
        {
          label: 'Durable Goods',
          data: [],
          borderColor: CHART_COLORS.iron,
          backgroundColor: CHART_COLORS_50_Percent.iron,
          hidden: true
        },
        {
          label: 'Nondurable Goods',
          data: [],
          borderColor: CHART_COLORS.khaki,
          backgroundColor: CHART_COLORS_50_Percent.khaki,
          hidden: true
        },
        {
          label: 'Trade, transportation, and utilities',
          data: [],
          borderColor: CHART_COLORS.lime,
          backgroundColor: CHART_COLORS_50_Percent.lime,
          hidden: true
        },
        {
          label: 'Wholesale trade',
          data: [],
          borderColor: CHART_COLORS.mallow,
          backgroundColor: CHART_COLORS_50_Percent.mallow,
          hidden: true
        },
        {
          label: 'Retail trade',
          data: [],
          borderColor: CHART_COLORS.orpiment,
          backgroundColor: CHART_COLORS_50_Percent.orpiment,
          hidden: true
        },
        {
          label: 'Transportation and warehousing',
          data: [],
          borderColor: CHART_COLORS.pink,
          backgroundColor: CHART_COLORS_50_Percent.pink,
          hidden: true
        },
        {
          label: 'Utilities',
          data: [],
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS_50_Percent.red,
          hidden: true
        },
        {
          label: 'Information',
          data: [],
          borderColor: CHART_COLORS.sky,
          backgroundColor: CHART_COLORS_50_Percent.sky,
          hidden: true
        },
        {
          label: 'Financial activities',
          data: [],
          borderColor: CHART_COLORS.turquoise,
          backgroundColor: CHART_COLORS_50_Percent.turquoise,
          hidden: true
        },
        {
          label: 'Professional and business services',
          data: [],
          borderColor: CHART_COLORS.violet,
          backgroundColor: CHART_COLORS_50_Percent.violet,
          hidden: true
        },
        {
          label: 'Education and health services',
          data: [],
          borderColor: CHART_COLORS.wine,
          backgroundColor: CHART_COLORS_50_Percent.wine,
          hidden: true
        },
        {
          label: 'Leisure and hospitality',
          data: [],
          borderColor: CHART_COLORS.yellow,
          backgroundColor: CHART_COLORS_50_Percent.yellow,
          hidden: true
        },
        {
          label: 'Other services',
          data: [],
          borderColor: CHART_COLORS.grey,
          backgroundColor: CHART_COLORS_50_Percent.grey,
          hidden: true
        }
        ,
        {
          label: 'Government',
          data: [],
          borderColor: CHART_COLORS.orange,
          backgroundColor: CHART_COLORS_50_Percent.orange,
          hidden: true
        }
      ]
    };
  //  console.dir(data);

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Number of Employees in Thousands'
          }
        }
      }
    };
//    console.log(config);

    const myChart = new Chart(
      document.getElementById('myChart'),
        config);
//    console.dir(myChart);
//    console.log("Ending");


let series_id = "";
let api_urls = [];

let supersectors = ['00', '05', '06', '07', '08', '10', '20', '30', '31', '32', '40', '41', '42', '43', '44', '50', '55', '60', '65', '70', '80', '90'];
//This loop just fill in the api_urls array with all of the urls used to retrieve the data from the BLS API
for(i in supersectors){
    series_id = "CEU" + supersectors[i] + "00000001";
    api_urls.push(series_id);
};

//This loop is used to ping the api for each supersector
for(let i = 0; i < api_urls.length;i++) {
  //MAKE SURE TO UNCOMMENT THE REGISTRATION KEY IF YOU ARE USING ONE
  const api_url = "https://api.bls.gov/publicAPI/v2/timeseries/data/" + api_urls[i] //+"?registrationkey={keygoeshere};
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json"
  xhr.open("GET", api_url);
  xhr.send();
  xhr.onreadystatechange = function(){  //This function is used to make sure that the data that is retrieved is in order
    if (xhr.readyState === 4 && xhr.status === 200){
      let dataArray = this.response.Results.series[0].data;
      for (let j = dataArray.length-1; j > -1; j--) {  //This loop is used to move the data that we got from the BLS API into the it's respective dataset data array
        data.datasets[i].data.push(dataArray[j].value);
      }
    }
  }
}
