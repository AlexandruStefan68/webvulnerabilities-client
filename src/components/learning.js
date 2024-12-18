import React, { useState } from 'react';
import '../components_css/learning.css';

function LearningEnvironment() {
  const [currentSection, setCurrentSection] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

    // Secțiunile conținutului
    const sections = [
      {
        title: "Introducere: Rolul mașinilor virtuale web",
        content: `
          Mașinile virtuale web sunt utilizate pentru a transforma codul specific într-un format compatibil
          cu sistemele de operare, permițând redarea de conținut interactiv. Acestea sunt esențiale pentru
          executarea aplicațiilor web precum jocuri, reclame interactive sau fluxuri media. Fiecare VM
          este specific tehnologiei utilizate, cum ar fi ActionScript VM pentru Flash sau JavaScript Engine
          pentru aplicații web moderne. Cu toate acestea, conectivitatea oferită de web le face vulnerabile
          atacurilor. Prin urmare, securizarea acestora reprezintă o prioritate.`,
        question: {
          text: "Care este principalul rol al mașinilor virtuale web?",
          options: [
            "Pentru a securiza browserele web.",
            "Pentru a permite execuția codului specific pe mai multe sisteme.",
            "Pentru a genera conținut static pe pagini web.",
          ],
          correct: 1,
        },
      },
      {
        title: "Clasificarea vulnerabilităților: Memory Corruption",
        content: `
          Vulnerabilitățile din categoria "Memory Corruption" sunt frecvent exploatate de atacatori.
          Acestea includ sub-clase precum Use-After-Free (UAF), Double-Free (DF) sau Buffer Overflow.
          UAF apare atunci când un obiect este utilizat după ce a fost eliberat din memorie. DF implică
          eliberarea multiplă a aceluiași obiect, cauzând inconsistențe. Alte exemple includ accesul
          în afara limitelor memoriei (Out-of-Bounds) și atacurile de tip heap spraying. Aceste probleme
          necesită soluții specifice pentru a preveni exploatările.`,
        question: {
          text: "Ce sub-clasă aparține categoriei 'Memory Corruption'?",
          options: ["SQL Injection", "Use-After-Free", "Cross-Site Scripting"],
          correct: 1,
        },
      },
      {
        title: "Soluția Inscription: Automatizarea protecției",
        content: `
          Inscription este o soluție inovatoare pentru securizarea binarelor ActionScript prin transformare
          automată a codului. Aceasta funcționează prin introducerea de verificări suplimentare la
          nivel de bytecode, protejând împotriva atacurilor precum UAF și DF. Inscription utilizează
          o combinație de monitorizare statică și dinamică pentru a înlocui operațiile nesigure cu
          alternative sigure. Soluția este ideală pentru scenarii în care utilizatorii folosesc browsere
          sau versiuni de mașini virtuale neactualizate.`,
        question: {
          text: "Care este scopul principal al soluției Inscription?",
          options: [
            "Detectarea atacurilor SQL.",
            "Securizarea binarelor prin transformări automate.",
            "Optimizarea performanței web.",
          ],
          correct: 1,
        },
      },
      {
        title: "Impactul vulnerabilităților UAF",
        content: `
        Vulnerabilitățile de tip Use-After-Free (UAF) sunt printre cele mai periculoase din categoria Memory Corruption.
        Acestea apar atunci când un obiect eliberat din memorie este încă referențiat și utilizat ulterior. 
        Exploatările UAF permit atacatorilor să acceseze și să modifice date critice, corupând integritatea aplicațiilor.
        În cele mai grave cazuri, UAF poate duce la executarea de cod arbitrar pe dispozitivul victimei.
        Astfel de vulnerabilități sunt deseori incluse în kiturile de exploatare folosite în atacuri de amploare.`,
        question: {
          text: "Ce pot provoca vulnerabilitățile UAF?",
          options: [
            "Accesarea unor date care nu au fost inițializate.",
            "Executarea de cod arbitrar pe dispozitivul victimei.",
            "Interceptarea datelor între două aplicații.",
          ],
          correct: 1,
        },
      }, 
      {
        title: "Double-Free și Riscurile Sale",
        content: `
        Double-Free (DF) apare atunci când un obiect este eliberat din memorie de două ori. Acest lucru poate duce la coruperea 
        memoriei și la comportamente imprevizibile ale aplicației. Exploatarea DF poate permite atacatorilor să modifice 
        structuri interne ale programului, ceea ce poate duce la o execuție de cod arbitrar. Aplicațiile vulnerabile pot fi 
        exploatate prin kituri precum Nuclear Pack. Prevenirea implică monitorizarea și controlul accesului la obiectele eliberate.`,
        question: {
          text: "Care este consecința principală a unei vulnerabilități Double-Free?",
          options: [
            "Aplicația nu se mai poate executa.",
            "Coruperea memoriei și posibilitatea de a executa cod arbitrar.",
            "Modificarea datelor criptate ale utilizatorului.",
          ],
          correct: 1,
        },
      },  
      {
        title: "Buffer Overflow și Cum Este Exploatat",
        content: `
        Buffer Overflow are loc atunci când datele scrise într-un buffer depășesc limitele alocate, corupând memoria adiacentă. 
        Aceasta poate duce la executarea unui cod dăunător, precum instalează malware sau permite acces neautorizat. 
        Vulnerabilitățile de tip buffer overflow sunt frecvent exploatate în atacuri de tip Remote Code Execution (RCE). 
        Aplicațiile web care permit manipularea directă a memoriei sunt cele mai vulnerabile. Prevenirea presupune validarea 
        dimensiunilor bufferelor înainte de scriere.`,
        question: {
          text: "Ce poate duce la un atac de tip Buffer Overflow?",
          options: [
            "Modificarea valorilor de configurare ale serverului.",
            "Coruperea fișierelor de configurare ale aplicațiilor.",
            "Depășirea limitelor de memorie ale unui buffer, permitând executarea de cod.",
          ],
          correct: 2,
        },
      }, 
      {
        title: "Heap Overflow și Pericolele Sale",
        content: `
        Heap Overflow apare atunci când datele depășesc limitele alocate într-o zonă de memorie din heap, corupând datele stocate
        acolo. Atacatorii pot folosi acest tip de vulnerabilitate pentru a modifica pointere și a controla fluxul execuției aplicației. 
        Aceste atacuri pot fi folosite pentru a executa cod arbitrar. Detectarea și prevenirea implică protejarea și validarea alocării 
        de memorie în heap. De asemenea, se poate folosi protecția la scriere pe heap.`,
        question: {
          text: "Ce este Heap Overflow?",
          options: [
            "O eroare care apare atunci când o aplicație depășește capacitatea memoriei alocate într-o zonă de stocare.",
            "Un atac care corupe datele criptate ale utilizatorilor.",
            "O metodă de protejare a aplicațiilor web împotriva accesului neautorizat.",
          ],
          correct: 0,
        },
      }, 
      {
        title: "Exploatarea Vulnerabilităților cu Heap Spraying",
        content: `
        Heap spraying este o tehnică folosită de atacatori pentru a plasa cod malițios într-o zonă de memorie heap. Acesta creează o 
        densitate mare de date malițioase pentru a exploata vulnerabilitățile de tip Buffer Overflow sau alte erori de memorie. 
        Atacatorii pot astfel să controleze fluxul execuției aplicației și să execute comenzi neautorizate. Prevenirea presupune 
        limitarea scrierii de date în heap și monitorizarea intensă a zonei respective.`,
        question: {
          text: "Ce presupune atacul de tip Heap Spraying?",
          options: [
            "Înlocuirea fișierelor de sistem cu un malware.",
            "Plasarea de date malițioase într-o zonă de memorie heap pentru a executa cod malițios.",
            "Crearea unui virus care se răspândește prin rețelele de internet.",
          ],
          correct: 1,
        },
      }, 
      {
        title: "Out-of-Bounds Access și Riscurile Sale",
        content: `
        Accesul în afacerea limitelor (Out-of-Bounds) are loc atunci când un program încearcă să acceseze un buffer sau o 
        zonă de memorie care nu a fost alocată corespunzător. Aceste erori pot permite unui atacator să citească sau să modifice 
        date sensibile sau să provoace comportamente imprevizibile ale aplicației. Aceste vulnerabilități sunt frecvent exploatate 
        prin atacuri de tip RCE. Prevenirea presupune validarea atentă a accesului la memorie.`,
        question: {
          text: "Ce poate cauza un atac de tip Out-of-Bounds?",
          options: [
            "Accesarea unui buffer din afacerea limitelor sale alocate, corupând datele.",
            "Instalarea unui software de protecție pe servere.",
            "Modificarea setărilor de configurare ale serverelor web.",
          ],
          correct: 0,
        },
      }, 
      {
        title: "Reclassificarea Vulnerabilităților ActionScript",
        content: `
        Un aspect important al securizării aplicațiilor web este reclassificarea vulnerabilităților, mai ales cele etichetate drept 
        "Memory Corruption". Majoritatea vulnerabilităților ActionScript sunt vag etichetate, iar o analiză mai detaliată poate 
        identifica subcategorii precum UAF, DF, buffer overflow și heap overflow. Această reclassificare permite dezvoltarea de 
        soluții de apărare mai precise.`,
        question: {
          text: "Ce tip de vulnerabilități sunt adesea etichetate vag în CVE?",
          options: [
            "Vulnerabilități de rețea.",
            "Vulnerabilități de autentificare.",
            "Vulnerabilități de tip Memory Corruption.",
          ],
          correct: 2,
        },
      }, 
      {
        title: "Securizarea Codului Flash cu Inscription",
        content: `
        Inscription protejează aplicațiile Flash prin inserarea unui cod de monitorizare direct în bytecode-ul aplicației. Această 
        tehnică modifică comportamentul aplicației la runtime, prevenind exploatarea vulnerabilităților deja cunoscute. Aplicarea 
        acestui proces nu necesită actualizări ale mașinilor virtuale Flash, făcându-l ideal pentru utilizatorii cu software neactualizat.`,
        question: {
          text: "Ce proces protejează Inscription pentru aplicațiile Flash?",
          options: [
            "Modifică serverele de aplicații Flash.",
            "Introduce cod de protecție în bytecode-ul Flash.",
            "Creează un firewall pentru aplicațiile Flash.",
          ],
          correct: 1,
        },
      }, 
      {
        title: "Impactul Vulnerabilităților Zero-Day",
        content: `
        Vulnerabilitățile zero-day sunt acele vulnerabilități care nu au fost încă descoperite de producători sau de comunitatea de cercetători. 
        Acestea sunt extrem de periculoase, deoarece nu există soluții de protecție oficiale disponibile. Exploatarea acestora poate duce la 
        compromiterea completă a securității aplicației sau a sistemului. Detectarea și remedierea acestora sunt esențiale pentru protejarea utilizatorilor.`,
        question: {
          text: "Ce caracterizează vulnerabilitățile zero-day?",
          options: [
            "Sunt vulnerabilități deja cunoscute și remediate.",
            "Sunt vulnerabilități necunoscute care nu au soluții de protecție disponibile.",
            "Sunt vulnerabilități legate de criptarea datelor.",
          ],
          correct: 1,
        },
      }, 
      {
        title: "Importanța Monitorizării Securității în Timp Real",
        content: `
        Monitorizarea în timp real a aplicațiilor web este crucială pentru a detecta atacurile care vizează mașinile virtuale. Soluțiile de securitate precum 
        Inscription oferă monitorizare dinamică a aplicațiilor Flash și alte aplicații web, protejând împotriva exploit-urilor. Prevenirea exploit-urilor înainte 
        ca acestea să afecteze utilizatorul este esențială pentru menținerea unui mediu web sigur.`,
        question: {
          text: "De ce este importantă monitorizarea în timp real a aplicațiilor web?",
          options: [
            "Pentru a îmbunătăți performanța aplicațiilor.",
            "Pentru a detecta și preveni atacurile asupra mașinilor virtuale.",
            "Pentru a crește numărul de utilizatori ai aplicațiilor.",
          ],
          correct: 1,
        },
      }, 
      {
        title: "Provocări în Securizarea Aplicațiilor Flash",
        content: `
        Securizarea aplicațiilor Flash este o provocare majoră datorită diversității și complexității vulnerabilităților care pot apărea în mașinile virtuale. 
        De asemenea, multe dintre acestea sunt legate de erori în implementarea limbajului ActionScript. Soluțiile de protecție trebuie să fie adaptate pentru a 
        preveni exploatarea vulnerabilităților deja descoperite și pentru a reduce impactul atacurilor.`,
        question: {
          text: "Care este principala provocare în securizarea aplicațiilor Flash?",
          options: [
            "Lipsa de suport pentru Flash în browser-e.",
            "Reducerea dimensiunii aplicațiilor Flash.",
            "Diversitatea și complexitatea vulnerabilităților din ActionScript.",
          ],
          correct: 2,
        },
      },   
    ];

    const handleAnswerSelect = (index) => {
      setSelectedAnswer(index);
    };
  
    const handleNextSection = () => {
      if (selectedAnswer === sections[currentSection].question.correct) {
        setScore(score + 1);
      }
      if (currentSection < sections.length) {
        setCurrentSection(currentSection + 1);
        setSelectedAnswer(null);  
      }      
    };
  
    return (
      <div className="learning-container">
        <h2 className="learning-title">{sections[currentSection]?.title}</h2>
        <p className="learning-content">{sections[currentSection]?.content}</p>
    
        {currentSection < sections.length && (
          <div className="quiz-section">
            <h3>{sections[currentSection]?.question.text}</h3>
            <ul>
              {sections[currentSection]?.question.options.map((option, index) => (
                <li
                  key={index}
                  className={`quiz-option ${
                    selectedAnswer === index ? 'selected' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <button onClick={handleNextSection} disabled={selectedAnswer === null}>
              Următoarea secțiune
            </button>
          </div>
        )}
    
        {/* Afișează scorul când utilizatorul ajunge la ultima secțiune */}
        {currentSection === sections.length && (
          <div className="score-section">
            <h2>Felicitări! Ai finalizat testul!</h2>
            <h3>Scorul tău este: {score}/{sections.length}</h3>
          </div>
        )}
      </div>
    );
  }    
  export default LearningEnvironment;
        