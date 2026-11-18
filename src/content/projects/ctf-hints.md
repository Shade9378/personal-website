---
title: "Design of Progress-Aware Hint Systems for CTF-Based Cybersecurity Education"
shortTitle: "Design of Progress-Aware Hint Systems for CTF-Based Cybersecurity Education"
description: "Investigate progress-aware learning support for CTF-based cybersecurity education"
category: current
order: 1
featured: true
status: "Research"
affiliation: "CMU REUSE"
contributors:
  - Anh Vu
  - Marko Morrison
  - Hanan Hibshi (supervisor)
tags:
  - LLM
  - Education
  - Cybersecurity
  - HCI
links:
  - label: Abstract
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
abstract: >-
  Capture-the-Flag (CTF) challenges provide hands-on opportunities to develop practical cybersecurity skills, but their technical complexity can leave beginners stuck. Hints are often used as a method of scaffolding, but static hints may be ineffective because learners become stuck at different points in the solution process, motivating adaptive support based on demonstrated progress. Existing progress-aware feedback systems often rely on instructor-authored models and rules, creating substantial authoring effort across many challenges. While large language models (LLMs) may reduce this burden, unconstrained use can produce inaccurate or inconsistent guidance and expose the system to manipulation. To investigate these design choices, we design progress-aware CTF hint systems in terms of two main functions: constructing a milestone model of the challenge solution, and tracking learner progress through that model to select appropriate hints. Using this design, we instantiate three systems: a rule-based system, a direct-LLM system, and a hybrid system combining evidence-based progress tracking with LLM-generated milestone models from execution-verified solution traces. Future work will compare these architectures on hint accuracy, relevance, consistency, learner outcomes, and expert authoring effort.
thumbnail:
  src: /images/ctf-hint-systems/example_flow.png
  alt: Example learner progress and hint allocation flow
gallery:
  - src: "/images/ctf-hint-systems/overview.png"
    alt: "Figure 1: Architectural abstraction for adaptive CTF hint systems"
  - src: "/images/ctf-hint-systems/comparison.png"
    alt: "Table 1: Comparison of hint-system architectures."
  - src: "/images/ctf-hint-systems/example_flow.png"
    alt: "Figure 2: Example evidence-matching process for picoCTF 2022 Operation Oni challenge."
  - src: "/images/ctf-hint-systems/milestones_model.png"
    alt: "Figure 3: LLM-based milestone model generation and verification loop."
---
