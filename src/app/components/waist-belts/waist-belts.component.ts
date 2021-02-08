import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { waistBeltImages } from '../../interfaces/beltImages'
import { beltImages } from './beltImages';


@Component({
  selector: 'app-waist-belts',
  templateUrl: './waist-belts.component.html',
  styleUrls: ['./waist-belts.component.css']
})
export class WaistBeltsComponent implements OnInit {

  beltImages: waistBeltImages[] = [];
  constructor(private router: Router ) { }

  ngOnInit() {

    this.beltImages = beltImages;
  }

}
