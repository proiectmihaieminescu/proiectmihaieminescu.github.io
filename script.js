const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help: 'Comenzi: <span class="code">about</span>, <span class="code">experienta</span>, <span class="code">educatie</span>, <span class="code">skills</span>, <span class="code">credits</span>',
  about:
    "&emsp;&emsp; &emsp; <b>Mihai Eminescu</b> (născut <b>Mihail Eminovici</b>;<span class=code> n. 15 ianuarie 1850, Botoșani, Moldova – d. 15 iunie 1889, București, România</span>) a fost un poet, prozator și jurnalist român, considerat, în general, ca fiind cea mai cunoscută și influentă personalitate din literatura română. A publicat un singur volum antum, Poesii, compus din poemele publicate de-a lungul vieții în revista Convorbiri literare a societății Junimea, din care Eminescu făcea parte. Printre operele notabile se numără Luceafărul, Odă (în metru antic) și cele cinci Scrisori (I, II, III, IV și V).",
  skills:
    "<b>Experiența</b> în domeniul <b><u>pedagogic</u></b>, <b><u>jurnalist</u></b>, <b><u>bibliotecar</u></b>.<br><b>Limbile cunoscute:</b> <u>română</u> (maternă), <u>germană</u> (avansat), <u>rusă</u> (avansat), <u>engleză</u> (avansat)<br><b>Pasiuni:</b> jurnalistica (indeosebi politica), filozofia, arta. ",
  educatie:
    "&emsp;&emsp; &emsp; Între <span class=code>1869</span> și <span class=code>1872</span> este student la <b>Viena</b>. Urmează ca „auditor extraordinar” Facultatea de Filozofie și Drept (dar audiază și cursuri de la alte facultăți). Activează în rândul societății studențești (printre altele, participă la pregătirea unei serbări și a unui Congres studențesc la Putna, cu ocazia împlinirii a 400 de ani de la zidirea mănăstirii de către Ștefan cel Mare), se împrietenește cu Ioan Slavici.<br>&emsp;&emsp; &emsp;Între <span class=code>1872</span> și <span class=code>1874</span> a fost student „extraordinar” la <b>Berlin</b>. Junimea i-a acordat o bursă cu condiția să-și ia doctoratul în filozofie. A urmat cu regularitate două semestre, dar nu s-a prezentat la examene.",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experienta:
    "<table ><tr></tr><tr><td><strong><u>Funcția deținută</u></strong></td><td><strong><u>Perioada</u></strong></td></tr><tr><td>Subbibliotecar la Biblioteca Universității din Iași</td><td><b>1884-1886</b></td></tr><tr><td>Profesor de geografie și statistică la Școala Comercială din Iași</td><td><b>1884-1885</b></td></tr><tr><td>Redactor la cotidianul 'Timpul'</td><td><b>1877-1883</b></td></tr><tr><td>Redactor la administrator și corector la publicația Curierul de Iași &nbsp; </td><td><b>1876-1877</b></td></tr><tr><td>Redactor la Curierul de Iași</td><td><b>1876</b></td></tr><tr><td>Bibliotecar la Biblioteca Centrală din Iași</td><td><b>1875</b></td></tr><tr><td>Sufleor și copist în trupa de teatru a lui Iorgu Caragiale</td><td><b>1867</b></td></tr></table>",
  credits: "Andreiutz X vali",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
