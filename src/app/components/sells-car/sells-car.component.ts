import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../models/vehicle";

@Component({
  selector: 'app-sells-car',
  templateUrl: './sells-car.component.html',
  styleUrls: ['./sells-car.component.scss'],
})
export class SellsCarComponent implements OnInit {

  vehicles: Vehicle[] = [
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Renault_Clio_II_Phase_II_1.2_Confort_Authentique.JPG/1200px-Renault_Clio_II_Phase_II_1.2_Confort_Authentique.JPG",
      description: "Vend ma jolie clio 2 reprogrammé",
      kilometer: 136000,
      price: 2700,
      years: 2012
    },
    {
      photo: "https://images.autouncle.com/fr/car_images/01e8607d-e961-4b9b-b37a-be5dcfc4f1ec_jaguar-xf-classic-a-2-2-d-163.jpg",
      description: "Vend ma jaguar neuve full option",
      kilometer: 30000,
      price: 80000,
      years: 2019
    },
    {
      photo: "https://occasionautosoft.com/wp-content/uploads/2019/11/polo1-1.jpg",
      description: "Vend ma polo 5 I2 DCI salement tuné",
      kilometer: 194000,
      price: 5000,
      years: 2004
    },
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Renault_Clio_II_Phase_II_1.2_Confort_Authentique.JPG/1200px-Renault_Clio_II_Phase_II_1.2_Confort_Authentique.JPG",
      description: "Vend ma jolie clio 2 reprogrammé",
      kilometer: 136000,
      price: 2700,
      years: 2012
    },
    {
      photo: "https://images.autouncle.com/fr/car_images/01e8607d-e961-4b9b-b37a-be5dcfc4f1ec_jaguar-xf-classic-a-2-2-d-163.jpg",
      description: "Vend ma jaguar neuve full option",
      kilometer: 30000,
      price: 80000,
      years: 2019
    },
    {
      photo: "https://occasionautosoft.com/wp-content/uploads/2019/11/polo1-1.jpg",
      description: "Vend ma polo 5 I2 DCI salement tuné",
      kilometer: 194000,
      price: 5000,
      years: 2004
    }]

  nameFilter = '';
  kilometerMinFilter: number|undefined;
  kilometerMaxFilter: number|undefined;
  priceMinFilter: number|undefined;
  priceMaxFilter: number|undefined;
  yearsMinFilter: number|undefined;
  yearsMaxFilter: number|undefined;

  constructor() {
  }

  filtering(vehicle: Vehicle) {
    let inFilter = true;
    if (!vehicle.description.toUpperCase().includes(this.nameFilter.toUpperCase()))
      inFilter = false;
    if (this.yearsMinFilter) {
      if (!(this.yearsMinFilter <= vehicle.years))
        inFilter = false
    }
    if (this.yearsMaxFilter) {
      if (!(vehicle.years <= this.yearsMaxFilter))
        inFilter = false
    }
    if (this.kilometerMinFilter) {
      if (!(this.kilometerMinFilter <= vehicle.kilometer))
        inFilter = false
    }
    if (this.kilometerMaxFilter) {
      if (!(vehicle.kilometer <= this.kilometerMaxFilter))
        inFilter = false
    }
    if (this.priceMinFilter) {
      if (!(this.priceMinFilter <= vehicle.price))
        inFilter = false
    }
    if (this.priceMaxFilter) {
      if (!(vehicle.price <= this.priceMaxFilter))
        inFilter = false
    }
    return inFilter;
  }

  ngOnInit() {
  }

}
