/* =======================================================================
    Note: Creates line coordinates from Point A to Point B (LAX TO SFO)
   ======================================================================= */

// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.19444, -97.67000], 5);  // Changed the cernt of the map TO SFO airport and the zoom to 5

// Coordinates for each point to be used in the line.
/*let line = [
    [33.9416, -118.4085], //LAX
    [37.6213, -122.3790], //SFO
    [40.7899, -111.9791], //SLC
    [47.4502, -122.3088]  //SEA
];*/

//SKILL DRILL
let line = [
    [37.6213, -122.3790], //SFO
    [30.19444, -97.67000], //AUX
    [39.177404, -76.668392], //BWI (SKILL DRILL BONUS STOP...)
    [43.678524, -79.6291291306445], //YYZ
    [40.641766, -73.780968] //JFK
];



// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: '5,10',
    fillopacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {  // SKILL DRILL
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
            accessToken: API_KEY
});
        
        
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
