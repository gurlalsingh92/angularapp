import { Component } from '@angular/core';
import { WorkingAtDcgComponent } from '../homesections/working-at-dcg/working-at-dcg.component';
import { AboutScrollComponent } from '../about-scroll/about-scroll.component';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [WorkingAtDcgComponent, AboutScrollComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
