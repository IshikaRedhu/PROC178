let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = 'PUT YOUR ACCESS TOKEN';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#tajMahak")

var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([78.0421, 27.1751])
	.addTo(map);

var img2 = document.querySelector("#redFort")
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([ 77.2410,28.6562])
	.addTo(map);

var img3 = document.querySelector("#sunTemple")
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([86.0945,19.8876])
	.addTo(map);
