var map = L.map('map').setView([8.228, 124.2452], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let zones =[
    {
        name: "Zone 1",
        lat: 8.226669578357768, 
        lon: 124.25492951190468,
        color: 'yellow',
        radius: 150

    },
    {
        name: "Zone 2",
        lat: 8.235103175384777, 
        lon: 124.26208853948818, 
        color: 'blue',
        radius: 150
    },  
      

]
let locations = [
    {
        name: "ako balay",
        lat: 8.223447757574476, 
        lon: 124.25941983183945
},
  {
        name: "serbesa",
        lat: 8.226504271292514, 
        lon: 124.250535508812,
},
 {
        name: "Akong skwelahan",
        lat: 8.231846085014197, 
        lon: 124.23648214146505, 
},
{
        name: "Fat Pauly's",
        lat: 8.22955018994509,  
        lon: 124.26225345264368, 
},
{
        name: "Jabee St. Rosario",
        lat: 8.244100683940092,   
        lon: 124.25357051304401
},
];
locations.forEach(function(location) {
    L.marker([location.lat, location.lon]).addTo(map)
        .bindPopup(location.name)
        .openPopup();
}); 
zones.forEach(function(zone) {
    L.circle([zone.lat, zone.lon], {
        color: zone.color,radius: zone.radius,
        fillColor: zone.color,
        fillOpacity: 0.5,
    }).addTo(map).bindPopup(zone.name);});
