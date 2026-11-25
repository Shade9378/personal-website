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
thumbnail:
  src: /images/classroom-orchestration/classroom-management-monitoring.png
  alt: Classroom management and monitoring interface
tags:
  - Web Development
  - Education
  - Physical Computing
  - Robotics
  - Systems
  - HCI
links: []
subprojects:
  - title: "A Centralized System for Classroom Planning, Orchestration, and Resource Management for Physical Computing Courses"
    links:
      - label: GitHub
        href: "https://github.com/Shade9378/classroom-orchestration"
    abstract: >-
      IoT and Robotics education often contains programming activities that involve physical devices, which often require extensive manual coordination, planning, and setup regarding hardware and connectivity, which can take lots of time; even then, things can still go wrong, such as devices experiencing connectivity problems, losing power, or becoming unresponsive, which may end up taking up more of class time. To prepare these activities, the teacher must manually determine what physical capabilities each activity requires, ensure that enough compatible resources are available for every group, allocate those resources appropriately, and plan around possible failures. In addition, without a centralized view of the groups’ programming activity, it can be difficult for the teacher to have an overall and up-to-date mental model of what each group is doing and their resource state, which makes it harder for the teacher to intervene and provide help when needed. Although these problems can be addressed separately, they are closely related in practice, leading me to believe that it would be useful to address them within a single system. For this reason, I developed a full-stack, centralized classroom management system on top of the NetsBlox web editor and its broader ecosystem that integrates all the mentioned functionalities: organizing students into groups, planning and assigning activities ahead of time, monitoring each group's programming progress and resource state, tracking and allocating physical resources across groups, and assisting teachers with recovery when devices fail or become unavailable.
    gallery:
      - src: "/images/classroom-orchestration/high-level-architecture.png"
        alt: "High-level architecture"
        caption: "Image 1: High-level architecture"
      - src: "/images/classroom-orchestration/classroom-management-monitoring.png"
        alt: "Classroom management and monitoring interface"
        heading: "1. System Interface"
        caption: "Image 2: Classroom management and monitoring interface"
      - src: "/images/classroom-orchestration/activities-playlist-planning.png"
        alt: "Activities and playlist planning"
        caption: "Image 3: Activities and playlist planning"
      - src: "/images/classroom-orchestration/activities-resource-assignment.png"
        alt: "Activities and resource assignment interface"
        caption: "Image 4: Activities and resource assignment interface"
      - src: "/images/classroom-orchestration/student-program.png"
        alt: "Student program interface"
        heading: "2. Student Program Interface"
        caption: "Image 5: Student program interface"
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
