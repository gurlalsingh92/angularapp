import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-app-re-engineering-services',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './app-re-engineering-services.component.html',
  styleUrl: './app-re-engineering-services.component.scss'
})
export class AppReEngineeringServicesComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'capabilityData', name: 'Our Capabilities' },
    { id: 'benfits-rfid', name: 'Benefits' },
    { id: 'why-dham', name: 'Why Us' },
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
  };

  overview = {
    title: "Overview",
    description: "Dham Consulting Group specializes in revitalizing legacy systems to meet modern business demands. Our Application Re-Engineering Services enhance performance, scalability, and security while minimizing disruptions. By analyzing your existing systems, we identify areas for improvement and leverage advanced technologies to re-architect your applications for future-readiness. Whether migrating to the cloud, optimizing workflows, or enhancing user experiences, we ensure seamless transitions and sustained business growth. Partner with us to modernize your technology and maximize its potential."
  };

  capability = {
    title: "Our Capabilities",
    description: "Our Application Re-Engineering Services offer a comprehensive suite of solutions designed to modernize, optimize, and future-proof your legacy systems, ensuring they align with your evolving business needs.",
    capabilities: [
      { title: "Legacy System Evaluation", description: "Analyze outdated systems to uncover gaps and modernization opportunities." },
      { title: "Architecture Modernization", description: "Transform legacy architectures into scalable, future-ready frameworks." },
      { title: "Code Optimization", description: "Enhance code efficiency and maintainability for improved performance." },
      { title: "Technology Migration", description: "Transition to cutting-edge technologies for enhanced functionality and scalability." },
      { title: "Cloud Enablement", description: "Re-engineer applications to thrive in a flexible and cost-efficient cloud environment." },
      { title: "Data Transformation", description: "Migrate and cleanse data to ensure reliability and usability across new systems." },

      { title: "User Interface Upgrade", description: "Redesign interfaces for a seamless, intuitive user experience." },
      { title: "System Integration", description: "Enable interoperability between modernized systems and enterprise platforms." },
      { title: "Continuous Support", description: "Deliver ongoing enhancements and updates to keep applications competitive." }
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
    title: "Benefits",
    description: "Application Re-Engineering Services help businesses unlock value by modernizing legacy systems, improving performance, reducing costs, and ensuring future scalability for evolving needs.",
    benefitsArray: [
      { title: "Enhanced Performance", description: "Modernized systems deliver faster processing, improved uptime, and seamless user interactions, ensuring peak efficiency for your operations." },
      { title: "Cost Savings", description: "Eliminate inefficiencies and reduce maintenance costs by replacing outdated systems with optimized, scalable architectures." },
      { title: "Future-Readiness", description: "Ensure your applications are equipped to adapt to changing business needs and emerging technologies." },
      { title: "Improved Security", description: "Strengthen data protection by integrating robust security protocols and addressing vulnerabilities in legacy systems." },
      { title: "Seamless Integration", description: "Streamline workflows by integrating re-engineered systems with enterprise platforms and modern tools." },
      { title: "Enhanced User Experience", description: "Updated interfaces and functionalities provide a modern, intuitive experience that boosts productivity and satisfaction." },

    ]
  };

  groups = {
    title: "Why Choose Dham Consulting Group",
    description: " ",
    groupsArray: [
      { title: "Proven Expertise", description: "Decades of experience in transforming legacy systems into modern, efficient applications." },
      { title: "Tailored Solutions", description: "We align re-engineering strategies with your unique business goals and technology needs." },
      { title: "End-to-End Support", description: "Comprehensive services covering analysis, design, implementation, and maintenance for seamless transitions." },
      { title: "Focus on Innovation", description: "Integration of cutting-edge technologies to future-proof your applications for growth and evolution." },
      { title: "Timely Delivery", description: "Agile processes ensure re-engineering projects are completed on time without compromising quality." },
      { title: "", description: "" }
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
    { title: "Cloud Services", description: "Migrate, modernize, and optimize re-engineered applications for secure, scalable, and cost-efficient cloud environments." },
    { title: "Application Management Services", description: "Maintain and support re-engineered applications with updates, monitoring, and performance optimization." },

    { title: "Application Development Services", description: "Extend and enhance re-engineered applications by building new features or integrating advanced functionalities." },
    { title: "Artificial Intelligence", description: "Integrate AI solutions into re-engineered applications for smarter processes and data-driven decision-making." },
  ];

  ngOnInit(): void { }
}
