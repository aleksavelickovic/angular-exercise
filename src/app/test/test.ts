import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  public nekistring: string = "ovo je moj string"
}
