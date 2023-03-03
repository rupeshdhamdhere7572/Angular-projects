import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  title = 'Form2';
  constructor() { }


  form2 = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    mobile: new FormControl('', [Validators.required, Validators.pattern("^[789]{1,2}+[0-9]{1,9}$")]),
    dob: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),                // OR  email:new FormControl('',[Validators.required,Validators.pattern("(^[a-z]{1,1})+([a-z0-9]{0,9})+([._]{0,1})([a-z0-9]{1,19})+([@]{1,1})([a-z]{2,19})+([.]{1,1})(com|co.in|in|org|usa|fr|edu)$")]),
    pincode: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{6}$")]),
    gender: new FormControl('', [Validators.required]),
    filter: new FormControl(''),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  info = {
    uname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
    acceptTerms: false,
    country: "",
    state: "",
    city: "",
  };


  selectedCountry: String = "--Choose Country--";
  selectedState: String = "--Choose State--";
  states: any;
  c1: any;
  cities1: any;
  statelist: Array<any> = [
    { name: "Maharashtra", cities: ["Pune", "Nagpur", "Nashik", "Aurangabad", "Mumbai"] },
    { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Rajkot", "Junagadh", "Gandhinagar"] },
    { name: "Karnataka", cities: ["Mysore", "Davangere", "Mangalore", "Bengaluru", "Belgaum"] },
    { name: "Punjab", cities: ["Amritsar", "Jalandhar", "Ludhiana", "Patiala", "Kapurthala"] },
    { name: "Tamil Nadu", cities: ["Chennai", "Tiruchirappalli", "Madurai", "Erode", "Vellore"] },
    { name: "Berlin", cities: ["Charlottenburg", "Spandau", "Tempelhof", "Tiergarten"] },
    { name: "Bavaria", cities: ["Donauwörth", "Erlangen", "Freising", "Fürth", "Füssen"] },
    { name: "Hessen", cities: ["Bad Homburg", "Darmstadt", "Frankfurt am Main", "Fulda", "Giessen"] },
    { name: "Lower Saxony", cities: ["Bad Harzburg", "Braunschweig", "Celle", "Cuxhaven"] },
    { name: "Saarland", cities: ["Homburg", "Reinheim", "Saarbrücken", "Saarlouis"] },
    { name: "Northern Territory", cities: ["Alice Springs", "Anthony Lagoon", "Darwin", "Katherine", "Tennant Creek"] },
    { name: "Queensland", cities: ["Charters Towers", "Cooktown", "Dalby", "Deception Bay", "Emerald"] },
    { name: "South Australia", cities: ["Mount Gambier", "Murray Bridge", "Naracoorte", "Oodnadatta", "Port Adelaide Enfield"] },
    { name: "Tasmania", cities: ["Hobart", "Kingston", "Launceston", "New Norfolk", "Queenstown"] },
    { name: "Victoria", cities: ["Colac", "Echuca", "Geelong", "Hamilton", "Healesville"] },
    { name: "Aichi", cities: ["Handa", "Hekinan", "Ichinomiya", "Inazawa", "Kariya"] },
    { name: "Chiba", cities: ["Ichikawa", "Kashiwa", "Kisarazu", "Matsudo", "Narashino"] },
    { name: "Ehime", cities: ["Imabari", "Matsuyama", "Niihama", "Saijō", "Uwajima"] },
    { name: "Fukuoka", cities: ["Iizuka", "Kitakyūshū", "Kurume", "Nōgata", "Ōkawa"] },
    { name: "Gumma", cities: ["Kiryū", "Maebashi", "Ōta", "Takasaki", "Tatebayashi"] },
    { name: "Chihuahua", cities: ["Casas Grandes", "Chihuahua", "Ciudad Delicias", "Hidalgo del Parral", "Juárez"] },
    { name: "Coahuila", cities: ["Piedras Negras", "Sabinas", "Saltillo", "San Pedro", "Torreón"] },
    { name: "Federal District", cities: ["Atzcapotzalco", "Churubusco", "Coyoacán", "Magdalena", "Mexico City"] },
    { name: "Guanajuato", cities: ["Celaya", "Cortazar", "Guanajuato", "Irapuato", "León"] },
    { name: "Guerrero", cities: ["Acapulco", "Chilpancingo", "Iguala", "Taxco"] },
  ]
  countries: Array<any> = [
    { name: "India", states: [{ name: "Maharashtra" }, { name: "Gujarat" }, { name: "Karnataka" }, { name: "Punjab" }, { name: "Tamil Nadu" }] },
    { name: "Germany", states: [{ name: "Berlin" }, { name: "Bavaria" }, { name: "Hessen" }, { name: "Lower Saxony" }, { name: "Saarland" }] },
    { name: "Australia", states: [{ name: "Northern Territory" }, { name: "Queensland" }, { name: "South Australia" }, { name: "Tasmania" }, { name: "Victoria" }] },
    { name: "Japan", states: [{ name: "Aichi" }, { name: "Chiba" }, { name: "Ehime" }, { name: "Fukuoka" }, { name: "Gumma" }] },
    { name: "Mexico", states: [{ name: "Chihuahua" }, { name: "Coahuila" }, { name: "Federal District" }, { name: "Guanajuato" }, { name: "Guerrero" }] }
  ]

  c = ["India", "Germany", "Australia", "Japan", "Mexico"];


  get f() {
    return this.form2.controls;
  }
  reset() {

  }

  ngOnInit(): void {
  }
  Submit(f: NgForm): void {
    console.log(f.value);
  }

  // cascading dropdown

  changeCountry(country: any) {


    this.c1 = this.countries.find((cntry: any) =>
      cntry.name == country.target.value)
    console.log(this.c1.states);
    this.states = this.c1.states;


  }
  changeState(state: any) {
    this.cities1 = this.statelist.find((cntry: any) =>
      cntry.name == state.target.value).cities;
  }

}

