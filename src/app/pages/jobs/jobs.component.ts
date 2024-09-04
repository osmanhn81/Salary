import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html'

})
export class JobsComponent {

  data: any[] = [];
  constructor(private ApiService: ApiService) {}
  ngOnInit(): void {

      this.llenarData();
  }
  llenarData() {
        this.ApiService.getData().subscribe( data => {
            this.data =  data;
        })
  }
}
