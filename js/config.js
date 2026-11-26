// Speakers data + image directory
const IMG_DIR = "images/speakers/";

const speakers = [
  {
    name: "Prof. Kunlin JIN",
    role: "Acknowledgment",
    title: "Professor, University of North Texas Health Science Center · Founding Editor-in-Chief, Aging and Disease",
    img: "kunlin-jin.png"
  },
  {
    name: "Prof. Xue BAI",
    role: "Keynote Speaker",
    title: "Associate Dean, Faculty of Health and Social Sciences · Professor, Department of Applied Social Sciences",
    img: "xue-bai.jpg"
  },
  {
    name: "Prof. Dean W. Felsher",
    role: "Keynote Speaker",
    title: "Professor of Medicine (Oncology) and of Pathology, Stanford University",
    img: "dean-felsher.png"
  },
  // {
  //   name: "Mingguang HE",
  //   role: "Keynote Speaker",
  //   title: "To be confirmed",
  //   img: "mingguang-he.png"
  // },
  {
    name: "Dr. Christine Huang",
    role: "Keynote Speaker",
    title: "Founder & CEO, Quantum Life",
    img: "christine-huang.png"
  },
  {
    name: "Prof. Zhihong JIANG",
    role: "Keynote Speaker",
    title: "Vice President, Macau University of Science and Technology · Director, State Key Laboratory for Quality Research in Chinese Medicines",
    img: "jiang-zhihong.png"
  },
  {
    name: "Prof. Raju Kucherlapati",
    role: "Keynote Speaker",
    title: "Professor of Genetics, Harvard Medical School · Member of the National Academy of Medicine",
    img: "raju-kucherlapati.png"
  },
  {
    name: "Prof. Yang LIU",
    role: "Keynote Speaker",
    title: "Co-Director of Research Institute of Federated Learning · Associate Professor, President Young Scholar, PolyU",
    img: "liu-yang.png"
  },
  {
    name: "Prof. Alexey Moskalev",
    role: "Keynote Speaker",
    title: "Professor and Corresponding Member, the Russian Academy of Sciences",
    img: "alexey-moskalev.png"
  },
  // {
  //   name: "David SHUM",
  //   role: "Keynote Speaker",
  //   title: "To be confirmed",
  //   img: "david-shum.png"
  // },
  // {
  //   name: "Matthew NGAN",
  //   role: "Longevity & Lifestyle Medicine Training",
  //   title: "Founder and Chairman, iRad Medical Diagnostic Centre",
  //   img: "matthew-ngan.png"
  // },
  {
    name: "Prof. Qiang YANG",
    role: "Keynote Speaker",
    title: "Director, PolyU Academy for Artificial Intelligence · Fellow of Royal Society of Canada · Fellow of Canadian Academy of Engineering",
    img: "yang-qiang.png"
  },
  {
    name: "Prof. Yongping ZHENG",
    role: "Keynote Speaker",
    title: "Henry G. Leong Professor in Biomedical Engineering · Director, Research Institute for Smart Ageing · Director, Jockey Club Smart Ageing Hub",
    img: "yongping-zheng.png"
  },
  {
    name: "Prof. Jiankang ZHU",
    role: "Keynote Speaker",
    title: "President, Macau University of Science and Technology · Member, U.S. National Academy of Sciences",
    img: "zhu-jiankang.png"
  },
  {
    name: "Prof. Weimo ZHU",
    role: "Keynote Speaker",
    title: "Fellow of the National Academy of Kinesiology · Professor Emeritus, University of Illinois Urbana-Champaign",
    img: "weimo-zhu.png"
  },
  // {
  //   name: "Yoichi Nabeshima",
  //   role: "Keynote Speaker",
  //   title: "Professor of department of ageing science and medicine, Kyoto University",
  //   img: "yoichi-nabeshima.png"
  // },
  {
    name: "Prof. Evelyne Yehudit Bischof",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Professor, Shanghai University of Medicine and Health Sciences, China · Visiting Professor, Tel Aviv University School of Medicine, Israel",
    img: "evelyne-bischof.png"
  },
  {
    name: "Prof. Xue FENG",
    role: ["Keynote Speaker", "Longevity & Lifestyle Medicine Training"],
    title: "Executive Deputy Director, Center for Healthy Lifestyle Medicine, NCCD · Vice-Chair and Secretary-General, Expert Committee on Lifestyle Medicine, NCCD",
    img: "xue-feng.png"
  },
  {
    name: "Prof. Steve Horvath",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Professor, University of California, Los Angeles (UCLA) · Principal Investigator, Altos Labs San Diego Institute of Science",
    img: "steve-horvath.png"
  },
  {
    name: "Dr. Edwin Lau",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Chief Medical Executive (Clinics), Parkway Medical Services",
    img: "edwin-lau.png"
  },
  {
    name: "Ms. Delia Leung",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Co-founder of Mindful Movement",
    img: "delia-leung.png"
  },
  {
    name: "Prof. Yuxuan LYU",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Associate Research Professor, Southern University of Science and Technology · Researcher, Faculty of Medicine, Macau University of Science and Technology",
    img: "lv-yuxuan.png"
  },
  {
    name: "Dr. Kenneth Mao",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Specialist at Union Reproductive Medicine Centre · Fellow of the Royal College of Obstetricians and Gynaecologists",
    img: "kenneth-mao.png"
  },
  {
    name: "Ms. Iva Ng",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Founder, ING Bespoke · VP Business Growth, APAC, Acclaro Medical",
    img: "iva-ng.jpg"
  },
  {
    name: "Dr. Wanviput Sanphasitvong",
    role: "Longevity & Lifestyle Medicine Training",
    title: "Business Development Director, Vitallife Scientific Wellness Center, Bumrungrad International Hospital · CEO, LifestyleTech Solution Co., Ltd.",
    img: "wanviput-sanphasitvong.jpg"
  },
];

// Ticket / payment data
// link: Stripe Payment Link URL (leave empty until created)
// deadline: optional ISO date-time; ticket becomes unavailable after it
// Layout: the first 2 tickets form the first row, the rest the second row
const CURRENCY = "US$";

const tickets = [
  {
    name: "Early Registration Discount",
    price: 300,
    deadline: "2026-10-31T23:59:59+08:00",
    note: "Access to both days, December 4–5 · Available until October 31, 2026",
    link: "https://buy.stripe.com/bJe7sLfv9gW76iF7nI8og05"
  },
  {
    name: "Full Conference Registration for Faculty",
    price: 600,
    note: "Access to both days, December 4–5",
    link: "https://buy.stripe.com/aFaeVdciXaxJ5eBgYi8og04"
  },
  {
    name: "Non-Presenter Registration",
    price: 250,
    note: "For family members or accompanying persons",
    link: "https://buy.stripe.com/3cIbJ13Mr0X936t23o8og00"
  },
  {
    name: "One-Day Registration",
    price: 350,
    note: "Access to one conference day",
    link: "https://buy.stripe.com/9B64gz5Uz9tF0Yl8rM8og03"
  },
  {
    name: "Student/Postdoc Registration",
    price: 300,
    note: "For full-time students and postdoctoral researchers",
    link: "https://buy.stripe.com/5kQ28r5Uz49lcH39vQ8og02"
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
              { time: "09:00–09:10", tag: "Ceremony", title: "Opening Speech", speaker: { name: "Prof. Christopher Chao", bio: "Senior Vice President, PolyU" } },
              { time: "09:10–09:20", tag: "Ceremony", title: "Welcome Address", speaker: { name: "Prof. Qiang YANG", bio: "Honorary Chair, Conference Committee" } },
              { time: "09:20–09:30", tag: "Ceremony", title: "Group Photo", speaker: { name: "Distinguished Guests & Keynote Speakers" } },
              { time: "09:30–09:45", tag: "Ceremony", title: "Welcome Address", speaker: { name: "Dr. Christine Huang · Dr. Yang Liu", bio: "Co-Chairs, Conference Committee" } },
              { time: "09:45–09:50", tag: "Ceremony", title: "Welcome Address", speaker: { name: "Prof. Kunlin JIN", bio: "Founder & CEO, ISOAD" } },
              { time: "09:50–10:15", title: "☕ Morning Break", speaker: { name: "All Participants" }, isBreak: true }
            ]
          },
          {
            type: "parallel",
            note: "Sessions run concurrently across the two venues.",
            tracks: [
              {
                label: "Keynote Speech Venue",
                title: "Chiang Chen Studio Theatre",
                meta: "10:15–12:15",
                sections: [
                  {
                    talks: [
                      { time: "10:15–10:45", title: "Keynote Speech 1", speaker: { name: "Prof. Dean Felsher", bio: "Stanford University" } },
                      { time: "10:45–11:15", title: "Keynote Speech 2", speaker: { name: "Prof. Raju Kucherlapati", bio: "Harvard Medical School" } },
                      { time: "11:15–11:45", title: "Keynote Speech 3", speaker: { name: "Prof. Alexey Moskalev", bio: "Russian Academy of Sciences" } },
                      { time: "11:45–12:15", title: "Keynote Speech 4", speaker: { name: "Prof. Zhihong JIANG", bio: "Macau University of Science and Technology" } }
                    ]
                  }
                ]
              },
              {
                label: "Training & Presentation Venue",
                title: "Lecture Room",
                meta: "10:30–12:30",
                sections: [
                  {
                    talks: [
                      { time: "10:30–11:00", title: "What Is Longevity Medicine?", speaker: { name: "Prof. Evelyne Bischof", bio: "Longevity Medicine Society" } },
                      { time: "11:00–11:30", title: "What Is Lifestyle Medicine and Its Progress?", speaker: { name: "Prof. Xue FENG", bio: "National Center for Cardiovascular Diseases (NCCD)" } },
                      { time: "11:30–12:00", title: "Biomarkers of Aging", speaker: { name: "Prof. Steve Horvath (Online)", bio: "UCLA" } },
                      { time: "12:00–12:30", title: "Reproductive Longevity", speaker: { name: "Dr. Kenneth MAO", bio: "Union Reproductive Medicine Centre" } }
                    ]
                  }
                ]
              }
            ]
          },
          { type: "break", time: "12:30–14:00", title: "🍽 Lunch Break" }
        ]
      },
      {
        name: "Afternoon",
        items: [
          {
            type: "parallel",
            note: "Sessions run concurrently across the two venues.",
            tracks: [
              {
                label: "Keynote Speech Venue",
                title: "AI in Lifestyle",
                meta: "14:00–17:55 · Chair: Prof. Xue FENG · Chiang Chen Studio Theatre",
                sections: [
                  {
                    talks: [
                      { time: "14:00–15:00", title: "Keynote Speech 5", speaker: { name: "Prof. Weimo ZHU", bio: "University of Illinois Urbana-Champaign" } },
                      { time: "15:00–15:30", title: "Keynote Speech 6", speaker: { name: "Prof. Xue FENG", bio: "National Center for Cardiovascular Diseases (NCCD)" } },
                      { time: "15:30–15:50", title: "☕ Afternoon Break", speaker: { name: "All Participants" }, isBreak: true },
                      { time: "15:50–16:20", title: "Keynote Speech 7", speaker: { name: "Prof. Jiankang ZHU", bio: "Macau University of Science and Technology" } },
                      { time: "16:20–16:50", title: "Keynote Speech 8", speaker: { name: "Prof. Qiang YANG", bio: "PolyU Academy for Artificial Intelligence" } },
                      { time: "16:50–17:10", title: "Keynote Speech 9", speaker: { name: "Prof. Xue BAI", bio: "Faculty of Health and Social Sciences, PolyU" } },
                      { time: "17:10–17:30", title: "Keynote Speech 10", speaker: { name: "Prof. Mingguang HE", bio: "The Hong Kong Polytechnic University" } },
                      { time: "17:30–17:50", title: "Keynote Speech 11", speaker: { name: "Prof. Yongping ZHENG", bio: "The Hong Kong Polytechnic University" } },
                      { time: "17:50–17:55", tag: "Closing", title: "Closing Remarks", speaker: { name: "Prof. David SHUM", bio: "The Hong Kong Polytechnic University" } }
                    ]
                  }
                ]
              },
              {
                label: "Training & Presentation Venue",
                title: "Lecture Room",
                meta: "14:00–17:50",
                sections: [
                  {
                    talks: [
                      { time: "14:00–14:30", title: "Drug Repurposing, Nutrition, and Scientific Progress", speaker: { name: "Prof. Yuxuan LYU", bio: "Southern University of Science and Technology" } },
                      { time: "14:30–15:00", title: "MRI Applications in Health Screening", speaker: { name: "Dr. Matthew NGAN", bio: "iRad Medical Diagnostic Centre" } },
                      { time: "15:00–15:30", title: "Healthspan Medicine in Clinical Practice and Education", speaker: { name: "Prof. Evelyne Bischof", bio: "Sheba Medical Center" } },
                      { time: "15:30–15:50", title: "☕ Afternoon Break", speaker: { name: "All Participants" }, isBreak: true },
                      { time: "15:50–16:20", title: "Longevity Medicine in Practice (2)", speaker: { name: "Dr. Wanviput Sanphasitvong", bio: "Vitallife, Bumrungrad International Hospital" } },
                      { time: "16:20–17:05", title: "What Is Longevity Coaching and Communication?", speaker: { name: "Ms. Iva NG", bio: "Asia Longevity Professional Association" } },
                      { time: "17:05–17:50", tag: "Panel Discussion", title: "The Future of Longevity and Lifestyle Medicine" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
  {
    id: "day2",
    hidden: true,
    label: "Day 2 · Sat, Dec 5",
    periods: [
      {
        name: "Morning",
        items: [
          {
            type: "parallel",
            note: "Sessions run concurrently across the two venues.",
            tracks: [
              {
                label: "Keynote Speech Venue",
                title: "Chiang Chen Studio Theatre",
                meta: "09:00–14:00",
                sections: [
                  {
                    talks: [
                      { time: "09:00–09:30", title: "Keynote Speech 1", speaker: { name: "Prof. Yang Chai" } },
                      { time: "09:30–10:00", title: "Keynote Speech 2", speaker: { name: "Prof. Jinhua Qian" } },
                      { time: "10:00–10:30", title: "Keynote Speech 3", speaker: { name: "Prof. Zhongjun Zhou" } },
                      { time: "10:30–10:50", title: "☕ Morning Break", isBreak: true },
                      { time: "10:50–11:20", title: "Keynote Speech 4", speaker: { name: "PAAI Team" } },
                      { time: "11:20–11:50", title: "Keynote Speech 5", speaker: { name: "Yiqiang Chen (TBD)" } },
                      { time: "11:50–12:30", title: "Panel Discussion I", note: "Theme: Applications of AI in Health Assessment and Precision Medicine" },
                      { time: "12:30–14:00", title: "🍽 Lunch Break", isBreak: true }
                    ]
                  }
                ]
              },
              {
                label: "Training & Presentation Venue",
                title: "Lecture Room",
                meta: "09:00–14:00",
                sections: [
                  {
                    talks: [
                      { time: "09:00–09:20", title: "Oral Presentation 1" },
                      { time: "09:20–09:40", title: "Oral Presentation 2" },
                      { time: "09:40–10:00", title: "Oral Presentation 3" },
                      { time: "10:00–10:20", title: "Oral Presentation 4" },
                      { time: "10:20–10:40", title: "☕ Morning Break", isBreak: true },
                      { time: "10:40–11:00", title: "Oral Presentation 5" },
                      { time: "11:00–11:20", title: "Oral Presentation 6" },
                      { time: "11:20–11:40", title: "Oral Presentation 7" },
                      { time: "11:40–12:00", title: "Oral Presentation 8" },
                      { time: "12:00–12:20", title: "Oral Presentation 9" },
                      { time: "12:20–14:00", title: "🍽 Lunch Break", isBreak: true }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Afternoon",
        items: [
          {
            type: "parallel",
            note: "Sessions run concurrently across the two venues.",
            tracks: [
              {
                label: "Keynote Speech Venue",
                title: "Chiang Chen Studio Theatre",
                meta: "14:00–17:00",
                sections: [
                  {
                    talks: [
                      { time: "14:00–14:30", title: "Keynote Speech 6", speaker: { name: "Bo Kan (TBD)" } },
                      { time: "14:30–15:00", title: "Keynote Speech 7", speaker: { name: "Quantum Life Team (TBD)" } },
                      { time: "15:00–15:30", title: "Keynote Speech 8", speaker: { name: "Hsiao-Hwa Chen (TBD)" } },
                      { time: "15:30–15:50", title: "☕ Afternoon Break", isBreak: true },
                      { time: "15:50–16:20", title: "Keynote Speech 9", speaker: { name: "Yan Zheng (TBD)" } },
                      { time: "16:20–16:50", tag: "Award", title: "Best Poster Award" },
                      { time: "16:50–17:00", tag: "Closing", title: "Closing Remarks", speaker: { name: "Consul General of Israel" } }
                    ]
                  }
                ]
              },
              {
                label: "Training & Presentation Venue",
                title: "Lecture Room",
                meta: "14:00–16:20",
                sections: [
                  {
                    talks: [
                      { time: "14:00–14:20", title: "Oral Presentation 10" },
                      { time: "14:20–14:40", title: "Oral Presentation 11" },
                      { time: "14:40–15:00", title: "Oral Presentation 12" },
                      { time: "15:00–15:20", title: "Oral Presentation 13" },
                      { time: "15:20–15:40", title: "☕ Afternoon Break", isBreak: true },
                      { time: "15:40–16:00", title: "Oral Presentation 14" },
                      { time: "16:00–16:20", title: "Oral Presentation 15" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
