import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Wine} from '../model/wine';

@Component({
  selector: 'app-wine-card',
  standalone: false,
  templateUrl: './wine-card.html',
  styleUrl: './wine-card.css'
})
export class WineCard {

  @Input()
  wine?: Wine

  @Output()
  clicked: EventEmitter<Wine> = new EventEmitter<Wine>();

  onWineClicked(): void {
    console.log(this.wine)
    this.clicked.emit(this.wine)
  }
}
