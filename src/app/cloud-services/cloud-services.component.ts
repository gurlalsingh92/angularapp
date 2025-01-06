import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-cloud-services',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './cloud-services.component.html',
  styleUrl: './cloud-services.component.scss'
})
export class CloudServicesComponent implements AfterViewInit {
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
    description: "At Dham Consulting Group, we offer comprehensive cloud computing services designed to drive innovation and streamline operations. Our expertise spans cloud migration, infrastructure management, and application modernization, ensuring seamless transitions and optimized performance. We specialize in delivering scalable solutions tailored to your unique business needs, leveraging leading cloud platforms for flexibility and cost-efficiency. From designing robust architectures to implementing advanced security measures, we help businesses unlock the full potential of the cloud. Whether you're enhancing existing systems or building new applications, our proactive approach ensures reliability, agility, and success in the digital era. Partner with us to transform your IT infrastructure and accelerate your journey to cloud excellence."
  };

  capability = {
    title: "Our Capabilities",
    description: "Our cloud computing capabilities empower businesses with tailored strategies, seamless migration, enhanced security, modernized applications, and robust data management. From multi-cloud solutions to ongoing support, we deliver scalable, industry-specific services to optimize performance, drive efficiency, and ensure cloud success.",
    capabilities: [
      { title: "Cloud Migration", description: "We provide seamless cloud migration services with thorough planning, data integrity, and optimized performance, minimizing disruption." },
      { title: "Multi-Cloud & Hybrid Solutions", description: "DCG designs multi-cloud and hybrid solutions to optimize resources, enhance flexibility, and integrate cloud platforms." },
      { title: "Cloud Security & Compliance", description: "We implement robust security measures, ensuring data protection, compliance, and continuous monitoring to safeguard cloud infrastructure." },
      { title: "Application Modernization", description: "We modernize legacy applications to improve performance, scalability, cloud-native functionality, reduce costs, and enhance efficiency." },
      { title: "Data Management & Analytics", description: "We provide efficient data storage, integration, and analytics solutions to streamline data flows and empower business decisions." },
      { title: "DevOps & Automation", description: "We implement DevOps practices and automation tools to streamline development, boost deployment speed, and improve collaboration." },

      { title: "Cloud Optimization & Governance", description: "We optimize cloud resources for cost-efficiency, establish governance frameworks, and ensure maximum value while adhering to policies." },
      { title: "Industry-Specific Cloud Solutions", description: "We offer tailored cloud solutions for various industries addressing regulatory and operational challenges." },
      { title: "Ongoing Cloud Support & Management", description: "We offer ongoing cloud support, including monitoring, troubleshooting, and performance tuning, ensuring security and efficiency." }
    ]
  };

  benefits = {
    title: "Benefits",
    description: "Cloud services offer businesses enhanced scalability, flexibility, and cost-efficiency by enabling on-demand access to resources. They support innovation through advanced technologies like AI, machine learning, and big data analytics. With robust security and global reach, cloud solutions help companies improve operational efficiency and reduce IT overhead, allowing them to focus on core business activities. Cloud adoption can lead to faster decision-making and greater agility in the competitive marketplace.",
    benefitsArray: [
      { title: "Cost Efficiency", description: "Cloud services reduce the need for upfront investment in hardware and infrastructure. Businesses pay only for the resources they use, making it a more cost-effective option for small and large organizations alike. This scalability helps companies manage fluctuating workloads and reduce overall IT costs." },
      { title: "Scalability and Flexibility", description: "Cloud computing offers the ability to scale resources up or down based on demand. Whether you need more storage, computing power, or specialized software, cloud services make it easy to adjust resources without worrying about capacity limitations, giving businesses greater flexibility." },
      { title: "Enhanced Collaboration", description: "Cloud-based tools enable real-time collaboration, allowing teams to work together from different locations seamlessly. Whether you're working on documents, data, or software development, cloud platforms facilitate communication, file sharing, and simultaneous access, boosting productivity across teams." },
      { title: "Automatic Software Updates and Maintenance", description: "Cloud providers handle system updates, security patches, and hardware maintenance, reducing the burden on businesses to manage these tasks themselves. This ensures that businesses always use the latest technology without the need for manual intervention, saving time and resources." },
      { title: "Improved Security", description: "Cloud providers typically offer advanced security measures such as encryption, multi-factor authentication, and regular security audits to protect your data. Cloud services often meet or exceed industry standards for compliance, providing businesses with peace of mind about data protection and regulatory compliance." },
      { title: "Disaster Recovery and Business Continuity", description: "Cloud services enhance business continuity by offering reliable backup solutions and disaster recovery plans. In the event of system failure, data loss, or natural disasters, businesses can restore operations quickly, ensuring minimal disruption and maintaining access to critical data and applications." },

    ]
  };

  groups = {
    title: "Why Choose Dham Consulting Group",
    description: " ",
    groupsArray: [
      { title: "Tailored Solutions for Your Business", description: "We design cloud strategies tailored to your business, optimizing resources and enhancing efficiency to meet your unique goals." },
      { title: "Expertise Across Multiple Cloud Platforms", description: "Our experts optimize AWS, Azure, and Google Cloud to create scalable, flexible multi-cloud and hybrid environments for your needs." },
      { title: "Comprehensive Cloud Migration and Management", description: "We ensure seamless migrations and ongoing management, optimizing your cloud for cost savings and peak performance." },
      { title: "Innovative Approach to Cloud Solutions", description: "Dham Consulting leverages innovative cloud technologies to provide cutting-edge solutions that keep you competitive in a rapidly evolving digital world." },
      { title: "Commitment to Security and Compliance", description: "We implement strong security measures and ensure compliance, proactively protecting your cloud infrastructure from emerging threats." },
      { title: "", description: " " },

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
      title: "Google Cloud"
    },
    {
      image: "assets/Logos/alien.png",
      title: "Amazon Web Service",
    },
    {
      image: "assets/Logos/Chinway-Logo.png",
      title: "Microsoft Azure",
    },
    {
      image: "assets/Logos/HID.png",
      title: "Digital Ocean",
    },
    {
      image: "assets/Logos/Smartrac_logo.png",
      title: "IBM Cloud",
    },

    {
      image: "assets/Logos/sato_logo.png",
      title: "Oracle Cloud",
    },
  ];

  relatedSolutions = [
    { title: "Application Management Services", description: "Integrating cloud solutions with application management to ensure optimal performance, security, and scalability across your applications." },
    { title: "Application Development Services", description: "Building cloud-native applications with a focus on scalability, security, and seamless integration into your cloud environment." },

    { title: "Artificial Intelligence", description: "Enhancing cloud services with AI for smarter automation, predictive analytics, and improved decision-making in your cloud infrastructure." },
    { title: "Application Re-engineering Services", description: "Re-engineering legacy applications to leverage cloud technologies for enhanced scalability, performance, and cost-efficiency." },
    { title: "Application Rescue Services", description: "Rescuing underperforming applications by optimizing them for the cloud, ensuring better performance, security, and reliability in the cloud environment." },
  ];

  ngOnInit(): void { }
}

