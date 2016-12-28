/**
 * Created by lee on 2016/12/26.
 */
var currentPage = 0;
var locationMainUrl = ' https://maps.googleapis.com/maps/api/geocode/json?address=';
var key = "&key=AIzaSyDZNnVFox0iClcy-IiXPlf00qSvdUe5bjg";
var getPosterUrl = "http://www.omdbapi.com/?";
var dataUrl = "http://imaxli.com:3000/getSFMoviesMapInfo";
var posterTitle = "t=";
var posterTime = "&y=";
var getPosterType = "&plot=short&r=json";
var map;
var finalMapInfo = [];
// var me = this;
function toGetMapInfo(pageIndex) {
  $.ajax({
    url: dataUrl,
    type: "post",
    data: {"pageIndex":pageIndex},
    success: function (data) {
      console.log(data);
      locationToExchangeToLongitudeAndLatitude(data, function (newMapInfo) {
        console.log(newMapInfo);//localhost:8080
        finalMapInfo = newMapInfo;
        setNeighborhoods(newMapInfo);
      });
    },
    fail: function (e) {
      console.log(e);
    }
  });
}

// use google api to exchange location to Longitude and Latitude
function locationToExchangeToLongitudeAndLatitude(data, callBack) {
  var newMapInfo = [];
  var i = 0;
  var location = "";
  var length = data.length;

  console.log(data);

  function addNewMapInfo() {

    var object = data[i];
    showAddressLongitudeAndLatitude(object, function (longitudeAndLatitude, object) {
      i++;
      if (longitudeAndLatitude.length != 0) {
        if (i < length) {
          object.lat = longitudeAndLatitude[0];
          object.lng = longitudeAndLatitude[1];
          newMapInfo.push(object);
          console.log(object);

          addNewMapInfo();
        } else {
          callBack(newMapInfo);
        }
      } else {

        if (i < length) {
          addNewMapInfo();
        } else {
          callBack(newMapInfo);
        }
      }
    });
  }

  addNewMapInfo();
  // console.log(newMapInfo);
}
// This is show address xxx;
function showAddressLongitudeAndLatitude(object, callBack) {
  var longitudeAndLatitude = [];
  var requestUrl = locationMainUrl + object.locations + key;
  $.ajax({
    url: requestUrl,
    type: "get",
    data: {},
    success: function (data) {
      console.log(data);
      if (data.status == "OK") {
        longitudeAndLatitude[0] = data.results[0].geometry.location.lat;
        longitudeAndLatitude[1] = data.results[0].geometry.location.lng;
        callBack(longitudeAndLatitude, object);
      } else {
        longitudeAndLatitude = [];
        console.log("zero");
        callBack(longitudeAndLatitude, object);
      }
      // return longitudeAndLatitude;
      // locationToExchangeToLongitudeAndLatitude(data);
    },
    fail: function (e) {
      longitudeAndLatitude = [];
      callBack(longitudeAndLatitude, object);
      // return longitudeAndLatitude;
      // console.log(e);
    }
  });
}
var map;
var neighborhoods = [];

function setNeighborhoods(data) {
  var i = 0;
  neighborhoods= [];
  for (; i < data.length; i++) {
    var location = {lat: data[i].lat, lng: data[i].lng};
    neighborhoods.push(location);
  }
  console.log(neighborhoods);
  var lat = neighborhoods[0].lat;
  var lng = neighborhoods[0].lng;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 5
  });
  drop();
}
var markers = [];
function drop() {
  clearMarkers();

  for (var i = 0; i < neighborhoods.length; i++) {

    addMarkerWithTimeout(neighborhoods[i], i * 200, i);
  }
}
function addMarkerWithTimeout(position, timeout, index) {
  window.setTimeout(function () {
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP,
      title: (index).toString()
    });
    marker.addListener('click', function () {

      moviesInfo(finalMapInfo[parseInt(this.title)])
    });
    markers.push(marker);
  }, timeout);
}

function getImage(url) {
  console.log(url);
  $.ajax({
    url: url,
    type: "get",
    data: {},
    success: function (data) {
      console.log("movies info")
      console.log(data);

      $(".showImage").attr("src", data.Poster);

    },
    fail: function (e) {
    }
  });
}
function moviesInfo(moviesInfo) {

  var url = getPosterUrl + posterTitle + moviesInfo.title + posterTime + moviesInfo.release_year + getPosterType;
  console.log(url);

  console.log(moviesInfo);
  var first = "Title: " + moviesInfo.title + "  Release Year: " + moviesInfo.release_year;
  var second = "Actors: " + moviesInfo.actor_1 + " " + moviesInfo.actor_2 + " " + moviesInfo.actor_3
  var third = "Director: " + moviesInfo.director;
  var fourth = "Locations: " + moviesInfo.locations;
  var fifth = "Production Company: " + moviesInfo.production_company;
  var sixth = "Writers: " + moviesInfo.writer;
  var data = {source: [first, second, third, fourth, fifth, sixth]};
  var html = template('modal-view', data);

  BootstrapDialog.alert({
    title: "SFMovies",
    message: html,
    type: BootstrapDialog.TYPE_DANGER, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
    closable: true, // <-- Default value is false
    draggable: true, // <-- Default value is false
    buttonLabel: 'close', // <-- Default value is 'OK',
    callback: function (result) {
      // result will be true if button was click, while it will be false if users close the dialog directly.
//        alert('Result is: ' + result);
    },
    onshow: function (dialogRef) {


    },
    onshown: function (dialogRef) {
      getImage(url);

    },
  });


}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];

}
function initMap() {
  toGetMapInfo(currentPage);
}
