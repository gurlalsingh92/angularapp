import { Component } from '@angular/core';
import { HeroComponent } from '../homesections/hero/hero.component';
import { ServicesComponent } from '../homesections/services/services.component';
import { LaunchpadSmallBussinessComponent } from '../homesections/launchpad-small-bussiness/launchpad-small-bussiness.component';
import { IndustriesComponent } from '../homesections/industries/industries.component';
import { SimplifyItComponent } from '../homesections/simplify-it/simplify-it.component';
import { WorkingAtDcgComponent } from '../homesections/working-at-dcg/working-at-dcg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, WorkingAtDcgComponent, LaunchpadSmallBussinessComponent, SimplifyItComponent, IndustriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
