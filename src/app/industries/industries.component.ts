import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss'
})
export class IndustriesComponent {
  slideConfig = {
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1199, // For devices with width <= 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides on medium devices
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 768, // For devices with width <= 768px
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll: 1,
          arrows: false, // Hide arrows for smaller screens
          dots: true, // Enable dots for easier navigation
        }
      },
      {
        breakpoint: 480, // For devices with width <= 480px
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };



  slides = [
    {
      img: "assets/healthcare.png",
      heading: "Healthcare",
      linkText: "Learn More",
      linkUrl: "/healthcare"
    },
    {
      img: "assets/construction.jpg",
      heading: "Construction",
      linkText: "Learn more",
      linkUrl: "/construction"
    },
    {
      img: "assets/oil.jpg",
      heading: "Oil & Gas",
      linkText: "Learn more",
      linkUrl: "/education"
    },
    {
      img: "assets/goverment.jpg",
      heading: "Government",
      linkText: "Learn more",
      linkUrl: "/technology"
    },
    {
      img: "assets/oil.jpg",
      heading: "Oil & Gas",
      linkText: "Learn more",
      linkUrl: "/education"
    },
  ];

}
