import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-application-management-service',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './application-management-service.component.html',
  styleUrl: './application-management-service.component.scss'
})
export class ApplicationManagementServiceComponent implements AfterViewInit {
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
    description: "At Dham Consulting Group, we specialize in crafting custom applications designed to meet your unique business challenges and goals. Our services encompass the entire application lifecycle—from initial consultation and design to development, testing, and deployment. Leveraging modern technologies and industry best practices, we create scalable, secure, and innovative solutions tailored to your needs. Whether building from scratch or enhancing existing systems, we focus on usability, performance, and seamless integration with your existing infrastructure to ensure long-term success. With our expertise, your business can stay ahead in a rapidly evolving digital landscape."
  };

  capability = {
    title: "Our Capabilities",
    description: "Our application development capabilities span the entire lifecycle, delivering tailored, scalable, and innovative solutions to help businesses achieve their goals and maintain a competitive edge.",
    capabilities: [
      { title: "Custom Application Development", description: "Build tailored, scalable solutions designed to meet unique business requirements." },
      { title: "Legacy System Modernization", description: "Upgrade outdated systems with modern technologies for improved performance and usability." },
      { title: "Cloud-Native Application Development", description: "Design applications optimized for cloud environments, ensuring scalability and efficiency." },
      { title: "Mobile Application Development", description: "Create seamless mobile experiences with intuitive and user-friendly app designs." },
      { title: "API Development and Integration", description: "Enable seamless data sharing by building and integrating secure, scalable APIs." },
      { title: "DevOps and Continuous Delivery", description: "Implement DevOps practices to ensure rapid, reliable, and consistent application updates." },

      { title: "UI/UX Design and Development", description: "Develop intuitive interfaces focused on user satisfaction and enhanced engagement." },
      { title: "Quality Assurance and Testing", description: "Ensure applications meet the highest standards with robust testing strategies." },
      { title: "Support and Maintenance", description: "Deliver ongoing monitoring, updates, and enhancements for long-term application success." }
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
    description: "Our application development services empower businesses with tailored, scalable, and secure solutions, ensuring long-term growth, operational efficiency, and a seamless user experience.",
    benefitsArray: [
      { title: "Enhanced Efficiency", description: "Custom-built applications automate complex workflows, minimize manual intervention, and integrate disparate systems. This significantly reduces operational overhead and allows your team to focus on high-value activities, driving overall productivity and business efficiency." },
      { title: "Scalable Solutions", description: "Applications are designed with scalability in mind, ensuring they can handle increasing user demands and business growth without compromising performance. This future-proofing allows your business to adapt to changing markets effortlessly." },
      { title: "Improved User Experience", description: "With intuitive design and user-centric features, applications enhance customer engagement and satisfaction. Seamless navigation and functionality drive adoption, building long-term trust and loyalty among users." },
      { title: "Cost Optimization", description: "By addressing inefficiencies and tailoring solutions to specific needs, we reduce unnecessary expenditure. Custom applications save money by replacing redundant systems and improving resource allocation, ensuring maximum return on investment." },
      { title: "Faster Time to Market", description: "Leveraging agile methodologies, we deliver high-quality applications in shorter development cycles. Rapid prototyping and iterative improvements ensure you stay ahead of competitors and capitalize on emerging opportunities quickly." },
      { title: "Robust Security", description: "Our applications are built with advanced encryption, secure coding practices, and proactive monitoring. Regular vulnerability assessments and patch management protect sensitive data, ensuring compliance and safeguarding against potential threats." },

    ]
  };

  groups = {
    title: "Why Choose Dham Consulting Group",
    description: "",
    groupsArray: [
      { title: "Proven Expertise", description: "RFID reduces human errors, enabling precise asset and inventory tracking for reliable data." },
      { title: "Tailored Solutions", description: "We create custom applications designed to fit your unique business challenges and goals." },
      { title: "Client-Centric Approach", description: "Collaboration and transparent communication are at the core of every project we undertake." },
      { title: "Cutting-Edge Technology", description: "We leverage the latest frameworks and tools to build high-performance, future-ready applications." },
      { title: "Scalable Partnership", description: "Our services grow with your business, adapting to evolving demands and market opportunities." },
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
    { title: "Cloud Services", description: "Seamlessly deploy and scale applications with our cloud solutions, ensuring optimal performance and reliability." },
    { title: "Application Management Services", description: "We ensure the continuous monitoring, maintenance, and optimization of your applications for maximum uptime and efficiency." },

    { title: "Artificial Intelligence", description: "Enhance your applications with intelligent features, automating processes and providing insights for smarter decision-making." },

  ];

  ngOnInit(): void { }
}


