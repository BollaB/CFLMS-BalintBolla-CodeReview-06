class Place {
	Name = "";
	City = "";
	ZIP = "";
	Address = "";
	Image = "";

	constructor(Name, City, ZIP, Address, Image){
		this.Name = Name;
		this.City = City;
		this.ZIP = ZIP;
		this.Address = Address;
		this.Image = Image;
	}
	display(){
		$("#cardContainer").append(`
			<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="card" style="width: 18rem;">
  						<img src="${this.Image}" class="card-img-top" alt="...">
  						<div class="card-body">
  							<h5 class="card-title">${this.Name}</h5>
    						<p class="card-text">${this.City},<br>${this.ZIP} ${this.Address}</p>
 						</div>
					</div>
				</div>  
			`);
	}
}

class restaurant extends Place {
	Tel;
	Type;
	Web;

	constructor(Name, City, ZIP, Address, Image, Tel, Type, Web){
		super(Name, City, ZIP, Address, Image);
		this.Tel = Tel;
		this.Type = Type;
		this.Web = Web;

		placesArr.push(this);
	}
	display(){
		$("#cardContainer").append(`
			<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="card" style="width: 18rem;">
  						<img src="${this.Image}" class="card-img-top" alt="...">
  						<div class="card-body">
  							<h5 class="card-title">${this.Name}</h5>
    						<p class="card-text">${this.City},<br>${this.ZIP} ${this.Address}</p>
    						<p class="card-text">${this.Tel}<br>Type: ${this.Type},<br>${this.Web}</p>
 						</div>
					</div>
				</div>  
			`);

	}
}

class events extends Place {
	EventDate;
	EventTime;
	TicketPrice;

	constructor(Name, City, ZIP, Address, Image, EventDate, EventTime, TicketPrice){
		super(Name, City, ZIP, Address, Image);
		this.EventDate = EventDate;
		this.EventTime = EventTime;
		this.TicketPrice = TicketPrice;

		placesArr.push(this);
	}
	display(){ 
		$("#cardContainer").append(`
			<div class="col-lg-3 col-md-6 col-sm-12">
					<div class="card" style="width: 18rem;">
  						<img src="${this.Image}" class="card-img-top" alt="...">
  						<div class="card-body">
  							<h5 class="card-title">${this.Name}</h5>
    						<p class="card-text">${this.City},<br>${this.ZIP} ${this.Address}</p>
    						<p class="card-text">${this.EventDate}<br>${this.EventTime},<br>${this.TicketPrice}</p>
 						</div>
					</div>
				</div>
			`);
	}
}

let placesArr = [];

placesArr.push(
		new Place(
			"La Sagrada Familia",
			"Barcelona",
			"08013",
			"Carrer de Mallorca 401.",
			"img/sagradafamilia.jpg"
			)
	);

placesArr.push(
		new Place(
			"Casa Batllo",
			"Barcelona",
			"08007",
			"Passeig de Gracia 43.",
			"img/casabatllo2.png"
			)
	);

new restaurant(
		"Raco del Nuria",
		"Barcelona",
		"08002",
		"La Rambla 133.",
		"img/racodelnuria.jpg",
		"+34-933-01-05-77",
		"Mediterranean",
		"racodelnuria.com"
	);

new restaurant(
		"Las Fritas",
		"Barcelona",
		"08003",
		"Passeig de Joan de Borbo 12.",
		"img/lasfritas2.jpg",
		"+34-933-17-19-70",
		"Fast Food",
		"facebook.com/lasfritas/"
	);

new events(
		"FC Barcelona vs. Athletic Club de Bilbao",
		"Barcelona",
		"08028",
		"C. d'Aristides Maillol 12.",
		"img/foci.jpg",
		"06.23.2020",
		"22:00",
		"29 euro"
	);

new events(
		"La Pegatina",
		"Barcelona",
		"08038",
		"Av. Francesc Ferrer i Guardia 13.",
		"img/lapegatina.jpg",
		"06.27.2020",
		"21:00",
		"35 euro"
	);

console.table(placesArr);

placesArr.forEach(place => place.display());
