# Mapping_Earthquakes

## Overview 
The purpose of this project is to assist my client with producing map visualizations using specific data sets related to JSON or GeoJSON. Thus far I have assited my client with producing an earthquake map with two different maps and an earthquake overlay.  My client is now interested seeing earthquake data in relation to the tectronic plates' location on the earth.  I have used various colors that will allow you to see the correlations between the map overlays.

My final sprint will include adding three (3) specific visualization which are identified below.  As always, my analysis followed the data analysis principles of (1) Determine the number of rows and columns; (2) Data types used; and (3) Is the data readable?

__Client Expected Results:__
- Visualize a map with __no__ overlay
- Visualize initial page load
- Visualize Techtronic Plates overlay
- Visualize Techtronic and Earthquakes overlays with magnitudes displayed by legend
- Visualize Techtronic, Earthquakes and Major overlays with magnitudes displayed by legend



## Resources
The resouces used for this JavaScript application included;
- Visual Studio Code
- HTML
- CSS
- JavaScript
- D3 (Data-Driven Documents)
- JSON dataset
- GeoJSON dataset
- Leaflet JavaScript Library


## Results
All sprints were completed as scheduled and I delivered on all client expectations/results. The below images will visualize one overlay at a time until you finally see all map overlays displayed.

__Deliverable 1:__ Visualize a map with __no__ overlay

![](https://github.com/SheaButta/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/NoOverlay.PNG)


__Deliverable 2:__ Visualize initial page load

![](https://github.com/SheaButta/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/InitialPageLoad.PNG)


__Deliverable 3:__ Visualize Techtronic Plates overlay

![](https://github.com/SheaButta/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/TechtronicPlatesOverlay.PNG)


__Deliverable 4:__ Visualize Techtronic and Earthquakes overlays with magnitudes displayed by legend

![](https://github.com/SheaButta/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/Techtronic_EQs.PNG)


__Deliverable 5:__ - Visualize Techtronic, Earthquakes and Major overlays with magnitudes displayed by legend

![](https://github.com/SheaButta/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/Techtronic_EQs_majorEQs.PNG)


## Summary
My client is extremely pleased with the final sprint as we have proven the ability to read JSON and GeoJSON data and most importantly visualize the data using D3 (Data-Driven Documents) and the Leaflet JavaScript library.  

While testing and solidifying these visualization I was able to isoloate these test beds using branches.  Some of the other test enviroments related to using maps included the following;

    - Mapping Lines
    - Mapping GeoJSON Points
    - Mapping GeoJSON Polygons 
    - Mapping GeoJSON Linestrings

One of my final test beds displays a flight plan from SFO to JFK with one stop to include BWI.  I basically proved we can perform isolated tests without impacting their production environment to render a "proof-of-concept".

  __Flight Coordinates__:
    [37.6213, -122.3790], //SFO
    [30.19444, -97.67000], //AUX
    [39.177404, -76.668392], //BWI 
    [43.678524, -79.6291291306445], //YYZ
    [40.641766, -73.780968] //JFK

![](https://github.com/SheaButta/Mapping_Earthquakes/blob/main/Earthquake_Challenge/images/AirlineRoute.PNG)







