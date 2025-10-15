import {Component, OnInit} from '@angular/core';
import {WineService} from '../wine-service';
import {Wine} from '../model/wine';

@Component({
  selector: 'app-wine-cards',
  standalone: false,
  templateUrl: './wine-cards.html',
  styleUrl: './wine-cards.css'
})
export class WineCards implements OnInit {

  wines: Wine[] = [];
  clickedWine?: Wine;

  constructor(private service: WineService) {
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.getAllWines()
  }

  getAllWines(): void {
    this.service.getAllWines().subscribe({
      next: (wines: Wine[]) => {
        this.wines = wines
        console.log(wines)
      }
    })
  }

  onWineClicked(wine: Wine): void {
    this.clickedWine = wine;
  }

}
