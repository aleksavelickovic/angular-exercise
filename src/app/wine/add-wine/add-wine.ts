import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Wine} from '../model/wine';
import {WineService} from '../wine-service';
import {Router} from '@angular/router';

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
    country: new FormControl(),
    region: new FormControl()
  })

  constructor(private service: WineService, private router: Router) {
  }

  create(): void {
    if (this.createWineForm.valid) {
      let wine: Wine = {
        name: this.createWineForm.value.name,
        year: this.createWineForm.value.year,
        grapes: this.createWineForm.value.grapes,
        description: this.createWineForm.value.description,
        country: this.createWineForm.value.country,
        region: this.createWineForm.value.region
      }
      console.log(wine)
      this.service.addWine(wine).subscribe({
        next: (wine: Wine) => {
          console.log(wine)
          this.router.navigate(['wines'])
        },
        error: (_) => {
          console.error("Greska!")
        }
      })
    }

  }
}
