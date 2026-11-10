import xyronePhoto from '../assets/MeMyself.jpg'
import keithPhoto   from '../assets/KeithS-cutout.png'
import mattPhoto    from '../assets/MattM-cutout.png'
import geraldPhoto  from '../assets/GeraldE-cutout.png'
import seminarReflectionXyrone from '../assets/Seminar Reflection-Xyrone.pdf'
import seminarReflectionKeith  from '../assets/Speirs - Seminar Self Reflection-1.pdf'
import seminarReflectionMatt   from '../assets/Self-Reflection Paper - Matt Mondares (1).pdf'
import seminarReflectionGerald from '../assets/Seminar Reflection by Gerald Ebacuado (1).pdf'

export const members = [
  {
    id: 'xyrone',
    name: 'Xyrone Edmund Zamudio',
    shortName: 'Xyrone',
    initials: 'XZ',
    photo: xyronePhoto,
    reflection: {
      prelims: `During the Prelims period, I was introduced to the fundamentals of presentation skills and professional communication. I learned how to structure a talk, control my pacing, and engage an audience effectively. This term challenged me to step outside my comfort zone and present in front of my peers, which helped build my confidence significantly.`,
      midterm: `The Midterm period deepened my understanding of visual storytelling and slide design. I applied these concepts to create more compelling presentations, focusing on clarity and audience impact. Working with my groupmates taught me the value of collaboration and constructive feedback in refining our delivery.`,
      finalterm: `In the Final Term, I synthesized everything I had learned throughout the semester. I focused on delivering polished, professional presentations that balance content depth with visual appeal. This subject has fundamentally changed how I approach public speaking and professional communication in IT contexts.`,
    },
  },
  {
    id: 'keith',
    name: 'Keith Speirs',
    shortName: 'Keith',
    initials: 'KS',
    photo: keithPhoto,
    reflection: {
      prelims: `The Prelims gave me a solid foundation in presentation principles. I learned the importance of preparation, voice modulation, and eye contact. Each presentation task pushed me to think more critically about how I convey technical information to non-technical audiences.`,
      midterm: `During the Midterm, I explored advanced presentation techniques including data visualization and narrative structure. I improved my ability to tell a story through data and create slides that support rather than overwhelm the speaker. Group work taught me adaptability and time management.`,
      finalterm: `The Final Term brought everything together. I am proud of how far I have come from the beginning of the semester. My confidence in presenting technical concepts has grown tremendously, and I now understand the strategic importance of effective communication in an IT career.`,
    },
  },
  {
    id: 'matt',
    name: 'Matt Mondares',
    shortName: 'Matt',
    initials: 'MM',
    photo: mattPhoto,
    reflection: {
      prelims: `In the Prelims, I discovered my baseline presentation skills and identified areas for growth. The subject helped me understand that effective presentations are not just about the content but also about how you deliver it. I worked on managing nervousness and projecting a confident demeanor.`,
      midterm: `The Midterm challenged me to level up my presentation design skills. I learned to create concise, impactful slides and to practice deliberate pacing. Receiving feedback from my professors and classmates helped me identify blind spots in my delivery style.`,
      finalterm: `By the Final Term, I could see clear improvements in my presentation skills. I became more comfortable with impromptu speaking and handling questions from the audience. This subject equipped me with communication tools that will be invaluable throughout my IT career.`,
    },
  },
  {
    id: 'gerald',
    name: 'Gerald Ebacuado',
    shortName: 'Gerald',
    initials: 'GE',
    photo: geraldPhoto,
    reflection: {
      prelims: `The Prelims period was an eye-opening introduction to professional presentation in an IT context. I learned that strong technical skills must be complemented by effective communication. Working on structured presentations helped me organize my thoughts more clearly.`,
      midterm: `During the Midterm, I focused on improving my visual communication skills. I explored different slide layouts, typography choices, and how to present complex technical topics in an accessible way. Collaborating with my group deepened my appreciation for diverse perspectives in problem-solving.`,
      finalterm: `The Final Term was a culmination of growth across all aspects of presentation skills. I am now more confident in my ability to present technical projects to both technical and non-technical audiences. The skills I gained in ITC309-301I will serve me well in my professional journey in IT.`,
    },
  },
];

export const getMember = (id) => members.find((m) => m.id === id);

// Performance tasks — Prelims (PT1–PT3), Midterm (PT4–PT6), Finals (PT7–PT9)
// Scores /modata for xy.
const LINK_PRESENTING_ORALLY   = 'https://drive.google.com/drive/folders/1Z98GE93XMzzbG47JmSk9XQuj0qzdTZMi?usp=sharing';
const LINK_PRESENTING_TEASER   = 'https://drive.google.com/drive/folders/1qq6hcUa6uzKfk2koU9E9KBkutJmf1C4f?classId=6d3dd095-3691-47ce-8d2c-1ddf168e2609&assignmentId=9b6590fa-89f8-46fb-b781-5d56a8a3afa1&submissionId=d7e72354-b11b-92c0-02ca-774078311db7';
const LINK_SEMINAR_SERIES      = 'https://www.canva.com/design/DAHX1WNkIog/VJGTZIYU_89T5dTwqDPxbA/edit';
const LINK_VISUAL_AIDS         = 'https://drive.google.com/drive/folders/1JY2YitiTPCCbONvhBf53zPKx0qvif4dx?usp=sharing';
const LINK_GOOD_BAD_MATT_KEITH    = 'https://drive.google.com/drive/folders/1LOjZwYnP8eKoSoZheleqGS0G8mx32kdn?usp=drive_link';
const LINK_PERSUADING_KEITH_MATT  = 'https://drive.google.com/file/d/1z974sRHCHDauSpdDy87bb8DXDwdm2mzd/view?usp=sharing';
const LINK_THIS_IS_ME_MATT        = 'https://drive.google.com/file/d/1Rt-0pOa9yWeN2m5ApG9qt2IgKy54PiRC/view?usp=drive_link';

const performanceTasks = [
  { task: 'Performance_Task_Skill #1 – This is ME.',               due: 'Jul 27',  term: 'Prelims', maxScore: '100', link: null },
  { task: 'Performance_Task_Skill #2 – Sales Pitch',               due: 'Aug 7',   term: 'Prelims', maxScore: '100', link: null },
  { task: 'Project_Prelim_Skill #3 – Persuading People',           due: 'Aug 18',  term: 'Prelims', maxScore: '100', link: null },
  { task: 'Performance_Task_Skill #4 – Good and Bad Presentation',  due: 'Sep 15',  term: 'Midterm', maxScore: '100', link: null },
  { task: 'Performance_Task_Skill #5 – Presenting Orally',          due: 'Sep 20',  term: 'Midterm', maxScore: '100', link: LINK_PRESENTING_ORALLY },
  { task: 'Project_MidTerm_Skill #6 – Presenting Audiovisuals',     due: 'Sep 29',  term: 'Midterm', maxScore: '0',   link: LINK_PRESENTING_TEASER },
  { task: 'PSIT Seminar Series (Group Presentation)',                due: 'Oct 17',  term: 'Finals',  maxScore: '100', link: LINK_SEMINAR_SERIES },
  { task: 'Visual Aids and Materials',                               due: 'Oct 25',  term: 'Finals',  maxScore: '100', link: LINK_VISUAL_AIDS },
  { task: 'Seminar Reflection',                                      due: 'Nov 4',   term: 'Finals',  maxScore: '100', link: null },
];

// link field is spread from template; shared links (PT5–PT8) flow to all members automatically
const makeBlankPTs = () =>
  performanceTasks.map(({ task, due, term, maxScore, link }) => ({ task, due, term, score: '—', maxScore, link }));

export const performanceTasksData = {
  xyrone: [
    { ...performanceTasks[0], score: '99',  link: 'https://drive.google.com/drive/folders/1kRdLv_3CljI9knQ9dTnymUQ2heuB94-r?usp=drive_link' },
    { ...performanceTasks[1], score: '100', link: 'https://canva.link/gljtpg86jtp1vl4' },
    { ...performanceTasks[2], score: '95',  link: 'https://canva.link/lsqslbupymk3qwv' },
    { ...performanceTasks[3], score: '1.5', link: 'https://drive.google.com/drive/folders/1zazzuo9OaLQL_GAIRw7MjSJGpawhTS9F?usp=drive_link' },
    { ...performanceTasks[4], score: '—' },
    { ...performanceTasks[5], score: '—' },
    { ...performanceTasks[6], score: '—' },
    { ...performanceTasks[7], score: '—' },
    { ...performanceTasks[8], score: '—', link: seminarReflectionXyrone },
  ],
  keith:  makeBlankPTs().map((pt, i) => {
    if (i === 0) return { ...pt, link: 'https://drive.google.com/file/d/15ttux9XWUy4ddyajaquoAUDD2CAZM07a/view?usp=drive_link' };
    if (i === 1) return { ...pt, link: 'https://drive.google.com/file/d/1TqXWGicOC1ZYvGlhAgNI0EIbVj1mSiM_/view?usp=drive_link' };
    if (i === 2) return { ...pt, link: LINK_PERSUADING_KEITH_MATT };
    if (i === 3) return { ...pt, link: LINK_GOOD_BAD_MATT_KEITH };
    if (i === 8) return { ...pt, link: seminarReflectionKeith };
    return pt;
  }),
  matt:   makeBlankPTs().map((pt, i) => {
    if (i === 0) return { ...pt, link: LINK_THIS_IS_ME_MATT };
    if (i === 2) return { ...pt, link: LINK_PERSUADING_KEITH_MATT };
    if (i === 3) return { ...pt, link: LINK_GOOD_BAD_MATT_KEITH };
    if (i === 8) return { ...pt, link: seminarReflectionMatt };
    return pt;
  }),
  gerald: makeBlankPTs().map((pt, i) => {
    if (i === 0) return { ...pt, link: 'https://drive.google.com/file/d/1BmspsbrLQrF8SqQV0MOem9dGT_IxOECJ/view?usp=sharing' };
    if (i === 1) return { ...pt, link: 'https://drive.google.com/file/d/1f9E61sLraN-EzQgpFkHp8B0Nxt1Fp4zh/view?usp=sharing' };
    if (i === 2) return { ...pt, link: 'https://drive.google.com/file/d/1jg0SSrB6m4acdzrgACvXsMlu65X-xKOB/view?usp=sharing' };
    if (i === 3) return { ...pt, link: 'https://drive.google.com/file/d/1sf6p2zx5XAemlXrH-0ZM2BVWKAVamg7T/view?usp=sharing' };
    if (i === 8) return { ...pt, link: seminarReflectionGerald };
    return pt;
  }),
};

// Quizzes & exams — real names from Google Classroom
// Scores pending for all members.
const quizList = [
  { title: 'PSIT Prelim Quiz2',   term: 'Prelims', total: '15' },
  { title: 'MT Quiz1_HUMOR',      term: 'Midterm', total: '20' },
  { title: 'C309 MidTerm Quiz2',  term: 'Midterm', total: '20' },
];

const examList = [
  { title: 'C309 PSIT PRELIM EXAMINATION',   due: 'Sep 1',  total: '50' },
  { title: 'C309 PSIT MIDTERM EXAMINATION',  due: 'Oct 2',  total: '50' },
];

const makeBlankQuizzes = () => ({
  quizzes: quizList.map(q => ({ ...q, score: '—' })),
  exams:   examList.map(e => ({ ...e, score: '—' })),
});

export const quizzesData = {
  xyrone: makeBlankQuizzes(),
  keith:  makeBlankQuizzes(),
  matt:   makeBlankQuizzes(),
  gerald: makeBlankQuizzes(),
};
