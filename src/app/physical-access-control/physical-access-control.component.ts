import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-physical-access-control',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './physical-access-control.component.html',
  styleUrl: './physical-access-control.component.scss'
})
export class PhysicalAccessControlComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'capabilityData', name: 'Our Capabilities' },
    { id: 'process', name: 'Our Process' },
    { id: 'benfits-rfid', name: 'Benefits' },
    { id: 'why-dham', name: 'Why Us' },
    { id: 'network-partners', name: 'Partners' },
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
    description: "Physical access control ensures secure and regulated entry to buildings, rooms, and assets by leveraging advanced technology like key cards, biometrics, and RFID. Dham Consulting Group offers expertise in designing and implementing scalable and integrated physical access solutions tailored to your organization's needs, enhancing security and operational efficiency. With our deep knowledge of hardware, software, and connectivity, we deliver seamless access management systems that prioritize safety and compliance."
  };

  capability = {
    title: "Our Capabilities",
    description: "Dham Consulting Group excels in delivering advanced physical access control solutions tailored to diverse security needs. Our capabilities span from cutting-edge biometric integration to scalable system designs, ensuring comprehensive protection and ease of management.",
    capabilities: [
      { title: "Biometric Authentication", description: "Secure access with fingerprint, facial, or retina scanning technology." },
      { title: "RFID Access Solutions", description: "Enable seamless, contactless entry with RFID-enabled systems." },
      { title: "Integration with IoT", description: "Connect access control systems with IoT devices for real-time monitoring." },
      { title: "Cloud-Managed Access Control", description: "Centralize and manage access remotely with cloud-based solutions." },
      { title: "Custom Access Policies", description: "Define role-based permissions to ensure tailored access levels." },
      { title: "Visitor Management", description: "Streamline visitor check-ins with pre-authorized or automated access controls." },

      { title: "Audit Trails and Reporting", description: "Maintain compliance with detailed logs of access activities." },
      { title: "Hardware Integration", description: "Combine physical components like turnstiles, locks, and cameras into unified systems." },
      { title: "Emergency Lockdown Features", description: "Enable rapid lockdowns during emergencies to secure premises instantly." }
    ]
  };

  solutions = {
    title: "Physical Access Systems",
    description: " ",
    solutionsArray: [
      {
        title: "01 Credential-Based Systems", description: "Access controlled by ID cards, fobs, PINs, or mobile devices to authenticate users."
      },
      { title: "02 Biometric Systems", description: "Use of unique physical traits like fingerprints, facial recognition or authentication or iris scans for secure access." },
      { title: "03 Barrier Systems", description: "Physical barriers like turnstiles, gates, and bollards to control entry and restrict movement." },
      {
        title: "04 Door Systems", description: "Secure door mechanisms using locks, electric strikes, or automated doors with access controls."
      },


    ]
  };

  benefits = {
    title: "Benefits",
    description: "Physical access control systems enhance security, streamline management, and improve compliance. With real-time monitoring and flexible integration, these systems safeguard your premises and ensure only authorized individuals can access restricted areas.",
    benefitsArray: [
      { title: "Enhanced Security", description: "Protect sensitive areas with advanced authentication methods like biometrics and RFID. Reduce unauthorized access and improve overall building security." },
      { title: "Streamlined Access Management", description: "Easily configure user roles and permissions, ensuring employees and visitors access only authorized areas, simplifying management and improving operational efficiency." },
      { title: "Real-Time Monitoring", description: "Get instant alerts and monitor entry points in real-time, improving response times in emergencies and preventing unauthorized attempts." },
      { title: "Improved Compliance", description: "Maintain detailed access logs and audit trails, which ensure compliance with security regulations and provide traceable data for security audits and investigations." },
      { title: "Cost Savings", description: "Minimize the need for on-site security staff with automated access control systems, reducing labor costs and lowering the risk of human error." },
      { title: "Scalability and Flexibility", description: "Easily scale or adjust the system to fit changing business needs, integrating with new devices, additional locations, or expanding permissions without hassle." },

    ]
  };

  groups = {
    title: "Why Choose Dham Consulting Group",
    description: " ",
    groupsArray: [
      { title: "Tailored Solutions", description: "We design access control systems customized to your security needs and budget." },
      { title: "Comprehensive Integration", description: "Seamlessly integrate with existing systems like HR, surveillance, and building management." },
      { title: "Expert Installation and Support", description: "Benefit from our expertise in both hardware installation and ongoing system support." },
      { title: "Scalable Systems", description: "Easily expand or modify the system as your business or security requirements grow." },
      { title: "Enhanced Security and Compliance", description: "Ensure compliance with industry standards while improving overall access security." },
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
      title: "Lenel S2"
    },
    {
      image: "assets/Logos/alien.png",
      title: "Sielox",
    },
    {
      image: "assets/Logos/Chinway-Logo.png",
      title: "Hayward",
    },
    {
      image: "assets/Logos/HID.png",
      title: "Bosch",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "HID Global",
    },

    {
      image: "assets/Logos/sato_logo.png",
      title: "Axis Communications",
    },
    {
      image: "assets/Logos/times-7.png",
      title: "Assa Abloy",
    },
    {
      image: "assets/Logos/honeywell.png",
      title: "Honeywell",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "Dormakaba",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "Alvarado",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "Altronix",
    },






  ];

  relatedSolutions = [
    { title: "Application Management Services", description: "RFID solutions require ongoing management to ensure smooth performance, from system updates to monitoring, making application management a key service." },

  ];

  ngOnInit(): void { }
}

