---
title: "Supporting Instructors in Physical Computing Courses - Multiple Projects"
shortTitle: "Supporting Instructors in Physical Computing Courses"
description: "Systems supporting classroom resource management, orchestration, and instructor diagnosis of infrastructure failures in physical computing and educational robotics."
order: 3
featured: true
status: "In progress"
affiliation: "DePauw University"
image: "/images/classroom-orchestration.png"
imageAlt: "Abstract illustration of a teacher dashboard coordinating classroom devices"
tags:
  - Web Development
  - Education
  - Physical Computing
  - Robotics
  - Systems
  - HCI
links: []
subprojects:
  - title: "Classroom Resource Management and Orchestration System for Physical Computing Courses"
    links:
      - label: GitHub
        href: ""
  - title: "Supporting Instructor Diagnosis and Response to Infrastructure Failures in Networked Educational Robotics Activities"
    links:
      - label: GitHub
        href: ""
      - label: Abstract
        href: ""
    abstract: >-
      Many activities in robotics education involve the use of physical devices, which can create additional troubleshooting burdens for instructors. This challenge can become more complex in networked and cloud-based environments, where failures may come from different parts of the underlying infrastructure and system. To reduce this burden, we developed a proof-of-concept instructor-facing diagnostic and response-support system built on NetsBlox and RoboScape. The system monitors service availability, communication state, endpoint health, and command responses, then combines these signals to distinguish representative failure conditions. To support instructors’ awareness, the instructor-facing interface displays the diagnosis, supporting runtime evidence, and a corresponding suggestion on how they should respond to the failure.
    gallery:
      - src: "/images/classroom-support/view.png"
        alt: "Classroom diagnostic view"
        caption: "Figure 1: Example instructor-facing prototype output. Group A has a communication-path failure: the robot is still healthy, but RoboScape is no longer receiving its heartbeat. All signals for Group B are normal, so the system reports it as operating normally. The system suggests checking Group A’s network and RoboScape connection before replacing the device."
      - src: "/images/classroom-support/diagnostic-rules.png"
        alt: "Diagnostic rules used in the prototype"
        caption: "Table 2: Diagnostic rules used in the prototype."
      - src: "/images/classroom-support/examples.png"
        alt: "Instructor-facing response suggestions for diagnosed failure conditions"
        caption: "Table 1: Instructor-facing response suggestions associated with each diagnosed failure condition."
      - src: "/images/classroom-support/architecture.png"
        alt: "Diagnostic and response-support system architecture"
        caption: "Figure 2: Overview of the proof-of-concept architecture."
---
