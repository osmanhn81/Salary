import { Component, input, OnInit } from '@angular/core';
import { response } from 'express';
import { ApiService } from '../../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


export interface DataType {

  date: string;
  idjob: string;
  hours: string;
}


@Component({
  selector: 'app-add-hours-worked',
  templateUrl: './add-hours-worked.component.html',

})
export class AddHoursWorkedComponent implements OnInit {

  data: any[] = [];
  constructor(private ApiService: ApiService ) {}

  date!: string;
  idjob!: string;
  hours!: string;

  ngOnInit(): void {

      this.llenarData();
  }
  llenarData() {
        this.ApiService.getData().subscribe( result => {
            this.data =  result;
        });
  }
  llenarPayDate() {

         var Inputdata = {
          date:  this.date,
          idjob: this.idjob,
          hours: this.hours
      };

      console.log(Inputdata);
      this.ApiService.insertPayDate(Inputdata).subscribe( response=> {

              console.log('Segundo console log', response);

      });
  }
}
