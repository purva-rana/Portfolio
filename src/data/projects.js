const projects = [
  {
    id: "histary",
    title: "HistARy: History in Augmented Reality",
    category: "AR / Computer Vision Research",
    subtitle: "A scalable pipeline for digital reconstruction and AR visualization of heritage monuments.",
    features: ["Automated Image Collection & Semantic Filtering",
      "Photogrammetry-Based 3D Reconstruction",
      "Real-Time AR Anchoring for On-Site Visualization"
    ],
    impact: 
      "Investigates how computer vision and AR pipelines can enable non-invasive digital preservation of heritage sites, allowing historical structures to be visualized in their original context without physical restoration or alteration.",
    tech: 
      "Unity · Vuforia · Blender · Python · OpenCV · COLMAP · YOLOv8 · CLIP",
    status: "Research Prototype",
    github: "https://github.com/purva-rana/histARy",
    showCTA: true,
  },
  {
    id: "phams",
    title: "PHAMS",
    category: "Full-Stack",
    subtitle: "A Full-Stack Enterprise System for Hospital Management.",
    features: ["Secure Role-Based Dashboards", "Real-time Appointment Matrix", "Data Integrity Constraints"],
    impact: "Centralized patient and staff data to enhance operational efficiency and ensure data integrity across multiple hospitals.",
    tech: "JavaFX · Spring Boot · SQL",
    status: "Deployed (Demo)",
    github: "https://github.com/purva-rana/PHAMS",
    showCTA: false,
  },
  {
    id: "mindscapevr",
    title: "MindscapeVR: Neural Rescue",
    category: "XR / Medical Simulation Research",
    subtitle: "A spatial computing approach to neurosurgical training in immersive VR.",
    features: [
      "XR-Based Neurosurgical Training System",
      "Custom Neural Architecture Modeling (3D)",
      "Dynamic Trauma Visualization",
      "Embodied Interaction via OpenXR"
    ],
    impact:
      "Examines how immersive, spatially grounded VR environments can improve understanding of neurological trauma and support the development of surgical intuition, compared to static 2D medical representations.",
    tech:
      "Unity (URP) · OpenXR · XR Interaction Toolkit · Blender · Meta Quest 2",
    status: "Research Prototype",
    github: "https://github.com/purva-rana/MindscapeVR",
    showCTA: true
  },
  {
    id: "tca",
    title: "Terms & Conditions Analyzer",
    category: "AI / NLP",
    subtitle: "Demystifying Legal Jargon with Natural Language Processing.",
    features: ["Sentiment Analysis", "Unfavorable Clause Detection", "Plain-Language Summaries"],
    impact: "Empowers users to understand contracts by automatically flagging potentially unfavorable clauses, saving time and reducing risk.",
    tech: "Python · NLP · Custom Dataset",
    status: "Testing Phase",
    github: "https://github.com/purva-rana/terms-n-conditions-summarizer",
    showCTA: true,
  },
  {
    id: "rythmiq",
    title: "RythmiQ",
    category: "AI / Web App",
    subtitle: "An AI-powered generator for context-aware Spotify playlists.",
    features: ["Natural Language Intent Parsing", "Custom Recommendation Algorithms", "Duration Control"],
    impact: "Creates hyper-personalized playlists that adapt to user intent, going beyond Spotify's standard recommendations.",
    tech: "Python · Spotify API · React",
    status: "Backend Complete",
    github: "https://github.com/purva-rana",
    showCTA: false,
  },
  {
    id: "pantry",
    title: "Pantry Pal",
    category: "AI / Web App",
    subtitle: "From CRUD App to AI-Powered Kitchen Assistant.",
    features: ["AI Recipe Generation", "Inventory-Based Suggestions", "Automated Shopping Lists"],
    impact: "Transformed a simple inventory tracker into a smart assistant that minimizes food waste through intelligent recipe suggestions.",
    tech: "React · Firebase · Generative AI",
    status: "Prototype",
    github: "https://github.com/purva-rana",
    showCTA: false,
  }
];

export default projects;