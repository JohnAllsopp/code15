/* Venue map initialisation */
var map;
var conference = new google.maps.LatLng(-37.815107,144.966499);
var workshops = new google.maps.LatLng(-37.815471,144.960684);
//var party1 = new google.maps.LatLng(-37.814959,144.967899);
//var party2 = new google.maps.LatLng(-37.811377,144.964229);

function initialise() {
    var x = [{
        stylers: [{
            saturation: -100
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            hue: "#551a8b"
        }, {
            saturation: 50
        }, {
            lightness: 0
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
            weight: 0
        }, {
            lightness: 10
        }]
    }, {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{
            weight: 0
        }, {
            lightness: 80
        }]
    }];
    var D = {
        zoom: 14,
        center: conference,
        mapTypeControl: false,
        disableDefaultUI: true,
        scrollwheel: false,
    };
    map = new google.maps.Map(document.getElementById("venue-map"), D);
    var A = "ffffff";
    var v = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + A, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var C = "bbbbbb";
    var u = "912CEE";
    var t = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + u, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var s = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=x|" + u, new google.maps.Size(21, 34), new google.maps.Point(0, 0), new google.maps.Point(10, 34));
    var B = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow", new google.maps.Size(40, 37), new google.maps.Point(0, 0), new google.maps.Point(12, 35));

    var E = new google.maps.Marker({
        position: conference,
        map: map,
        title: "Melbourne Town Hall - Conference Venue",
        icon: v,
        shadow: B
    });


    var F = new google.maps.Marker({
        position: workshops,
        map: map,
        title: "Karsten's - Workshop Venue",
        icon: t,
        shadow: B
    });
    // var r = new google.maps.Marker({
    //     position: party1,
    //     map: map,
    //     title: "Pumphouse - Reception Venue",
    //     icon: t,
    //     shadow: B
    // });
    // var q = new google.maps.Marker({
    //      position: party2,
    //      map: map,
    //      title: "Baroq - Closing Night Party Venue",
    //      icon: s,
    //      shadow: B
    //  });
     var z = {
        map: map,
        name: "Venue Map",
        minZoom: 5,
    };
    var y = new google.maps.StyledMapType(x, z);
    map.mapTypes.set("Venue Map", y);
    map.setMapTypeId("Venue Map")
}
initialise();