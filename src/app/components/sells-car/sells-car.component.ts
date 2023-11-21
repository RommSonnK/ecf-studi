import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../models/vehicle";
import {VehicleService} from "../../services/vehicle.service";

@Component({
  selector: 'app-sells-car',
  templateUrl: './sells-car.component.html',
  styleUrls: ['./sells-car.component.scss'],
})
export class SellsCarComponent implements OnInit {

  vehicles: Vehicle[] = []

  nameFilter = '';
  kilometerMinFilter: number|undefined;
  kilometerMaxFilter: number|undefined;
  priceMinFilter: number|undefined;
  priceMaxFilter: number|undefined;
  yearsMinFilter: number|undefined;
  yearsMaxFilter: number|undefined;

  constructor(vehicleService: VehicleService) {
    vehicleService.getVehicleList().subscribe((data) => {
      console.log(data);
      this.vehicles = data;
    });
  }

  filtering(vehicle: Vehicle) {
    let inFilter = true;
    if (!vehicle.description.toUpperCase().includes(this.nameFilter.toUpperCase()))
      inFilter = false;
    if (this.yearsMinFilter) {
      if (!(this.yearsMinFilter <= vehicle.annee))
        inFilter = false
    }
    if (this.yearsMaxFilter) {
      if (!(vehicle.annee <= this.yearsMaxFilter))
        inFilter = false
    }
    if (this.kilometerMinFilter) {
      if (!(this.kilometerMinFilter <= vehicle.kilometrage))
        inFilter = false
    }
    if (this.kilometerMaxFilter) {
      if (!(vehicle.kilometrage <= this.kilometerMaxFilter))
        inFilter = false
    }
    if (this.priceMinFilter) {
      if (!(this.priceMinFilter <= vehicle.prix))
        inFilter = false
    }
    if (this.priceMaxFilter) {
      if (!(vehicle.prix <= this.priceMaxFilter))
        inFilter = false
    }
    return inFilter;
  }

  ngOnInit() {
  }

}
