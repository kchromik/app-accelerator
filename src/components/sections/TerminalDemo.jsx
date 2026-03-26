import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const TYPING_SPEED = 45;
const OUTPUT_LINE_DELAY = 80;
const PAUSE_AFTER_COMMAND = 600;
const PAUSE_AFTER_OUTPUT = 2500;
const PAUSE_BETWEEN_SEQUENCES = 3000;

const sequences = [
  {
    command: 'claude "Erstelle einen Login-Screen mit E-Mail und Passwort Feld"',
    output: [
      { type: 'status', text: '● Analysiere dein Projekt...' },
      { type: 'status', text: '● Erstelle LoginView.swift' },
      { type: 'empty' },
      { type: 'code', text: 'struct LoginView: View {' },
      { type: 'code', text: '    @State private var email = ""' },
      { type: 'code', text: '    @State private var password = ""' },
      { type: 'code', text: '' },
      { type: 'code', text: '    var body: some View {' },
      { type: 'code', text: '        VStack(spacing: 20) {' },
      { type: 'code', text: '            TextField("E-Mail", text: $email)' },
      { type: 'code', text: '            SecureField("Passwort", text: $password)' },
      { type: 'code', text: '            Button("Anmelden") { login() }' },
      { type: 'code', text: '        }' },
      { type: 'code', text: '    }' },
      { type: 'code', text: '}' },
      { type: 'empty' },
      { type: 'success', text: '✓ LoginView.swift erstellt und zum Projekt hinzugefügt' },
    ]
  },
  {
    command: 'claude "Füge eine Passwort-vergessen Funktion hinzu"',
    output: [
      { type: 'status', text: '● Lese LoginView.swift...' },
      { type: 'status', text: '● Erweitere um Passwort-Reset Flow' },
      { type: 'empty' },
      { type: 'code', text: 'Button("Passwort vergessen?") {' },
      { type: 'code', text: '    showResetSheet = true' },
      { type: 'code', text: '}' },
      { type: 'code', text: '.sheet(isPresented: $showResetSheet) {' },
      { type: 'code', text: '    PasswordResetView()' },
      { type: 'code', text: '}' },
      { type: 'empty' },
      { type: 'success', text: '✓ LoginView.swift aktualisiert' },
      { type: 'success', text: '✓ PasswordResetView.swift erstellt' },
    ]
  },
  {
    command: 'claude "Schreibe Tests für den Login Flow"',
    output: [
      { type: 'status', text: '● Analysiere LoginView und Auth-Logik...' },
      { type: 'status', text: '● Erstelle LoginViewTests.swift' },
      { type: 'empty' },
      { type: 'code', text: 'func testLoginWithValidCredentials() async {' },
      { type: 'code', text: '    let vm = LoginViewModel()' },
      { type: 'code', text: '    vm.email = "test@example.com"' },
      { type: 'code', text: '    vm.password = "secure123"' },
      { type: 'code', text: '    await vm.login()' },
      { type: 'code', text: '    XCTAssertTrue(vm.isAuthenticated)' },
      { type: 'code', text: '}' },
      { type: 'empty' },
      { type: 'success', text: '✓ 4 Tests erstellt. Alle bestanden.' },
    ]
  },
];

const TerminalDemo = () => {
  const [lines, setLines] = useState([]);
  const [currentTyping, setCurrentTyping] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const terminalRef = useRef(null);
  const animationRef = useRef(null);
  const isVisibleRef = useRef(false);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  const sleep = (ms) => new Promise(resolve => {
    animationRef.current = setTimeout(resolve, ms);
  });

  const typeText = useCallback(async (text) => {
    setIsTyping(true);
    for (let i = 0; i <= text.length; i++) {
      if (!isVisibleRef.current) return false;
      setCurrentTyping(text.slice(0, i));
      await sleep(TYPING_SPEED + Math.random() * 30);
    }
    setIsTyping(false);
    return true;
  }, []);

  const runSequence = useCallback(async (seqIndex) => {
    const seq = sequences[seqIndex];

    // Type the command
    const typed = await typeText(seq.command);
    if (!typed) return;

    // "Enter" - add command to lines
    setLines(prev => [...prev, { type: 'command', text: seq.command }]);
    setCurrentTyping('');
    await sleep(PAUSE_AFTER_COMMAND);

    // Show output lines one by one
    for (const line of seq.output) {
      if (!isVisibleRef.current) return;
      setLines(prev => [...prev, line]);
      scrollToBottom();
      await sleep(line.type === 'code' ? OUTPUT_LINE_DELAY : OUTPUT_LINE_DELAY * 2);
    }

    await sleep(PAUSE_AFTER_OUTPUT);
  }, [typeText, scrollToBottom]);

  const runAllSequences = useCallback(async () => {
    while (isVisibleRef.current) {
      setLines([]);
      setCurrentTyping('');

      for (let i = 0; i < sequences.length; i++) {
        if (!isVisibleRef.current) return;
        await runSequence(i);
        if (i < sequences.length - 1) {
          await sleep(800);
        }
      }

      await sleep(PAUSE_BETWEEN_SEQUENCES);
    }
  }, [runSequence]);

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursor);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, currentTyping, scrollToBottom]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisibleRef.current) {
          isVisibleRef.current = true;
          runAllSequences();
        } else if (!entry.isIntersecting) {
          isVisibleRef.current = false;
          if (animationRef.current) {
            clearTimeout(animationRef.current);
          }
        }
      },
      { threshold: 0.3 }
    );

    const el = terminalRef.current?.parentElement;
    if (el) observer.observe(el);

    return () => {
      observer.disconnect();
      isVisibleRef.current = false;
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [runAllSequences]);

  const renderLine = (line, index) => {
    if (line.type === 'empty') {
      return <div key={index} className="h-3" />;
    }
    if (line.type === 'command') {
      return (
        <div key={index} className="flex gap-2">
          <span className="text-green-400 select-none flex-shrink-0">$</span>
          <span className="text-slate-200">{line.text}</span>
        </div>
      );
    }
    if (line.type === 'status') {
      return (
        <div key={index} className="text-sky-400">{line.text}</div>
      );
    }
    if (line.type === 'code') {
      return (
        <div key={index} className="text-sky-300 pl-4">{line.text || '\u00A0'}</div>
      );
    }
    if (line.type === 'success') {
      return (
        <div key={index} className="text-emerald-400">{line.text}</div>
      );
    }
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-10 md:py-14 bg-white"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
          {/* Title bar */}
          <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-slate-400 ml-2 font-mono">Terminal · claude code</span>
          </div>

          {/* Terminal body */}
          <div
            ref={terminalRef}
            className="bg-slate-900 p-4 md:p-5 font-mono text-xs md:text-sm leading-relaxed h-[320px] md:h-[360px] overflow-y-auto scrollbar-hide"
          >
            <div className="space-y-0.5">
              {lines.map((line, i) => renderLine(line, i))}

              {/* Current typing line */}
              <div className="flex gap-2">
                <span className="text-green-400 select-none flex-shrink-0">$</span>
                <span className="text-slate-200">
                  {currentTyping}
                  <span className={`inline-block w-[7px] h-[14px] md:h-[16px] bg-slate-300 align-middle ml-px ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-3">
          So sieht es aus, wenn du mit Claude Code an deiner App arbeitest
        </p>
      </div>
    </motion.section>
  );
};

export default TerminalDemo;
