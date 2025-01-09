import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-small-business',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './small-business.component.html',
  styleUrl: './small-business.component.scss'
})
export class SmallBusinessComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'capabilityData', name: 'Our Capabilities' },
    { id: 'benfits-rfid', name: 'Benefits' },
    { id: 'why-dham', name: 'Why Us' },
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
    description: "Dham Consulting Group specializes in providing small businesses with enterprise-level IT services tailored to their needs. From setting up domains and email accounts to managing cloud solutions and securing your technology infrastructure, we handle the complexities so you can focus on growing your business. Our personalized approach ensures you receive reliable, scalable, and affordable solutions that keep you competitive in today’s market. With Dham Consulting Group, you gain a trusted partner committed to simplifying technology and delivering results."
  };

  capability = {
    title: "Our Capabilities",
    description: "Our services empower small businesses with the tools and support needed to manage technology effectively, improve efficiency, and compete on a larger scale—all at an affordable cost.",
    capabilities: [
      { title: "Domain Management", description: "Secure and manage your business domain with ease." },
      { title: "Email Setup", description: "Professional email accounts for seamless communication." },
      { title: "Cloud Integration", description: "Enable remote work with scalable cloud solutions." },
      { title: "Data Backup", description: "Protect your business with automated data backups." },
      { title: "Cybersecurity", description: "Safeguard systems with robust security measures." },
      { title: "IT Support", description: "Quick and reliable help desk services for your team." },

      { title: "Software Setup", description: "Install and configure tools to streamline operations." },
      { title: "Network Configuration", description: "Set up fast, secure, and reliable network systems." },
      { title: "Tech Consulting", description: "Tailored advice to optimize your technology investments." }
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
    description: "Our services give small businesses access to enterprise-grade technology, improving efficiency, enhancing security, and freeing up time to focus on growth—all while staying cost-effective.",
    benefitsArray: [
      { title: "Enhanced Productivity", description: "Streamline daily operations with professional IT tools and reliable support." },
      { title: "Improved Security", description: "Protect your data and systems with enterprise-grade security solutions." },
      { title: "Cost Savings", description: "Access affordable, scalable solutions without the need for in-house IT staff." },
      { title: "Scalable Solutions", description: "Grow your business with flexible IT systems that adapt to your needs." },
      { title: "Time Efficiency", description: "Save valuable time by outsourcing complex tech tasks to experts." },
      { title: "Professional Image", description: "Establish credibility with professional email, secure systems, and reliable tech." },

    ]
  };

  groups = {
    title: "Why Choose Dham Consulting Group",
    description: " ",
    groupsArray: [
      { title: "Personalized Solutions", description: "Tailored IT services designed specifically for your business needs." },
      { title: "Affordable Expertise", description: "Enterprise-level solutions at a cost small businesses can afford." },
      { title: "Reliable Support", description: "Dependable and responsive assistance whenever you need it." },
      { title: "Scalable Approach", description: "Flexible services that grow with your business as it expands." },
      { title: "Trusted Partner", description: "A commitment to simplifying technology and driving your success." },
      { title: " ", description: " " }
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
