import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Wine} from '../model/wine';
import {WineService} from '../wine-service';

@Component({
  selector: 'app-wine-details',
  standalone: false,
  templateUrl: './wine-details.html',
  styleUrl: './wine-details.css'
})
export class WineDetails implements OnInit {
  wine?: Wine;

  constructor(private route: ActivatedRoute, private service: WineService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']
      this.service.getOne(id).subscribe({
        next: (wine: Wine) => {
          this.wine = wine
        }
      })
    })
  }

}
