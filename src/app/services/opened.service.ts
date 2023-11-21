import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenedService {
  mechanicIsOpened = false;

  constructor() {
  }
}
