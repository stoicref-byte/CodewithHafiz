const courses=[
{id:'python',title:'Python Programming',category:'Programming',level:'Beginner',lessons:12,symbol:'Py',tone:'mint',desc:'Start from zero and build real Python projects with confidence.',playlist:'https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0'},
{id:'web',title:'Web Development',category:'Web Development',level:'Beginner',lessons:18,symbol:'</>',tone:'pink',desc:'Learn HTML, CSS and JavaScript to create modern websites.',playlist:'https://www.youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i'},
{id:'games',title:'Python Game Development',category:'Programming',level:'Intermediate',lessons:1,symbol:'🎮',tone:'yellow',desc:'Learn game development through a complete game-development lesson.',video:'https://www.youtube.com/embed/YBRlwCjLNMQ'},
{id:'git',title:'Git & GitHub',category:'Developer Tools',level:'Beginner',lessons:8,symbol:'git',tone:'blue',desc:'Understand version control and publish your projects online.'},
{id:'sql',title:'SQL Basics',category:'Data & AI',level:'Beginner',lessons:10,symbol:'SQL',tone:'mint',desc:'Learn databases, queries and the foundations of data.'},
{id:'logic',title:'Programming Logic',category:'Programming',level:'Beginner',lessons:9,symbol:'{ }',tone:'pink',desc:'Build strong problem-solving skills before advanced coding.'}
];
let state={page:'courses',user:null,selected:null,query:'',category:'All courses',theme:'light'};
let labFiles = loadLabFiles();
let labCurrent = 'main.py';
let labLanguage = 'python';
let labOutput = '';
let labBusy = false;
// Make state available to GitHub Pages inline event handlers.
window.state = state;
const $=s=>document.querySelector(s);
function brand(){return `<div class="brand"><div class="brandmark">&lt;/&gt;</div><div>CodewithHafiz<small>LEARN. BUILD. GROW.</small></div></div>`}
function header(){return `<header class="topbar">${brand()}<nav class="nav"><button class="${state.page==='lab'?'active':''}" onclick="go('lab')">Code Lab</button><button class="${state.page==='courses'?'active':''}" onclick="go('courses')">Courses</button><button class="${state.page==='tutorials'?'active':''}" onclick="go('tutorials')">Tutorials</button><button class="${state.page==='learning'?'active':''}" onclick="go('learning')">My learning</button><button class="${state.page==='setup'?'active':''}" onclick="go('setup')">Downloads</button></nav><div class="top-actions"><button class="ghost" onclick="toggleTheme()">${state.theme==='light'?'☾':'☀'} ${state.theme==='light'?'Dark':'Light'}</button>${state.user?`<button class="ghost" onclick="go('dashboard')">Dashboard ↗</button><div class="avatar">${state.user[0].toUpperCase()}</div><button class="ghost" onclick="logout()">↪</button>`:`<button class="pill" onclick="go('login')">Sign in</button>`}</div></header>`}
function home(){let list=courses.filter(c=>(state.category==='All courses'||c.category===state.category)&&(`${c.title} ${c.desc}`.toLowerCase().includes(state.query.toLowerCase())));return `${header()}<main class="container"><section class="hero"><div><div class="eyebrow">KEEP YOUR CURIOSITY. BUILD YOUR SKILLS.</div><h1>Your next chapter<br>starts with <span>code.</span></h1><p>Practical courses. Clear explanations. Real progress.<br>Start from scratch or pick up where you left off.</p></div><div class="code-card"><div class="code-head"><span>your_journey.py</span><span>⌁</span></div><div class="code-body"><div class="comment"># A little progress, every day</div><br><span class="green">while</span> curious:<br>&nbsp;&nbsp;learn()<br>&nbsp;&nbsp;build()<br>&nbsp;&nbsp;<span class="green">grow()</span><br><br><span class="comment"># Your future is a work in progress.</span></div></div></section><div class="benefits"><span>${courses.length} free courses</span><span>Learn by doing</span><span>Beginner friendly</span><span>Go at your own pace</span></div><section class="lab-teaser">
<div>
<div class="eyebrow">CODE WITHOUT INSTALLING EVERYTHING</div>
<h2>Code Lab</h2>
<p>Write code, create files and folders, and run supported languages directly in your browser. No VS Code or Python installation is required for browser-based execution.</p>
</div>
<button class="primary" onclick="go('lab')">Open Code Lab →</button>
</section>
<section><div class="section-head"><div><div class="eyebrow">FIND YOUR STARTING POINT</div><h2>Explore courses</h2></div><input class="search" placeholder="⌕  What do you want to learn?" value="${state.query}" oninput="state.query=this.value;render()"></div><div class="filters">${['All courses','Programming','Web Development','DevOps','Developer Tools','Data & AI'].map(x=>`<button class="filter ${state.category===x?'active':''}" onclick="state.category='${x}';render()">${x}</button>`).join('')}</div><div class="course-grid">${list.map(courseCard).join('')}</div></section><section class="setup"><div><div class="eyebrow">READY TO START</div><h2>Download your coding tools.</h2><p>Install Python, Visual Studio Code, and the official Python extension to begin coding.</p><div class="download-mini-grid"><a class="download-mini" href="https://www.python.org/downloads/" target="_blank" rel="noopener"><b>🐍 Python</b><span>Download Python ↗</span></a><a class="download-mini" href="https://code.visualstudio.com/download" target="_blank" rel="noopener"><b>💻 VS Code</b><span>Download VS Code ↗</span></a><a class="download-mini" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python" target="_blank" rel="noopener"><b>🧩 Python Extension</b><span>Install extension ↗</span></a></div></div><button onclick="go('setup')">Open full setup guide →</button></section></main>`}
function courseCard(c){return `<article class="course" onclick="openCourse('${c.id}')"><div class="cover ${c.tone}"><small>CODEWITHHAFIZ</small><div class="symbol">${c.symbol}</div></div><div class="course-body"><h3>${c.title}</h3><p>${c.desc}</p><div class="meta"><span>${c.category}</span><span>${c.lessons} lessons · ${c.level}</span></div><button class="open-course">View course →</button></div></article>`}
function coursePage(){let c=state.selected||courses[0];let names=['Introduction','Getting started','Core concepts','Practice project','Build something','Next steps'];let total=Math.min(c.lessons,6);let embed=c.playlist?`https://www.youtube.com/embed/videoseries?list=${c.playlist.split('list=')[1]}`:(c.video||'');return `${header()}<div class="course-page"><aside class="side">${brand()}<div class="side-title">Course contents</div>${Array.from({length:total},(_,i)=>`<div class="side-item ${i===0?'active':''}" onclick="selectLesson(${i})"><span>${i+1}. ${names[i]||'Lesson '+(i+1)}</span><span>›</span></div>`).join('')}</aside><main class="mainpanel"><div class="crumb">Courses / ${c.title}</div><div class="lesson-layout"><div class="lesson-list"><h3>${c.title}</h3>${Array.from({length:total},(_,i)=>`<div class="lesson ${i===0?'active':''}" onclick="selectLesson(${i})"><span class="lesson-num">${i+1}</span><span>${names[i]||'Lesson '+(i+1)}</span></div>`).join('')}</div><div class="lesson-content"><div class="video">${embed?`<iframe width="100%" height="100%" src="${embed}" title="${c.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:`<div class="video-empty">Video link will appear here.</div>`}</div><h1>${c.title}: ${names[0]}</h1><p>${c.desc} This course is connected to the provided learning source.</p><div class="lesson-actions">${c.playlist?`<a class="primary" href="${c.playlist}" target="_blank" rel="noopener">Open full playlist ↗</a>`:''}<button class="secondary" onclick="alert('Add your PDF/notes link in app.js when ready.')">Practice slides ↗</button></div></div></div></main></div>`}
function login(){return `${header()}<div class="login-wrap"><div class="login-card"><div class="eyebrow">WELCOME BACK</div><h1>Sign in to learn.</h1><p style="color:var(--muted);font-size:13px">Continue your coding journey with CodewithHafiz.</p><div class="field"><label>Email</label><input id="email" type="email" placeholder="you@example.com"></div><div class="field"><label>Password</label><input id="password" type="password" placeholder="Your password"></div><button class="primary" style="width:100%" onclick="signin()">Sign in →</button><p style="font-size:12px;color:var(--muted);text-align:center;margin-top:20px">Demo: student@example.com / student123</p></div></div>`}
function dashboard(){return `${header()}<div class="dash-layout"><aside class="dash-side">${brand()}<div class="side-title">Workspace</div><div class="side-item active">▦ Overview</div><div class="side-item">▤ Courses <span>${courses.length}</span></div><div class="side-item">▧ Tutorials <span>4</span></div><div class="side-item">♙ Users</div><div class="side-title">Account</div><div class="side-item">⚙ Account</div></aside><main class="dash-main"><div class="dash-top"><div><div class="eyebrow">YOUR ACADEMY, AT A GLANCE</div><h1>Welcome back, ${state.user||'Hafiz'}.</h1><div style="color:var(--muted);font-size:13px">A little teaching today. A big difference tomorrow.</div></div><button class="new-btn" onclick="alert('Course creator coming next. Add course data in app.js for now.')">＋ New course</button></div><div class="stats"><div class="stat"><small>Total courses</small><strong>${courses.length}</strong><small>published courses</small></div><div class="stat"><small>Tutorials</small><strong>4</strong><small>published</small></div><div class="stat"><small>Registered learners</small><strong>0</strong><small>signed-in student accounts</small></div><div class="stat"><small>Course enrolments</small><strong>0</strong><small>across all courses</small></div></div><div class="dash-banner"><div><div class="eyebrow">MADE FOR THE NEXT GENERATION OF BUILDERS</div><h2>Your knowledge. Their next breakthrough.</h2><div style="color:var(--muted);font-size:12px">Bring your next idea to life with a new course or tutorial.</div></div><button class="primary" onclick="go('courses')">View website →</button></div><div class="table-card"><div class="table-title">Your courses <span style="color:var(--muted);font-size:11px">${courses.length}</span></div><div class="table-row header"><span>Course</span><span>Status</span><span>Lessons</span><span>Category</span></div>${courses.map(c=>`<div class="table-row"><span><b>${c.title}</b></span><span style="color:var(--green)">● Published</span><span>${c.lessons}</span><span>${c.category}</span></div>`).join('')}</div></main></div>`}
function setup(){return `${header()}<main class="container"><div class="eyebrow">START CODING</div><h1 style="font-size:38px">Your coding setup, made simple.</h1><p style="color:var(--muted);max-width:600px">Use these official links to install the tools required for CodewithHafiz lessons.</p><div class="course-grid" style="margin-top:28px"><article class="course"><div class="cover mint"><div class="symbol">Py</div></div><div class="course-body"><h3>Download Python</h3><p>Install Python for Windows from the official Python website.</p><a class="open-course" style="display:block;text-align:center;text-decoration:none" href="https://www.python.org/downloads/" target="_blank">Open Python download ↗</a></div></article><article class="course"><div class="cover blue"><div class="symbol">&lt;/&gt;</div></div><div class="course-body"><h3>Download VS Code</h3><p>Get the official Visual Studio Code editor for your computer.</p><a class="open-course" style="display:block;text-align:center;text-decoration:none" href="https://code.visualstudio.com/download" target="_blank">Open VS Code download ↗</a></div></article><article class="course"><div class="cover pink"><div class="symbol">✦</div></div><div class="course-body"><h3>Python Extension</h3><p>Install Microsoft’s Python extension inside VS Code.</p><a class="open-course" style="display:block;text-align:center;text-decoration:none" href="https://marketplace.visualstudio.com/items?itemName=ms-python.python" target="_blank">Open extension page ↗</a></div></article></div></main>`}

function defaultLabFiles(){
  return {
    'main.py': `print("Hello from CodewithHafiz Code Lab!")\n\nname = "Hafiz"\nprint("Welcome,", name)`,
    'index.html': `<!doctype html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>My Project</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Hello CodewithHafiz</h1>\n  <p>Edit this file and click Run.</p>\n  <script src="script.js"></script>\n</body>\n</html>`,
    'style.css': `body { font-family: Arial, sans-serif; padding: 40px; }\nh1 { color: #16845f; }`,
    'script.js': `console.log("JavaScript is running!");`
  };
}
function loadLabFiles(){
  try{
    const saved=localStorage.getItem('cwh_code_lab_files');
    return saved ? JSON.parse(saved) : defaultLabFiles();
  }catch(e){return defaultLabFiles();}
}
function saveLabFiles(){
  try{localStorage.setItem('cwh_code_lab_files',JSON.stringify(labFiles));}catch(e){}
}
function labEsc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function labExt(name){
  const i=name.lastIndexOf('.');
  return i>=0?name.slice(i+1).toLowerCase():'';
}
function labLanguageFor(name){
  const e=labExt(name);
  const map={py:'python',js:'javascript',mjs:'javascript',html:'html',htm:'html',css:'css',json:'json',cpp:'cpp',cc:'cpp',cxx:'cpp',c:'c',java:'java',php:'php',go:'go',rs:'rust',cs:'csharp',rb:'ruby',kt:'kotlin',swift:'swift'};
  return map[e]||'text';
}
function labNewFile(){
  const name=prompt('New file name (example: app.py, index.html):','new_file.py');
  if(!name)return;
  if(name.includes('/')||name.includes('\\')){alert('For now, create the file in the current project. Use a simple file name.');return;}
  if(labFiles[name]!==undefined){alert('A file with this name already exists.');return;}
  labFiles[name]='';
  labCurrent=name;
  labLanguage=labLanguageFor(name);
  saveLabFiles(); render();
}
function labNewFolder(){
  const name=prompt('New folder name:','my-folder');
  if(!name)return;
  const clean=name.trim();
  if(!clean||clean.includes('/')||clean.includes('\\')){alert('Please enter a simple folder name.');return;}
  const key=`${clean}/.keep`;
  if(labFiles[key]!==undefined){alert('That folder already exists.');return;}
  labFiles[key]='';
  saveLabFiles(); render();
}
function labDeleteFile(name){
  if(name.endsWith('/.keep')){alert('Folders are kept as project placeholders. Delete the folder by removing its files.');return;}
  if(!confirm(`Delete "${name}"?`))return;
  delete labFiles[name];
  const keys=Object.keys(labFiles);
  labCurrent=keys.find(k=>!k.endsWith('/.keep'))||'main.py';
  labLanguage=labLanguageFor(labCurrent);
  saveLabFiles(); render();
}
function labRenameFile(name){
  const next=prompt('New file name:',name);
  if(!next||next===name)return;
  if(labFiles[next]!==undefined){alert('A file with this name already exists.');return;}
  labFiles[next]=labFiles[name];
  delete labFiles[name];
  labCurrent=next;
  labLanguage=labLanguageFor(next);
  saveLabFiles(); render();
}
function labSelectFile(name){
  labCurrent=name;
  labLanguage=labLanguageFor(name);
  labOutput='';
  render();
}
function labEditorChanged(v){
  if(labCurrent)labFiles[labCurrent]=v;
  saveLabFiles();
}
function labSetLanguage(v){
  labLanguage=v;
  const map={python:'py',javascript:'js',html:'html',css:'css',cpp:'cpp',c:'c',java:'java',php:'php',go:'go',rust:'rs'};
  const ext=map[v]||'txt';
  const suggested=v==='python'?'main.py':v==='javascript'?'script.js':v==='html'?'index.html':v==='css'?'style.css':`main.${ext}`;
  if(!labFiles[labCurrent] || labExt(labCurrent)==='txt'){}
}
function labClearOutput(){labOutput='';render();}
function labDownloadFile(){
  const blob=new Blob([labFiles[labCurrent]||''],{type:'text/plain;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=labCurrent.split('/').pop();a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);
}
function labDownloadProject(){
  const lines=Object.entries(labFiles).map(([name,content])=>`===== ${name} =====\n${content}`);
  const blob=new Blob([lines.join('\n\n')],{type:'text/plain;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='CodewithHafiz-project.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);
}
function labPrintTree(){
  const names=Object.keys(labFiles);
  return names.map(n=>{
    const folder=n.endsWith('/.keep')?n.slice(0,-6):'';
    if(folder)return `<div class="lab-file folder">📁 ${labEsc(folder)}</div>`;
    return `<div class="lab-file ${labCurrent===n?'selected':''}" onclick="labSelectFile('${n.replace(/'/g,"\\'")}')"><span>📄 ${labEsc(n)}</span><span class="lab-file-actions"><button onclick="event.stopPropagation();labRenameFile('${n.replace(/'/g,"\\'")}')">✎</button><button onclick="event.stopPropagation();labDeleteFile('${n.replace(/'/g,"\\'")}')">×</button></span></div>`;
  }).join('');
}
function labOutputText(){
  if(!labOutput)return '<span class="lab-muted">Output will appear here after you run your code.</span>';
  return labEsc(labOutput);
}
async function runPythonInBrowser(code){
  if(!window.pyodide){
    labOutput='Loading Python runtime in your browser...';
    render();
    if(!window.loadPyodide){
      await new Promise((resolve,reject)=>{
        const s=document.createElement('script');
        s.src='https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js';
        s.onload=resolve;s.onerror=()=>reject(new Error('Could not load the browser Python runtime.'));
        document.head.appendChild(s);
      });
    }
    window.pyodide=await loadPyodide();
  }
  let out='';
  const original=window.pyodide.runPython;
  try{
    window.pyodide.setStdout({batched:(s)=>{out+=s;}});
    window.pyodide.setStderr({batched:(s)=>{out+=s;}});
    await window.pyodide.runPythonAsync(code);
    return out||'Program finished successfully (no output).';
  }catch(e){
    return out+(e&&e.message?e.message:String(e));
  }
}
async function runJavaScriptInBrowser(code){
  const logs=[];
  const oldLog=console.log, oldWarn=console.warn, oldErr=console.error;
  try{
    console.log=(...a)=>logs.push(a.map(String).join(' '));
    console.warn=(...a)=>logs.push('Warning: '+a.map(String).join(' '));
    console.error=(...a)=>logs.push('Error: '+a.map(String).join(' '));
    const fn=new Function(code);
    await fn();
    return logs.join('\n')||'Program finished successfully (no console output).';
  }catch(e){return logs.join('\n')+(logs.length?'\n':'')+'Error: '+e.message;}
  finally{console.log=oldLog;console.warn=oldWarn;console.error=oldErr;}
}
function runWebPreview(){
  const html=labFiles['index.html']||'';
  const css=labFiles['style.css']||'';
  const script=labFiles['script.js']||'';
  const frame=document.getElementById('lab-preview-frame');
  if(!frame)return;
  const doc=html.replace(/<link[^>]+href=["']style\.css["'][^>]*>/i,`<style>${css.replace(/<\/style>/gi,'')}</style>`).replace(/<script[^>]+src=["']script\.js["'][^>]*><\/script>/i,`<script>${script.replace(/<\/script>/gi,'')}</script>`);
  frame.srcdoc=doc;
}
async function labRun(){
  if(labBusy)return;
  labBusy=true;labOutput='Running...';render();
  try{
    const code=labFiles[labCurrent]||'';
    const ext=labExt(labCurrent);
    if(ext==='py'){labOutput=await runPythonInBrowser(code);}
    else if(ext==='js'){labOutput=await runJavaScriptInBrowser(code);}
    else if(ext==='html'||ext==='htm'||ext==='css'){
      labOutput='Web project preview updated below. Open index.html to preview the full page.';
      setTimeout(runWebPreview,50);
    }else{
      labOutput='This file type needs a compiler/runtime on a server. The Code Lab interface is ready for cloud execution, but this GitHub Pages-only version cannot safely compile native languages by itself.';
    }
  }catch(e){labOutput='Run error: '+(e.message||e);}
  labBusy=false;render();
  if(['html','htm','css'].includes(labExt(labCurrent)))setTimeout(runWebPreview,50);
}
function codeLab(){
  const files=Object.keys(labFiles);
  const current=labFiles[labCurrent]??'';
  const ext=labExt(labCurrent);
  const isWeb=['html','htm','css'].includes(ext);
  return `${header()}<main class="lab-page">
    <div class="lab-top">
      <div><div class="eyebrow">CODEWITHHAFIZ DEVELOPER TOOLS</div><h1>Code Lab</h1><p>Create files and folders, write code, and run supported code directly in your browser.</p></div>
      <div class="lab-top-actions"><button class="secondary" onclick="labNewFolder()">＋ Folder</button><button class="secondary" onclick="labNewFile()">＋ File</button><button class="secondary" onclick="labDownloadFile()">↓ File</button><button class="secondary" onclick="labDownloadProject()">↓ Project</button></div>
    </div>
    <div class="lab-notice"><b>Browser-powered execution:</b> Python runs through an in-browser Python runtime, so visitors do not need Python or VS Code installed. HTML/CSS/JavaScript can run in the browser too.</div>
    <div class="lab-workspace">
      <aside class="lab-sidebar"><div class="lab-sidebar-title">EXPLORER</div><div class="lab-project">📁 CodewithHafiz Project</div>${labPrintTree()}</aside>
      <section class="lab-editor-panel">
        <div class="lab-editor-head"><span>${labEsc(labCurrent)}</span><span>${labEsc(labLanguage)}</span></div>
        <textarea id="lab-editor" spellcheck="false" oninput="labEditorChanged(this.value)">${labEsc(current)}</textarea>
        <div class="lab-controls">
          <button class="primary" onclick="labRun()" ${labBusy?'disabled':''}>▶ ${labBusy?'Running...':'Run Code'}</button>
          <select onchange="labLanguage=this.value">
            <option value="python" ${labLanguage==='python'?'selected':''}>Python</option>
            <option value="javascript" ${labLanguage==='javascript'?'selected':''}>JavaScript</option>
            <option value="html" ${labLanguage==='html'?'selected':''}>HTML</option>
            <option value="css" ${labLanguage==='css'?'selected':''}>CSS</option>
            <option value="cpp" ${labLanguage==='cpp'?'selected':''}>C++</option>
            <option value="c" ${labLanguage==='c'?'selected':''}>C</option>
            <option value="java" ${labLanguage==='java'?'selected':''}>Java</option>
            <option value="php" ${labLanguage==='php'?'selected':''}>PHP</option>
            <option value="go" ${labLanguage==='go'?'selected':''}>Go</option>
            <option value="rust" ${labLanguage==='rust'?'selected':''}>Rust</option>
          </select>
          <button class="secondary" onclick="labClearOutput()">Clear output</button>
        </div>
      </section>
      <section class="lab-output-panel">
        <div class="lab-panel-title">OUTPUT / PREVIEW</div>
        <pre id="lab-output">${labOutputText()}</pre>
        <iframe id="lab-preview-frame" title="Code preview" sandbox="allow-scripts"></iframe>
      </section>
    </div>
  </main>`;
}

function go(p){state.page=p;render()}function openCourse(id){state.selected=courses.find(c=>c.id===id);state.page='course';render()}function selectLesson(){alert('Lesson selected. Add your lesson video and slides links in app.js.')}function signin(){let e=$('#email').value,p=$('#password').value;if((e==='student@example.com'&&p==='student123')||(e==='admin@codewithhafiz.com'&&p==='Hafiz@123')){state.user=e.split('@')[0];state.page='courses';render()}else alert('Demo login: student@example.com / student123')}function logout(){state.user=null;state.page='courses';render()}function toggleTheme(){state.theme=state.theme==='light'?'dark':'light';document.documentElement.style.setProperty('--bg',state.theme==='dark'?'#111916':'#f7f9f8');document.documentElement.style.setProperty('--surface',state.theme==='dark'?'#19231f':'#fff');document.documentElement.style.setProperty('--text',state.theme==='dark'?'#e7f0eb':'#17211d');render()}function render(){const app=document.getElementById('app'); if(!app) return; let html=state.page==='lab'?codeLab():state.page==='course'?coursePage():state.page==='login'?login():state.page==='dashboard'?dashboard():state.page==='setup'?setup():home(); app.innerHTML=html;}
window.go=go; window.openCourse=openCourse; window.selectLesson=selectLesson; window.signin=signin; window.logout=logout; window.toggleTheme=toggleTheme; window.render=render;
window.labNewFile=labNewFile; window.labNewFolder=labNewFolder; window.labDeleteFile=labDeleteFile; window.labRenameFile=labRenameFile; window.labSelectFile=labSelectFile; window.labEditorChanged=labEditorChanged; window.labRun=labRun; window.labClearOutput=labClearOutput; window.labDownloadFile=labDownloadFile; window.labDownloadProject=labDownloadProject;
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',render);}else{render();}
