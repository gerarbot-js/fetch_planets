import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  counter(typeOfSatellite: string): number {
    let accumulator: number = 0;
   
    for (let satellite of this.satellites) {
      if (satellite.type.toLowerCase() === typeOfSatellite.toLowerCase()) {
        accumulator += 1;
      }
    }
    return accumulator;
  }

}

// if (satellite.type.toLowerCase().includes(typeOfSatellite.toLowerCase())) {
  // This also works for the counter() "if" statement.