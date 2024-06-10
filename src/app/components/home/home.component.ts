import {AfterViewInit, Component} from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import {HttpService} from "../../services/http.service";
import {SalesReportModel} from "../../models/sales-report";
import {DatePipe} from "@angular/common";

declare var Chart: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe]
})
export class HomeComponent implements AfterViewInit{
  chart: any;

  constructor(
    private http: HttpService,
    private date: DatePipe
  ) {
  }

  ngAfterViewInit() {
    this.showChart();
    this.getSalesReport();
  }

  getSalesReport() {
    this.http.get<SalesReportModel>('Reports/SalesReports', (res)=>{
      this.chart.data.labels = res.dates.map(d=>this.date.transform(d, 'dd/MM/yyyy'));
      this.chart.data.datasets[0].data = res.amounts;
      this.chart.update();
    })
  }

  showChart() {
    const ctx = document.getElementById('myChart');

   this.chart= new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# Günlük Satışlar',
          data: [],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}
