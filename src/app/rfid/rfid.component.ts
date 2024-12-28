import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-rfid',
  standalone: true,
  imports: [CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './rfid.component.html',
  styleUrl: './rfid.component.scss',
})
export class RfidComponent {

  constructor() { }
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
      { title: "03 RFID Platform Configuration", description: "We offer a flexible RFID platform tailored to your needs, reducing costs and eliminating extensive custom development for seamless integration." }
    ]
  };

  benefits = {
    title: "Benefits of Radio Frequency IDentification (RFID)",
    description: "RFID technology provides real-time visibility, accuracy, and efficiency in asset and inventory management. By automating processes and reducing errors, RFID enables better decision-making, cost savings, and the ability to identify bottlenecks, ultimately optimizing operations and improving productivity.",
    benefitsArray: [
      {
        title: "Improved Accuracy", description: "RFID minimizes human errors, ensuring highly accurate asset and inventory tracking, leading to more reliable operational data."
      },
      { title: "Real-Time Tracking", description: "RFID provides real-time visibility into asset locations, improving decision-making and enabling immediate action based on up-to-date information." },
      { title: "Better Decision-Making", description: "With accurate, real-time data from RFID systems, managers can make better, informed decisions on resource allocation, inventory levels, and operational improvements." }
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

  helps = {
    title: "How RFID helps you",
    heading: "Manufacturing",
    description: "Helps description goes here.",
    helpsArray: ["Help 1", "Help 2"]
  };

  partners = [
    { heading: "Partner 1", image: "partner1.jpg" },
    { heading: "Partner 2", image: "partner2.jpg" }
  ];

  relatedSolutions = [
    { title: "Related Solution 1", description: "Description of related solution 1." },
    { title: "Related Solution 2", description: "Description of related solution 2." }
  ];

  ngOnInit(): void { }
}
