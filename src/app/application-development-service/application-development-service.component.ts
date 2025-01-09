import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-application-development-service',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './application-development-service.component.html',
  styleUrl: './application-development-service.component.scss'
})
export class ApplicationDevelopmentServiceComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'capabilityData', name: 'Our Capabilities' },
    { id: 'process', name: 'Our Process' },
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
    description: "At Dham Consulting Group, we provide tailored Application Management Services designed to ensure that your applications are optimized, secure, and efficient at all times. Our goal is to help your business run smoothly with applications that work seamlessly, are continually updated, and remain scalable for future growth. Our approach to Application Management encompasses ongoing support, performance monitoring, security management, and cost optimization to ensure your application infrastructure is always running at its best.Whether you need help with routine maintenance or optimizing a complex enterprise application, we are here to provide the expertise that allows your organization to focus on what matters most—driving innovation and business results."
  };

  capability = {
    title: "Our Capabilities",
    description: "Here’s a list of services that fall under application management to keep your applications running smoothly and securely:",
    capabilities: [
      { title: "Application Support and Maintenance", description: "We proactively manage updates, bug fixes, and patches to maximize efficiency and minimize downtime." },
      { title: "Performance Monitoring and Optimization", description: "We monitor and optimize applications to prevent bottlenecks, ensuring smooth performance and user satisfaction." },
      { title: "Application Scalability and Flexibility", description: "We optimize infrastructure and manage cloud resources to ensure seamless scalability and handle growth." },
      { title: "Security Management", description: "We ensure application security by applying patches, assessing vulnerabilities, and enforcing strict access controls." },
      { title: "Data Management", description: "Dham Consulting provides reliable data backup, recovery solutions, and optimized databases for seamless system integration." },
      { title: "Incident and Problem Management", description: "We quickly identify root causes and resolve issues to minimize disruption and ensure continuity." },

      { title: "Application Monitoring and Reporting", description: "We monitor applications and provide detailed reports with insights into performance, security, and health." },
      { title: "Cost and Resource Optimization", description: "We optimize cloud infrastructure, minimizing costs while efficiently allocating resources to meet your needs." },
      { title: "Version Control and Application Upgrades", description: "Our version control and upgrade approach ensures smooth transitions, minimizing disruptions while maintaining system alignment." }
    ]
  };

  solutions = {
    title: "Our Application Development Process",
    description: "We follow a structured yet flexible application development process to ensure every project is delivered with precision, speed, and quality. This approach fosters collaboration, innovation, and scalability while keeping your business goals at the forefront.",
    solutionsArray: [
      {
        title: "1. Discovery and Analysis", description: "We begin by understanding your business needs, challenges, and goals, ensuring a clear vision for the project."
      },
      { title: "2.	Planning and Strategy", description: "Our team crafts a detailed project roadmap, defining milestones, timelines, and technologies for success." },
      { title: "3.	Design and Prototyping", description: "We create intuitive designs and prototypes to visualize the final application and gather your feedback." },
      {
        title: "4.	Development and Coding", description: "Using agile methodologies, we build the application with robust code, ensuring performance and security."
      },
      { title: "5.	Testing and Quality Assurance", description: "Comprehensive testing ensures the application is free of bugs, optimized, and user-ready before launch." },
      { title: "6.	Deployment and Integration", description: "We seamlessly deploy the application and integrate it with your existing systems for smooth operation." },
      {
        title: "7.	Ongoing Support and Maintenance", description: "Post-launch, we offer continuous support, updates, and enhancements to keep your application running optimally."
      },

    ]
  };

  benefits = {
    title: "Benefits",
    description: "Application Management Services (AMS) are a strategic solution to streamline the performance, security, and scalability of your business applications. By delegating the management of critical applications to experienced professionals, businesses can reduce costs, improve efficiency, and ensure their technology adapts to evolving needs. With AMS, you can focus on driving innovation and growth while ensuring your applications operate seamlessly. Explore the key benefits below to see how AMS can transform your business.",
    benefitsArray: [
      { title: "Improved Operational Efficiency", description: "AMS ensures your applications run smoothly by providing regular maintenance, proactive monitoring, and quick issue resolution. This minimizes downtime and disruptions, allowing your business operations to stay efficient and reliable." },
      { title: "Enhanced Security", description: "With dedicated security management, AMS protects your applications from vulnerabilities and cyber threats. It includes regular updates, compliance checks, and security patches to safeguard sensitive data and maintain customer trust." },
      { title: "Cost Savings", description: "Outsourcing application management reduces the need for in-house teams, lowering operational costs. AMS providers offer flexible pricing models, enabling you to manage expenses while accessing high-quality expertise." },
      { title: "Scalability and Flexibility", description: "AMS adapts to your changing business needs, scaling services up or down based on your requirements. This ensures your applications remain relevant and capable of handling evolving demands." },
      { title: "Access to Specialized Expertise", description: "AMS providers bring deep technical knowledge and industry experience. They utilize best practices to manage complex applications effectively, helping you stay competitive with cutting-edge solutions." },
      { title: "Focus on Core Business Goals", description: "By delegating application management, your internal teams can focus on strategic initiatives and innovation. AMS handles the technical details, enabling you to concentrate on growing your business." },

    ]
  };

  groups = {
    title: "Why Dham Consulting Group",
    description: "",
    groupsArray: [
      { title: "Tailored Solutions", description: "We tailor our approach to your business, ensuring your applications meet performance, security, and scalability needs." },
      { title: "Expertise and Experience", description: "Backed by years of experience, our team brings the expertise to efficiently manage and optimize your applications." },
      { title: "Focus on Security and Performance", description: "We ensure business-critical applications stay secure and performant with proactive monitoring for smooth operations." },
      { title: "Cloud-Native and Legacy Systems", description: "From migrating legacy apps to optimizing cloud solutions, we deliver end-to-end services for effective management." },
      { title: "24/7 Support", description: "Our 24/7 support team ensures your applications stay functional and optimized, addressing issues promptly anytime." },
      { title: "", description: "" },

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
    { title: "Application Development Services", description: "Seamlessly integrate development and management, ensuring newly built applications are optimized for performance, scalability, and ongoing maintenance." },
    { title: "Cloud Computing Services", description: "Combine cloud solutions with application management for secure, scalable, and high-performing applications tailored to your business needs." },

    { title: "Artificial Intelligence", description: "Leverage AI to enhance application management through intelligent monitoring, predictive maintenance, and performance optimization." },

  ];

  ngOnInit(): void { }
}

