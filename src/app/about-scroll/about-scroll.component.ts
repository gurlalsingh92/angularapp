import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';
import { WorkingAtDcgComponent } from '../homesections/working-at-dcg/working-at-dcg.component';
@Component({
  selector: 'app-about-scroll',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterLink, WorkingAtDcgComponent],
  templateUrl: './about-scroll.component.html',
  styleUrl: './about-scroll.component.scss'
})
export class AboutScrollComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Mission' },
    { id: 'dcgoverview', name: 'Overview' },
    { id: 'capabilityData', name: 'Core Values' },
    { id: 'process', name: 'Our Approach' },
    { id: 'why-dham', name: 'Why Us' },
    { id: 'partners-section', name: 'Next Steps' },
    { id: 'wdcg', name: 'Careers' },
  ];

  activeSection: string = ''; // Tracks the currently active section's ID

  ngAfterViewInit() {
    // Set up the IntersectionObserver to track sections in the viewport
    const observerOptions = {
      root: null, // Observe the viewport
      rootMargin: '0px', // No offset
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When a section is visible, set it as active
          this.activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    // Observe each section
    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      // Scroll smoothly to the target section
      element.scrollIntoView({ behavior: 'smooth' });
      // Set the active section to highlight the correct link
      this.activeSection = id;
    }
  }

  constructor() { }

  slideConfigcap = {
    slidesToShow: 3.5, // Default number of slides to show
    slidesToScroll: 3,
    infinite: false,
    dots: false,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slideConfig = {
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 3,
    infinite: true,
    dots: false,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  slideConfignew = {
    slidesToShow: 4, // Default number of slides to show
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    swipe: true,
    autoplay: true,          // Enables autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  };

  overview = {
    title: "Mission Statement",
    description: "At Dham Consulting Group, our mission is to empower businesses with innovative technology solutions that drive efficiency, enhance productivity, and transform operations. We strive to deliver exceptional value through tailored services, combining expertise in software development, cloud management, and cutting-edge technologies like RFID and IoT. Our goal is to be a trusted partner, enabling sustainable growth and long-term success for our clients."
  };

  capability = {
    title: "Our Core Values",
    description: "At Dham Consulting Group, our core values guide every aspect of our work. They shape how we interact with clients, approach challenges, and drive success together.",
    capabilities: [
      { title: "01 Innovation", description: "We embrace cutting-edge technology and creative thinking to deliver forward-looking solutions." },
      { title: "02 Customer-Centricity", description: "Your success is our priority; we tailor every solution to meet your unique needs." },
      { title: "03 Integrity", description: "We build trust through honesty, transparency, and a commitment to delivering on our promises." },
      { title: "04 Inclusion and Diversity", description: "We foster an inclusive and diverse work environment where every voice is valued, and diverse perspectives drive innovation and success." },
      { title: "05 Excellence", description: "We strive for quality and precision in every project, ensuring exceptional results every time." },
      { title: "06 Collaboration", description: "We believe in the power of teamwork, working closely with clients and partners to achieve shared success and innovative solutions." },
    ]
  };

  solutions = {
    title: "Our Approach",
    description: "At Dham Consulting Group, we believe in a client-first methodology, combining innovation, expertise, and collaboration to address unique challenges. Our approach includes:",
    solutionsArray: [
      {
        title: "Understanding Your Needs", description: "We start by listening and analyzing your business challenges, ensuring our solutions align with your goals."
      },
      { title: "Customized Strategies", description: "Leveraging industry best practices, we craft tailored solutions that fit seamlessly into your operations." },
      { title: "Agility and Innovation", description: "Our team embraces the latest technologies, delivering cutting-edge solutions that adapt to evolving needs." },
      {
        title: "End-to-End Partnership", description: "From strategy to implementation and beyond, we stand by your side to ensure sustained success."
      },
      { title: "Continuous Improvement", description: "We don’t stop at delivery. Our ongoing support and optimization services ensure you stay ahead in your industry." }
    ]
  };

  benefits = {
    title: "Benefits of Radio Frequency IDentification (RFID)",
    description: "RFID technology provides real-time visibility, accuracy, and efficiency in asset and inventory management. By automating processes and reducing errors, RFID enables better decision-making, cost savings, and the ability to identify bottlenecks, ultimately optimizing operations and improving productivity.",
    benefitsArray: [
      { title: "Improved Accuracy", description: "RFID minimizes human errors, ensuring highly accurate asset and inventory tracking, leading to more reliable operational data." },
      { title: "Real-Time Tracking", description: "RFID provides real-time visibility into asset locations, improving decision-making and enabling immediate action based on up-to-date information." },
      { title: "Better Decision-Making", description: "With accurate, real-time data from RFID systems, managers can make better, informed decisions on resource allocation, inventory levels, and operational improvements." },
      { title: "Enhanced Efficiency", description: "Automated tracking streamlines operations, reducing manual effort and saving time on inventory and reporting tasks." },
      { title: "Cost Savings", description: "RFID reduces labor and operational costs by automating inventory checks, minimizing loss, and optimizing supply chain processes." },
      { title: "Identifying Bottlenecks", description: "RFID pinpoints inefficiencies in supply chains and operations, identifying delays and underused resources." },

    ]
  };

  groups = {
    title: "Why Dham Consulting Group",
    description: "",
    groupsArray: [
      { title: "Expertise Across Industries", description: "Our team brings decades of experience across diverse industries, ensuring solutions that meet specific business needs." },
      { title: "Client-Centric Approach", description: "We prioritize your goals, delivering tailored strategies that drive measurable outcomes." },
      { title: "Innovative Solutions", description: "Leveraging the latest technologies, we deliver forward-thinking solutions for complex challenges." },
      { title: "End-to-End Services", description: "From strategy and development to deployment and support, we provide comprehensive solutions." },
      { title: "Scalable and Cost-Effective Solutions", description: "Whether you're a startup or an enterprise, we design solutions that grow with you, optimizing costs." },
      { title: "Commitment to Excellence", description: "Our mission is to exceed expectations, ensuring long-term success for our clients." }
    ]
  };

  help = {
    title: "How RFID helps you",
    //headingArray: ["Manufacturing", "Manufacturing"],
    description: "Helps description goes here."
  };


  selectedTab = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }


  partners = {
    image: "assets/craft.jpg",
    description: "We’re here to help you take the next step in your technology journey. Contact us today to discuss your needs and discover how Dham Consulting Group can create innovative solutions tailored to your goals.",
    button: "Contact Us",
  };




  ngOnInit(): void { }
}

