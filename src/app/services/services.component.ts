import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardFooter } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatCardImage } from '@angular/material/card';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCard, MatCardContent, MatCardFooter, MatButton, MatCardImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
