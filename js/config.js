// Speakers data + image directory
const IMG_DIR = "images/speakers/";

const speakers = [
  {
    name: "Dean W. Felsher",
    role: "Invited Speaker",
    title: "Professor of Medicine (Oncology) and of Pathology, Stanford University",
    img: "dean-felsher.png"
  },
  {
    name: "Yoichi Nabeshima", 
    role: "Invited Speaker", 
    title: "Professor of department of ageing science and medicine, Kyoto University", 
    img: "yoichi-nabeshima.png" 
  },
  { 
    name: "Alexey Moskalev", 
    role: "Invited Speaker", 
    title: "Professor and Corresponding Member, the Russian Academy of Sciences", 
    img: "alexey-moskalev.png" 
  },
  { 
    name: "YANG Qiang", 
    role: "Invited Speaker", 
    title: "Director, PolyU Academy for Artificial Intelligence · Fellow of Royal Society of Canada · Fellow of Canadian Academy of Engineering", 
    img: "yang-qiang.png" 
  },
  { 
    name: "LIU Yang", 
    role: "Invited Speaker", 
    title: "Associate Professor, Presidential Young Scholar, PolyU · Dean of Institute for AI Industry ResearchTsinghua University", 
    img: "liu-yang.png"
  }
];

// Program data
// Day -> periods -> items. Item types:
//   "block":    { type, tag, title, meta, talks }
//   "break":    { type, time, title }
//   "parallel": { type, note, tracks: [{ label, title, meta, sections: [{ title, meta, talks }] }] }
// Talk: { time, title, tag, note, speaker: { name, country, bio }, isBreak }
const TBA = "Speaker and topic to be announced";

const program = [
  {
    id: "day1",
    label: "Day 1 · Fri, Dec 4",
    periods: [
      {
        name: "Morning",
        items: [
          {
            type: "block",
            talks: [
              { time: "09:00–09:30", tag: "Ceremony", title: "Opening Ceremony" },
              { time: "09:30–10:00", tag: "Keynote", title: "Keynote Speech 1", note: TBA },
              { time: "10:00–10:30", tag: "Keynote", title: "Keynote Speech 2", note: TBA },
              { time: "10:30–10:45", title: "☕ Morning Coffee Break", isBreak: true },
              { time: "10:45–11:15", tag: "Keynote", title: "Keynote Speech 3", note: TBA },
              { time: "11:15–11:45", tag: "Keynote", title: "Keynote Speech 4", note: TBA },
              { time: "11:45–12:15", tag: "Keynote", title: "Keynote Speech 5", note: TBA }
            ]
          },
          { type: "break", time: "12:15–14:00", title: "🍽 Lunch Break" }
        ]
      },
      {
        name: "Afternoon",
        items: [
          {
            type: "block",
            talks: [
              { time: "14:00–14:30", tag: "Keynote", title: "Keynote Speech 6", note: TBA },
              { time: "14:30–15:00", tag: "Keynote", title: "Keynote Speech 7", note: TBA },
              { time: "15:00–15:30", tag: "Keynote", title: "Keynote Speech 8", note: TBA },
              { time: "15:30–15:45", title: "☕ Afternoon Coffee Break", isBreak: true },
              { time: "15:45–16:15", tag: "Keynote", title: "Keynote Speech 9", note: TBA },
              { time: "16:15–16:45", tag: "Keynote", title: "Keynote Speech 10", note: TBA },
              { time: "16:45–17:15", tag: "Keynote", title: "Keynote Speech 11", note: TBA }
            ]
          }
        ]
      },
    ]
  },
  {
    id: "day2",
    label: "Day 2 · Sat, Dec 5",
    periods: [
      {
        name: "Morning",
        items: [
          {
            type: "block",
            tag: "Plenary",
            title: "Main Forum",
            talks: [
              { time: "09:00–09:20", title: "Leader Speech", note: "Academician; President of Shanghai University; leaders of Zhangjiang Group, etc." },
              { time: "09:20–09:30", title: "Proposal: “Cognitive Aging, Disease Prevention, and Treatment, and Shared Health”" },
              {
                time: "09:30–10:00",
                title: "Targeting Hypoxia-Inducible Factors for the Treatment of Cancer and Blinding Eye Diseases",
                speaker: { name: "Gregg L. Semenza", country: "USA", bio: "Director, Vascular Program, Institute for Cell Engineering; Professor of Genetic Medicine, Johns Hopkins Medicine, Baltimore, United States" }
              },
              { time: "10:00–10:30", title: "Summary of Expert Consensus" },
              { time: "10:30–10:40", title: "Cooperative Contract Signing" },
              { time: "10:40–11:00", title: "📷 Group Photo & Coffee Break", isBreak: true }
            ]
          },
          {
            type: "block",
            tag: "Keynote",
            title: "Keynote Speeches",
            meta: "Conference Chairs: Stephen Dalton, Xiangmei Chen",
            talks: [
              {
                time: "11:00–11:30",
                title: "Extending Healthspan in Humans: Applying Knowledge from Longevity Research",
                speaker: { name: "Brian Kennedy", country: "USA", bio: "Distinguished Professor of Biochemistry & Physiology, Yong Loo Lin School of Medicine, National University of Singapore" }
              },
              {
                time: "11:30–12:00",
                title: "Mitochondrial Dysfunction as a Signature of Alzheimer's Disease: Insights from ATP11B",
                speaker: { name: "Robert Chunhua Zhao", bio: "Director of the Department of Cell Biology, Institute of Basic Medical Sciences, Chinese Academy of Medical Sciences; Dean of the School of Life Sciences, Shanghai University" }
              }
            ]
          },
          { type: "break", time: "12:00–13:30", title: "🍽 Lunch Break" }
        ]
      },
      {
        name: "Afternoon",
        items: [
          {
            type: "parallel",
            note: "4 sessions run at the same time from 13:30 — choose the track you wish to attend.",
            tracks: [
              {
                label: "Track A",
                title: "Keynote Speeches & Expert Consensus",
                meta: "13:30–18:00",
                sections: [
                  {
                    title: "Keynote Speeches",
                    meta: "Conference Chairs: Guanghui Liu, Eric Gilson",
                    talks: [
                      {
                        time: "13:30–13:55",
                        title: "Decline of Hippocampal TRF2 during Aging Triggers ATM-Dependent Memory Impairment",
                        speaker: { name: "Eric Gilson", country: "France", bio: "Telomere, Senescence and Cancer; Director, Professor-Clinician, PU-PHCE" }
                      },
                      { time: "13:55–14:20", title: "Genome Stability in Aging, Disease, and Inheritance: New Insights from C. elegans" },
                      { time: "14:20–14:45", title: "Using Human Brown Adipocytes to Develop New Therapies for Type II Diabetes" },
                      { time: "14:45–15:10", title: "Targeting Senescence to Rejuvenate the Aged Heart" },
                      { time: "15:10–15:30", title: "☕ Coffee Break", isBreak: true },
                      { time: "15:30–15:55", title: "Programming and Reprogramming of Aging" },
                      { time: "15:55–16:20", title: "New Conopeptide Analgesic Development to Treat Chronic Pain Without Addiction" }
                    ]
                  },
                  {
                    title: "Details of Expert Consensus",
                    meta: "Conference Chairs: Ronghua Jin, Shengdi Chen",
                    talks: [
                      { time: "16:20–17:00", title: "Details of Expert Consensus" },
                      { time: "17:00–17:30", title: "Mesoscopic Imaging for Brain-wide Neuronal Networks and Blood Vessels during Pathologic Aging" },
                      { time: "17:30–18:00", title: "Details of Expert Consensus" }
                    ]
                  }
                ]
              },
              {
                label: "Track B · Parallel Session 1",
                title: "Biomedical Imaging, Medical Devices and Disease",
                meta: "13:30–17:00 · Session Chairs: Shengxian Tu, Xiaolei Zuo",
                sections: [
                  {
                    talks: [
                      { time: "13:30–13:50", title: "Novel Approaches to Assess Computational Physiology and Plaque Vulnerability" },
                      { time: "13:50–14:10", title: "Bioprobes Based on Nucleic Acid Frameworks" }
                    ]
                  }
                ]
              },
              {
                label: "Track C · Parallel Session 2",
                title: "Clinical Forum — Liver Cancer Diagnosis and Treatment Frontier",
                meta: "13:30–16:10 · Session Chair: Feng Shen",
                sections: [
                  {
                    talks: [
                      { time: "13:30–13:50", title: "Clinical Application of Integrated Traditional Chinese and Western Medicine in the Diagnosis and Treatment of Liver Cancer" }
                    ]
                  }
                ]
              },
              {
                label: "Track D · Parallel Session 3",
                title: "Clinical Forum — Breast Cancer Diagnosis and Treatment Frontier",
                meta: "13:30–16:20 · Session Chair: Benzhong Wang",
                sections: []
              }
            ]
          }
        ]
      },
      {
        name: "Evening",
        items: [
          {
            type: "block",
            talks: [
              { time: "20:00–21:00", tag: "Closed Door", title: "Closed-door Meeting for Industry-University-Research Cooperation" }
            ]
          }
        ]
      }
    ]
  }
];
