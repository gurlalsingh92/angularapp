import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-scroll',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterLink],
  templateUrl: './about-scroll.component.html',
  styleUrl: './about-scroll.component.scss'
})
export class AboutScrollComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'capabilityData', name: 'Our Capabilities' },
    { id: 'process', name: 'Our Process' },
    { id: 'benfits-rfid', name: 'Benefits' },
    { id: 'why-dham', name: 'Why Us' },
    { id: 'how-rfid-help', name: 'Use Cases' },
    { id: 'network-partners', name: 'Partners' },
    { id: 'relatedSection', name: 'Related Solutions' },
    { id: 'partners-section', name: 'Next Steps' },
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
    description: "RFID technology provides real-time visibility, accuracy, and efficiency in asset and inventory management. By automating processes and reducing errors, RFID enables better decision-making, cost savings, and the ability to identify bottlenecks, ultimately optimizing operations and improving productivity.",
    groupsArray: [
      { title: "Improved Accuracy", description: "RFID reduces human errors, enabling precise asset and inventory tracking for reliable data." },
      { title: "Real-Time Tracking", description: "RFID delivers real-time asset visibility, enhancing decision-making and enabling prompt actions with current data." },
      { title: "Enhanced Efficiency", description: "Automated tracking streamlines operations, reducing manual effort and saving time on inventory and reporting tasks." },
      { title: "Cost Savings", description: "RFID reduces labor and operational costs by automating inventory checks, minimizing loss, and optimizing supply chain processes." },
      { title: "Better Decision-Making", description: "Accurate, real-time RFID data helps managers make informed decisions on resources, inventory, and operations." },
      { title: "Identifying Bottlenecks", description: "RFID pinpoints inefficiencies in supply chains and operations, identifying delays and underused resources." }
    ]
  };

  help = {
    title: "How RFID helps you",
    //headingArray: ["Manufacturing", "Manufacturing"],
    description: "Helps description goes here."
  };

  help2 = {
    tabArray: ['Manufacturing', 'Healthcare', 'Construction', 'Education', 'Oil & Gas', 'Government', 'Logistics', 'Retail'],
    helps: [
      { title: 'Manufacturing', description: 'RFID streamlines production workflows, tracks raw materials and finished goods, and ensures quality control by providing real-time data on equipment and asset statuses, reducing downtime and enhancing operational efficiency.' },
      { title: 'Healthcare', description: 'RFID improves patient safety by tracking medical equipment, supplies, and medications in real-time. It ensures accurate patient identification and reduces errors while streamlining inventory management in hospitals and clinics.' },
      { title: 'Construction', description: 'RFID in construction ensures efficient tracking of tools, materials, and workers on-site, improving equipment utilization and reducing theft. It enhances project management by offering real-time data for materials and workforce productivity.' },
      { title: 'Education', description: 'RFID can streamline library systems by tracking books, enhance campus security through access control, and manage student attendance, ensuring real-time monitoring of assets and improving campus safety.' },
      { title: 'Oil & Gas', description: 'RFID helps in managing assets like pipelines, rigs, and drilling equipment, ensuring safety compliance and streamlining maintenance schedules. It also tracks inventory and parts, reducing loss and downtime in high-demand environments.' },
      { title: 'Government', description: 'RFID is used for asset tracking, security monitoring, and managing government inventories like vehicles, equipment, and public records. It supports regulatory compliance by ensuring up-to-date and accurate asset tracking.' },
      { title: 'Logistics', description: 'In logistics, RFID improves tracking and visibility across the supply chain. It automates inventory checks, reduces human error, and speeds up shipments, improving overall operational efficiency and customer satisfaction.' },
      { title: 'Retail', description: 'RFID enhances inventory accuracy, reduces stockouts, and enables better customer experiences by streamlining product tracking, from warehouse to store shelves. It also supports efficient checkout systems and loss prevention strategies.' },
    ],
  };
  selectedTab = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }


  partners = {
    title: "Partner with our specialists for strategic planning.",
    description: "Begin with a strategy session to uncover ways technology can drive solutions, streamline processes, and unlock new opportunities.",
    button: "Reach out to us today",
  };

  partnernetwork = [
    {
      image: "assets/Logos/Impinj.png",
      title: "Impinj"
    },
    {
      image: "assets/Logos/alien.png",
      title: "Alien",
    },
    {
      image: "assets/Logos/Chinway-Logo.png",
      title: "Chain way",
    },
    {
      image: "assets/Logos/HID.png",
      title: "HID",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "Smartrac",
    },

    {
      image: "assets/Logos/sato_logo.png",
      title: "Sato",
    },
    {
      image: "assets/Logos/times-7.png",
      title: "Times-7",
    },
    {
      image: "assets/Logos/honeywell.png",
      title: "Honeywell",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "Avery Dennison",
    },






  ];

  relatedSolutions = [
    { title: "Application Management Services", description: "RFID solutions require ongoing management to ensure smooth performance, from system updates to monitoring, making application management a key service." },
    { title: "Artificial Intelligence (AI)", description: "AI can optimize RFID data analysis, enabling predictive maintenance, smarter inventory management, and real-time decision-making based on RFID data." },

    { title: "Cloud Computing Services", description: "Cloud computing enhances RFID by enabling remote data access and scalable storage for RFID system data, supporting real-time tracking and analytics." },
    { title: "Application Development Services", description: "Custom applications tailored to integrate RFID technology, providing seamless operation and improved user experience across industries like logistics, retail, and healthcare." },
    { title: "Internet of Things (IoT)", description: "RFID is a critical component of IoT, as it connects physical objects to the digital world, enabling smart automation, asset tracking, and real-time monitoring." },
  ];

  ngOnInit(): void { }
}

