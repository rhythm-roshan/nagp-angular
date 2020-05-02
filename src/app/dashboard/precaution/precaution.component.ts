import { Component, OnInit } from '@angular/core';
import { PrecautionDataService } from 'src/app/core/services/precaution/precaution-data.service';
import { IPrecautionMeasures } from 'src/app/infrastructure/interfaces/iprecaution-measures';

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.css']
})
export class PrecautionComponent implements OnInit {

  constructor(private dataService: PrecautionDataService) { }
  precaution : IPrecautionMeasures[];
  ngOnInit(): void { 

  this.dataService.getPrecautions().subscribe((data)=>{
    console.log(data);
    this.precaution = data;
  })  
  }
}
