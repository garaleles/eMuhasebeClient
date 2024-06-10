import {Component} from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import {HttpService} from "../../services/http.service";

import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DatePipe]
})
export class HomeComponent {
  chart: any;

  constructor(
    private http: HttpService,
    private date: DatePipe
  ) {
  }





}
