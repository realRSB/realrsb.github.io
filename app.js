const projects={
  "atherton": [
    "Founding AI Engineer",
    "Atherton Health",
    "",
    [
      "Atherton Health builds AI software for infusion providers, covering referral intake, benefits verification, prior authorization, and patient scheduling.",
      "I built AI infrastructure and voice agents for specialty-medication providers, including Amberlight Health and Better Health. My work included the voice-evaluation pipeline used to assess calls and establish reliability during customer onboarding, as well as agents for insurance prior authorization and billing workflows.",
      "Across more than 10,000 insurance claim calls, this work reduced administrative workload by over 2,000 staff hours annually and helped generate $100K in annual recurring revenue through specialty-pharmacy contracts."
    ],
    ""
  ],
  "tks": [
    "Emerging Technology Fellow",
    "The Knowledge Society",
    "",
    [
      "I participated in Innovate and Velocity during my first year (2024), followed by Activate in my second year (2025).",
      "I engineered smart glasses with a neural network trained on more than 60,000 eye frames to detect cataract markers at 93% accuracy. I demonstrated the product at Betaworks NYC, taking the project from model development to a working product demonstration."
    ],
    ""
  ],
  "temple": [
    "EdTech Founder & Youth Coding Teacher",
    "Local Gurudwara",
    "",
    [
      "I developed scheduling software for a youth academy serving more than 300 students. The system saved the Gurudwara $15K per year in scheduling and administrative costs.",
      "Alongside the software, I taught free AI and computer science classes and trained six volunteer teachers to support the program. My role combined building the tools with teaching the students and preparing other instructors."
    ],
    ""
  ],
  "research": [
    "Project Leader",
    "New York Academy of Sciences Junior Academy",
    "",
    [
      "I led a team of six developing a machine-learning simulator to predict copper yields from e-waste sorting. The project examined how sorting decisions could affect the recovery of useful material from discarded electronics.",
      "We worked with Professor Sharma at BVM Engineering, with backing from IVA Sweden. The work placed in the top three of the New York Academy of Sciences Innovation Challenge: Minerals of Technology."
    ],
    ""
  ],
  "liva": [
    "AI Engineer · Humanizing Voice AI",
    "Liva AI · Backed by Y Combinator",
    "",
    [
      "I evaluated more than 1,000 calls in English, French, and Hindi, using natural-language models to examine translation accuracy and emotion in voice AI.",
      "I also tested more than 50 voices for internal datasets. The work focused on the quality of spoken interactions across languages, including whether meaning and emotion carried through a conversation."
    ],
    ""
  ],
  "hp": [
    "Deal Sourcing & Startup Analyst",
    "HP Tech Ventures",
    "",
    [
      "Selected as the only high-school intern, I screened more than 120 AI medtech startups and developed six investment theses to support venture investment decisions.",
      "My company analysis covered products, business models, markets, and investment rationale."
    ],
    ""
  ],
  "senate": [
    "Legislative Affairs Intern",
    "Office of NJ Senator John F. McKeon · District 27",
    "",
    [
      "I researched health insurance protections for a district of more than 238,000 residents, supporting the office’s legislative affairs work.",
      "I also created an application to automate constituent letter responses. The tool was adopted by 25 staff members and applied my technical work to the office’s day-to-day correspondence."
    ],
    ""
  ],
  "deep": [
    "Forward-Deployed Engineer",
    "Deep24 · Backed by YC & General Catalyst",
    "",
    [
      "I designed more than 29 Python/Celery processing queues to turn podcasts into social media clips, contributing to the workflow that moves long-form recordings through clip production.",
      "The work helped 80 small content creators reduce editing time from three hours to twelve minutes, making the process faster for creators producing content regularly."
    ],
    ""
  ]
};
const order=['atherton','tks','deep','liva','hp','senate','research','temple'];
const periods={atherton:'2024–present · 6 hr/wk, 40 wk/yr',tks:'2024–2025 · 6 hr/wk, 40 wk/yr',temple:'2024–present · 5 hr/wk, 40 wk/yr',research:'2023–present · 6 hr/wk, 12 wk/yr',liva:'2026 · 5 hr/wk, 20 wk/yr',hp:'2023 · 6 hr/wk, 12 wk/yr',senate:'2025 · 8 hr/wk, 8 wk/yr',deep:'2026 · 12 hr/wk, 8 wk/yr'};
const links={atherton:['https://www.athertonhealth.co/','Visit Atherton Health'],liva:['https://www.theliva.ai/','Visit Liva AI'],deep:['https://deep24.com/','Visit Deep24']};
function projectMedia(id){
 if(links[id])return `<a class="resource-link" href="${links[id][0]}" target="_blank" rel="noopener noreferrer">${links[id][1]} <svg class="arrow-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 13 13 3M5 3h8v8"/></svg></a>`;
 return '';
}
const dialog=document.querySelector('#detail'),content=document.querySelector('#dialog-content'),label=document.querySelector('#dialog-label'),next=document.querySelector('#next');let current,opener;
function show(id){current=id;const data=projects[id];const project=id.startsWith('project-')?document.getElementById(id):null;if(project){label.textContent='Project';next.hidden=true;content.replaceChildren(project.content.cloneNode(true))}else if(data){label.textContent='Experience / '+String(order.indexOf(id)+1).padStart(2,'0');content.innerHTML=`<h2 id="dialog-title">${data[1]}</h2><p class="lede">${data[0]}</p><article class="entry"><span class="mono">${periods[id]}</span>${data[3].map(paragraph=>`<p>${paragraph}</p>`).join('')}</article>${projectMedia(id)}`;next.hidden=false}else if(id==='awards'){label.textContent='Awards';next.hidden=true;content.innerHTML='<h2 id="dialog-title">Competitions & recognition</h2>'+[['1st place','New Jersey DECA','Travel and Tourism Team Decision Making'],['1st place','IKEA × TKS','Innovation Hackathon'],['1st place','Project Millionaire Canada','Hackathon'],['1st place','XPRIZE × TKS','Quantum Computing Hackathon'],['Top 3','New York Academy of Sciences','Innovation Challenge: Minerals of Technology']].map(a=>`<article class="entry"><span class="mono">${a[0]}</span><h3>${a[1]}</h3><p>${a[2]}</p>${a[1]==='New Jersey DECA'?'<figure class="award-photo"><img src="assets/deca-award.jpg" width="873" height="900" alt="Rajveer Bedi with fellow DECA competitors holding trophies at the awards ceremony"><figcaption>1st place · New Jersey DECA<br>Travel and Tourism Team Decision Making</figcaption></figure>':''}</article>`).join('')}else{label.textContent='General info';next.hidden=true;content.innerHTML=`<h2 id="dialog-title">Rajveer Bedi</h2><p class="lede">AI engineer and student in Livingston, New Jersey.</p><article class="entry"><span class="mono">September 2024–present</span><h3>Livingston High School</h3><p>AP coursework: Calculus BC, Language, Macroeconomics, Microeconomics, Computer Science A, Computer Science Principles, and Business.</p></article>`}if(!dialog.open)dialog.showModal();dialog.scrollTop=0;document.querySelector('#close').focus({preventScroll:true})}
document.querySelectorAll('[data-modal]').forEach(el=>el.addEventListener('click',()=>{opener=el;show(el.dataset.modal)}));document.querySelector('#close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>opener?.focus({preventScroll:true}));next.onclick=()=>show(order[(order.indexOf(current)+1)%order.length]);
const theme=document.querySelector('#theme');document.body.classList.remove('dark');function themeLabel(){theme.textContent=document.body.classList.contains('dark')?'[ Light mode ]':'[ Dark mode ]'}themeLabel();theme.onclick=()=>{document.body.classList.toggle('dark');themeLabel()};
document.querySelector('#top').onclick=e=>{e.preventDefault();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})};function clock(){document.querySelector('#time').textContent=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'numeric',minute:'2-digit'}).format(new Date())+' / New Jersey'}clock();setInterval(clock,60000);
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!reduced.matches && 'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el)})}
const cursor=document.querySelector('.cursor-ring');if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduced.matches){document.addEventListener('pointermove',e=>{cursor.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;cursor.classList.add('active');cursor.classList.toggle('over-link',Boolean(e.target.closest('button,a')))});document.documentElement.addEventListener('pointerleave',()=>cursor.classList.remove('active'));document.addEventListener('pointerdown',()=>cursor.classList.add('pressed'));document.addEventListener('pointerup',()=>cursor.classList.remove('pressed'))}

const projectTrack=document.querySelector('.project-track');
const projectNav=document.querySelector('.project-nav');
if(projectTrack && projectNav){
  const previous=projectNav.querySelector('[data-project-step="-1"]');
  const nextProject=projectNav.querySelector('[data-project-step="1"]');
  const position=projectNav.querySelector('.project-position');
  const maxScroll=()=>projectTrack.scrollWidth-projectTrack.clientWidth;
  const updateProjects=()=>{
    const offset=projectTrack.scrollLeft;
    const max=maxScroll();
    previous.disabled=offset<=1;
    nextProject.disabled=offset>=max-1;
    const text=offset>max/2?'02 / 02':'01 / 02';
    if(position.textContent!==text)position.textContent=text;
  };
  const go=(left)=>projectTrack.scrollTo({left,behavior:reduced.matches?'instant':'smooth'});
  previous.addEventListener('click',()=>go(0));
  nextProject.addEventListener('click',()=>go(maxScroll()));
  projectTrack.addEventListener('scroll',updateProjects,{passive:true});
  window.addEventListener('resize',updateProjects);
  projectNav.hidden=false;
  updateProjects();
}
