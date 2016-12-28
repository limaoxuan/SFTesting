/**
 * Created by lee on 2016/12/25.
 */


// var https = require('https');
var request = require('request');
var jquery = require('jquery');
var apiUrl = require('../config/apiUrl');
var sfMoviesApiController = {
    getMapInfo: function (req, res) {
        var pageSize = 5;
        var pageIndex = req.body.pageIndex;
        console.log(pageIndex);
        console.log(data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize));
        res.send(data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize));
    },
    exchangeLocationToLongitudeAndLatitude: function (req, res,next) {
        console.log(req.body);
        var location = req.body.location;
        var exchangeUrl = apiUrl.exchangeLocation + location + apiUrl.key;
        console.log(exchangeUrl);
        // var request = require('request');


    },
    keywordToGetMapInfo: function (res) {
    }
};


var data = [{
    "actor_1": "Siddarth",
    "actor_2": "Nithya Menon",
    "actor_3": "Priya Anand",
    "director": "Jayendra",
    "locations": "Mason & California Streets (Nob Hill)",
    "production_company": "SPI Cinemas",
    "release_year": "2011",
    "title": "180",
    "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
}
    , {
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand",
        "director": "Jayendra",
        "locations": "Justin Herman Plaza",
        "production_company": "SPI Cinemas",
        "release_year": "2011",
        "title": "180",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
    }
    , {
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand",
        "director": "Jayendra",
        "locations": "200 block Market Street",
        "production_company": "SPI Cinemas",
        "release_year": "2011",
        "title": "180",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
    }
    , {
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand",
        "director": "Jayendra",
        "locations": "City Hall",
        "production_company": "SPI Cinemas",
        "release_year": "2011",
        "title": "180",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
    }
    , {
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand",
        "director": "Jayendra",
        "locations": "Polk & Larkin Streets",
        "production_company": "SPI Cinemas",
        "release_year": "2011",
        "title": "180",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
    }
    , {
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand",
        "director": "Jayendra",
        "locations": "Randall Museum",
        "production_company": "SPI Cinemas",
        "release_year": "2011",
        "title": "180",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
    }
    , {
        "actor_1": "Siddarth",
        "actor_2": "Nithya Menon",
        "actor_3": "Priya Anand",
        "director": "Jayendra",
        "locations": "555 Market St.",
        "production_company": "SPI Cinemas",
        "release_year": "2011",
        "title": "180",
        "writer": "Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba "
    }
    , {
        "actor_1": "Craig Newmark",
        "director": "Michael Ferris Gibson",
        "distributor": "Zealot Pictures",
        "production_company": "Yerba Buena Productions",
        "release_year": "2005",
        "title": "24 Hours on Craigslist",
        "writer": "N/A"
    }
    , {
        "actor_1": "Candice Bergen",
        "actor_2": "Giancarlo Gianni",
        "director": "Lina Wertmuller",
        "distributor": "Warner Bros. Pictures",
        "fun_facts": "Embarcadero Freeway, which was featured in the film was demolished in 1989 because of structural damage from the 1989 Loma Prieta Earthquake)",
        "locations": "Embarcadero Freeway",
        "production_company": "Liberty Film",
        "release_year": "1978",
        "title": "A Night Full of Rain",
        "writer": "Lina Wertmuller"
    }
    , {
        "actor_1": "Candice Bergen",
        "actor_2": "Giancarlo Gianni",
        "director": "Lina Wertmuller",
        "distributor": "Warner Bros. Pictures",
        "fun_facts": "In 1945 the Fairmont hosted the United Nations Conference on International Organization as delegates arrived to draft a charter for the organization. The U.S. Secretary of State, Edward Stettinius drafted the charter in the hotel's Garden Room.",
        "locations": "Fairmont Hotel (950 Mason Street, Nob Hill)",
        "production_company": "Liberty Film",
        "release_year": "1978",
        "title": "A Night Full of Rain",
        "writer": "Lina Wertmuller"
    }]

module.exports = sfMoviesApiController;