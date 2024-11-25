import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from "./hero/hero.component";
import { ServicesComponent } from './services/services.component';
import { LaunchpadSmallBussinessComponent } from './launchpad-small-bussiness/launchpad-small-bussiness.component';
import { IndustriesComponent } from './industries/industries.component';
import { SimplifyItComponent } from './simplify-it/simplify-it.component';
import { WorkingAtDcgComponent } from './working-at-dcg/working-at-dcg.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ServicesComponent, FooterComponent, WorkingAtDcgComponent, LaunchpadSmallBussinessComponent, SimplifyItComponent, IndustriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularapp';
}
