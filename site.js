const courses=[
{id:'python',title:'Python Programming',category:'Programming',level:'Beginner',lessons:12,symbol:'Py',tone:'mint',desc:'Start from zero and build real Python projects with confidence.',playlist:'https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0'},
{id:'web',title:'Web Development',category:'Web Development',level:'Beginner',lessons:18,symbol:'</>',tone:'pink',desc:'Learn HTML, CSS and JavaScript to create modern websites.',playlist:'https://www.youtube.com/playlist?list=PLfqMhTWNBTe0PY9xunOzsP5kmYIz2Hu7i'},
{id:'games',title:'Python Game Development',category:'Programming',level:'Intermediate',lessons:1,symbol:'🎮',tone:'yellow',desc:'Learn game development through a complete game-development lesson.',video:'https://www.youtube.com/embed/YBRlwCjLNMQ'},
{id:'git',title:'Git & GitHub',category:'Developer Tools',level:'Beginner',lessons:8,symbol:'git',tone:'blue',desc:'Understand version control and publish your projects online.'},
{id:'sql',title:'SQL Basics',category:'Data & AI',level:'Beginner',lessons:10,symbol:'SQL',tone:'mint',desc:'Learn databases, queries and the foundations of data.'},
{id:'logic',title:'Programming Logic',category:'Programming',level:'Beginner',lessons:9,symbol:'{ }',tone:'pink',desc:'Build strong problem-solving skills before advanced coding.'}
];
const pythonLessons=[{"no": "01", "title": "Python Introduction", "desc": "What Python is, where it is used, and how a Python program runs.", "code": "print(\"Hello, CodewithHafiz!\")"}, {"no": "02", "title": "Variables and Data Types", "desc": "Learn variables, strings, integers, floats and booleans.", "code": "name = \"Hafiz\"\nage = 18\nheight = 5.8\nis_student = True\n\nprint(name, age, height, is_student)"}, {"no": "03", "title": "Input and Output", "desc": "Take information from a user and display useful output.", "code": "name = input(\"Enter your name: \")\nprint(\"Welcome,\", name)"}, {"no": "04", "title": "Operators", "desc": "Use arithmetic, comparison and logical operators.", "code": "a = 10\nb = 3\n\nprint(a + b)\nprint(a * b)\nprint(a > b)\nprint(a > 5 and b < 5)"}, {"no": "05", "title": "Strings", "desc": "Work with string indexing, slicing and common string methods.", "code": "text = \"CodewithHafiz\"\n\nprint(text[0])\nprint(text[0:4])\nprint(text.upper())\nprint(text.replace(\"Hafiz\", \"Python\"))"}, {"no": "06", "title": "Conditional Statements", "desc": "Make decisions with if, elif and else.", "code": "marks = 82\n\nif marks >= 80:\n    print(\"Excellent\")\nelif marks >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Try again\")"}, {"no": "07", "title": "For Loops", "desc": "Repeat a task over a sequence with for loops.", "code": "for number in range(1, 6):\n    print(\"Number:\", number)"}, {"no": "08", "title": "While Loops", "desc": "Repeat code while a condition remains true.", "code": "count = 1\n\nwhile count <= 5:\n    print(count)\n    count += 1"}, {"no": "09", "title": "Break, Continue and Pass", "desc": "Control how loops behave.", "code": "for number in range(1, 8):\n    if number == 4:\n        continue\n    print(number)"}, {"no": "10", "title": "Lists", "desc": "Store and modify collections of values.", "code": "fruits = [\"apple\", \"banana\", \"mango\"]\nfruits.append(\"orange\")\n\nprint(fruits)\nprint(fruits[1])"}, {"no": "11", "title": "Tuples", "desc": "Use ordered, immutable collections.", "code": "point = (10, 20)\nx, y = point\n\nprint(x)\nprint(y)"}, {"no": "12", "title": "Sets", "desc": "Store unique values and perform set operations.", "code": "numbers = {1, 2, 2, 3, 4}\nprint(numbers)\n\na = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)"}, {"no": "13", "title": "Dictionaries", "desc": "Store data as key-value pairs.", "code": "student = {\n    \"name\": \"Hafiz\",\n    \"age\": 18,\n    \"course\": \"Python\"\n}\n\nprint(student[\"name\"])\nstudent[\"age\"] = 19\nprint(student)"}, {"no": "14", "title": "Functions", "desc": "Create reusable blocks of code with parameters and return values.", "code": "def add(a, b):\n    return a + b\n\nresult = add(7, 5)\nprint(result)"}, {"no": "15", "title": "Scope and Recursion", "desc": "Understand local/global scope and the idea of recursive functions.", "code": "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))"}, {"no": "16", "title": "List Comprehensions", "desc": "Build lists concisely from existing sequences.", "code": "squares = [n * n for n in range(1, 6)]\neven = [n for n in range(10) if n % 2 == 0]\n\nprint(squares)\nprint(even)"}, {"no": "17", "title": "Modules and Packages", "desc": "Organize programs and use Python's standard library.", "code": "import math\n\nprint(math.sqrt(81))\nprint(math.pi)"}, {"no": "18", "title": "File Handling", "desc": "Read from and write to text files.", "code": "with open(\"example.txt\", \"w\") as file:\n    file.write(\"Hello from Python!\")\n\nwith open(\"example.txt\", \"r\") as file:\n    print(file.read())"}, {"no": "19", "title": "Exception Handling", "desc": "Handle errors safely with try, except, else and finally.", "code": "try:\n    number = int(input(\"Enter a number: \"))\n    print(100 / number)\nexcept ValueError:\n    print(\"Please enter a valid integer.\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero.\")"}, {"no": "20", "title": "Object-Oriented Programming", "desc": "Understand classes, objects, attributes and methods.", "code": "class Student:\n    def __init__(self, name):\n        self.name = name\n\n    def introduce(self):\n        print(\"I am\", self.name)\n\nstudent = Student(\"Hafiz\")\nstudent.introduce()"}, {"no": "21", "title": "Inheritance and Polymorphism", "desc": "Build classes that reuse and customize behavior.", "code": "class Animal:\n    def speak(self):\n        print(\"Some sound\")\n\nclass Dog(Animal):\n    def speak(self):\n        print(\"Woof\")\n\npet = Dog()\npet.speak()"}, {"no": "22", "title": "Iterators and Generators", "desc": "Process values lazily with iterators and yield.", "code": "def count_up_to(limit):\n    number = 1\n    while number <= limit:\n        yield number\n        number += 1\n\nfor value in count_up_to(5):\n    print(value)"}, {"no": "23", "title": "Decorators", "desc": "Wrap functions to add reusable behavior.", "code": "def log_call(function):\n    def wrapper():\n        print(\"Function is starting\")\n        function()\n        print(\"Function is finished\")\n    return wrapper\n\n@log_call\ndef hello():\n    print(\"Hello!\")\n\nhello()"}, {"no": "24", "title": "Lambda, Map and Filter", "desc": "Use functional tools for concise data processing.", "code": "numbers = [1, 2, 3, 4, 5]\n\nsquares = list(map(lambda n: n * n, numbers))\nevens = list(filter(lambda n: n % 2 == 0, numbers))\n\nprint(squares)\nprint(evens)"}, {"no": "25", "title": "Working with JSON", "desc": "Save and exchange structured data with JSON.", "code": "import json\n\nstudent = {\"name\": \"Hafiz\", \"age\": 18}\ntext = json.dumps(student)\nprint(text)\n\ndata = json.loads(text)\nprint(data[\"name\"])"}, {"no": "26", "title": "Regular Expressions", "desc": "Search and validate text patterns with the re module.", "code": "import re\n\ntext = \"Contact: hafiz@example.com\"\nmatch = re.search(r\"[\\w.-]+@[\\w.-]+\", text)\n\nif match:\n    print(match.group())"}, {"no": "27", "title": "Virtual Environments and pip", "desc": "Understand package installation and isolated Python environments.", "code": "# Typical terminal commands:\n# python -m venv .venv\n# .venv\\Scripts\\activate\n# python -m pip install requests\n\nprint(\"Use virtual environments to keep project dependencies isolated.\")"}, {"no": "28", "title": "APIs and HTTP Requests", "desc": "Understand how Python programs communicate with web APIs.", "code": "# Install first: python -m pip install requests\n\nimport requests\n\nresponse = requests.get(\"https://api.github.com\", timeout=10)\nprint(response.status_code)"}, {"no": "29", "title": "Databases with SQLite", "desc": "Store application data in a local SQLite database.", "code": "import sqlite3\n\nconnection = sqlite3.connect(\"school.db\")\ncursor = connection.cursor()\n\ncursor.execute(\"CREATE TABLE IF NOT EXISTS students (name TEXT, age INTEGER)\")\ncursor.execute(\"INSERT INTO students VALUES (?, ?)\", (\"Hafiz\", 18))\nconnection.commit()\n\nfor row in cursor.execute(\"SELECT * FROM students\"):\n    print(row)\n\nconnection.close()"}, {"no": "30", "title": "Testing with unittest", "desc": "Write automated tests for your Python code.", "code": "import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\nif __name__ == \"__main__\":\n    unittest.main()"}, {"no": "31", "title": "Type Hints and Dataclasses", "desc": "Make larger Python programs clearer and easier to maintain.", "code": "from dataclasses import dataclass\n\n@dataclass\nclass User:\n    name: str\n    age: int\n\ndef welcome(user: User) -> str:\n    return f\"Welcome, {user.name}\"\n\nprint(welcome(User(\"Hafiz\", 18)))"}, {"no": "32", "title": "Advanced Python Project Structure", "desc": "Bring the concepts together into a clean, maintainable project.", "code": "# Example structure:\n# my_project/\n#   main.py\n#   app/\n#     __init__.py\n#     models.py\n#     utils.py\n#   tests/\n#     test_app.py\n#   requirements.txt\n\ndef main():\n    print(\"Build projects with small, reusable modules.\")\n\nif __name__ == \"__main__\":\n    main()"}];
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
      labOutput='HTML/CSS code is ready. The white preview panel has been removed; use the downloaded project or open index.html in your browser to view the page.';
      setTimeout(runWebPreview,50);
    }else{
      labOutput='This file type needs a compiler/runtime on a server. The Code Lab interface is ready for cloud execution, but this GitHub Pages-only version cannot safely compile native languages by itself.';
    }
  }catch(e){labOutput='Run error: '+(e.message||e);}
  labBusy=false;render();
}
function codeLab(){
  const files=Object.keys(labFiles);
  const current=labFiles[labCurrent]??'';
  const ext=labExt(labCurrent);
  const isWeb=['html','htm','css'].includes(ext);
  return `${header()}<main class="lab-page">
    <div class="lab-top">
      <div><div class="eyebrow">CODEWITHHAFIZ DEVELOPER TOOLS</div><h1>Code Lab</h1><p>Create files and folders, write code, and run supported code directly in your browser.</p></div>
      <div class="lab-top-actions"><button class="secondary" onclick="labNewFolder()">＋ Folder</button><button class="secondary" onclick="labNewFile()">＋ File</button><button class="primary lab-run-top" onclick="labRun()" ${labBusy?'disabled':''}>▶ ${labBusy?'Running...':'Run Code'}</button><button class="secondary" onclick="labDownloadFile()">↓ File</button><button class="secondary" onclick="labDownloadProject()">↓ Project</button></div>
    </div>
    <div class="lab-notice"><b>Browser-powered execution:</b> Python runs through an in-browser Python runtime, so visitors do not need Python or VS Code installed. HTML/CSS/JavaScript can run in the browser too.</div>
    <div class="lab-workspace">
      <aside class="lab-sidebar"><div class="lab-sidebar-title">EXPLORER</div><div class="lab-project">📁 CodewithHafiz Project</div>${labPrintTree()}</aside>
      <section class="lab-editor-panel">
        <div class="lab-editor-head"><span>${labEsc(labCurrent)}</span><span>${labEsc(labLanguage)}</span></div>
        <textarea id="lab-editor" spellcheck="false" oninput="labEditorChanged(this.value)">${labEsc(current)}</textarea>
        
      </section>
      <section class="lab-output-panel">
        <div class="lab-panel-title">OUTPUT / PREVIEW</div>
        <pre id="lab-output">${labOutputText()}</pre>
      </section>
    </div>
  </main>`;
}


let learningLessonIndex=0;
function copyLearningCode(index){
  const lesson=pythonLessons[index];
  navigator.clipboard?.writeText(lesson.code).then(()=>alert('Code copied!')).catch(()=>alert('Select and copy the code manually.'));
}
function learningPage(){
  const lesson=pythonLessons[learningLessonIndex]||pythonLessons[0];
  return `${header()}<main class="learning-page">
    <div class="learning-hero">
      <div>
        <div class="eyebrow">MY LEARNING</div>
        <h1>My Learning</h1>
        <p>Your complete learning area. Start with Python Basic to Advanced and move lesson by lesson at your own pace.</p>
      </div>
      <div class="learning-count"><strong>01</strong><span>course</span></div>
    </div>
    <section class="python-course-card">
      <div class="python-course-icon">Py</div>
      <div class="python-course-info">
        <div class="eyebrow">PYTHON COURSE</div>
        <h2>Python Basic to Advanced</h2>
        <p>Learn Python in English from the very beginning to advanced concepts. Every lesson has a clear explanation, example code, and practice guidance.</p>
        <div class="python-course-meta"><span>${pythonLessons.length} Lessons</span><span>Beginner → Advanced</span><span>English</span></div>
      </div>
      <button class="primary python-start" onclick="openLearningLesson(0)">Start Learning →</button>
    </section>
    <div class="learning-layout">
      <aside class="learning-sidebar">
        <div class="learning-sidebar-title">PYTHON BASIC TO ADVANCED · ${pythonLessons.length} LESSONS</div>
        ${pythonLessons.map((x,i)=>`<button class="learning-item ${i===learningLessonIndex?'active':''}" onclick="openLearningLesson(${i})"><span>${x.no}. ${x.title}</span><small>›</small></button>`).join('')}
      </aside>
      <article class="learning-content">
        <div class="lesson-kicker">LESSON ${lesson.no} OF ${pythonLessons.length}</div>
        <h2>${lesson.title}</h2>
        <p class="learning-desc">${lesson.desc}</p>
        <div class="learning-section-title">Example</div>
        <div class="learning-code-head"><span>Python</span><button onclick="copyLearningCode(${learningLessonIndex})">Copy code</button></div>
        <pre class="learning-code"><code>${labEsc(lesson.code)}</code></pre>
        <div class="learning-tip"><b>Practice:</b> Copy the example into Code Lab, change the values, run it, and observe the output.</div>
        <div class="learning-nav">
          <button class="secondary" ${learningLessonIndex===0?'disabled':''} onclick="openLearningLesson(${learningLessonIndex-1})">← Previous</button>
          <button class="primary" ${learningLessonIndex===pythonLessons.length-1?'disabled':''} onclick="openLearningLesson(${learningLessonIndex+1})">Next lesson →</button>
        </div>
      </article>
    </div>
  </main>`;
}
function openLearningLesson(index){
  if(index<0||index>=pythonLessons.length)return;
  learningLessonIndex=index;
  state.page='learning';
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function go(p){state.page=p;render()}function openCourse(id){state.selected=courses.find(c=>c.id===id);state.page='course';render()}function selectLesson(){alert('Lesson selected. Add your lesson video and slides links in app.js.')}function signin(){let e=$('#email').value,p=$('#password').value;if((e==='student@example.com'&&p==='student123')||(e==='admin@codewithhafiz.com'&&p==='Hafiz@123')){state.user=e.split('@')[0];state.page='courses';render()}else alert('Demo login: student@example.com / student123')}function logout(){state.user=null;state.page='courses';render()}function toggleTheme(){state.theme=state.theme==='light'?'dark':'light';document.documentElement.style.setProperty('--bg',state.theme==='dark'?'#111916':'#f7f9f8');document.documentElement.style.setProperty('--surface',state.theme==='dark'?'#19231f':'#fff');document.documentElement.style.setProperty('--text',state.theme==='dark'?'#e7f0eb':'#17211d');render()}function render(){const app=document.getElementById('app'); if(!app) return; let html=state.page==='lab'?codeLab():state.page==='course'?coursePage():state.page==='learning'?learningPage():state.page==='login'?login():state.page==='dashboard'?dashboard():state.page==='setup'?setup():home(); app.innerHTML=html;}
window.go=go; window.openCourse=openCourse; window.selectLesson=selectLesson; window.signin=signin; window.logout=logout; window.toggleTheme=toggleTheme; window.render=render;
window.labNewFile=labNewFile; window.labNewFolder=labNewFolder; window.labDeleteFile=labDeleteFile; window.labRenameFile=labRenameFile; window.labSelectFile=labSelectFile; window.labEditorChanged=labEditorChanged; window.labRun=labRun; window.labClearOutput=labClearOutput; window.labDownloadFile=labDownloadFile; window.labDownloadProject=labDownloadProject; window.openLearningLesson=openLearningLesson; window.copyLearningCode=copyLearningCode;
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',render);}else{render();}
