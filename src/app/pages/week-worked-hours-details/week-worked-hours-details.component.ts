import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-week-worked-hours-details',
  templateUrl: './week-worked-hours-details.component.html',

})
export class WeekWorkedHoursDetailsComponent {

  data: any[] = [];
  constructor(private ApiService: ApiService) {}
  ngOnInit(): void {

      this.llenarData();
  }
  llenarData() {
        this.ApiService.getDataDetails().subscribe( result => {
            this.data =  result;
        })
  }


}
