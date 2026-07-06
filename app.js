// GMAT Focus 705+ Interactive Coach - Application Logic (Consolidated Layout)

// --- 1. DETAILED 49-DAY STUDY CALENDAR DATA ---
const calendarData = [
  // WEEK 1: DIAGNOSTIC & CONCEPT FOUNDATION
  {
    day: 1, date: "Jul 6", type: "workday", week: 1,
    topic: "GMAT Intro & Number Properties (Divisibility)",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: GMAT Focus Structure & Divisibility Videos", details: "Watch intro videos on Focus layout. Learn prime factorization and divisibility rules.", resource: "Magoosh Videos", questions: 0, difficulty: "Easy/Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Quant Divisibility Practice & Error Logging", details: "Solve divisibility questions. Focus on identifying prime factor patterns. Log mistakes.", resource: "Official Guide Quant #1-20", questions: 20, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 2, date: "Jul 7", type: "workday", week: 1,
    topic: "Verbal: CR Premise/Conclusion & Quant: Primes",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: CR Arguments Structure & Quant Prime Numbers", details: "Understand CR argument components (Premise, Conclusion, Assumption). Watch Primes video.", resource: "Magoosh Videos", questions: 0, difficulty: "Easy/Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Primes & CR Identification", details: "Solve questions on primes. For CR, practice labeling premises and conclusions in arguments.", resource: "OG Quant #21-40 & OG Verbal CR #1-10", questions: 30, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 3, date: "Jul 8", type: "workday", week: 1,
    topic: "Quant: Even/Odd Logic & Verbal: CR Assumptions",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Integers Even/Odd & CR Assumption Basics", details: "Learn algebraic behavior of even/odd additions and products. Understand Assumption question goals.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Even/Odd & CR Assumption Drills", details: "Solve even/odd number property sets and CR assumptions. Focus on pre-thinking.", resource: "OG Quant #41-60 & OG Verbal CR #11-20", questions: 30, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 4, date: "Jul 9", type: "workday", week: 1,
    topic: "DI: Data Sufficiency Basics & Quant: Consecutive Integers",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: DS Logic & Consecutive Integers Theory", details: "Understand DS answer options (A, B, C, D, E) and consecutive integer summation rules.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Consecutive Integers & DS Starters", details: "Practice consecutive integer properties. Attempt easy DS Quant questions.", resource: "OG Quant #61-75 & OG DI DS #1-12", questions: 27, difficulty: "Easy/Medium", hours: 2.0 }
    ]
  },
  {
    day: 5, date: "Jul 10", type: "workday", week: 1,
    topic: "Verbal: CR Strengthen/Weaken Intro & Quant: Remainders",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: CR Strengthen & Weaken & Remainders Theory", details: "Understand how to strengthen and weaken logical arguments. Study remainder formulas.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Remainders & CR Strengthen/Weaken", details: "Solve remainder arithmetic sets. Apply CR strengthen/weaken strategies.", resource: "OG Quant #76-90 & OG Verbal CR #21-35", questions: 30, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 6, date: "Jul 11", type: "weekend", week: 1,
    topic: "Intensive Review: Number Properties & CR Logic",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Weekend Session 1: Quant Number Properties Timed Practice", details: "Run a 30-question timed set containing divisibility, primes, odds/evens, consecutive integers, and remainders.", resource: "OG Quant Review Book", questions: 30, difficulty: "Medium/Hard", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Weekend Session 2: Verbal CR Assumption & Weaken Timed Drill", details: "Run a 20-question timed set of CR. Practice passage mapping. Log all mistakes in Error Log.", resource: "OG Verbal Review Book", questions: 20, difficulty: "Medium/Hard", hours: 4.0 }
    ]
  },
  {
    day: 7, date: "Jul 12", type: "weekend", week: 1,
    topic: "Mock 1 Simulation & Diagnostic Retrospective",
    sessions: [
      { time: "09:00 AM - 12:15 PM", title: "GMAT Official Mock 1 (Diagnostic Run)", details: "Take Official Practice Exam 1. Mimic real exam timings and section order (Quant-Verbal-DI).", resource: "Official Practice Exam 1", questions: 64, difficulty: "Adaptive", hours: 3.25 },
      { time: "03:00 PM - 06:00 PM", title: "Deep Post-Mock Analysis & Error Logging", details: "Go through every wrong answer. Fill in mock score. Identify main weaknesses (timing vs concepts).", resource: "Error Log & Mock Tracker", questions: 0, difficulty: "N/A", hours: 3.0 }
    ]
  },

  // WEEK 2: CORE QUANT & ADVANCED CR
  {
    day: 8, date: "Jul 13", type: "leave", week: 2,
    topic: "Bootcamp Day 1: Linear & Quadratic Equations Mastery",
    sessions: [
      { time: "07:00 AM - 09:30 AM", title: "Bootcamp S1: Magoosh Algebra & Factoring Videos", details: "Watch quadratic factoring, algebraic fractions, system of equations, and simultaneous linear formulas.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 2.5 },
      { time: "09:30 AM - 12:00 PM", title: "Bootcamp S2: OG Algebra Exercises #1-40", details: "Solve algebra and factoring questions. Focus on speed and avoiding sign errors.", resource: "Official Guide Quant", questions: 40, difficulty: "Medium", hours: 2.5 },
      { time: "02:00 PM - 04:30 PM", title: "Bootcamp S3: CR Advanced Strengthen/Weaken Sets", details: "Solve advanced strengthen/weaken questions under 2m/question pacing constraint.", resource: "OG Verbal CR", questions: 25, difficulty: "Hard", hours: 2.5 },
      { time: "05:30 PM - 07:30 PM", title: "Bootcamp S4: Error Log Verification & Wednesday Prep", details: "Re-solve all errors logged in Week 1. Update the formula sheet with new algebra rules.", resource: "Error Log & Formula Sheet", questions: 0, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 9, date: "Jul 14", type: "leave", week: 2,
    topic: "Bootcamp Day 2: Inequalities & Absolute Value",
    sessions: [
      { time: "07:00 AM - 09:30 AM", title: "Bootcamp S1: Magoosh Inequalities & Absolute Values Theory", details: "Learn critical points method, quadratic inequalities, absolute value ranges, and sign diagrams.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "09:30 AM - 12:00 PM", title: "Bootcamp S2: OG Inequalities Practice #1-30", details: "Apply sign-testing techniques to complex inequalities and coordinate properties.", resource: "Official Guide Quant", questions: 30, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "02:00 PM - 04:30 PM", title: "Bootcamp S3: DI Table Analysis & Sorting Basics", details: "Learn to sort tables by columns to find averages, medians, and ratios under pressure.", resource: "Magoosh DI Videos & Practice", questions: 15, difficulty: "Medium", hours: 2.5 },
      { time: "05:30 PM - 07:30 PM", title: "Bootcamp S4: Timed Absolute Value Drill & Log", details: "Run a 15-question timed set on absolute values. Log and analyze all errors.", resource: "OG Quant Review", questions: 15, difficulty: "Hard", hours: 2.0 }
    ]
  },
  {
    day: 10, date: "Jul 15", type: "workday", week: 2,
    topic: "Quant: Functions & Sequences & Verbal: CR Boldface Intro",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Functions, Sequences & Boldface Structure", details: "Understand functional definitions and recursive sequences. Learn boldface role mapping.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Functions & CR Boldface Exercises", details: "Solve questions on functions/sequences. Practice mapping boldface sentences.", resource: "OG Quant #91-110 & OG Verbal CR #36-45", questions: 30, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 11, date: "Jul 16", type: "workday", week: 2,
    topic: "DI: Table Analysis & Quant: Algebra Word Problems",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Table Analysis Strategy & Word Problems Setup", details: "Learn to translate English word problems into algebraic equations.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: TA Questions & Word Problem Starters", details: "Solve on-screen table analysis questions and basic algebra word problems.", resource: "OG DI TA #1-10 & OG Quant #111-125", questions: 25, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 12, date: "Jul 17", type: "workday", week: 2,
    topic: "Verbal: CR Boldface Drills & Quant: Advanced Inequalities",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Boldface Strategy & Advanced Inequalities", details: "Learn to categorize choices by 'Support' or 'Oppose'. Review inequality properties.", resource: "Magoosh Videos", questions: 0, difficulty: "Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: CR Boldface & Inequalities Timed Set", details: "Solve challenging inequalities and boldface CR. Maintain strict time management.", resource: "OG Verbal CR #46-55 & OG Quant #126-140", questions: 25, difficulty: "Hard", hours: 2.0 }
    ]
  },
  {
    day: 13, date: "Jul 18", type: "weekend", week: 2,
    topic: "Algebra & CR Boldface Timed Battle",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Weekend Session 1: Timed Algebra & Functions Set", details: "Run a 35-question timed set of linear/quadratic algebra, functions, and inequalities.", resource: "OG Quant Review Book", questions: 35, difficulty: "Medium/Hard", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Weekend Session 2: Timed CR Boldface & Table Analysis Drill", details: "Perform a 20-question timed CR set and 10-table on-screen sorting analysis. Log mistakes.", resource: "OG Verbal & OG DI Review", questions: 30, difficulty: "Medium/Hard", hours: 4.0 }
    ]
  },
  {
    day: 14, date: "Jul 19", type: "weekend", week: 2,
    topic: "Mock 2 & Error Log Deep Dive",
    sessions: [
      { time: "09:00 AM - 12:15 PM", title: "GMAT Official Practice Exam 2", details: "Perform full-length mock simulation. Test timing benchmarks.", resource: "Official Practice Exam 2", questions: 64, difficulty: "Adaptive", hours: 3.25 },
      { time: "03:00 PM - 06:00 PM", title: "Mock Review & Formula Session", details: "Log all mistakes. Check if mock score improved. Revise algebra errors specifically.", resource: "Error Log & Formula Sheet", questions: 0, difficulty: "N/A", hours: 3.0 }
    ]
  },

  // WEEK 3: DI EXPANSION & RC DRILLS
  {
    day: 15, date: "Jul 20", type: "workday", week: 3,
    topic: "Quant: Ratios & Proportions & Verbal: RC Main Idea",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Ratios, Proportions & RC Primary Purpose Videos", details: "Learn ratio manipulation and scaling. Practice identifying main purpose in RC passages.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Ratios & RC Main Idea Passages", details: "Solve ratio problems. Read 3 RC passages and answer primary purpose questions.", resource: "OG Quant #141-160 & OG Verbal RC #1-12", questions: 32, difficulty: "Easy/Medium", hours: 2.0 }
    ]
  },
  {
    day: 16, date: "Jul 21", type: "workday", week: 3,
    topic: "Quant: Percentages & Verbal: RC Paragraph Mapping",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Percentages & RC Active Reading Strategies", details: "Understand percentage change, multipliers, and paragraph mapping.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Percentages & RC Passage Exercises", details: "Apply percentage multipliers. Map 3 passages and solve detail questions.", resource: "OG Quant #161-180 & OG Verbal RC #13-24", questions: 32, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 17, date: "Jul 22", type: "workday", week: 3,
    topic: "DI: Graphics Interpretation & Quant: Ratios & Percents",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Graphics Interpretation & Ratio Word Problems", details: "Learn to read bar, line, bubble, and tree charts. Study compound ratio concepts.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: DI Graphics & Ratio/Percent Sets", details: "Solve GI chart questions and complex ratio/percentage word problems.", resource: "OG DI GI #1-10 & OG Quant #181-200", questions: 30, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 18, date: "Jul 23", type: "workday", week: 3,
    topic: "Quant: Fractions & Decimals & Verbal: RC Specific Detail",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Fraction Properties, Recurring Decimals & RC Details", details: "Learn division rules and recurring decimals. Practice finding specific text details in RC.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Fractions & RC Detail Questions", details: "Solve fraction arithmetic. Read 3 RC passages and answer detail-oriented questions.", resource: "OG Quant #201-220 & OG Verbal RC #25-36", questions: 32, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 19, date: "Jul 24", type: "workday", week: 3,
    topic: "Verbal: CR Resolve the Paradox & Quant: Rates & Work Problems",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Resolve the Paradox CR & Rates/Work Formulas", details: "Learn rate-time-distance and work rate additions (\(W = R \times T\)). Understand paradox resolution.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Work Problems & CR Paradox", details: "Solve rate/work equations. Practice finding explanations for surprising CR facts.", resource: "OG Quant #221-240 & OG Verbal CR #56-65", questions: 30, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 20, date: "Jul 25", type: "weekend", week: 3,
    topic: "Ratios, Percentages & RC Detail Timed Set",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Weekend Session 1: Timed Ratios, Percentages & Word Problems", details: "Solve a timed 35-question set on percents, ratios, rates, and work problems.", resource: "OG Quant Review Book", questions: 35, difficulty: "Medium/Hard", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Weekend Session 2: Timed RC Passages & GI Graphics Practice", details: "Read 4 passages and answer 16 questions. Complete 12 Graphics Interpretation questions. Log errors.", resource: "OG Verbal & OG DI Review", questions: 28, difficulty: "Medium/Hard", hours: 4.0 }
    ]
  },
  {
    day: 21, date: "Jul 26", type: "weekend", week: 3,
    topic: "Mock 3 & Error Log Review",
    sessions: [
      { time: "09:00 AM - 12:15 PM", title: "GMAT Official Practice Exam 3", details: "Perform mock under test conditions. Track if rate problems and RC main ideas are solid.", resource: "Official Practice Exam 3", questions: 64, difficulty: "Adaptive", hours: 3.25 },
      { time: "03:00 PM - 06:00 PM", title: "Mock Review & Formula Session", details: "Analyze errors in Mock 3. Review all Wednesday logs to see if weak areas are resolving.", resource: "Error Log & Formula Sheet", questions: 0, difficulty: "N/A", hours: 3.0 }
    ]
  },

  // WEEK 4: TIMED PRESSURE & ADVANCED DS
  {
    day: 22, date: "Jul 27", type: "workday", week: 4,
    topic: "Quant: Exponents & Roots & Verbal: RC Inference",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Exponents Rules, Roots & RC Inference Strategies", details: "Learn base rules, negative exponents, roots simplification, and logical inferences in RC.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Exponents/Roots & RC Inference Passages", details: "Solve exponent/root math. Map 3 passages and solve inference questions.", resource: "OG Quant #241-260 & OG Verbal RC #37-48", questions: 32, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 23, date: "Jul 28", type: "workday", week: 4,
    topic: "DI: Multi-Source Reasoning (MSR) & Quant: Exponents Formulas",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: MSR Tab-Navigation & Exponent Sums", details: "Understand multi-tab reading strategy. Learn to handle additions/subtractions in exponents.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: DI MSR Sets & Exponent Questions", details: "Attempt on-screen MSR questions. Practice advanced roots/exponents math.", resource: "OG DI MSR #1-8 & OG Quant #261-275", questions: 23, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 24, date: "Jul 29", type: "workday", week: 4,
    topic: "Verbal: CR Evaluate the Argument & Quant: Mixture Word Problems",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Evaluate the Argument CR & Mixture Calculations", details: "Learn the variance test for Evaluate CR. Learn weighted averages for mixture problems.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Mixture Problems & CR Evaluate Drills", details: "Solve mixture questions. Solve CR evaluate questions using the variance test.", resource: "OG Quant #276-290 & OG Verbal CR #66-75", questions: 25, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 25, date: "Jul 30", type: "workday", week: 4,
    topic: "Quant: Advanced Algebra Word Problems & Verbal: RC Application",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Advanced Word Problems & RC Application (Analogy)", details: "Learn to translate complex scenarios. Practice identifying analogous situations in RC.", resource: "Magoosh Videos", questions: 0, difficulty: "Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Hard Word Problems & RC Application Questions", details: "Solve challenging word problems. Read 3 passages and solve analogy questions.", resource: "OG Quant #291-305 & OG Verbal RC #49-60", questions: 27, difficulty: "Hard", hours: 2.0 }
    ]
  },
  {
    day: 26, date: "Jul 31", type: "workday", week: 4,
    topic: "DI: Advanced Data Sufficiency & Quant: Roots Review",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Advanced DS Strategy & Roots Simplification", details: "Learn to test numbers systematically in algebraic DS questions.", resource: "Magoosh Videos", questions: 0, difficulty: "Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: DS Quant & Exponent Drills", details: "Solve complex DS Quant questions and exponent equations.", resource: "OG DI DS #13-30 & OG Quant #306-320", questions: 32, difficulty: "Hard", hours: 2.0 }
    ]
  },
  {
    day: 27, date: "Aug 1", type: "weekend", week: 4,
    topic: "Exponents, Roots & CR Evaluate Timed Run",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Weekend Session 1: Timed Exponents, Roots & Mixture Problems", details: "Attempt a 35-question timed set of exponent manipulation, roots, and mixtures.", resource: "OG Quant Review Book", questions: 35, difficulty: "Medium/Hard", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Weekend Session 2: Timed RC Passages & DI MSR Practice", details: "Perform a timed set of 4 passages and 2 complete multi-tab MSR questions. Log all errors.", resource: "OG Verbal & OG DI Review", questions: 26, difficulty: "Hard", hours: 4.0 }
    ]
  },
  {
    day: 28, date: "Aug 2", type: "weekend", week: 4,
    topic: "Mock 4 & Error Log Audit",
    sessions: [
      { time: "09:00 AM - 12:15 PM", title: "GMAT Official Practice Exam 4", details: "Simulate test under strict conditions. Watch for timing in MSR and exponent questions.", resource: "Official Practice Exam 4", questions: 64, difficulty: "Adaptive", hours: 3.25 },
      { time: "03:00 PM - 06:00 PM", title: "Mock Review & Formula Check", details: "Go through every wrong answer. Review standard equations. Update targets for next mock.", resource: "Error Log & Formula Sheet", questions: 0, difficulty: "N/A", hours: 3.0 }
    ]
  },

  // WEEK 5: OFFICIAL MATERIAL MASTERY
  {
    day: 29, date: "Aug 3", type: "workday", week: 5,
    topic: "Quant: Statistics (Mean/Median) & Verbal: CR Complete/Inference",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Statistics Averages & CR Complete the Argument Videos", details: "Learn mean, median, mode calculations and CR inference/conclusion question targets.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Averages & CR Inference", details: "Solve statistics questions. Practice extracting conclusions from facts in CR.", resource: "OG Quant #321-340 & OG Verbal CR #76-85", questions: 30, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 30, date: "Aug 4", type: "workday", week: 5,
    topic: "Quant: Coordinate Geometry & Verbal: RC Tone/Attitude",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Slope, Lines & RC Tone/Attitude Videos", details: "Study coordinate slope, intercepts, and linear lines. Practice identifying author's tone.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Coordinate Geometry & RC Tone Questions", details: "Solve coordinate problems. Map 3 passages and solve tone/attitude questions.", resource: "OG Quant #341-355 & OG Verbal RC #61-72", questions: 27, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 31, date: "Aug 5", type: "workday", week: 5,
    topic: "DI: Two-Part Analysis & Quant: Standard Deviation Concepts",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Two-Part Analysis Structure & Standard Deviation Theory", details: "Learn to align grid variables. Study standard deviation spread properties.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: DI Two-Part & SD Concepts", details: "Solve two-part analysis problems and standard deviation conceptual questions.", resource: "OG DI 2P #1-10 & OG Quant #356-370", questions: 25, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 32, date: "Aug 6", type: "leave", week: 5,
    topic: "Bootcamp Day 3: Advanced Coordinate Geometry & Two-Part Analysis",
    sessions: [
      { time: "07:00 AM - 09:30 AM", title: "Bootcamp S1: Magoosh Coordinate Geometry & Two-Part Videos", details: "Review perpendicular lines, midpoints, distance formulas, and algebraic grid alignments.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "09:30 AM - 12:00 PM", title: "Bootcamp S2: OG Coordinate Geometry & SD Practice #1-35", details: "Solve slope and standard deviation questions under pressure.", resource: "Official Guide Quant", questions: 35, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "02:00 PM - 04:30 PM", title: "Bootcamp S3: DI Two-Part Analysis Hard Sets", details: "Practice selecting two variables from a grid. Focus on saving time with rounding.", resource: "OG DI Two-Part Review", questions: 20, difficulty: "Hard", hours: 2.5 },
      { time: "05:30 PM - 07:30 PM", title: "Bootcamp S4: Timed Errors Review & Wednesday Calibration", details: "Attempt all errors logged in Weeks 3 and 4. Revise coordinate rules.", resource: "Error Log & Formula Sheet", questions: 0, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 33, date: "Aug 7", type: "leave", week: 5,
    topic: "Bootcamp Day 4: Advanced Statistics & RC Main Idea Drills",
    sessions: [
      { time: "07:00 AM - 09:30 AM", title: "Bootcamp S1: Magoosh Advanced Statistics & RC Tone Videos", details: "Review advanced mean/median properties and RC passage structures.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "09:30 AM - 12:00 PM", title: "Bootcamp S2: OG Statistics Drills #1-30", details: "Practice complex average, median, range, and standard deviation sets.", resource: "Official Guide Quant", questions: 30, difficulty: "Hard", hours: 2.5 },
      { time: "02:00 PM - 04:30 PM", title: "Bootcamp S3: RC Hard Passages Timed Marathon", details: "Read 5 hard passages, create paragraph maps, and answer all questions.", resource: "OG Verbal RC", questions: 20, difficulty: "Hard", hours: 2.5 },
      { time: "05:30 PM - 07:30 PM", title: "Bootcamp S4: Timed Statistics Test & Log", details: "Run a 15-question timed statistics test. Log errors in Error Log.", resource: "OG Quant Review", questions: 15, difficulty: "Hard", hours: 2.0 }
    ]
  },
  {
    day: 34, date: "Aug 8", type: "weekend", week: 5,
    topic: "Statistics, Coordinate & RC Marathon Timed Set",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Weekend Session 1: Timed Coordinate & Statistics Set", details: "Solve 35 timed questions on coordinates, mean, median, SD, and range.", resource: "OG Quant Review Book", questions: 35, difficulty: "Medium/Hard", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Weekend Session 2: Timed RC Passages & DI Two-Part Practice", details: "Complete 4 passages and 12 Two-Part analysis questions under timed pressure.", resource: "OG Verbal & OG DI Review", questions: 28, difficulty: "Hard", hours: 4.0 }
    ]
  },
  {
    day: 35, date: "Aug 9", type: "weekend", week: 5,
    topic: "Mock 5 & Post-Mock Audit",
    sessions: [
      { time: "09:00 AM - 12:15 PM", title: "GMAT Official Practice Exam 5", details: "Simulate test conditions. Focus on coordinate geometry and two-part analysis pacing.", resource: "Official Practice Exam 5", questions: 64, difficulty: "Adaptive", hours: 3.25 },
      { time: "03:00 PM - 06:00 PM", title: "Mock Review & Strategy Adjustment", details: "Log all mistakes. Check if mock score has reached 680+. Review statistical errors.", resource: "Error Log & Formula Sheet", questions: 0, difficulty: "N/A", hours: 3.0 }
    ]
  },

  // WEEK 6: PACING & SECTION MOCKS
  {
    day: 36, date: "Aug 10", type: "workday", week: 6,
    topic: "Quant: Permutations & Combinations & Verbal: CR Mixed Drills",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Permutations, Combinations & CR Argument Core", details: "Learn slots method, anagram grid, and factorials. Review logical reasoning principles.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Permutations & CR Timed Practice", details: "Solve combinations problems and a timed set of mixed CR questions.", resource: "OG Quant #371-385 & OG Verbal CR #86-95", questions: 25, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 37, date: "Aug 11", type: "workday", week: 6,
    topic: "Quant: Probability & Verbal: RC Mixed Timed Passages",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Probability Theory, And/Or Rules & RC Reading", details: "Learn addition and multiplication rules in probability. Study dependent events.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Probability & RC Timed Passages", details: "Solve probability equations. Solve a timed RC set of 3 passages.", resource: "OG Quant #386-400 & OG Verbal RC #73-84", questions: 27, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 38, date: "Aug 12", type: "workday", week: 6,
    topic: "DI: Mixed Timed Drills & Quant: Combinations & Probability",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: DI Timing Strategy & Probability Rules", details: "Practice rapid sorting on tables and reading charts efficiently.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: DI Mixed Set & Probability Drills", details: "Attempt a mixed timed DI practice set. Solve probability questions.", resource: "OG DI Mixed #1-10 & OG Quant #401-410", questions: 20, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 39, date: "Aug 13", type: "workday", week: 6,
    topic: "Quant: Sets & Venn Diagrams & Verbal: RC Active Mapping",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: 3-Group Venn Diagrams & RC Passage Mapping Review", details: "Study overlapping sets and 3-group Venn formula. Review paragraph mapping.", resource: "Magoosh Videos", questions: 0, difficulty: "Medium/Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Venn Diagrams & RC Timed Passage Drills", details: "Solve set questions. Map and solve questions for 3 passages.", resource: "OG Quant #411-425 & OG Verbal RC #85-96", questions: 27, difficulty: "Medium/Hard", hours: 2.0 }
    ]
  },
  {
    day: 40, date: "Aug 14", type: "workday", week: 6,
    topic: "Verbal: CR Boldface & Paradox Review & Quant: Advanced Sets",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: Boldface & Paradox Review & Sets Math", details: "Revise high-level reasoning for role-of-boldface and resolve-the-paradox.", resource: "Magoosh Videos", questions: 0, difficulty: "Hard", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: Hard Sets & CR Boldface Timed", details: "Solve challenging overlapping sets and boldface CR questions under time limits.", resource: "OG Quant #426-440 & OG Verbal CR #96-105", questions: 25, difficulty: "Hard", hours: 2.0 }
    ]
  },
  {
    day: 41, date: "Aug 15", type: "weekend", week: 6,
    topic: "Probability, Sets & CR Mixed Timed Marathon",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Weekend Session 1: Timed Probability, Venn Diagrams & Permutations", details: "Attempt a timed 35-question set on probability, sets, and permutations/combinations.", resource: "OG Quant Review Book", questions: 35, difficulty: "Medium/Hard", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Weekend Session 2: Timed RC & CR Official Online Question Bank", details: "Run a timed set of 12 CR and 12 RC questions using the online platform. Log errors.", resource: "Official GMAT Online Bank", questions: 24, difficulty: "Hard", hours: 4.0 }
    ]
  },
  {
    day: 42, date: "Aug 16", type: "weekend", week: 6,
    topic: "Mock 6 & Ultimate Mock Diagnostic Review",
    sessions: [
      { time: "09:00 AM - 12:15 PM", title: "GMAT Official Practice Exam 6", details: "Simulate final mock exam. Treat this as the real test day. Target: 705+.", resource: "Official Practice Exam 6", questions: 64, difficulty: "Adaptive", hours: 3.25 },
      { time: "03:00 PM - 06:00 PM", title: "Final Mock Review & Weakness Identification", details: "Log all final mock mistakes. Check pacing charts. Identify high-frequency careless errors.", resource: "Error Log & Mock Tracker", questions: 0, difficulty: "N/A", hours: 3.0 }
    ]
  },

  // WEEK 7: PEAK FORM & TAPERING
  {
    day: 43, date: "Aug 17", type: "leave", week: 7,
    topic: "Bootcamp Day 5: Final Review of Quant & Verbal Weakness",
    sessions: [
      { time: "07:00 AM - 09:30 AM", title: "Bootcamp S1: Error Log Re-solve (Quant Algebra & Numbers)", details: "Attempt every algebra and number properties question in the Error Log.", resource: "Error Log", questions: 25, difficulty: "Hard", hours: 2.5 },
      { time: "09:30 AM - 12:00 PM", title: "Bootcamp S2: Error Log Re-solve (Verbal CR & RC)", details: "Re-analyze all wrong verbal questions. Focus on identifying answer traps.", resource: "Error Log", questions: 20, difficulty: "Hard", hours: 2.5 },
      { time: "02:00 PM - 04:30 PM", title: "Bootcamp S3: Timed Mixed Official GMAT Drills", details: "Complete 15 Quant and 15 Verbal medium-hard questions.", resource: "Official Online Bank", questions: 30, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "05:30 PM - 07:30 PM", title: "Bootcamp S4: Formula Sheet & Note Finalization", details: "Review formula notes. Keep formulas and flashcards organized.", resource: "Formula Sheet & Flashcards", questions: 0, difficulty: "N/A", hours: 2.0 }
    ]
  },
  {
    day: 44, date: "Aug 18", type: "leave", week: 7,
    topic: "Bootcamp Day 6: Data Insights Pacing Calibration",
    sessions: [
      { time: "07:00 AM - 09:30 AM", title: "Bootcamp S1: DI Table Analysis & MSR Speed Run", details: "Solve 15 table analysis and MSR questions. Practice column sorting.", resource: "Official DI Question Bank", questions: 15, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "09:30 AM - 12:00 PM", title: "Bootcamp S2: DI Graph Interpretation & Two-Part Timed set", details: "Solve 15 GI and Two-Part questions under timed pressure.", resource: "Official DI Question Bank", questions: 15, difficulty: "Medium/Hard", hours: 2.5 },
      { time: "02:00 PM - 04:30 PM", title: "Bootcamp S3: Verbal Active Mapping Refresh", details: "Map and solve 4 medium-hard RC passages. Revise CR logical fallacies.", resource: "Official Verbal Bank", questions: 16, difficulty: "Hard", hours: 2.5 },
      { time: "05:30 PM - 07:30 PM", title: "Bootcamp S4: Error Log Audit & Stress Prep", details: "Review careless error trends. Practice deep breathing exercises.", resource: "Error Log & Notebook", questions: 0, difficulty: "N/A", hours: 2.0 }
    ]
  },
  {
    day: 45, date: "Aug 19", type: "workday", week: 7,
    topic: "Final Week: Quant Formula Review & Mini Verbal Timed Set",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Formula Sheet Revision & Active Recall", details: "Review algebraic equations and div/primes rules. Focus on memory recall.", resource: "Formula Sheet", questions: 0, difficulty: "N/A", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: 15 Quant & 15 Verbal Mixed Timed Drills", details: "Maintain momentum with a mixed set of medium-difficulty questions.", resource: "Official Guide", questions: 30, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 46, date: "Aug 20", type: "workday", week: 7,
    topic: "Final Week: Data Insights Pacing Check & Error Log Audit",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Magoosh: DI Pacing Strategies Final Review", details: "Review bookmarks and section pacing rules.", resource: "Magoosh Videos", questions: 0, difficulty: "N/A", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "OG Practice: 15 Data Insights Mixed Drill & Error Audit", details: "Solve 15 DI questions. Review error logs for remaining careless error patterns.", resource: "Official Guide DI", questions: 15, difficulty: "Medium", hours: 2.0 }
    ]
  },
  {
    day: 47, date: "Aug 21", type: "workday", week: 7,
    topic: "Final Week: Light Formula Reading & Logistics Check",
    sessions: [
      { time: "06:45 AM - 07:30 AM", title: "Light Formula Review & Active Recall", details: "Review basic arithmetic and algebra formulas.", resource: "Formula Sheet", questions: 0, difficulty: "N/A", hours: 0.75 },
      { time: "09:00 PM - 11:00 PM", title: "Logistics Verification & Calm Meditation", details: "Ensure identification documents and test details are ready. Practice relaxation techniques.", resource: "Test Center Guidelines", questions: 0, difficulty: "N/A", hours: 2.0 }
    ]
  },
  {
    day: 48, date: "Aug 22", type: "weekend", week: 7,
    topic: "Rest Day - No Study Protocol",
    sessions: [
      { time: "08:00 AM - 12:00 PM", title: "Active Recovery: Walking & Nutrition", details: "Go for a light walk. Hydrate and eat healthy meals.", resource: "None", questions: 0, difficulty: "N/A", hours: 4.0 },
      { time: "03:00 PM - 07:00 PM", title: "Mental Relaxation & Sleep Preparation", details: "Avoid all GMAT questions. Keep screen time minimal. Sleep early.", resource: "None", questions: 0, difficulty: "N/A", hours: 4.0 }
    ]
  },
  {
    day: 49, date: "Aug 23", type: "exam", week: 7,
    topic: "GMAT Focus Exam Day!",
    sessions: [
      { time: "06:30 AM - 08:30 AM", title: "Wake Up & Light Warm-Up Drills", details: "Solve 3 easy Quant and 3 easy Verbal questions (warm-up, do not check answers) to activate logical pathways.", resource: "Official Guide", questions: 6, difficulty: "Easy", hours: 2.0 },
      { time: "09:00 AM - 12:15 PM", title: "EXAM RUN: Quant, Verbal, DI", details: "Complete your GMAT Focus exam. Stay calm and stick to pacing benchmarks.", resource: "GMAT Test Center", questions: 64, difficulty: "Adaptive", hours: 3.25 }
    ]
  }
];

// --- 2. STATE MANAGEMENT (LOCAL STORAGE) ---
let userState = {
  completedDays: {},
  errorLog: [],
  mockScores: [
    { mockNum: 1, score: null },
    { mockNum: 2, score: null },
    { mockNum: 3, score: null },
    { mockNum: 4, score: null },
    { mockNum: 5, score: null },
    { mockNum: 6, score: null }
  ],
  habits: {},
  theme: "dark"
};

// Load state from local storage
function loadState() {
  const savedState = localStorage.getItem("gmat_coach_state");
  if (savedState) {
    try {
      userState = JSON.parse(savedState);
      if (!userState.mockScores || userState.mockScores.length < 6) {
        userState.mockScores = [
          { mockNum: 1, score: null },
          { mockNum: 2, score: null },
          { mockNum: 3, score: null },
          { mockNum: 4, score: null },
          { mockNum: 5, score: null },
          { mockNum: 6, score: null }
        ];
      }
    } catch (e) {
      console.error("Error parsing saved state", e);
    }
  }
}

// Save state to local storage
function saveState() {
  localStorage.setItem("gmat_coach_state", JSON.stringify(userState));
}

// --- 3. TAB NAVIGATION CONTROL ---
const tabs = document.querySelectorAll(".nav-item");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabName = tab.getAttribute("data-tab");
    switchTab(tabName);
  });
});

function switchTab(tabName) {
  // Update nav item highlights
  tabs.forEach(t => t.classList.remove("active"));
  const activeTab = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (activeTab) activeTab.classList.add("active");
  
  // Toggle tab contents
  contents.forEach(c => c.classList.remove("active"));
  const activeContent = document.getElementById(`tab-${tabName}`);
  if (activeContent) activeContent.classList.add("active");
  
  // Scroll to top of main area
  document.querySelector("main").scrollTop = 0;
  
  // Set tab titles
  const titleMap = {
    "dashboard": { t: "Dashboard", d: "Welcome back, Neeraj. Here is your overview." },
    "calendar": { t: "Study Calendar", d: "49-day detailed day-by-day coaching schedule (Jul 6 - Aug 23, 2026)." },
    "guides": { t: "Study Guides", d: "Unified Quant, Verbal, and Data Insights strategies." },
    "error-log": { t: "Error Log", d: "Interactive mistake database with learning takeaways." },
    "mocks-bootcamps": { t: "Mocks & Bootcamps", d: "Official practice tests and intensive leave schedules." },
    "exam-ready": { t: "Exam Preparation", d: "Final week tapering routines and test day guidelines." }
  };
  
  if (titleMap[tabName]) {
    document.getElementById("current-tab-title").innerText = titleMap[tabName].t;
    document.getElementById("current-tab-desc").innerText = titleMap[tabName].d;
  }

  // Sidebar responsive closing
  if (window.innerWidth <= 1024) {
    document.getElementById("sidebar").classList.remove("active");
  }
  
  // Re-run checks/charts if specific tab opened
  if (tabName === "dashboard") {
    renderDashboard();
  } else if (tabName === "calendar") {
    renderCalendar();
  } else if (tabName === "mocks-bootcamps") {
    setTimeout(initMockChart, 100); // Small timeout to ensure DOM renders before sizing chart
  } else if (tabName === "error-log") {
    renderErrorTable();
    updateTopicDropdown();
  }
}

// Mobile sidebar hamburger button
const hamburgerBtn = document.getElementById("hamburger-btn");
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("active");
  });
}

// Close sidebar when clicking outside on mobile
document.addEventListener("click", (e) => {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger-btn");
  if (sidebar && hamburger && window.innerWidth <= 1024 && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

// --- 4. SUB-TAB GUIDES SWITCHER ---
function switchGuideTab(guideTabId) {
  const guideBtns = document.querySelectorAll(".guide-tab-btn");
  const guideContents = document.querySelectorAll(".guide-tab-content");
  
  guideBtns.forEach(b => b.classList.remove("active"));
  guideContents.forEach(c => c.classList.remove("active"));
  
  // Find correct button and content
  const activeBtn = Array.from(guideBtns).find(b => b.getAttribute("onclick").includes(guideTabId));
  if (activeBtn) activeBtn.classList.add("active");
  
  const activeContent = document.getElementById(guideTabId);
  if (activeContent) activeContent.classList.add("active");
}

// --- 5. THEME TOGGLE CONTROL ---
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    userState.theme = newTheme;
    saveState();
  });
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", userState.theme);
}

// --- 6. EXPORT/IMPORT STUDY DATA ---
const btnExport = document.getElementById("btn-export");
if (btnExport) {
  btnExport.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userState, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `GMAT_Focus_Study_State_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });
}

// --- 7. RENDER STUDY CALENDAR ---
const weeksContainer = document.getElementById("weeks-container");

function renderCalendar() {
  if (!weeksContainer) return;
  weeksContainer.innerHTML = "";
  
  // Group days by weeks
  const weeks = {};
  calendarData.forEach(day => {
    if (!weeks[day.week]) {
      weeks[day.week] = [];
    }
    weeks[day.week].push(day);
  });
  
  // Render week blocks
  Object.keys(weeks).forEach(weekNum => {
    const daysInWeek = weeks[weekNum];
    const isFilteredWeek = document.getElementById("cal-filter-week").value;
    
    if (isFilteredWeek !== "all" && isFilteredWeek !== weekNum) {
      return;
    }
    
    const weekDiv = document.createElement("div");
    weekDiv.className = "week-section";
    
    // Calculate week hours completed
    let totalWeekHours = 0;
    let completedWeekHours = 0;
    daysInWeek.forEach(d => {
      let dayHours = d.sessions.reduce((sum, s) => sum + s.hours, 0);
      totalWeekHours += dayHours;
      if (userState.completedDays[d.day]) {
        completedWeekHours += dayHours;
      }
    });
    
    weekDiv.innerHTML = `
      <div class="week-header">
        <div class="week-title">Week ${weekNum} - <span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: normal;">${getWeekThemeText(weekNum)}</span></div>
        <div class="week-stats" style="font-size: 0.8rem; color: var(--text-secondary);">
          Completed: ${completedWeekHours.toFixed(1)} / ${totalWeekHours.toFixed(1)} hrs (${Math.round((daysInWeek.filter(d => userState.completedDays[d.day]).length / daysInWeek.length) * 100)}%)
        </div>
      </div>
      <div class="days-grid" id="days-grid-w${weekNum}"></div>
    `;
    
    weeksContainer.appendChild(weekDiv);
    
    const daysGrid = document.getElementById(`days-grid-w${weekNum}`);
    
    daysInWeek.forEach(d => {
      const isToday = checkIsToday(d.date);
      const isCompleted = userState.completedDays[d.day];
      
      const dayCard = document.createElement("div");
      dayCard.className = `day-card ${isCompleted ? 'completed' : ''} ${isToday ? 'today' : ''} ${d.type === 'leave' ? 'bootcamp' : ''}`;
      dayCard.onclick = () => openDayDetails(d.day);
      
      dayCard.innerHTML = `
        <div class="day-header">
          <span class="day-number">Day ${d.day}</span>
          <span class="day-date">${d.date}</span>
        </div>
        <div class="day-topic">${d.topic}</div>
        <div class="day-meta">
          <span class="day-badge">${d.type.toUpperCase()}</span>
          <span>${d.sessions.reduce((sum, s) => sum + s.hours, 0).toFixed(1)} hrs</span>
        </div>
      `;
      
      daysGrid.appendChild(dayCard);
    });
  });
}

function getWeekThemeText(week) {
  const weekThemes = {
    1: "Diagnostic & Divisibility Properties",
    2: "Algebra Equations & Inequalities",
    3: "Ratios, Percentages & RC Paragraph mapping",
    4: "Exponents, Roots & Multi-tab Data Insights",
    5: "Statistics & Coordinate Geometry",
    6: "Probability, Sets & Mock Speed Conditioning",
    7: "Error Log Re-solve & Test Strategy Calibration"
  };
  return weekThemes[week] || "";
}

function checkIsToday(dateStr) {
  const today = new Date();
  const options = { month: 'short', day: 'numeric' };
  const formattedToday = today.toLocaleDateString('en-US', options).replace(',', '');
  return formattedToday === dateStr || (dateStr === "Jul 6" && today.getFullYear() === 2026);
}

function filterCalendar() {
  renderCalendar();
}

function markAllCalendarCompleted() {
  calendarData.forEach(d => {
    userState.completedDays[d.day] = true;
    userState.habits[d.day] = true;
  });
  saveState();
  renderCalendar();
  renderDashboard();
}

function resetCalendarProgress() {
  if (confirm("Are you sure you want to reset all your progress data, habit logs, mock scores, and error logs? This cannot be undone.")) {
    userState.completedDays = {};
    userState.errorLog = [];
    userState.mockScores = [
      { mockNum: 1, score: null },
      { mockNum: 2, score: null },
      { mockNum: 3, score: null },
      { mockNum: 4, score: null },
      { mockNum: 5, score: null },
      { mockNum: 6, score: null }
    ];
    userState.habits = {};
    saveState();
    renderCalendar();
    renderDashboard();
    alert("Progress has been fully reset.");
  }
}

// --- 8. MODAL PLAN DETAIL WINDOW ---
let activeDayId = null;

function openDayDetails(dayNum) {
  activeDayId = dayNum;
  const d = calendarData.find(day => day.day === dayNum);
  if (!d) return;
  
  document.getElementById("modal-day-title").innerText = `Day ${d.day} (${d.date}): ${d.topic}`;
  
  const body = document.getElementById("modal-day-body");
  body.innerHTML = "";
  
  d.sessions.forEach((s, idx) => {
    const isNight = s.time.includes("PM");
    const block = document.createElement("div");
    block.className = `session-block ${isNight ? 'night' : ''}`;
    
    block.innerHTML = `
      <div class="session-time">${s.time}</div>
      <div class="session-title">${s.title}</div>
      <div class="session-details">${s.details}</div>
      <div class="session-meta-grid">
        <div>Resource: <strong>${s.resource}</strong></div>
        <div>Questions: <strong>${s.questions > 0 ? s.questions : 'None/Concept'}</strong></div>
        <div>Difficulty: <strong>${s.difficulty}</strong></div>
        <div>Est. Time: <strong>${s.hours} hrs</strong></div>
      </div>
    `;
    
    body.appendChild(block);
  });
  
  document.getElementById("modal-chk-complete").checked = !!userState.completedDays[d.day];
  document.getElementById("schedule-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("schedule-modal").style.display = "none";
}

function toggleModalDayComplete() {
  if (activeDayId === null) return;
  const isChecked = document.getElementById("modal-chk-complete").checked;
  
  if (isChecked) {
    userState.completedDays[activeDayId] = true;
    userState.habits[activeDayId] = true;
  } else {
    delete userState.completedDays[activeDayId];
    delete userState.habits[activeDayId];
  }
  
  saveState();
  renderCalendar();
  renderDashboard();
}

// --- 9. DASHBOARD CALCULATIONS & RENDERING ---
function renderDashboard() {
  loadState();
  applyTheme();
  
  // Days Countdown Calculation
  const examDate = new Date("2026-08-23T09:00:00");
  const today = new Date();
  const timeDiff = examDate - today;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  
  const daysCountdown = document.getElementById("days-countdown");
  if (daysCountdown) daysCountdown.innerText = daysDiff > 0 ? daysDiff : 0;
  
  // Progress calculations
  const totalDays = calendarData.length;
  const completedCount = Object.keys(userState.completedDays).length;
  const completionPercentage = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;
  
  const dashCompletedDays = document.getElementById("dash-completed-days");
  if (dashCompletedDays) dashCompletedDays.innerText = completedCount;
  
  // Circular progress ring stroke calculation
  const circle = document.getElementById("progress-circle");
  if (circle) {
    const circumference = 35 * 2 * Math.PI; // radius is 35
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (completionPercentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  const progressText = document.getElementById("dash-progress-text");
  if (progressText) progressText.innerText = `${completionPercentage}%`;
  
  // Total Study Hours calculation
  let totalHoursCompleted = 0;
  calendarData.forEach(d => {
    if (userState.completedDays[d.day]) {
      totalHoursCompleted += d.sessions.reduce((sum, s) => sum + s.hours, 0);
    }
  });
  
  const dashHours = document.getElementById("dash-hours");
  if (dashHours) dashHours.innerText = `${totalHoursCompleted.toFixed(1)}h`;
  
  // Latest Mock Score rendering
  const scoresLogged = userState.mockScores.filter(s => s.score !== null);
  const latestMockEl = document.getElementById("dash-latest-mock");
  if (latestMockEl) {
    if (scoresLogged.length > 0) {
      const latest = scoresLogged[scoresLogged.length - 1];
      latestMockEl.innerText = latest.score;
    } else {
      latestMockEl.innerText = "N/A";
    }
  }
  
  // Error Log metrics calculations
  const weakestBadge = document.getElementById("weakest-topic-badge");
  const strongestBadge = document.getElementById("strongest-topic-badge");
  const mistakeReason = document.getElementById("mistake-reason");
  const dashAccuracy = document.getElementById("dash-accuracy");
  
  if (userState.errorLog.length > 0) {
    const totalErrors = userState.errorLog.length;
    const masteredCount = userState.errorLog.filter(e => e.mastered).length;
    const accuracy = Math.round((masteredCount / totalErrors) * 100);
    
    if (dashAccuracy) dashAccuracy.innerText = `${accuracy}%`;
    
    // Topic aggregation for Weakest & Strongest
    const topicStats = {};
    const reasonStats = {};
    
    userState.errorLog.forEach(item => {
      if (!topicStats[item.topic]) {
        topicStats[item.topic] = { total: 0, mastered: 0 };
      }
      topicStats[item.topic].total++;
      if (item.mastered) {
        topicStats[item.topic].mastered++;
      }
      
      if (!reasonStats[item.reason]) {
        reasonStats[item.reason] = 0;
      }
      reasonStats[item.reason]++;
    });
    
    let weakestTopic = "None";
    let lowestRatio = 1.1;
    let strongestTopic = "None";
    let highestRatio = -0.1;
    
    Object.keys(topicStats).forEach(t => {
      const stats = topicStats[t];
      const ratio = stats.mastered / stats.total;
      
      if (ratio < lowestRatio) {
        lowestRatio = ratio;
        weakestTopic = t;
      }
      if (ratio >= highestRatio) {
        highestRatio = ratio;
        strongestTopic = t;
      }
    });
    
    let primaryReason = "N/A";
    let maxReasonCount = 0;
    Object.keys(reasonStats).forEach(r => {
      if (reasonStats[r] > maxReasonCount) {
        maxReasonCount = reasonStats[r];
        primaryReason = r;
      }
    });
    
    if (weakestBadge) weakestBadge.innerText = weakestTopic;
    if (strongestBadge) strongestBadge.innerText = strongestTopic;
    if (mistakeReason) mistakeReason.innerText = primaryReason;
  } else {
    if (dashAccuracy) dashAccuracy.innerText = "N/A";
    if (weakestBadge) weakestBadge.innerText = "None Recorded";
    if (strongestBadge) strongestBadge.innerText = "None";
    if (mistakeReason) mistakeReason.innerText = "N/A";
  }
  
  renderHabitsGrid();
  renderTodayChecklist();
}

function renderHabitsGrid() {
  const grid = document.getElementById("habit-tracker-grid");
  if (!grid) return;
  grid.innerHTML = "";
  
  for (let i = 1; i <= 49; i++) {
    const block = document.createElement("div");
    const isCompleted = !!userState.habits[i];
    block.className = `habit-day ${isCompleted ? 'completed' : ''}`;
    block.title = `Day ${i}: ${isCompleted ? 'Completed' : 'Not completed'}`;
    block.innerText = i;
    block.onclick = () => {
      if (userState.habits[i]) {
        delete userState.habits[i];
        delete userState.completedDays[i];
      } else {
        userState.habits[i] = true;
        userState.completedDays[i] = true;
      }
      saveState();
      renderDashboard();
    };
    grid.appendChild(block);
  }
}

function renderTodayChecklist() {
  const container = document.getElementById("today-checklist-container");
  if (!container) return;
  container.innerHTML = "";
  
  let currentDay = calendarData[0];
  const today = new Date();
  
  for (let i = 0; i < calendarData.length; i++) {
    const d = calendarData[i];
    const isToday = checkIsToday(d.date);
    if (isToday) {
      currentDay = d;
      break;
    }
  }
  
  const todayDayLbl = document.getElementById("today-day-lbl");
  if (todayDayLbl) todayDayLbl.innerText = `Day ${currentDay.day} (${currentDay.date})`;
  
  currentDay.sessions.forEach((s, idx) => {
    const item = document.createElement("div");
    item.className = "checklist-item";
    
    const isChecked = !!userState.completedDays[currentDay.day];
    
    item.innerHTML = `
      <input type="checkbox" id="chk-today-${idx}" style="cursor:pointer;" ${isChecked ? 'checked' : ''} onchange="toggleTodayCheck(${currentDay.day})">
      <label for="chk-today-${idx}" style="cursor:pointer; font-size:0.8rem; line-height: 1.3;">
        <strong>${s.time}</strong>: ${s.title} (${s.resource})
      </label>
    `;
    container.appendChild(item);
  });
}

function toggleTodayCheck(dayNum) {
  const checkBoxes = document.querySelectorAll(`[id^="chk-today-"]`);
  let allChecked = true;
  checkBoxes.forEach(c => {
    if (!c.checked) allChecked = false;
  });
  
  if (allChecked) {
    userState.completedDays[dayNum] = true;
    userState.habits[dayNum] = true;
  } else {
    delete userState.completedDays[dayNum];
    delete userState.habits[dayNum];
  }
  saveState();
  renderDashboard();
}

// --- 10. ERROR LOG LOGIC ---
const topicsBySubject = {
  "Quant": ["Arithmetic", "Number Properties", "Algebra", "Ratios", "Percentages", "Fractions", "Decimals", "Exponents", "Roots", "Word Problems", "Statistics", "Probability", "Geometry", "Coordinate Geometry"],
  "Verbal": ["Critical Reasoning", "Reading Comprehension"],
  "Data Insights": ["Data Sufficiency", "Table Analysis", "Graph Analysis", "Multi-Source Reasoning", "Two-Part Analysis"]
};

function updateTopicDropdown() {
  const subjectSelect = document.getElementById("err-subject");
  const topicSelect = document.getElementById("err-topic");
  if (!subjectSelect || !topicSelect) return;
  
  const selectedSubject = subjectSelect.value;
  topicSelect.innerHTML = "";
  
  topicsBySubject[selectedSubject].forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.innerText = t;
    topicSelect.appendChild(opt);
  });
}

function addErrorEntry(e) {
  e.preventDefault();
  
  const subject = document.getElementById("err-subject").value;
  const topic = document.getElementById("err-topic").value;
  const resource = document.getElementById("err-resource").value;
  const reason = document.getElementById("err-mistake-reason").value;
  const method = document.getElementById("err-method").value;
  
  const newEntry = {
    id: Date.now(),
    subject,
    topic,
    resource,
    reason,
    method,
    mastered: false
  };
  
  userState.errorLog.unshift(newEntry);
  saveState();
  
  document.getElementById("err-resource").value = "";
  document.getElementById("err-method").value = "";
  
  renderErrorTable();
  renderDashboard();
  alert("Error entry added!");
}

function renderErrorTable() {
  const tbody = document.getElementById("error-log-tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  
  const filterSubject = document.getElementById("table-filter-subject").value;
  
  const filteredLog = userState.errorLog.filter(item => {
    if (filterSubject === "all") return true;
    return item.subject === filterSubject;
  });
  
  if (filteredLog.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-secondary);">No mistakes logged yet. Keep it up!</td></tr>`;
    return;
  }
  
  filteredLog.forEach(item => {
    const tr = document.createElement("tr");
    let subjectBadge = "badge-quant";
    if (item.subject === "Verbal") subjectBadge = "badge-verbal";
    if (item.subject === "Data Insights") subjectBadge = "badge-di";
    
    tr.innerHTML = `
      <td><span class="badge ${subjectBadge}">${item.subject}</span></td>
      <td style="font-weight:600;">${item.topic}</td>
      <td>${item.resource}</td>
      <td><span style="color:var(--warning); font-size:0.75rem;">${item.reason}</span></td>
      <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${item.method}">${item.method}</td>
      <td>
        <input type="checkbox" ${item.mastered ? 'checked' : ''} onchange="toggleErrorMastery(${item.id})" class="status-switch">
        <span style="font-size:0.75rem; color:${item.mastered ? 'var(--success)' : 'var(--danger)'}; font-weight:600; margin-left:4px;">
          ${item.mastered ? 'Yes' : 'No'}
        </span>
      </td>
      <td>
        <button class="action-btn" onclick="deleteErrorEntry(${item.id})" title="Delete">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleErrorMastery(id) {
  const item = userState.errorLog.find(e => e.id === id);
  if (item) {
    item.mastered = !item.mastered;
    saveState();
    renderErrorTable();
    renderDashboard();
  }
}

function deleteErrorEntry(id) {
  if (confirm("Are you sure you want to delete this mistake?")) {
    userState.errorLog = userState.errorLog.filter(e => e.id !== id);
    saveState();
    renderErrorTable();
    renderDashboard();
  }
}

// --- 11. MOCK TEST TRACKER CHART ---
let mockChartInstance = null;

function initMockChart() {
  const ctx = document.getElementById("mockChart");
  if (!ctx) return;
  
  const labels = ["Mock 1", "Mock 2", "Mock 3", "Mock 4", "Mock 5", "Mock 6"];
  const scores = [null, null, null, null, null, null];
  
  userState.mockScores.forEach(s => {
    if (s.score !== null) {
      scores[s.mockNum - 1] = s.score;
    }
  });
  
  if (mockChartInstance) {
    mockChartInstance.destroy();
  }
  
  mockChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'My Score',
          data: scores,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          borderWidth: 2.5,
          tension: 0.25,
          pointBackgroundColor: '#14b8a6',
          pointBorderColor: '#fff',
          pointRadius: 5,
          spanGaps: true
        },
        {
          label: 'Target (705+)',
          data: [705, 705, 705, 705, 705, 705],
          borderColor: 'rgba(236, 72, 153, 0.4)',
          borderWidth: 1.5,
          borderDash: [5, 5],
          fill: false,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 500,
          max: 805,
          grid: { color: 'rgba(255, 255, 255, 0.02)' },
          ticks: { color: '#8e95a5', font: { size: 10 } }
        },
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.02)' },
          ticks: { color: '#8e95a5', font: { size: 10 } }
        }
      },
      plugins: {
        legend: {
          labels: { color: '#f3f4f6', font: { size: 10 } }
        }
      }
    }
  });
}

function addMockScore(e) {
  e.preventDefault();
  
  const mockNum = parseInt(document.getElementById("mock-num").value);
  const score = parseInt(document.getElementById("mock-score").value);
  
  const item = userState.mockScores.find(s => s.mockNum === mockNum);
  if (item) {
    item.score = score;
    saveState();
    initMockChart();
    renderDashboard();
    
    document.getElementById("mock-score").value = "";
    alert(`Mock ${mockNum} score saved!`);
  }
}

// --- 12. INITIALIZATION ---
window.onload = function() {
  loadState();
  applyTheme();
  renderDashboard();
};
