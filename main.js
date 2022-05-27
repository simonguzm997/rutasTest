
//const data = require('./data.json');

var data = [
	{
		type: "scattermapbox",
		mode: "markers+text+lines",
		lat: [ 4.611165, 4.620381, 4.620615, 4.620574, 4.623640 ],
    lon: [ -74.158760, -74.152420,-74.151978, -74.151544,-74.157158],
		marker: { size: 20, symbol: ["triangle", "star", "marker"] },
		text: ["W1", "C76", "C21", "C127", "C12"],
		textposition: "bottom right"
	}
];

var layout = {
	mapbox: { style: "outdoors", zoom: 10 },
	showlegend: false, height: 500, width: 700
};

var config = {mapboxAccessToken: "pk.eyJ1Ijoic2d1em1hbjk5NyIsImEiOiJjbDNudzZ6MHowZzRvM2RxaGdkZjRia2xxIn0.73tbh_31W9I4tMLxuCBOcg"};

Plotly.newPlot("myDiv", data, layout, config);
