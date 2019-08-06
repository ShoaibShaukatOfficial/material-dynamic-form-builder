import { Component, OnInit, Inject } from '@angular/core';
import { DynamicContorlDataService } from '../../core/services/dynamic-control-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  controlsData: any[];
  start = false;
  finish = false;
  finalScore: any;
  constructor(@Inject(DynamicContorlDataService) public service: DynamicContorlDataService) {
  }

  ngOnInit() {
  }
  saveClick() {
    this.start = !this.start;
    this.finalScore = this.controlsData.filter(res => res.value === res.answer).length;
  }
  startQuiz() {
    this.controlsData = this.service.getcontrols();
    this.start = !this.start;
    this.finalScore = 0;
  }
}
