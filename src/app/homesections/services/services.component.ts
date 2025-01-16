import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardFooter } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardFooter, MatCardImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
