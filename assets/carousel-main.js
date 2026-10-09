(() => {
'use strict';
const data=window.SITE;
let lang='en';
try { lang=localStorage.getItem('hpy-language')==='zh'?'zh':'en'; } catch(e) {}

const words={
  en:{
    research:'Research',publications:'Publications',experience:'Education',skills:'Skills',
    researchTitle:'Selected research',publicationsTitle:'Publications & manuscripts',
    experienceTitle:'Education & experience',skillsTitle:'Methods & tools',
    eyebrow:'URBAN SPATIAL INTELLIGENCE',figurePending:'Research figure to be added',
    figureView:'View full figure',researchQuestion:'Research question',
    cvPending:'CV',published:'Published',review:'Under review',paperPending:'Paper links to be added',
    presentations:'Conference presentations',top:'Back to top',themeDark:'Switch to dark theme',
    themeLight:'Switch to light theme',language:'切换至中文',footer:'Urban spatial intelligence · Tongji University',
    pdf:'PDF',paper:'Paper',code:'Code',project:'Project',skip:'Skip to content'
  },
  zh:{
    research:'研究项目',publications:'学术成果',experience:'教育经历',skills:'研究技能',
    researchTitle:'主要研究项目',publicationsTitle:'论文与学术成果',
    experienceTitle:'教育与研究经历',skillsTitle:'研究方法与技能',
    eyebrow:'城市空间智能',figurePending:'研究配图待补充',figureView:'查看完整研究图',
    researchQuestion:'研究问题',cvPending:'简历',published:'已发表',review:'审稿中',
    paperPending:'论文链接待补充',presentations:'学术会议',top:'返回顶部',
    themeDark:'切换深色主题',themeLight:'切换浅色主题',language:'Switch to English',
    footer:'城市空间智能 · 同济大学',pdf:'PDF',paper:'论文',code:'代码',project:'项目',skip:'跳转到正文'
  }
};

const t=v=>typeof v==='object'&&v!==null ? (v[lang]??v.en??'') : (v??'');
const w=k=>words[lang][k];

function el(tag,cls,text){
  const n=document.createElement(tag);
  if(cls)n.className=cls;
  if(text!==undefined)n.textContent=t(text);
  return n;
}

function link(label,href,cls){
  const a=el('a',cls,label);
  a.href=href;
  if(/^https?:\/\//.test(href)||/\.pdf(?:[?#]|$)/i.test(href)){
    a.target='_blank';
    a.rel='noopener noreferrer';
  }
  return a;
}

function heading(id,number,title){
  const root=document.getElementById(id);
  root.replaceChildren();
  const h=el('div','section-heading');
  h.append(el('span','section-number',number),el('h2','',title));
  root.append(h);
  return root;
}

function renderIntro(){
  const p=data.profile;
  const root=document.getElementById('about');
  root.replaceChildren();

  if(p.portrait){
    const img=el('img','portrait');
    img.src=p.portrait;
    img.alt=t(p.name);
    img.width=108;
    img.height=108;
    root.append(img);
  }

  root.append(el('p','eyebrow',w('eyebrow')));

  const h=el('h1','',p.name);
  h.append(el('span','alt-name',p.alternateName));

  const bio=el('p','bio');
  bio.innerHTML=t(p.bio);

  root.append(
    h,
    el('p','affiliation',p.affiliation),
    el('p','department',p.department),
    bio
  );

  const interests=el('div','interests');
  t(p.interests).forEach(v=>interests.append(el('span','interest',v)));
  root.append(interests);

  const contacts=el('div','contact-links');
  contacts.append(
    link('Email: '+p.email,'mailto:'+p.email,'contact-link'),
    link('GitHub: Hu-py',p.github,'contact-link')
  );

  if(p.scholar){
    contacts.append(link('Google Scholar',p.scholar,'contact-link'));
  }


  root.append(contacts);
}

let researchResizeObserver;
function projectDescription(project){
  const paragraph=el('p','project-description');
  const text=t(project.description);
  const terms=t(project.descriptionHighlights)||[];
  let cursor=0;
  while(cursor<text.length){
    let start=text.length,match='';
    terms.forEach(term=>{
      if(!term)return;
      const index=text.indexOf(term,cursor);
      if(index>=0&&(index<start||(index===start&&term.length>match.length))){start=index;match=term;}
    });
    paragraph.append(document.createTextNode(text.slice(cursor,start)));
    if(!match)break;
    paragraph.append(el('strong','',match));cursor=start+match.length;
  }
  return paragraph;
}

function renderProjects(){
  researchResizeObserver?.disconnect();
  const root=heading('research','01',w('researchTitle'));
  const list=el('div','project-list');
  list.id='research-carousel';list.tabIndex=0;
  list.setAttribute('role','region');
  list.setAttribute('aria-label',lang==='zh'?'研究项目，可左右滚动':'Research projects, scroll horizontally');
  const controls=el('div','carousel-controls');
  const previous=el('button','carousel-arrow','←');
  const next=el('button','carousel-arrow','→');
  [previous,next].forEach(button=>{button.type='button';button.setAttribute('aria-controls',list.id);});
  previous.setAttribute('aria-label',lang==='zh'?'上一个项目':'Previous project');
  next.setAttribute('aria-label',lang==='zh'?'下一个项目':'Next project');
  const move=direction=>{
    const step=list.querySelector('.project').getBoundingClientRect().width+parseFloat(getComputedStyle(list).columnGap);
    list.scrollBy({left:direction*step,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  };
  previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  list.addEventListener('keydown',event=>{
    if(event.target!==list)return;
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}
  });
  controls.append(previous,next);root.querySelector('.section-heading').append(controls);


  data.projects.forEach((p,index)=>{
    const card=el('article','project');
    card.id=p.id;

    const isFlood=p.id==='flood-agent';
    const openDetails=event=>window.openFloodDetail(lang,event.currentTarget);
    const media=el('div','project-media');
    if(p.image){
      const a=isFlood?el('button','figure-link flood-cover'):link('',p.image,'figure-link');
      if(isFlood){a.type='button';a.setAttribute('aria-haspopup','dialog');a.addEventListener('click',openDetails);}
      else {a.target='_blank';a.rel='noopener';}
      a.setAttribute('aria-label',(isFlood?(lang==='zh'?'查看项目':'View project'):w('figureView'))+': '+t(p.title));
      const img=el('img');
      img.src=p.image;
      img.alt=t(p.imageAlt);
      img.loading='lazy';
      img.decoding='async';
      a.append(img);
      media.append(a,el('span','figure-hint',isFlood?(lang==='zh'?'查看项目详情':'View project details'):w('figureView')));
    }

    const info=el('div','project-info');
    info.append(
      el('div','project-date',p.date),
      el('h3','',p.title),
      el('p','project-subtitle',p.subtitle)
    );

    if(isFlood){
      const title=info.querySelector('h3');
      const button=el('button','project-title-button',p.title);button.type='button';
      button.setAttribute('aria-haspopup','dialog');button.addEventListener('click',openDetails);
      title.replaceChildren(button);
    }

    if(p.question){
      const question=el('div','project-question');
      question.append(
        el('span','project-question-label',w('researchQuestion')),
        el('p','project-question-text',p.question)
      );
      info.append(question);
    }

    info.append(projectDescription(p));

    const bottom=el('div','project-bottom');
    const tags=el('div','tags');
    p.tags.forEach(tag=>tags.append(el('span','tag',tag)));
    bottom.append(tags);

    const links=el('div','project-links');
    Object.entries(p.links||{}).forEach(([key,url])=>{
      if(url)links.append(link(w(key)||key,url,'project-detail-button'));
    });
    if(isFlood){
      const button=el('button','project-detail-button',lang==='zh'?'查看项目':'View project');
      button.type='button';button.setAttribute('aria-haspopup','dialog');button.addEventListener('click',openDetails);
      links.prepend(button);
    }
    if(links.children.length)bottom.append(links);

    info.append(bottom);
    if(p.image)card.append(media);
    else card.classList.add('text-only-project');
    card.append(info);
    list.append(card);
  });

  root.append(list);
  const updateControls=()=>{
    previous.disabled=list.scrollLeft<=2;
    next.disabled=list.scrollLeft+list.clientWidth>=list.scrollWidth-2;
  };
  list.addEventListener('scroll',updateControls,{passive:true});
  researchResizeObserver=new ResizeObserver(updateControls);researchResizeObserver.observe(list);
  requestAnimationFrame(updateControls);
}

function authorLine(text){
  const p=el('p','authors');
  text.split(/(Hu, P\.\*?|胡玶妍)/g).forEach(part=>
    p.append(/^Hu, P\.|^胡玶妍$/.test(part)?el('strong','',part):document.createTextNode(part))
  );
  return p;
}

function renderPublications(){
  const root=heading('publications','02',w('publicationsTitle'));
  const list=el('div','publication-list');
  data.publications.forEach(p=>{
    const article=el('article','publication');
    const meta=el('div','pub-meta');
    meta.append(el('span','pub-status '+(p.status==='review'?'review':''),w(p.status==='review'?'review':'published')));
    if(p.year)meta.append(el('span','pub-year',p.year));

    const body=el('div','publication-body');
    body.append(el('h3','',p.title),authorLine(p.authors));
    const footer=el('div','publication-footer');
    if(p.venue)footer.append(el('p','venue',p.venue));
    if(p.showPdfInList && p.pdf)footer.append(link('PDF',p.pdf,'project-detail-button publication-pdf'));
    if(footer.children.length)body.append(footer);
    if(p.articleUrl){
      const original=el('p','pub-links');
      original.append(link(lang==='zh'?'点击此处查看论文原文 ↗':'Read the original article ↗',p.articleUrl));
      body.append(original);
    }

    article.append(meta,body);
    list.append(article);
  });
  root.append(list);
}

function renderExperience(){
  const root=document.getElementById('experience');
  root.replaceChildren();
  root.setAttribute('aria-label',lang==='zh'?'教育经历':'Education');
  const groups=[
    {kind:'education',label:{en:'Education',zh:'教育经历'}}
  ];
  groups.forEach(group=>{
    const section=el('section','experience-group '+group.kind+'-group');
    section.append(el('h2','experience-group-title',group.label));
    const timeline=el('div','timeline');
    data.experience.filter(e=>(e.kind||'education')===group.kind).forEach(e=>{
      const item=el('article','event '+group.kind+'-event');
      item.append(el('time','',e.date),el('h4','',e.title),el('p','org',e.org),el('p','',e.detail));
      timeline.append(item);
    });
    section.append(timeline);root.append(section);
  });
}

function renderSkills(){
  const root=heading('skills','03',w('skillsTitle'));
  const grid=el('div','skills-grid');
  data.skills.forEach(s=>{
    const group=el('div','skill');
    const list=el('ul');
    group.append(el('h3','',s.title));
    s.items.forEach(v=>list.append(el('li','',v)));
    group.append(list);
    grid.append(group);
  });
  root.append(grid);
}

function themeLabel(){
  const theme=document.documentElement.dataset.theme;
  const button=document.getElementById('theme');
  button.setAttribute('aria-label',w(theme==='dark'?'themeLight':'themeDark'));
  button.title=button.getAttribute('aria-label');
}

function render(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.title=t(data.profile.name)+' · '+(lang==='en'?'Urban Spatial Intelligence':'城市空间智能');
  document.querySelector('meta[name=description]').content=t(data.profile.bio).replace(/<[^>]+>/g,'');
  document.querySelector('.brand-name').textContent=t(data.profile.name);
  document.querySelector('.skip-link').textContent=w('skip');

  const nav=document.getElementById('nav-links');
  nav.replaceChildren();
  ['research','publications','experience','skills'].forEach(id=>nav.append(link(w(id),'#'+id)));

  renderIntro();
  renderProjects();
  renderPublications();
  renderExperience();
  renderSkills();

  const footer=document.querySelector('.footer');
  footer.replaceChildren(
    el('span','',`© ${new Date().getFullYear()} ${t(data.profile.name)} · ${w('footer')}`),
    link(w('top'),'#about')
  );

  const language=document.getElementById('language');
  language.textContent=lang==='en'?'中文':'EN';
  language.setAttribute('aria-label',w('language'));
  themeLabel();
}

document.getElementById('language').addEventListener('click',()=>{
  lang=lang==='en'?'zh':'en';
  try{localStorage.setItem('hpy-language',lang)}catch(e){}
  render();
});

document.getElementById('theme').addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=theme;
  try{localStorage.setItem('hpy-theme',theme)}catch(e){}
  themeLabel();
});

render();
})();
