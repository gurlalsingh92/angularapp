import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-internet-of-things',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './internet-of-things.component.html',
  styleUrl: './internet-of-things.component.scss'
})
export class InternetOfThingsComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'capabilityData', name: 'Our Capabilities' },
    { id: 'process', name: 'Our Process' },
    { id: 'benfits-rfid', name: 'Benefits' },
    { id: 'why-dham', name: 'Why Us' },
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
    description: "The Internet of Things (IoT) revolutionizes how businesses operate by connecting devices, collecting data, and enabling smarter decision-making. At Dham Consulting Group, we empower organizations to unlock the full potential of IoT through customized solutions. Our expertise spans device integration, data analytics, and secure infrastructure, ensuring seamless connectivity and valuable insights. Whether streamlining operations, enhancing customer experiences, or enabling predictive maintenance, we deliver IoT solutions that drive innovation and sustainable growth. Let us help you stay ahead in an increasingly connected world."
  };

  capability = {
    title: "Our Capabilities",
    description: "Our IoT solutions integrate devices, data, and systems to deliver smart, scalable, and secure connectivity. From device integration to analytics, we empower businesses with innovative IoT capabilities to stay competitive.",
    capabilities: [
      { title: "Device Integration", description: "Seamlessly connect IoT devices with your existing infrastructure." },
      { title: "Real-Time Analytics", description: "Gain actionable insights with instant data analysis and visualization." },
      { title: "Secure Data Transmission", description: "Ensure robust encryption and secure protocols for IoT data." },
      { title: "IoT Application Development", description: "Custom apps tailored for IoT ecosystems and workflows." },
      { title: "Edge Computing", description: "Process data locally to minimize latency and optimize performance." },
      { title: "Predictive Maintenance", description: "Leverage IoT sensors to identify issues before failures occur." },

      { title: "Remote Monitoring", description: "Track device performance and status from anywhere, anytime." },
      { title: "Energy Management", description: "Optimize energy usage through IoT-driven smart solutions." },
      { title: "Scalable IoT Solutions", description: "Build solutions that grow with your business and evolving needs." }
    ]
  };

  solutions = {
    title: "Our IoT Process",
    description: "Our IoT Service Development Process ensures a seamless journey from idea to implementation. Each step is carefully designed to meet your business needs, optimize system performance, and ensure scalability for future growth.",
    solutionsArray: [
      {
        title: "01 Requirement Gathering", description: "Identify business needs, IoT use cases, and key goals for deployment."
      },
      { title: "02 Conceptual Design", description: "Create system architecture with devices, connectivity, and data flow planning." },
      { title: "03 Technology Selection", description: "Choose IoT hardware, software, and cloud platforms suited to your use case." },
      {
        title: "04 Prototype Development", description: "Build a working prototype for testing device connectivity and data flow."
      },
      { title: "05 Integration Planning", description: "Map IoT system integration with existing IT infrastructure and applications." },
      { title: "06 Implementation", description: "Deploy IoT devices, establish connectivity, and configure software." },
      {
        title: "07 Testing & Validation", description: "Ensure system reliability, data accuracy, and compliance with security protocols."
      },
      { title: "08 Deployment", description: "Roll out the IoT solution with monitoring and initial operational support." },
      { title: "09 Optimization & Scaling", description: "Continuously improve system performance and expand IoT deployments as needed." },

    ]
  };

  benefits = {
    title: "Benefits",
    description: "The Internet of Things (IoT) transforms businesses by providing real-time insights, enhancing operational efficiency, and enabling automation. By leveraging connected devices and data-driven decision-making, you can optimize workflows and drive innovation.",
    benefitsArray: [
      { title: "Improved Accuracy", description: "Automating routine tasks and integrating systems leads to smoother operations, reducing time and costs associated with manual processes." },
      { title: "Enhanced Decision-Making", description: "Real-time data collection and analytics provide valuable insights, allowing businesses to make faster, more informed decisions." },
      { title: "Cost Savings", description: "IoT helps reduce operational costs by optimizing energy usage, improving maintenance schedules, and reducing downtime through predictive analytics." },
      { title: "Better Customer Experience", description: "Real-time monitoring and personalized services improve customer satisfaction and allow businesses to respond more quickly to needs and demands." },
      { title: "Increased Safety and Security", description: "IoT enhances safety with remote monitoring of critical systems, detecting issues early and ensuring swift responses to potential risks or security breaches." },
      { title: "Scalability and Flexibility", description: "IoT solutions are scalable, allowing businesses to expand their connected infrastructure without extensive redesign, ensuring the ability to meet future growth." },

    ]
  };

  groups = {
    title: "Why Choose Dham Consulting Group",
    description: " ",
    groupsArray: [
      { title: "Tailored IoT Solutions", description: "We design custom IoT solutions based on your unique business needs and goals." },
      { title: "End-to-End Integration", description: "From hardware to software, we provide seamless integration for optimal IoT performance." },
      { title: "Expertise in Scalability", description: "Our solutions grow with your business, ensuring smooth scalability and adaptability." },
      { title: "Proactive Support & Maintenance", description: "We offer continuous monitoring and proactive maintenance to minimize downtime." },
      { title: "Security-Focused Approach", description: "We prioritize security, ensuring your IoT devices and data are protected from vulnerabilities." },
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
      image: "assets/partners/aws.png",
      title: "Amazon Web Services (AWS) IoT"
    },
    {
      image: "assets/partners/azure_logo.png",
      title: "Microsoft Azure IoT",
    },
    {
      image: "assets/partners/GoogleCloudPlatform.png",
      title: "Google Cloud IoT",
    },
    {
      image: "assets/partners/ibm_watson_logo.png",
      title: "IBM Watson IoT",
    },
    {
      image: "assets/partners/oracle-cloud-1994322413.png",
      title: "Oracle Cloud IoT",
    },

    {
      image: "assets/partners/cisco_logo.png",
      title: "Cisco",
    },
    {
      image: "assets/partners/intel_logo.png",
      title: "Intel",
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

