import { useState, useEffect, FormEvent } from "react";
import { 
  Play, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Award, 
  Clock, 
  ShieldCheck, 
  Eye, 
  CreditCard, 
  Lock, 
  MessageCircle, 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Bookmark, 
  Layers, 
  HelpCircle,
  Menu,
  Monitor,
  Flame,
  ThumbsUp,
  AwardIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Image constants provided in instructions with high resolution/retries
const KITCHEN_HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuALPNuiVOGvbOmyiyZBbEgQd13WcqINM_Id4NVJY4hWgZive-lSAdfRtzGym1chodsBI4WCVyMdxEgnUQBQNJYvXIcusZRLqIGvlFhqUKX45eqEe4KTThTommdEgOvBO_0QYdgRqVBnJw3mjMIi4ax174hEx2Gm--F5BtDvOm6UPMr3qisUbTVUDXDwgeqfRARtdUtlcqqcvZeNGzO-A6Ii1i5X8Ye61B-Z9zyBi0o1TA8r9AnAk8wy8oGLC02P2inauBeJRlY_XSmi";
const MENTOR_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDOgicdX1aJ43Wuu5Je7KiCFT2a3lf7wqo4QDyaNxFV4r1uHsspGc1l7WSGXfOqadOD9Kz8tI7HxyRCRjf6X5zs7MZ0-fEKCHfsNEDBcsqCYX1O7nPqb_czqiPk3_4ZSaonBklsXHT5I_fZz23PueOMpqC7Van_WT5vJU8006tohyltvSDi-jZKcQ0Li6O-KlzlZ29-UA_dpUg8wzgeX30b6jYzvRDpiIQ31BkVUQuWlnMVi7r17t-MK8DkHm8btecPUrmEJVcVszdr";



export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interaction states
  const [videoPlaying, setVideoPlaying] = useState(false);



  // Pricing interactive calculations
  const [paymentOption, setPaymentOption] = useState<"installments" | "full">("installments");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"credit" | "pix" | "boleto">("credit");
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);



  // FAQ states
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Live countdown timer state
  const [hours, setHours] = useState(11);
  const [minutes, setMinutes] = useState(14);
  const [seconds, setSeconds] = useState(32);

  // WhatsApp Widget simulation
  const [wsWidgetOpen, setWsWidgetOpen] = useState(false);
  const [wsMessage, setWsMessage] = useState("");
  const [wsChatHistory, setWsChatHistory] = useState<Array<{ sender: "user" | "mentor", text: string }>>([
    { sender: "mentor", text: "Olá! Tudo bem? Sou a Rafaella. Vi que você quer dominar o Promob e trabalhar com móveis planejados de alto padrão em 4 semanas. Qual é a sua maior dúvida para começarmos?" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        setMinutes((prevMin) => {
          if (prevMin > 0) return prevMin - 1;
          setHours((prevHour) => {
            if (prevHour > 0) return prevHour - 1;
            return 23;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handler for FAQ accordion toggle
  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };


  // Handler for WhatsApp Simulated Chat
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!wsMessage.trim()) return;
    
    const newUserMsg = { sender: "user" as const, text: wsMessage };
    setWsChatHistory(prev => [...prev, newUserMsg]);
    setWsMessage("");

    // Simulate automatic response from Mentor after delay
    setTimeout(() => {
      setWsChatHistory(prev => [
        ...prev, 
        { 
          sender: "mentor" as const, 
          text: "Excelente pergunta! O Método Pronta foi feito justamente para quem está começando do zero absoluto. Você aprenderá desde a leitura de plantas até renderização de alto padrão e precificação. Se matricular hoje garante os bônus exclusivos!" 
        }
      ]);
    }, 1500);
  };

  // Module breakdown descriptions and learning items
  const modulesGrid = [
    {
      id: 1,
      tag: "PASSO 01",
      title: "Leitura e Medição de Ambiente",
      short: "A base de tudo. Aprenda a ler projetos arquitetônicos e tirar medidas sem erros.",
      details: "Aprenda as regras fundamentais de medição, erros fatais cometidos por iniciantes, como utilizar trena manual e a laser, preenchimento correto da ficha técnica de medição e interpretação de projetos estruturais no local de obras.",
      duration: "Semana 1",
      deliverable: "Checklist de Medição Perfeita"
    },
    {
      id: 2,
      tag: "PASSO 02",
      title: "Fundamentos de Modulação",
      short: "Entenda como as peças se encaixam e as regras de ouro do design de móveis.",
      details: "Estude o design milimétrico de MDF, espaçadores, frentes de gaveta, portas de giro e basculantes, folgas necessárias para montagem no local, tamponamentos robustos e layouts funcionais para cozinhas e quartos.",
      duration: "Semana 1",
      deliverable: "Tabela Padrão de Folgas e Recessos"
    },
    {
      id: 3,
      tag: "PASSO 03",
      title: "Promob do Zero",
      short: "Interface, comandos básicos e a lógica por trás do software mais usado do mundo.",
      details: "Acesso total à interface do Promob. Inicie paredes, insira luminárias, portas, janelas, configure geometrias personalizadas, insira módulos prontos e crie seus próprios móveis sob medida de forma lógica e ágil.",
      duration: "Semana 2",
      deliverable: "Seu primeiro ambiente 3D montado"
    },
    {
      id: 4,
      tag: "PASSO 04",
      title: "Parte Técnica do Projeto",
      short: "Detalhamento para fábrica, furações e especificações que garantem a montagem perfeita.",
      details: "Exporte desenhos técnicos cotados, vistas explodidas, marcações hidráulicas e elétricas. Aprenda a alinhar seu projeto com o montador de móveis e a fábrica para que o móvel chegue idêntico ao modelo proposto.",
      duration: "Semana 3",
      deliverable: "Manual de Detalhamento Técnico Padrão"
    },
    {
      id: 5,
      tag: "PASSO 05",
      title: "Acabamentos e Imagens",
      short: "O segredo das imagens realistas que vendem o projeto antes mesmo de ser fabricado.",
      details: "Ajuste de luz de sol, luzes embutidas por fita de LED, texturas de MDF amadeirados e foscos, vidros canelados e reflecta. Domine as configurações do renderizador nativo Real Scene para criar imagens de encher os olhos.",
      duration: "Semana 3",
      deliverable: "Portfólio com 3 renders ultra-realistas"
    },
    {
      id: 6,
      tag: "PASSO 06",
      title: "Promob Cut e Plano de Corte",
      short: "Otimização máxima de material. Aprenda a gerar planos de corte lucrativos.",
      details: "Aprenda a cadastrar chapas de MDF, definir o sentido do veio da madeira para cortes estéticos, gerar plano de corte automatizado para enviar à central de serviços da sua região, economizando até 40% de sobras.",
      duration: "Semana 4",
      deliverable: "Plano de corte otimizado pronto para produção"
    },
    {
      id: 7,
      tag: "PROJETO COMPREENSIVO",
      title: "Projeto Final Completo",
      short: "Você aplicará todo o conhecimento em um projeto real de ponta a ponta, simulando o dia a dia de um especialista.",
      details: "Construa uma proposta comercial completa com render de alto padrão, detalhamento técnico executivo detalhado para fábrica e orçamento de plano de corte. O tcc definitivo para te preparar para começar a lucrar de imediato no mercado imobiliário e design de interiores.",
      duration: "Semana 4",
      deliverable: "Portfólio Profissional Método Pronta"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans antialiased selection:bg-[#c5a059] selection:text-black" id="root-layout">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#c5a059] to-[#f2d8a0] text-black py-2.5 px-4 text-center font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 relative overflow-hidden">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span>Acesso vitalício promocional com descontos especiais encerra em</span>
        <span className="bg-black text-white px-2 py-0.5 rounded font-mono">
          {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>

      {/* BEGIN: TopNavBar */}
      <nav className="sticky top-0 w-full z-40 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md" id="top-navigation">
        <div className="flex justify-between items-center h-20 px-6 max-w-[1200px] mx-auto">
          {/* Logo Branding */}
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tighter text-white font-headline">
              MÉTODO <span className="text-[#c5a059]">PRONTA</span>
            </span>
          </div>
          
          {/* Desktop Nav menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm font-medium">
            <a className="text-white/60 hover:text-[#c5a059] transition-colors text-xs font-semibold uppercase tracking-widest" href="#o-metodo">O Método</a>
            <a className="text-white/60 hover:text-[#c5a059] transition-colors text-xs font-semibold uppercase tracking-widest" href="#modules">Módulos</a>
            <a className="text-white/60 hover:text-[#c5a059] transition-colors text-xs font-semibold uppercase tracking-widest" href="#bonuses">Bônus</a>
            <a className="text-white/60 hover:text-[#c5a059] transition-colors text-xs font-semibold uppercase tracking-widest" href="#mentoria">Mentora</a>
            <a className="text-white/60 hover:text-[#c5a059] transition-colors text-xs font-semibold uppercase tracking-widest" href="#pricing">Preço e Garantia</a>
          </div>

          {/* Removed navbar-cta-btn */}
        </div>
      </nav>
      {/* END: TopNavBar */}

      {/* BEGIN: Hero */}
      <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden" id="hero">
        {/* Ambient absolute background visuals */}
        <div className="absolute inset-0 z-0 bg-radial-gradient from-amber-500/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 w-full z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 border border-[#c5a059]/30 rounded-full bg-[#c5a059]/5 text-[#c5a059] text-[10px] font-bold uppercase tracking-widest">
                FORMAÇÃO PROFISSIONAL EM PROMOB
              </div>
              
              <h1 className="font-headline text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                Aprenda Promob do zero e comece a trabalhar com Móveis Planejados <br className="hidden md:inline"/>
                <span className="italic text-[#c5a059] font-normal font-headline">em até 4 Semanas</span>
              </h1>
              
              <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-xl text-balance">
                Método prático para quem quer entrar no mercado de móveis planejados mesmo sem experiência
              </p>

              {/* Dynamic live info alert */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm bg-white/5 p-4 border border-white/5 inline-block rounded-xl backdrop-blur-md">
                <div className="flex items-center gap-1 bg-[#c5a059]/15 text-[#c5a059] px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                  <Flame className="h-4 w-4 animate-bounce" /> VAGAS LIMITADAS
                </div>
                <p className="text-white/60 text-xs text-balance">
                  Apenas 30 vagas por turma, para manter a exclusividade do acompanhamento.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  className="px-8 py-4 bg-[#c5a059] text-black text-center font-bold rounded-xl shadow-lg shadow-[#c5a059]/20 transition-all duration-300 hover:bg-[#ebd09a] hover:-translate-y-1 block text-sm uppercase tracking-wider" 
                  href="#pricing"
                >
                  QUERO COMEÇAR AGORA
                </a>
                <a 
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-center font-bold tracking-wider transition-all duration-300 hover:bg-white/10 block hover:-translate-y-1 text-sm uppercase" 
                  href="#modules"
                >
                  VER CONTEÚDO DO CURSO
                </a>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 text-center sm:text-left">
                <div>
                  <div className="text-white text-lg font-bold">4 Semanas</div>
                  <div className="text-white/50 text-xs mt-0.5 leading-snug">para mudar a sua Realidade Financeira</div>
                </div>
                <div>
                  <div className="text-white text-lg font-bold">Do Zero ao primeiro projeto sozinha</div>
                  <div className="text-white/50 text-xs mt-0.5 leading-snug">e com confiança de profissional</div>
                </div>
                <div>
                  <div className="text-white text-lg font-bold">Com o acompanhamento real</div>
                  <div className="text-white/50 text-xs mt-0.5 leading-snug">para garantir que você alcance o seu objetivo</div>
                </div>
              </div>
            </div>

            {/* Premium Video Block */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-white/10 p-2.5 rounded-3xl group overflow-hidden bg-[#111] aspect-video lg:aspect-square flex justify-center items-center shadow-2xl">
                
                {videoPlaying ? (
                  <div className="absolute inset-0 bg-black z-10 p-1">
                    <iframe 
                      className="w-full h-full object-cover rounded-2xl" 
                      src="https://www.youtube.com/embed/NUHnx-suXNs?autoplay=1" 
                      title="Vídeo de Apresentação" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <button 
                      onClick={() => setVideoPlaying(false)} 
                      className="absolute top-4 right-4 bg-black/80 hover:bg-[#c5a059] hover:text-black text-white p-2 rounded-full z-20 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <img 
                      alt="Apresentação do Curso" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-2xl transition-transform duration-700 group-hover:scale-105" 
                      src={KITCHEN_HERO_IMAGE} 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40"></div>

                    {/* Interactive Play Button */}
                    <button 
                      onClick={() => setVideoPlaying(true)} 
                      className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-[#c5a059] text-black shadow-2xl transform transition-transform duration-300 hover:scale-110 active:scale-95"
                      aria-label="Assistir Vídeo"
                    >
                      <Play className="w-10 h-10 ml-2" fill="currentColor" />
                    </button>

                    <div className="absolute bottom-6 left-6 z-10 bg-[#050505]/80 p-2.5 rounded-xl border border-white/5 backdrop-blur-sm">
                      <p className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        ASSISTA AO VÍDEO COMPLETO (6 MIN)
                      </p>
                    </div>
                  </>
                )}

                {/* Floating Absolute stats Badge */}
                <div className="absolute top-4 right-4 bg-[#c5a059] text-black font-extrabold px-4 py-2 text-center pointer-events-none rounded-xl shadow-lg z-20">
                  <span className="block text-xl font-headline italic">100%</span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold">Prático no Promob</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* END: Hero */}

      {/* BEGIN: Market Info */}
      <section className="bg-white/2 py-24 border-y border-white/5" id="o-metodo">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">CENÁRIO DO MERCADO GERAL</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-white">
                O mercado não para de crescer, MAS O número de profissionais preparados não acompanha.
              </h2>


              <div className="space-y-6">
                
                <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-[#c5a059]/30 transition-colors">
                  <div className="text-[#c5a059] shrink-0">
                    <Eye className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                       Falta de Profissionais <span className="bg-red-600/10 text-red-500 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Urgente</span>
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Empresas do setor procuram pessoas que saibam vender, projetar e apresentar ambientes no Promob.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-[#c5a059]/30 transition-colors">
                  <div className="text-[#c5a059] shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                       Alta Rentabilidade por Projeto
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      O mercado recompensa quem domina Promob, atendimento e fechamento de projetos, principalmente em empresas que trabalham com comissão sobre vendas.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right-Side image mockup display - styled similarly to the visual preview component */}
            <div className="relative">
              <div className="h-[480px] bg-[#111] rounded-3xl border border-white/10 relative shadow-2xl overflow-hidden p-3 flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-8 bg-white/5 flex items-center px-4 space-x-1.5 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                  <span className="text-[9px] font-mono text-white/30 pl-2">PROMOB_PROJETISTA_WORKSPACE</span>
                </div>
                
                <div className="pt-8 h-full flex flex-col justify-between">
                  <img 
                    alt="Kitchen Render" 
                    className="w-full h-[320px] object-cover rounded-2xl border border-white/5" 
                    src={KITCHEN_HERO_IMAGE} 
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                    <span className="font-mono text-xs text-[#c5a059]">PROMOB_RENDER_05_HIGH.PNG</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Real-Scene Engine</span>
                  </div>
                </div>
              </div>

              {/* Decorative background visual badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-[#c5a059] to-[#f2d8a0] text-black pr-6 pl-4 py-4 rounded-xl font-bold z-20 shadow-2xl flex items-center gap-3">
                <span className="text-3xl font-headline font-semibold leading-none">100%</span>
                <span className="text-[9px] uppercase tracking-wider font-semibold leading-tight block">FOCO TOTAL<br/>NA PRÁTICA</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* END: Market Info */}

      {/* BEGIN: Modules Journey Section */}
      <section className="bg-[#050505] py-24 border-b border-white/5" id="modules">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a059] text-xs font-bold tracking-[0.3em] uppercase">7 PASSOS PARA A MAESTRIA</span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              A Jornada do Especialista
            </h2>
            <p className="text-white/50 text-sm md:text-base">
              Nosso cronograma estratégico foi desenvolvido para te guiar passo a passo, do clique inicial ao projeto final executável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {modulesGrid.slice(0, 6).map((item) => {
              return (
                <div 
                  key={item.id}
                  className="bg-white/5 p-8 text-left border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300 relative group flex flex-col justify-between rounded-2xl"
                  style={{ minHeight: "220px" }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#c5a059] font-headline text-2xl font-bold">{item.id.toString().padStart(2, '0')}.</span>
                      <span className="text-[10px] text-white/40 bg-white/5 px-2.5 py-1 rounded-full font-mono font-bold">{item.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white font-headline group-hover:text-[#c5a059] transition-colors">{item.title}</h3>
                    
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                      {item.short}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-[#c5a059] font-mono leading-none">
                    <span className="text-white/30 font-bold">FOCADO EM:</span> {item.deliverable}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Module 07 Highlight Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 md:p-12 text-center rounded-3xl border border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-300 relative">
              <div className="absolute top-4 right-4 bg-[#c5a059] text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                MÓDULO DE OURO
              </div>
              <span className="text-[#c5a059] font-headline text-3xl block mb-3 font-bold">07. Projeto Final Completo</span>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white/90 font-headline">Seu Portfólio de Alto Nível de Ponta a Ponta</h3>
              <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed mb-6">
                Você aplicará todo o conhecimento técnico em um projeto real de ponta a ponta, simulando o dia a dia de um especialista para seu portfólio.
              </p>


            </div>
          </div>

        </div>
      </section>
      {/* END: Modules Journey Section */}



      {/* BEGIN: Bonuses Exclusive Incentives */}
      <section className="bg-[#050505] py-24 border-b border-white/5" id="bonuses">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-headline text-5xl font-bold text-[#c5a059]">Incentivos Exclusivos</h2>
            <p className="text-white/50 text-sm">
              Mais do que teoria. Você receberá ferramentas prontas pensadas para acelerar o seu retorno de investimento desde o primeiro dia de treinamento.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            
            {/* Bonus Card 1 */}
            <div className="bg-white/5 p-8 md:p-12 border-l-4 border-[#c5a059] border-y border-r border-white/5 rounded-r-3xl flex flex-col justify-between">
              <div>
                <span className="text-[#c5a059] text-xs font-bold uppercase tracking-widest font-mono block mb-2">BÔNUS INTEGRADO 01</span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4 italic">Vistas de Projeto Executivo</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Venda seus projetos sem dor de cabeça. Domine a criação ágil de vistas técnicas detalhadas no Promob para detalhamento arquitetônico profissional de forma correta e rápida.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl flex items-center justify-between border border-white/5">
                <span className="text-xs text-white/40">VALOR VENDIDO SEPARADO:</span>
                <span className="text-[#c5a059] font-bold text-sm line-through">R$ 197,00</span>
                <span className="bg-[#c5a059]/10 text-[#c5a059] px-3 py-1 text-xs font-mono font-bold rounded-full">GRÁTIS</span>
              </div>
            </div>

            {/* Bonus Card 2 */}
            <div className="bg-white/5 p-8 md:p-12 border-l-4 border-[#c5a059] border-y border-r border-white/5 rounded-r-3xl relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 bg-[#c5a059] text-black px-4 py-1 text-[10px] font-bold rounded-bl-3xl tracking-widest">
                EXCLUSIVO
              </div>
              <div>
                <span className="text-[#c5a059] text-xs font-bold uppercase tracking-widest font-mono block mb-2">AÇÃO RÁPIDA</span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-4 italic">O Kit do Projetista</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Para os cinco mais rápidos que entregarem a atividade final de forma bem sucedida, receberão um Kit que te fará começar com tudo, o kit compõe
                </p>
                <ul className="text-sm text-white/50 space-y-3 mb-6">
                  <li className="flex items-center gap-2"><span className="text-[#c5a059] font-mono">✦</span> Trena manual personalizada</li>
                  <li className="flex items-center gap-2"><span className="text-[#c5a059] font-mono">✦</span> Caderno 14 x21 Personalizado</li>
                  <li className="flex items-center gap-2"><span className="text-[#c5a059] font-mono">✦</span> Prancheta de medição em Obra</li>
                </ul>
              </div>
              

            </div>

          </div>
        </div>
      </section>
      {/* END: Bonuses */}

      {/* BEGIN: Biography */}
      <section className="bg-white/2 py-24 border-b border-white/5" id="mentoria">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                Quem será sua <span className="text-[#c5a059] italic">Mentora?</span>
              </h2>

              <div className="space-y-6 text-white/50 text-sm md:text-base leading-relaxed">
                <p>
                  Sou <span className="font-bold text-white">Rafaella Ludicsa</span> e vivo o mercado de móveis planejados desde <span className="text-white font-bold">agosto de 2016</span>.
                  Minha trajetória começou na conferência técnica, mas foi nas vendas que desenvolvi minhas maiores habilidades, entendendo como transformar atendimento, comunicação e estratégia em resultados reais dentro do setor.
                </p>
                <p>
                  Foram 4 anos atuando na linha de frente, evoluindo minha visão comercial e aprendendo o que realmente faz um projeto ser fechado. Depois disso, voltei para a conferência técnica e foi ali que compreendi o outro lado do mercado: a precisão milimétrica, a lógica construtiva e a responsabilidade por trás de cada detalhe executado.
                </p>
                <p>
                  O Método Pronta nasceu depois de anos percebendo a enorme falta de profissionais para o mercado. Pessoas que não apenas saibam mexer no Promob, mas que entendam vendas, execução, técnica e a realidade prática dos móveis planejados.
                </p>
                
                <div className="border-l-4 border-[#c5a059] pl-6 py-2 mt-4">
                  <p className="italic text-[#c5a059] font-headline text-xl leading-relaxed">
                    "Meu objetivo é simples: encurtar seu caminho técnico de anos de erros para apenas 4 semanas de prática assertiva, te transformando em uma autoridade respeitada e altamente valorizada."
                  </p>
                </div>
              </div>

              {/* Statistics Counters / Mentor Proof points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
                <div>
                  <div className="font-headline text-3xl font-bold text-white font-serif italic">+8 Anos</div>
                  <div className="text-xs text-white/30 mt-1">Mercado Ativo</div>
                </div>
                <div>
                  <div className="font-headline text-sm sm:text-base font-bold text-white font-serif italic leading-tight">Experiência em vendas e conferência</div>
                  <div className="text-xs text-white/30 mt-1">Atuação prática</div>
                </div>
                <div>
                  <div className="font-headline text-3xl font-bold text-white font-serif italic">99.7%</div>
                  <div className="text-xs text-white/30 mt-1">Fidelidade Montagem</div>
                </div>
                <div>
                  <div className="font-headline text-3xl font-bold text-white font-serif italic">100%</div>
                  <div className="text-xs text-white/30 mt-1">Suporte Próprio</div>
                </div>
              </div>
            </div>

            {/* Mentor Picture Frame with offset gold stroke layout */}
            <div className="lg:col-span-5 relative max-w-[380px] mx-auto lg:ml-auto w-full">
              <div className="relative z-10 p-3 bg-[#111] rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  alt="Rafaella Ludicsa Mentora" 
                  className="w-full aspect-[4/5] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 block" 
                  src={MENTOR_IMAGE} 
                />
                
                <div className="p-4 bg-black/60 border border-white/5 rounded-xl text-center mt-3">
                  <h4 className="font-headline text-lg font-bold text-white">Rafaella Ludicsa</h4>
                  <p className="text-xs text-[#c5a059] font-semibold tracking-wider font-mono mt-0.5">Fundadora do Método Pronta</p>
                </div>
              </div>
              
              {/* Offset Geometric Yellow border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c5a059] rounded-3xl -z-0"></div>
            </div>

          </div>
        </div>
      </section>
      {/* END: Biography */}

      {/* BEGIN: Pricing Invest in Future */}
      <section className="bg-[#050505] py-24 border-b border-white/5" id="pricing">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#c5a059] text-xs font-bold tracking-[0.3em] uppercase block">OFERTA DE MATRÍCULA LIMITADA</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Invista no Seu Futuro
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Ao escolher se matricular hoje, você adquire acesso vitalício com suporte exclusivo para sanar todas as suas dúvidas. Escolha a sua melhor modalidade abaixo:
            </p>

            {/* Dynamic visual price display controller tabs */}
            <div className="inline-flex bg-white/5 p-1 border border-white/10 rounded-full mt-4">
              <button 
                onClick={() => setPaymentOption("installments")}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${paymentOption === "installments" ? "bg-[#c5a059] text-black" : "text-gray-400 hover:text-white"}`}
              >
                Parcelado (12x)
              </button>
              <button 
                onClick={() => setPaymentOption("full")}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${paymentOption === "full" ? "bg-[#c5a059] text-black" : "text-gray-400 hover:text-white"}`}
              >
                À Vista com Desconto
              </button>
            </div>
          </div>

          <div className="max-w-md mx-auto relative bg-[#111] border border-[#c5a059] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            {/* Best Value Badge top */}
            <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-[#c5a059] to-[#f2d8a0] text-black text-[10px] font-bold tracking-widest px-6 py-1.5 uppercase rounded-full shadow-lg">
              MATRÍCULAS COM BÔNUS FÍSICO ATIVAS
            </div>

            <p className="text-white/30 line-through text-sm mt-4">De: R$ 597,00</p>
            <p className="text-[#c5a059] font-bold tracking-widest text-sm uppercase mt-1">POR APENAS</p>

            <div className="flex items-center justify-center gap-2 my-8">
              {paymentOption === "installments" ? (
                <>
                  <span className="text-5xl font-headline font-bold text-white font-serif italic">12x</span>
                  <div className="text-left">
                    <span className="text-[#c5a059] text-4xl md:text-5xl font-bold font-headline leading-none block">R$ 35,89</span>
                    <span className="text-white/40 text-xs font-medium">Ou R$ 347,00 à vista</span>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <span className="text-[#c5a059] text-5xl md:text-6xl font-bold font-headline leading-none block font-serif italic">R$ 347,00</span>
                  <span className="text-white/40 text-xs font-medium tracking-wide">Preço único pelo pix ou boleto</span>
                </div>
              )}
            </div>

            {/* Custom CTA triggering checkout mock */}
            <a 
              href="https://pay.kiwify.com.br/SDBdV75"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full bg-[#c5a059] hover:bg-white text-black font-bold py-5 px-4 mb-8 transition-all uppercase tracking-widest text-sm rounded-xl cursor-pointer shadow-lg shadow-amber-500/10 active:scale-95 duration-200"
            >
              QUERO MINHA VAGA AGORA
            </a>

            {/* Micro proof points */}
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                Pagamento 100% criptografado e seguro
              </div>
              <div className="flex items-center justify-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                Acesso imediato enviado por e-mail automaticamente
              </div>
            </div>
            
          </div>
          
          <div className="text-center text-white/30 text-xs mt-6">
            Dúvidas quanto ao parcelamento sem limite? Fale com a Rafaella clicando no balão de WhatsApp abaixo.
          </div>

        </div>
      </section>
      {/* END: Pricing */}

      {/* BEGIN: Unconditional Guarantee & Support */}
      <section className="bg-white/2 border-b border-white/5" id="garantia">
        <div className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-center gap-16">
          
          <div className="w-48 h-48 border-4 border-[#c5a059]/30 rounded-full flex items-center justify-center relative shrink-0 z-10 bg-[#050505] shadow-2xl">
            <span className="text-8xl font-headline font-bold text-white italic font-serif">7</span>
            <div className="absolute -bottom-2 bg-[#050505] border border-white/10 rounded-full px-4 py-1 text-[10px] text-[#c5a059] font-bold uppercase tracking-widest">DIAS</div>
          </div>

          <div className="max-w-2xl text-center md:text-left space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">RISCO ZERO COMPREENSIVO</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">Garantia Incondicional de 7 Dias</h2>
            <p className="text-white/50 text-sm md:text-base leading-relaxed animate-pulse">
              Assista às aulas da primeira semana, baixe os primeiros materiais bônus disponibilizados, aplique as técnicas de medição prática. Se em até 7 dias você sentir que o treinamento não é para você, devolveremos 100% de seu investimento de imediato, sem perguntas chatas e sem qualquer burocracia. O risco financeiro é todo meu.
            </p>
          </div>

        </div>
      </section>
      {/* END: Guarantee */}

      {/* BEGIN: Interactive FAQ Section */}
      <section className="bg-[#050505] py-24 border-b border-white/5" id="duvidas-comuns">
        <div className="max-w-[800px] mx-auto px-6">
          
          <div className="text-center mb-16 space-y-3">
            <HelpCircle className="h-10 w-10 text-[#c5a059] mx-auto opacity-70" />
            <h2 className="font-headline text-4xl font-bold text-white">Dúvidas Frequentes</h2>
            <p className="text-white/50 text-sm">Respostas para as perguntas mais comuns de futuros especialistas.</p>
          </div>

          <div className="space-y-4">
            
            {[
              {
                q: "Preciso ter computador de última geração para rodar o Promob?",
                a: "Não! O Promob é um software extremamente otimizado. Computadores ou notebooks comuns com processador i3/i5 com placa integrada simples já dão conta de modelar com tranquilidade. No curso te ensinamos macetes técnicos para deixar os projetos leves para renderizar rápido até em máquinas modestas."
              },
              {
                q: "Por quanto tempo tenho acesso ao curso?",
                a: "Acesso vitalício! Se matricular hoje garante que todas as futuras atualizações do curso com novas versões do Promob e tendências de MDF fiquem salvas na sua conta de forma totalmente gratuita."
              },
              {
                q: "Não sei desenhar e nunca usei 3D. Consigo acompanhar?",
                a: "Sim, absolutamente. O Método Pronta foi projetado do zero absoluto. Desenvolvemos um passo a passo milimétrico partindo de como interpretar uma medição, avançando de forma gradativa para você não se sentir perdido."
              },
              {
                q: "Como funciona o suporte técnico a dúvidas?",
                a: "Você terá suporte técnico de segunda a sexta diretamente comigo, Rafaella. Qualquer dúvida na montagem do seu Promob ou plano de corte pode ser enviada por chat que eu pessoalmente te orientarei por lá."
              },
              {
                q: "Como o kit físico grátis é enviado para minha casa?",
                a: "Se você estiver entre os 5 primeiros mais rápidos a finalizar a atividade proposta no módulo 7, nossa equipe entrará em contato via whatsApp solicitando seus dados e te enviará o Kit conforme prometido"
              }
            ].map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <div key={index} className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left font-bold text-sm md:text-base text-white hover:text-[#c5a059] flex justify-between items-center transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[#c5a059] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </div>
      </section>
      {/* END: FAQ */}

      {/* BEGIN: Footer */}
      <footer className="bg-white/2 w-full py-16 border-t border-white/10" id="footer">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-10">
            
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <div className="w-6 h-6 bg-gradient-to-tr from-[#c5a059] to-[#f2d8a0] rounded-md"></div>
                <span className="font-headline text-2xl text-white uppercase tracking-wider font-bold">MÉTODO <span className="text-[#c5a059]">PRONTA</span></span>
              </div>
              <p className="text-white/30 text-xs">
                © 2026 MÉTODO PRONTA. Todos os direitos reservados. Rafaella Ludicsa.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest font-semibold">
              <a className="text-white/40 hover:text-[#c5a059] transition-colors" href="#">Termos de Uso</a>
              <a className="text-white/40 hover:text-[#c5a059] transition-colors" href="#">Políticas de Privacidade</a>
              <a className="text-white/40 hover:text-[#c5a059] transition-colors" href="#duvidas-comuns">Perguntas Frequentes</a>
            </div>

          </div>

          <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-white/30 text-[10px] text-center sm:text-left">
            <p>
              CNPJ: 34.123.456/0001-99 | Razão Social: Rafaella Ludicsa Projetos de Design de Interiores LTDA.
            </p>
            <div className="flex items-center gap-2 text-white/25">
              <Lock className="w-3.5 h-3.5" /> 
              <span>Ambiente de Compra Segura e Protegida por Encriptação SSL</span>
            </div>
          </div>
        </div>
      </footer>
      {/* END: Footer */}

      {/* BEGIN: Simulated Checkout Drawer Modal */}
      <AnimatePresence>
        {checkoutModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#111] border border-[#c5a059] w-full max-w-lg p-6 md:p-8 relative rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setCheckoutModalOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>

              {checkoutSuccess ? (
                /* Sophisticated Success Alert inside the modal avoiding native browser blocking alerts */
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-white">Inscrição Efetuada!</h3>
                    <p className="text-sm text-white/50 mt-1">Sua matrícula de teste sob o Método Pronta foi aprovada.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-left text-xs space-y-1 text-white/60">
                    <p>✓ <strong>E-mail:</strong> Um link de e-mail fictício com as credenciais de acesso foi despachado para você.</p>
                    <p>✓ <strong>Suporte:</strong> Acesse também o canal de mentores no WhatsApp.</p>
                  </div>
                  <button 
                    onClick={() => setCheckoutModalOpen(false)}
                    className="w-full py-3.5 bg-[#c5a059] text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-white transition-colors"
                  >
                    Prosseguir
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <span className="text-[#c5a059] text-[10px] uppercase font-bold tracking-widest block mb-1">INSCRIÇÃO MÉTODO PRONTA</span>
                    <h3 className="text-2xl font-headline font-bold text-white">Fazer Matrícula</h3>
                    <p className="text-xs text-white/40">Insira as informações simuladas para finalizar o processo de matrícula.</p>
                  </div>

                  {checkoutStep === 1 ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase text-white/50 font-bold mb-1">Seu Nome Completo</label>
                        <input 
                          type="text" 
                          defaultValue="Rafael da Silva"
                          placeholder="Nome completo para o certificado" 
                          className="w-full bg-[#050505] border border-white/10 p-3 text-sm focus:outline-none focus:border-[#c5a059] text-white rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase text-white/50 font-bold mb-1">Seu E-mail de Contato</label>
                        <input 
                          type="email" 
                          defaultValue="rafael@exemplo.com"
                          placeholder="E-mail onde receberá os acessos do curso" 
                          className="w-full bg-[#050505] border border-white/10 p-3 text-sm focus:outline-none focus:border-[#c5a059] text-white rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase text-white/50 font-bold mb-1">Seu WhatsApp</label>
                        <input 
                          type="text" 
                          defaultValue="(11) 99999-9999"
                          placeholder="(DD) 99999-9999" 
                          className="w-full bg-[#050505] border border-white/10 p-3 text-sm focus:outline-none focus:border-[#c5a059] text-white rounded-xl"
                        />
                      </div>

                      <button 
                        onClick={() => setCheckoutStep(2)}
                        className="w-full bg-[#c5a059] text-black font-bold py-4 rounded-xl uppercase text-xs tracking-widest hover:bg-white transition-colors cursor-pointer"
                      >
                        CONTINUAR PARA PAGAMENTO →
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs uppercase text-white/50 font-bold mb-2">Forma de Pagamento</h4>
                        <div className="grid grid-cols-3 gap-2">
                          <button 
                            onClick={() => setSelectedPaymentMethod("credit")}
                            className={`p-3 text-[10px] font-semibold flex flex-col items-center gap-1.5 border rounded-xl transition-all ${selectedPaymentMethod === "credit" ? "border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]" : "border-white/10 bg-white/5 text-gray-400"}`}
                          >
                            <CreditCard className="h-4 w-4" />
                            Card. Crédito
                          </button>
                          <button 
                            onClick={() => setSelectedPaymentMethod("pix")}
                            className={`p-3 text-[10px] font-semibold flex flex-col items-center gap-1.5 border rounded-xl transition-all ${selectedPaymentMethod === "pix" ? "border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]" : "border-white/10 bg-white/5 text-gray-400"}`}
                          >
                            <Sparkles className="h-4 w-4" />
                            Pix Instantâneo
                          </button>
                          <button 
                            onClick={() => setSelectedPaymentMethod("boleto")}
                            className={`p-3 text-[10px] font-semibold flex flex-col items-center gap-1.5 border rounded-xl transition-all ${selectedPaymentMethod === "boleto" ? "border-[#c5a059] bg-[#c5a059]/10 text-[#c5a059]" : "border-white/10 bg-white/5 text-gray-400"}`}
                          >
                            <Clock className="h-4 w-4" />
                            Boleto Bancário
                          </button>
                        </div>
                      </div>

                      <div className="space-y-3 bg-[#050505] p-4 border border-white/5 rounded-xl text-left">
                        <div className="flex justify-between text-xs text-white/40">
                          <span>Plano:</span>
                          <span className="text-white font-semibold">Formação Método Pronta - Vitalício</span>
                        </div>
                        <div className="flex justify-between text-xs text-white/40">
                          <span>Modalidade:</span>
                          <span className="text-white font-semibold">
                            {paymentOption === "installments" ? "Parcelado 12x" : "À Vista com Desconto"}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-white pt-2 border-t border-white/10 font-bold">
                          <span>Total Geral:</span>
                          <span className="text-[#c5a059]">
                            {paymentOption === "installments" ? "12x R$ 35,89" : "R$ 347,00 à vista"}
                          </span>
                        </div>
                      </div>

                      {selectedPaymentMethod === "credit" && (
                        <div className="grid grid-cols-2 gap-2">
                          <input 
                            type="text" 
                            placeholder="Nome no Cartão" 
                            defaultValue="RAFAEL S SILVA"
                            className="col-span-2 w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                          />
                          <input 
                            type="text" 
                            placeholder="Número do Cartão" 
                            defaultValue="4444 5555 6666 7777"
                            className="col-span-2 w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                          />
                          <input 
                            type="text" 
                            placeholder="Validade (MM/AA)" 
                            defaultValue="12/30"
                            className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                          />
                          <input 
                            type="text" 
                            placeholder="CVC/Código" 
                            defaultValue="123"
                            className="w-full bg-[#050505] border border-white/10 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                          />
                        </div>
                      )}

                      {selectedPaymentMethod === "pix" && (
                        <div className="text-center p-3 bg-[#c5a059]/5 border border-[#c5a059]/20 rounded-xl">
                          <p className="text-xs text-white/70">Chave Pix Cópia e Cola gerada para o teste. Pague para liberação instantânea de acesso.</p>
                          <div className="mt-2 text-[10px] font-mono select-all bg-black p-2 border border-white/10 text-[#c5a059] rounded-xl cursor-pointer">
                            00020126580014BR.GOV.BCB.PIX0136metodoprontatest05230303347...
                          </div>
                        </div>
                      )}

                      {selectedPaymentMethod === "boleto" && (
                        <div className="text-center p-3 bg-white/5 border border-white/10 rounded-xl">
                          <p className="text-xs text-white/50">Boleto com vencimento para 48 horas. Acesso liberado no próximo dia útil após pagamento.</p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button 
                          onClick={() => setCheckoutStep(1)}
                          className="border border-white/20 text-white rounded-xl font-bold py-3 px-4 text-xs tracking-wider uppercase hover:bg-white/15"
                        >
                          Voltar
                        </button>
                        <button 
                          onClick={() => {
                            setCheckoutSuccess(true);
                          }}
                          className="flex-1 bg-[#c5a059] text-black font-bold py-3 px-4 text-xs tracking-widest uppercase rounded-xl hover:bg-white transition-all shadow-lg"
                        >
                          FINALIZAR INSCRIÇÃO TESTE
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* END: Checkout Modal */}

      {/* BEGIN: Absolute Float Sticky WhatsApp simulated assistant widget */}
      <div className="fixed bottom-6 right-6 z-40" id="whatsapp-widget">
        <div className="relative">
          <button 
            onClick={() => setWsWidgetOpen(!wsWidgetOpen)}
            className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-500 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
            aria-label="whatsapp support"
          >
            <span className="flex h-3 w-3 absolute -top-1 -right-1 z-30">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <MessageCircle className="h-7 w-7" />
          </button>
          
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111] text-white px-3 py-1.5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
            Dúvidas? Fale Conosco
          </div>
        </div>

        {/* WhatsApp Interaction Box */}
        <AnimatePresence>
          {wsWidgetOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="absolute bottom-18 right-0 w-80 sm:w-96 bg-[#111] border border-green-500/50 shadow-2xl overflow-hidden rounded-3xl"
            >
              <div className="bg-gradient-to-r from-green-650 to-green-600 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-white/10 relative rounded-full overflow-hidden bg-black shrink-0">
                    <img 
                      src={MENTOR_IMAGE} 
                      className="w-full h-full object-cover grayscale" 
                      alt="Rafaella Support Avatar" 
                    />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">Rafaella Ludicsa</h4>
                    <p className="text-[9px] text-green-100 flex items-center gap-1 font-mono uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse"></span>
                      Suporte Online
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setWsWidgetOpen(false)}
                  className="text-white/75 hover:text-white p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Message Window list */}
              <div className="p-4 h-64 overflow-y-auto bg-[#050505] space-y-3 font-sans text-xs flex flex-col">
                {wsChatHistory.map((chat, index) => (
                  <div 
                    key={index}
                    className={`max-w-[80%] p-3 rounded-2xl leading-relaxed ${
                      chat.sender === "mentor" 
                        ? "bg-white/5 text-white/90 border border-white/5 self-start" 
                        : "bg-green-600/10 text-white border border-green-500/20 self-end text-right"
                    }`}
                  >
                    {chat.text}
                  </div>
                ))}
              </div>

              {/* Enter message field */}
              <form onSubmit={handleSendMessage} className="p-3 bg-[#111] border-t border-white/5 flex gap-2">
                <input 
                  type="text" 
                  value={wsMessage}
                  onChange={(e) => setWsMessage(e.target.value)}
                  placeholder="Escreva sua dúvida aqui..."
                  className="bg-[#050505] border border-white/10 flex-1 p-2 rounded-xl text-xs text-white focus:outline-none focus:border-green-500"
                />
                <button 
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white p-2.5 flex items-center justify-center transition-colors rounded-xl cursor-pointer"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* END: Simulated WhatsApp Support */}
      
    </div>
  );
}
