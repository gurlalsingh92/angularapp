import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-rfid',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule, RouterLink],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './rfid.component.html',
  styleUrl: './rfid.component.scss',
})
export class RfidComponent implements AfterViewInit {
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
    title: "Overview",
    description: "RFID (Radio Frequency Identification) is a transformative technology for tracking and managing assets across industries. At Dham Consulting Group, we leverage our deep expertise in both RFID hardware and software to design, implement, and optimize end-to-end RFID solutions. From selecting the right tags and readers to integrating with enterprise systems, we ensure seamless deployments that enhance operational efficiency, improve asset visibility, and drive business insights. Whether you need inventory management, supply chain automation, or real-time tracking, we offer tailored solutions to meet your needs. Let us help you unlock the full potential of RFID technology."
  };

  capability = {
    title: "Explore our capabilities",
    description: "Our RFID expertise spans hardware, software, and system integration, enabling seamless asset tracking, real-time monitoring, and data-driven decision-making. With end-to-end solutions, we simplify operations and optimize productivity.",
    capabilities: [
      { title: "RFID Hardware Selection", description: "Expertise in selecting tags, readers, and antennas for varied environments." },
      { title: "Custom RFID Software", description: "Develop applications for data capture, processing, and reporting." },
      { title: "System Integration", description: "Seamlessly connect RFID with ERP, WMS, or custom systems." },
      { title: "Real-Time Asset Tracking", description: "Monitor and locate assets instantly for enhanced visibility." },
      { title: "Inventory Management", description: "Automate stock control to reduce errors and improve accuracy." },
      { title: "RFID Deployment", description: "End-to-end setup including configuration and on-site testing." },

      { title: "Data Analytics", description: "Provide actionable insights from collected RFID data." },
      { title: "Maintenance & Support", description: "Ongoing assistance to maintain system performance and uptime." },
      { title: "Compliance Solutions", description: "Ensure RFID systems meet industry and regulatory standards." }
    ]
  };

  solutions = {
    title: "Our RFID Solutions Process",
    description: "The process of developing an RFID solution involves several key phases that include hardware selection, software integration, system deployment, and continuous support. Each phase ensures that the RFID solution is tailored to meet business needs, improve operational efficiency, and provide reliable tracking. Here's an overview of the steps involved in creating an effective RFID solution:",
    solutionsArray: [
      {
        title: "01 Needs Analysis", description: "Understand business requirements to determine RFID goals and objectives, including asset tracking, inventory management, or security."
      },
      { title: "02 Hardware Selection", description: "Choose the appropriate RFID tags, readers, and antennas based on range, environment, and durability needs." },
      { title: "03 RFID Platform Configuration", description: "We offer a flexible RFID platform tailored to your needs, reducing costs and eliminating extensive custom development for seamless integration." },
      {
        title: "04 System Design", description: "Design the overall architecture of the RFID system, considering tag placement, reader positioning, and network setup."
      },
      { title: "05 Prototyping & Testing", description: "Build prototypes to test the solution in real-world scenarios, ensuring hardware and software work together smoothly." },
      { title: "06 Deployment", description: "Deploy RFID infrastructure across the organization, install hardware, and integrate with the existing IT ecosystem." },
      {
        title: "07 Training", description: "Train staff on RFID system usage, including how to read and interpret data from RFID-enabled devices."
      },
      { title: "08 System Testing & Optimization", description: "Perform full-scale testing to ensure accuracy, reliability, and performance. Optimize the system for improved efficiency." },
      { title: "09 Ongoing Support & Maintenance", description: "Provide regular system updates, troubleshooting, and enhancements to ensure continuous operation." },

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
