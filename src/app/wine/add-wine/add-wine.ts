import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Wine} from '../model/wine';
import {WineService} from '../wine-service';

@Component({
  selector: 'app-add-wine',
  standalone: false,
  templateUrl: './add-wine.html',
  styleUrl: './add-wine.css'
})
export class AddWine {

  createWineForm = new FormGroup({
    name: new FormControl(),
    year: new FormControl(),
    grapes: new FormControl(),
    description: new FormControl(),
  })

  constructor(private service: WineService) {
  }

  create(): void {
    if (this.createWineForm.valid) {
      let wine: Wine = {
        name: this.createWineForm.value.name,
        year: this.createWineForm.value.year,
        grapes: this.createWineForm.value.grapes,
        description: this.createWineForm.value.description
      }
      console.log(wine)
      this.service.addWine(wine)
    }

  }
}
