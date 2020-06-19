var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Place = /** @class */ (function () {
    function Place(Name, City, ZIP, Address, Image) {
        this.Name = "";
        this.City = "";
        this.ZIP = "";
        this.Address = "";
        this.Image = "";
        this.Name = Name;
        this.City = City;
        this.ZIP = ZIP;
        this.Address = Address;
        this.Image = Image;
    }
    Place.prototype.display = function () {
        $("#cardContainer").append("\n\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n  \t\t\t\t\t\t<img src=\"" + this.Image + "\" class=\"card-img-top\" alt=\"...\">\n  \t\t\t\t\t\t<div class=\"card-body\">\n  \t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.Name + "</h5>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.City + ",<br>" + this.ZIP + " " + this.Address + "</p>\n \t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>  \n\t\t\t");
    };
    return Place;
}());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(Name, City, ZIP, Address, Image, Tel, Type, Web) {
        var _this = _super.call(this, Name, City, ZIP, Address, Image) || this;
        _this.Tel = Tel;
        _this.Type = Type;
        _this.Web = Web;
        placesArr.push(_this);
        return _this;
    }
    restaurant.prototype.display = function () {
        $("#cardContainer").append("\n\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n  \t\t\t\t\t\t<img src=\"" + this.Image + "\" class=\"card-img-top\" alt=\"...\">\n  \t\t\t\t\t\t<div class=\"card-body\">\n  \t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.Name + "</h5>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.City + ",<br>" + this.ZIP + " " + this.Address + "</p>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.Tel + "<br>Type: " + this.Type + ",<br>" + this.Web + "</p>\n \t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>  \n\t\t\t");
    };
    return restaurant;
}(Place));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(Name, City, ZIP, Address, Image, EventDate, EventTime, TicketPrice) {
        var _this = _super.call(this, Name, City, ZIP, Address, Image) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.TicketPrice = TicketPrice;
        placesArr.push(_this);
        return _this;
    }
    events.prototype.display = function () {
        $("#cardContainer").append("\n\t\t\t<div class=\"col-lg-3 col-md-6 col-sm-12\">\n\t\t\t\t\t<div class=\"card\" style=\"width: 18rem;\">\n  \t\t\t\t\t\t<img src=\"" + this.Image + "\" class=\"card-img-top\" alt=\"...\">\n  \t\t\t\t\t\t<div class=\"card-body\">\n  \t\t\t\t\t\t\t<h5 class=\"card-title\">" + this.Name + "</h5>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.City + ",<br>" + this.ZIP + " " + this.Address + "</p>\n    \t\t\t\t\t\t<p class=\"card-text\">" + this.EventDate + "<br>" + this.EventTime + ",<br>" + this.TicketPrice + "</p>\n \t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
    };
    return events;
}(Place));
var placesArr = [];
placesArr.push(new Place("La Sagrada Familia", "Barcelona", "08013", "Carrer de Mallorca 401.", "img/sagradafamilia.jpg"));
placesArr.push(new Place("Casa Batllo", "Barcelona", "08007", "Passeig de Gracia 43.", "img/casabatllo2.png"));
new restaurant("Raco del Nuria", "Barcelona", "08002", "La Rambla 133.", "img/racodelnuria.jpg", "+34-933-01-05-77", "Mediterranean", "racodelnuria.com");
new restaurant("Las Fritas", "Barcelona", "08003", "Passeig de Joan de Borbo 12.", "img/lasfritas2.jpg", "+34-933-17-19-70", "Fast Food", "facebook.com/lasfritas/");
new events("FC Barcelona vs. Athletic Club de Bilbao", "Barcelona", "08028", "C. d'Aristides Maillol 12.", "img/foci.jpg", "06.23.2020", "22:00", "29 euro");
new events("La Pegatina", "Barcelona", "08038", "Av. Francesc Ferrer i Guardia 13.", "img/lapegatina.jpg", "06.27.2020", "21:00", "35 euro");
console.table(placesArr);
placesArr.forEach(function (place) { return place.display(); });
