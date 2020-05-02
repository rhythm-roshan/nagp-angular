import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Covid19DataService } from 'src/app/core/services/covid19-data/covid19-data.service';
import { IStateDetails } from 'src/app/infrastructure/interfaces/istate-details';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.css']
})
export class StateWiseComponent implements OnInit {
  displayedColumns: string[] = ['state', 'confirmed', 'active', 'deaths', 'recovered'];
  constructor(private dataService: Covid19DataService, private router: Router) { }
  stateData: IStateDetails[];
  dataSource = new MatTableDataSource(this.stateData);
  resultsLength  = 0;
  ngOnInit(): void {

    this.dataService.getStateData().subscribe((data) => {
      console.log(data);
      this.stateData = data;
      this.dataSource.data = data;
      this.resultsLength = data.length;
    });    
  } 


  navigate(state) {
    if (state.statecode != "TT") {
      this.router.navigate(['/dashboard/district/' + state.statecode]); //we can send product object as route param
    }
    console.log(state);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}