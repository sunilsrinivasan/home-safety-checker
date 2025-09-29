// chatbot.js
// Home Safety Checker Chatbot (Steps 1–20)

const chatbotSteps = {
  // Step 1
  step1: {
    message: "You are worried about:",
    options: [
      { label: "Space-wise safety of the house", next: "step2" },
      { label: "Age-wise safety of the house", next: "step14" }
    ]
  },

  // Branch: Space-wise (Steps 2–13)
  step2: {
    message: "Which portion of your house are you worried about?",
    options: [
      { label: "Balcony", next: "step3" },
      { label: "Bathroom", next: "step4" },
      { label: "Bedroom", next: "step5" },
      { label: "Dining room", next: "step6" },
      { label: "Drawing room", next: "step7" },
      { label: "Garden", next: "step8" },
      { label: "General", next: "step9" },
      { label: "Kitchen", next: "step10" },
      { label: "Playpen", next: "step11" },
      { label: "Staircase", next: "step12" },
      { label: "Toilets", next: "step13" }
    ]
  },
  step3: { message: "Note railing height; space between bars.", options: [{ label: "Restart", next: "step1" }] },
  step4: { message: "Keep buckets lidded; store liquids & cleaners; beware of hot water taps.", options: [{ label: "Restart", next: "step1" }] },
  step5: { message: "Keep medicines locked; place floor mattress by bedside; beware of repellents/coils; use cupboard locks.", options: [{ label: "Restart", next: "step1" }] },
  step6: { message: "Avoid table cloths; beware of hot liquids & sharp cutlery; use foam bumpers.", options: [{ label: "Restart", next: "step1" }] },
  step7: { message: "Watch for small sharp objects on floor; secure low-placed TVs; cover sockets.", options: [{ label: "Restart", next: "step1" }] },
  step8: { message: "Beware of thorns, insects, sharp branches, weed-killer bottles, and snakes.", options: [{ label: "Restart", next: "step1" }] },
  step9: { message: "Cover plug points; avoid slippery floors; vacuum carpets; remove button batteries.", options: [{ label: "Restart", next: "step1" }] },
  step10: { message: "Be careful of open flames; hot liquids; matches; gas tubing; sharp knives.", options: [{ label: "Restart", next: "step1" }] },
  step11: { message: "Playpen height should exceed waist; spacing between rails must be narrow.", options: [{ label: "Restart", next: "step1" }] },
  step12: { message: "Block stairwells at both ends; always hold child on stairs.", options: [{ label: "Restart", next: "step1" }] },
  step13: { message: "Keep Western toilets covered; store cleaners out of reach.", options: [{ label: "Restart", next: "step1" }] },

  // Branch: Age-wise (Steps 14–20)
  step14: {
    message: "The age of your child is:",
    options: [
      { label: "0–6 months", next: "step15" },
      { label: "6–12 months", next: "step16" },
      { label: "1–2 years", next: "step17" },
      { label: "2–3 years", next: "step18" },
      { label: "3–5 years", next: "step19" },
      { label: "5+ years", next: "step20" }
    ]
  },
  step15: {
    message:
      "0–6 Months:\n" +
      "Key Milestones: Lifts head on tummy; rolls over; grasps objects.\n" +
      "Safety Actions: Firm mattress, fitted sheet only; no loose blankets/toys; check crib railing gaps.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step16: {
    message:
      "6–12 Months:\n" +
      "Key Milestones: Sits; crawls; pulls to stand.\n" +
      "Safety Actions: Cushion corners/edges; child-proof lower cabinets; remove small hazards; install gates.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step17: {
    message:
      "1–2 Years:\n" +
      "Key Milestones: Cruises along furniture; first steps; climbs.\n" +
      "Safety Actions: Window guards; anchor heavy furniture; store art supplies; use door/drawer locks.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step18: {
    message:
      "2–3 Years:\n" +
      "Key Milestones: Runs, jumps; uses utensils; opens/closes doors.\n" +
      "Safety Actions: Non-slip mats; stove knob covers; door pinch guards; inspect playground gear.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step19: {
    message:
      "3–5 Years:\n" +
      "Key Milestones: Climbs well; follows instructions; rides tricycle.\n" +
      "Safety Actions: Helmet & pads; supervise water; lock pool gates; secure tools; remove batteries.",
    options: [{ label: "Restart", next: "step1" }]
  },
  step20: {
    message:
      "5+ Years:\n" +
      "Key Milestones: More independent; understands dangers; uses appliances with help.\n" +
      "Safety Actions: Practice first-aid drills; designate safe zones; teach fire extinguisher use; set online controls.",
    options: [{ label: "Restart", next: "step1" }]
  }
};

export default chatbotSteps;
