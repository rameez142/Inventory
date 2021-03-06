import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fadeInOut } from '../../../services/animations';
import { ConfigurationService } from '../../../services/configuration.service';

import { AlertService, DialogType, MessageSeverity } from '../../../services/alert.service';
import { ModalService } from '../../../services/modalservice';

@Component({
  selector: 'app-deviceavailability',
  templateUrl: './deviceavailability.component.html',
  styleUrls: ['./deviceavailability.component.css']
})
export class DeviceavailabilityComponent implements OnInit {



  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'Device availablity',
      display: true
    }
  };
  public barChartLabels: string[] = ['Section1', 'Section2', 'Section3'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [100, 200, 49], label: 'On Duty', backgroundColor: ['#ff6384'] },
    { data: [1, 4, 5], label: 'Leave', backgroundColor: ['#ff6384'] }
  ];

  constructor(public configurations: ConfigurationService, private alertService: AlertService,
    private modalService: ModalService) {
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

  }
  ngOnInit() {
  }
}
