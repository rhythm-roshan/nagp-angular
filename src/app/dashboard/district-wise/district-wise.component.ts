import { Component, OnInit, DoCheck, Input, AfterContentInit } from '@angular/core';
import { Covid19DataService } from 'src/app/core/services/covid19-data/covid19-data.service';
import { IDistrictDetails } from 'src/app/infrastructure/interfaces/idistrict-details';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-district-wise',
  templateUrl: './district-wise.component.html',
  styleUrls: ['./district-wise.component.css']
})
export class DistrictWiseComponent implements OnInit, AfterContentInit {

  constructor(private dataService: Covid19DataService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  districtData: IDistrictDetails[];
  eachDistrictData: any;
  currentStateId: string;
  dataSource: any;
  stateName: string;
  isVisible: boolean = true;
  displayedColumns: string[] = ['district', 'confirmed', 'active', 'deaths', 'recovered'];

  ngOnInit(): void {
    this.getDistrictData()    
  }

 async getDistrictData() {
     await this.dataService.getDistrictData().then(res =>
      {
        this.districtData = res;
        this.setData();
      });
     console.log('yoyoy');
     console.log(this.districtData);
  }

  ngAfterContentInit() {
    // this.setData();
    // console.log('yoyoy');
  }

  setData() {
    this.currentStateId = this.activatedRoute.snapshot.params.id;
    this.eachDistrictData = this.districtData.find(data => data.statecode == this.currentStateId);
    console.log(this.eachDistrictData);
    if (this.eachDistrictData) {
      this.stateName = this.eachDistrictData.state;
      this.dataSource = this.eachDistrictData.districtData;
    }
    else
    {
     this.isVisible = false;
    }

  }

  goBack(): void {
    this.route.navigate(['/dashboard/state']);
  }

}
