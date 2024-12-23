import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  slideConfig = {
    slidesToShow: 1, // Default number of slides to show
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    swipe: true,
  };



  slides = [
    {
      img: "assets/digital-transformation.png",
      heading: "Instant Operational Insights",
      Bigheading: "Unlock real-time insights to drive smarter decisions and optimize operations with data that updates as quickly as your business moves.",
      linkText: "Learn More",
      linkUrl: "/#"
    },
    {
      img: "assets/digital-transformation.png",
      heading: "Instant Operational Insights",
      Bigheading: "Unlock real-time insights to drive smarter decisions and optimize operations with data that updates as quickly as your business moves.",
      linkText: "Learn More",
      linkUrl: "/#"
    },
    {
      img: "assets/digital-transformation.png",
      heading: "Instant Operational Insights",
      Bigheading: "Unlock real-time insights to drive smarter decisions and optimize operations with data that updates as quickly as your business moves.",
      linkText: "Learn More",
      linkUrl: "/#"
    },
    {
      img: "assets/digital-transformation.png",
      heading: "Instant Operational Insights",
      Bigheading: "Unlock real-time insights to drive smarter decisions and optimize operations with data that updates as quickly as your business moves.",
      linkText: "Learn More",
      linkUrl: "/#"
    },
    {
      img: "assets/digital-transformation.png",
      heading: "Instant Operational Insights",
      Bigheading: "Unlock real-time insights to drive smarter decisions and optimize operations with data that updates as quickly as your business moves.",
      linkText: "Learn More",
      linkUrl: "/#"
    },
  ];

}

