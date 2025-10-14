import {Component, OnInit} from '@angular/core';
import {Wine} from '../model/wine';
import {WineService} from '../wine-service';

@Component({
  selector: 'app-wines',
  standalone: false,
  templateUrl: './wines.html',
  styleUrl: './wines.css'
})
export class Wines implements OnInit {
  public glavnistring: string = "ovo je glavni string komponente wines"

  wines: Wine[] = []

  constructor(private service: WineService) {
  }

  ngOnInit(): void {
    this.wines = this.service.getAllWines();
  }
}
