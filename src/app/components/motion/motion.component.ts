//src/app/components/motion/motion.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MotionService } from './Services/motion.service';
import { MotionData } from './Model/MotionData.model';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrl: './motion.component.scss'
})
export class MotionComponent implements OnInit, OnDestroy {
  
  constructor(private motionS: MotionService) {}

  motionData: MotionData = {};

  ngOnInit(): void {
    this.motionS.startMotionDetection((data: MotionData) => {
      setTimeout(() => {
        this.motionData = data;
        console.log('Motion Data (delayed):', this.motionData);
      }, 2000);
    });
  }

  ngOnDestroy(): void {
    
    this.motionS.stopMotionDetection();
  }
  
}