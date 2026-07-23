const fs = require('fs');

const raw = fs.readFileSync('C:/Users/DELL/.cursor/projects/d-portfolio-2/agent-tools/50624412-be58-4b63-a219-121122542fd3.txt', 'utf8');
const repos = JSON.parse(raw.slice(raw.indexOf('[')));

const SKIP = new Set(['HasanSohaib-4434.github.io', 'HasanSohaib-4434']);

const projects = {
  AuraPath: {
    title: 'AuraPath',
    category: 'ai',
    featured: true,
    desc: 'AI-powered learning platform with personalized roadmaps, PDF-based RAG tutoring, streaming chat, flashcard generation, and hybrid retrieval (FAISS + BM25) using Google Gemini.',
    tech: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'FAISS', 'Gemini', 'RAG'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/AuraPath', primary: true }]
  },
  DeafEd: {
    title: 'DeafEd — Sign Language Learning',
    category: 'mobile',
    featured: true,
    desc: 'Interactive learning platform for deaf children with real-time gesture recognition, animated lessons, and an educator dashboard to track student progress.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'MediaPipe', 'Flask', 'ML'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/DeafEd', primary: true }]
  },
  WorldStar: {
    title: 'WorldStar Enterprise',
    category: 'web',
    featured: true,
    desc: 'Corporate website for international trade — sourcing, manufacturing, quality assurance, and global delivery across textiles, food, sports, leather, surgical, and glassware.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Netlify'],
    links: [
      { label: 'Frontend', url: 'https://github.com/HasanSohaib-4434/WorldStar', primary: true },
      { label: 'Backend', url: 'https://github.com/HasanSohaib-4434/WorldStarBackend', primary: false }
    ]
  },
  '3D-Floor': {
    title: '3D House Floor Planner',
    category: 'web',
    featured: true,
    desc: 'Interactive 2D/3D house layout designer with drag-and-drop rooms, wall drawing, real-time 3D preview, measurements, undo/redo, and JSON project save/load.',
    tech: ['Next.js', 'Three.js', 'React Three Fiber', 'Zustand', 'TypeScript'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/3D-Floor', primary: true }]
  },
  'alfarabi-college': {
    title: 'Al-Farabi College',
    category: 'web',
    featured: false,
    desc: 'Responsive college website with home, about, courses, admissions, and contact pages — animated UI with Framer Motion and Netlify serverless email.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/alfarabi-college', primary: true }]
  },
  WorldStarBackend: {
    title: 'WorldStar Backend API',
    category: 'web',
    featured: false,
    desc: 'Backend API service for WorldStar Enterprise — handles contact forms, email delivery, and server-side business logic for the trade platform.',
    tech: ['Node.js', 'Express', 'Nodemailer', 'JavaScript'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/WorldStarBackend', primary: true }]
  },
  DiReCT: {
    title: 'DiReCT — Medical RAG System',
    category: 'ai',
    featured: false,
    desc: 'Clinical query answering using MIMIC-IV-Ext Direct dataset with BM25/embedding retrieval, FAISS indexing, and Google Gemini generation via Gradio.',
    tech: ['Python', 'FAISS', 'Sentence Transformers', 'Gemini', 'Gradio'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/DiReCT', primary: true }]
  },
  PermitSense: {
    title: 'PermitSense',
    category: 'ai',
    featured: false,
    desc: 'Semantic search API over Austin, TX construction permit data using Sentence Transformers and ChromaDB with filterable similarity search.',
    tech: ['FastAPI', 'ChromaDB', 'Sentence Transformers', 'Python'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/PermitSense', primary: true }]
  },
  'Assessment-': {
    title: 'Technical Assessment',
    category: 'web',
    featured: false,
    desc: 'Coding assessment submission repository showcasing problem-solving tasks and technical evaluation deliverables.',
    tech: ['JavaScript', 'GitHub'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Assessment-', primary: true }]
  },
  novatecbackend: {
    title: 'NovaTec Backend',
    category: 'web',
    featured: false,
    desc: 'Backend API service built for NovaTec — REST endpoints, server configuration, and business logic for a tech solutions platform.',
    tech: ['Node.js', 'Express', 'JavaScript'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/novatecbackend', primary: true }]
  },
  AskTheImage: {
    title: 'Ask The Image',
    category: 'ai',
    featured: false,
    desc: 'Multimodal QA app — upload an image, ask via voice (Whisper) or text, get answers from BLIP-2 with text-to-speech playback.',
    tech: ['Streamlit', 'BLIP-2', 'Whisper', 'PyTorch', 'Transformers'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/AskTheImage', primary: true }]
  },
  VisNarrate: {
    title: 'VisNarrate',
    category: 'ai',
    featured: false,
    desc: 'Vision-language image captioning using BLIP with configurable decoding — beam search, top-k, and top-p sampling via Streamlit.',
    tech: ['Streamlit', 'BLIP', 'PyTorch', 'Transformers'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/VisNarrate', primary: true }]
  },
  MathRiddleFactory: {
    title: 'Math Riddle Factory',
    category: 'ai',
    featured: false,
    desc: 'Deepseek-math powered app that fine-tunes on math riddles to generate unique puzzle questions.',
    tech: ['Python', 'Deepseek-math', 'Streamlit', 'Transformers'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/MathRiddleFactory', primary: true }]
  },
  'Math-Problem-Solver': {
    title: 'Emoji Math Solver',
    category: 'ai',
    featured: false,
    desc: 'AI solver for emoji-based math problems that deciphers numerical values and solves equations.',
    tech: ['Python', 'DeepSeKe-R1', 'Streamlit', 'Transformers'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Math-Problem-Solver', primary: true }]
  },
  'Math-Meme-Repair': {
    title: 'Math Meme Corrector',
    category: 'ai',
    featured: false,
    desc: 'AI-powered app that corrects common math meme misconceptions using a fine-tuned Deepseek model.',
    tech: ['Python', 'DeepSeKe-R1', 'Streamlit', 'Transformers'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Math-Meme-Repair', primary: true }]
  },
  'Chat-Application': {
    title: 'Real-Time Chat Application',
    category: 'web',
    featured: false,
    desc: 'Full-stack messaging app with JWT authentication, MongoDB persistence, and real-time communication via Socket.IO.',
    tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Chat-Application', primary: true }]
  },
  'Chat-Bot': {
    title: 'Chat Bot',
    category: 'ai',
    featured: false,
    desc: 'Conversational chatbot project exploring AI-driven dialogue and automated response systems.',
    tech: ['Python', 'AI', 'NLP'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Chat-Bot', primary: true }]
  },
  SoulTuneToSpeech: {
    title: 'SoulTune To Speech',
    category: 'ai',
    featured: false,
    desc: 'Speech-enabled extension of SoulTune — detects emotions from voice and delivers personalized duas and Quranic verses with TTS output.',
    tech: ['Python', 'Streamlit', 'Whisper', 'Transformers', 'TTS'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/SoulTuneToSpeech', primary: true }]
  },
  'Resume-Analyzer': {
    title: 'Resume Analyzer',
    category: 'ai',
    featured: false,
    desc: 'AI-powered resume analysis tool that parses CVs and provides intelligent feedback on skills, formatting, and job fit.',
    tech: ['Node.js', 'Express', 'JavaScript', 'AI'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Resume-Analyzer', primary: true }]
  },
  ArabicToEnglish: {
    title: 'Arabic-to-English Translator',
    category: 'ai',
    featured: false,
    desc: 'Transformer-based NMT model built from scratch using TensorFlow with a Streamlit web interface.',
    tech: ['TensorFlow', 'Streamlit', 'Custom Transformer'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/ArabicToEnglish', primary: true }]
  },
  CppToPseudo: {
    title: 'Bidirectional Code Translator',
    category: 'ai',
    featured: false,
    desc: 'Transformer-based NMT converting pseudocode to C++ and vice versa, trained on the SPOC dataset.',
    tech: ['TensorFlow', 'Custom Transformer', 'SPOC Dataset'],
    links: [
      { label: 'PtoC', url: 'https://github.com/HasanSohaib-4434/PseudoToCpp', primary: true },
      { label: 'CtoP', url: 'https://github.com/HasanSohaib-4434/CppToPseudo', primary: false }
    ]
  },
  PseudoToCpp: null,
  SoulTune: {
    title: 'SoulTune',
    category: 'ai',
    featured: false,
    desc: 'AI spiritual assistant that transcribes speech, detects emotions, and suggests personalized duas and Quranic verses in Arabic, Urdu, and English.',
    tech: ['Streamlit', 'Whisper', 'Transformers', 'Librosa'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/SoulTune', primary: true }]
  },
  'Silent-Interpreter2': {
    title: 'Silent Interpreter v2',
    category: 'ai',
    featured: false,
    desc: 'AI speech-to-text app with real-time transcription, emotion detection, contextual classification, and automatic summarization.',
    tech: ['Python', 'Streamlit', 'Whisper', 'Transformers', 'NLP'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Silent-Interpreter2', primary: true }]
  },
  'Silent-Interpreter1': {
    title: 'Silent Interpreter v1',
    category: 'ai',
    featured: false,
    desc: 'First iteration of the AI speech analysis platform — transcription, emotion detection, and content summarization for accessibility.',
    tech: ['Python', 'Streamlit', 'Whisper', 'Transformers'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Silent-Interpreter1', primary: true }]
  },
  'Gehri-Baten-': {
    title: 'Gehri Baten',
    category: 'ai',
    featured: false,
    desc: 'LSTM-powered AI poet that generates ghazals and nazms in Roman Urdu using deep learning and a Streamlit interface.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'LSTM'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Gehri-Baten-', primary: true }]
  },
  'DeafEd-Admin': {
    title: 'DeafEd Admin Panel',
    category: 'web',
    featured: false,
    desc: 'Educator admin dashboard for DeafEd — manage students, sections, lessons, and progress tracking with EJS templating and MongoDB.',
    tech: ['Node.js', 'Express', 'EJS', 'MongoDB'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/DeafEd-Admin', primary: true }]
  },
  'Global-Economy-Analyzer': {
    title: 'Global Economy Analyzer',
    category: 'desktop',
    featured: false,
    desc: 'Visualization tool using Python and Qt Designer to analyze economic trends with statistical methods and regression.',
    tech: ['Python', 'Qt Designer', 'Pandas', 'Matplotlib'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Global-Economy-Analyzer', primary: true }]
  },
  kk: {
    title: 'Web Design Practice',
    category: 'web',
    featured: false,
    desc: 'Front-end design practice project with HTML and CSS — layout experimentation and styling fundamentals.',
    tech: ['HTML', 'CSS'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/kk', primary: true }]
  },
  'Academic-work': {
    title: 'Academic Work Collection',
    category: 'web',
    featured: false,
    desc: 'Collection of academic assignments — HTML/CSS exercises, database projects, and structured programming tasks from coursework.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Access DB'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Academic-work', primary: true }]
  },
  'E-shop': {
    title: 'E-commerce Website',
    category: 'web',
    featured: false,
    desc: 'Feature-rich e-commerce platform with dynamic product catalog, shopping cart, and category-based browsing built with Django.',
    tech: ['Django', 'Python', 'Bootstrap'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/E-shop', primary: true }]
  },
  'Student-Management-System': {
    title: 'Student Management System',
    category: 'desktop',
    featured: false,
    desc: 'Comprehensive system for managing student records, attendance, and grades with a user-friendly GUI and SQL database.',
    tech: ['C#', 'SQL', 'WinForms'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/Student-Management-System', primary: true }]
  },
  NotePad: {
    title: 'NotePad',
    category: 'desktop',
    featured: false,
    desc: 'Text editor with Huffman Coding compression and Trie-based auto-suggestion using optimized data structures.',
    tech: ['C++', 'Huffman Tree', 'Trie', 'File Handling'],
    links: [{ label: 'View Project', url: 'https://github.com/HasanSohaib-4434/NotePad', primary: true }]
  }
};

function card(p) {
  const feat = p.featured
    ? '\n                        <span class="project-badge vip-badge">Featured</span>'
    : '';
  const tech = p.tech.map((t) => `<span>${t}</span>`).join('');
  const links = p.links
    .map((l) => {
      const cls = l.primary
        ? 'btn-custom btn-primary-custom btn-sm-custom'
        : 'btn-custom btn-outline-custom btn-sm-custom';
      const icon = l.primary && l.label.includes('View') ? '<i class="fab fa-github"></i> ' : '';
      return `<a href="${l.url}" class="${cls}" target="_blank" rel="noopener">${icon}${l.label}</a>`;
    })
    .join('\n                                ');

  return `                    <article class="project-card${p.featured ? ' featured' : ''}" data-category="${p.category}" data-aos="fade-up">${feat}
                        <div class="project-body">
                            <h3>${p.title}</h3>
                            <p class="description">${p.desc}</p>
                            <div class="project-tech">${tech}</div>
                            <div class="project-actions">
                                ${links}
                            </div>
                        </div>
                    </article>`;
}

const medicare = card({
  title: 'Medicare Centre',
  category: 'web',
  featured: true,
  desc: 'Telemedicine web platform enabling remote doctor consultations with appointment scheduling, medical records, and Google Meet video integration.',
  tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Google Meet API'],
  links: [{ label: 'View Project', url: 'https://github.com/F219180/medicare-website', primary: true }]
});

const featuredOrder = ['AuraPath', 'DeafEd', 'WorldStar', '3D-Floor'];
const featuredCards = featuredOrder.map((n) => card(projects[n])).join('\n\n');

const restOrder = repos
  .map((r) => r.name)
  .filter((n) => !SKIP.has(n) && !featuredOrder.includes(n) && n !== 'PseudoToCpp' && projects[n]);

const restCards = restOrder.map((n) => card(projects[n])).join('\n\n');
const grid = [featuredCards, medicare, restCards].join('\n\n');
const total = featuredOrder.length + 1 + restOrder.length;

fs.writeFileSync('d:/portfolio-2/HasanSohaib-4434.github.io/_projects-grid.html', grid);
console.log('Total cards:', total);
