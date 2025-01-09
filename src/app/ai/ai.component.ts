import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss'
})
export class AiComponent implements AfterViewInit {
  sections = [
    { id: 'overviewData', name: 'Overview' },
    { id: 'process', name: 'Our Process' },
    { id: 'benfits-rfid', name: 'Benefits' },
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
    description: "Artificial Intelligence (AI) is revolutionizing industries by enabling machines to learn, adapt, and solve complex problems.From predictive analytics to intelligent automation, AI enhances efficiency, decision- making, and innovation. At Dham Consulting Group, we specialize in implementing tailored AI solutions to meet your unique business needs. Whether optimizing operations, improving customer experiences, or driving digital transformation, our expertise ensures a seamless integration of AI technologies to unlock new opportunities for growth."
  };

  capability = {
    title: "",
    description: "",
    capabilities: [
      { title: "", description: "." },
    ]
  };

  solutions = {
    title: "Our Process",
    description: "",
    solutionsArray: [
      {
        title: "01. Advanced Data Processing", description: "Process large datasets in real time, extracting actionable insights for informed decision-making."
      },
      { title: "02 Predictive and Prescriptive Analytics", description: "Forecast future trends and optimize business outcomes with AI-driven predictions and recommendations." },
      { title: "03 Intelligent Automation", description: "Automate repetitive tasks and streamline workflows to enhance efficiency and reduce human error." },
      {
        title: "04 Natural Language Understanding", description: "Enable seamless communication by interpreting and generating human language in text and speech."
      },
      { title: "05 Computer Vision", description: "Analyze visual data for real-time object detection, recognition, and quality control." },
      {
        title: "06 Personalization Engines", description: "Deliver tailored experiences and dynamic content through AI-powered customer insights and recommendations."
      },
      {
        title: "07 Generative AI", description: "Generate innovative content, including text, images, and video, powered by advanced AI models.Train staff on RFID system usage, including how to read and interpret data from RFID-enabled devices."
      },
      { title: "08 Adaptive Learning Systems", description: "Enable self-learning systems that evolve with data to continuously improve performance and adaptability." },
      { title: "09 Cybersecurity Enhancements", description: "Protect data and systems using AI-driven threat detection and proactive risk management solutions." },

    ]
  };

  benefits = {
    title: "Benefits",
    description: " ",
    benefitsArray: [
      {
        title: "Enhanced Productivity and Efficiency", description: "AI automates routine and repetitive tasks, freeing up employees to focus on more creative and strategic activities.By automating processes like data entry, reporting, and basic customer service, businesses can operate more efficiently, reducing manual effort and errors while increasing throughput."
      },
      {
        title: "Cost Reduction", description: "AI technologies help businesses cut costs in areas such as operations, supply chain management, and customer service.Automation and predictive analytics enable businesses to optimize resource usage, forecast demand more accurately, and reduce waste, resulting in lower operational expenses."
      },
      {
        title: "Data-Driven Insights", description: "AI can process and analyze massive amounts of data quickly, providing actionable insights that would be difficult for humans to uncover on their own.These insights help businesses make more informed decisions about marketing, product development, and strategic planning, enabling more effective targeting of opportunities."
      },
      {
        title: "Improved Customer Experience", description: "AI-powered tools like chatbots, recommendation engines, and personalized content enhance the customer experience by delivering fast, relevant, and tailored interactions.By providing real- time responses and anticipatory services, businesses can meet customer expectations more effectively, driving satisfaction and loyalty."
      },
      { title: "Scalability", description: "RFID reduces labor and operational costs by automating inventory checks, minimizing loss, and optimizing supply chain processes." },

    ]
  };

  groups = {
    title: " ",
    description: " ",
    groupsArray: [
      { title: " ", description: " " },
    ]
  };

  help = {
    title: "Industries",
    //headingArray: ["Manufacturing", "Manufacturing"],
    description: " "
  };

  help2 = {
    tabArray: ['Manufacturing', 'Healthcare', 'Construction', 'Oil & Gas', 'Government', 'Logistics', 'Retail'],
    helps: [
      {
        title: 'Manufacturing', description: 'AI-driven predictive maintenance solutions help manufacturers detect potential equipment failures before they occur, minimizing downtime and extending machine lifespans.Additionally, automated quality control systems use AI to inspect products during production, ensuring higher quality and reducing waste by detecting defects early.'
      },
      {
        title: 'Healthcare', description: 'AI technologies enable personalized medicine by analyzing vast amounts of patient data to tailor treatment plans, improving outcomes and reducing the trial- and - error process.In addition, remote monitoring solutions leverage wearable devices to track patient vitals in real - time, allowing healthcare providers to intervene proactively and improve long - term care management.'
      },
      {
        title: 'Construction', description: 'In construction, AI-powered project management tools track timelines, resources, and budgets, helping companies avoid cost overruns and delays.Moreover, AI- based safety systems use computer vision to monitor construction sites for hazards, reducing accidents by alerting workers and supervisors in real- time to unsafe conditions'
      },

      {
        title: 'Oil & Gas', description: 'AI assists in oil and gas exploration by analyzing seismic data to identify potential drilling sites more accurately and efficiently, reducing costs.Predictive maintenance models also monitor equipment and pipelines for signs of wear or potential failure, enabling proactive maintenance and reducing operational disruptions or environmental risks.'
      },
      {
        title: 'Government', description: 'AI enhances public safety through advanced surveillance and social media monitoring, allowing law enforcement agencies to detect and respond to potential threats more effectively.In smart cities, AI optimizes urban systems like traffic, waste management, and energy use, making cities more sustainable and efficient while improving disaster response through predictive analytics.'
      },
      {
        title: 'Logistics', description: 'In logistics, AI helps optimize delivery routes by analyzing real-time traffic data and weather conditions, resulting in faster deliveries and reduced fuel costs.Additionally, machine learning models predict inventory demand with high accuracy, allowing logistics companies to maintain optimal stock levels and reduce inefficiencies in the supply chain.'
      },
      {
        title: 'Retail', description: 'AI improves the retail experience by providing personalized recommendations based on customer behavior and preferences, leading to increased sales and customer loyalty.AI also enhances supply chain management by accurately forecasting product demand, reducing overstock and stockouts, and ensuring timely product availability to meet customer needs.'
      },
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
