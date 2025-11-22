import { Button } from "@/components/ui/button";
import { ChevronDown, Lightbulb, Phone, MapPin, Users, Zap, Home as HomeIcon, Lock, Globe, Gift, Leaf, Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { APP_LOGO } from "@/const";

const states = [
  { code: "AC", name: "Acre", savings: "8%", activation: "120-180" },
  { code: "AL", name: "Alagoas", savings: "9%", activation: "90-150" },
  { code: "AP", name: "Amapá", savings: "7%", activation: "120-180" },
  { code: "AM", name: "Amazonas", savings: "6%", activation: "150-180" },
  { code: "BA", name: "Bahia", savings: "10%", activation: "90-150" },
  { code: "CE", name: "Ceará", savings: "11%", activation: "90-120" },
  { code: "DF", name: "Distrito Federal", savings: "10%", activation: "90-150" },
  { code: "ES", name: "Espírito Santo", savings: "9%", activation: "90-150" },
  { code: "GO", name: "Goiás", savings: "10%", activation: "90-120" },
  { code: "MA", name: "Maranhão", savings: "8%", activation: "120-180" },
  { code: "MT", name: "Mato Grosso", savings: "9%", activation: "90-150" },
  { code: "MS", name: "Mato Grosso do Sul", savings: "9%", activation: "90-150" },
  { code: "MG", name: "Minas Gerais", savings: "10%", activation: "90-150" },
  { code: "PA", name: "Pará", savings: "7%", activation: "120-180" },
  { code: "PB", name: "Paraíba", savings: "10%", activation: "90-150" },
  { code: "PR", name: "Paraná", savings: "10%", activation: "90-150" },
  { code: "PE", name: "Pernambuco", savings: "10%", activation: "90-150" },
  { code: "PI", name: "Piauí", savings: "9%", activation: "90-150" },
  { code: "RJ", name: "Rio de Janeiro", savings: "10%", activation: "90-150" },
  { code: "RN", name: "Rio Grande do Norte", savings: "11%", activation: "90-120" },
  { code: "RS", name: "Rio Grande do Sul", savings: "9%", activation: "90-150" },
  { code: "RO", name: "Rondônia", savings: "8%", activation: "120-180" },
  { code: "RR", name: "Roraima", savings: "7%", activation: "120-180" },
  { code: "SC", name: "Santa Catarina", savings: "9%", activation: "90-150" },
  { code: "SP", name: "São Paulo", savings: "10%", activation: "90-180" },
  { code: "SE", name: "Sergipe", savings: "9%", activation: "90-150" },
  { code: "TO", name: "Tocantins", savings: "8%", activation: "120-180" },
];

const testimonials = [
  {
    quote: "Eu achava que era bom demais pra ser verdade. Mas é real. Pago menos e ainda ganhei desconto na farmácia!",
    name: "Marta Silva",
    location: "Goiânia/GO"
  },
  {
    quote: "Comecei só pra testar. Hoje economizo mais de R$ 840,00 por ano. A diferença já dá para pagar um jantar legal no fim do mês.",
    name: "Carlos Mendes",
    location: "Belo Horizonte/MG"
  },
  {
    quote: "Não gastei um centavo e a conta de luz caiu. Melhor decisão que tomei. O processo foi super simples e transparente.",
    name: "Letícia Santos",
    location: "São Paulo/SP"
  },
  {
    quote: "Energia limpa e economia garantida. Minha conta reduziu em 10% logo no primeiro mês de adesão.",
    name: "Felipe Rocha",
    location: "Recife/PE"
  },
  {
    quote: "O clube de vantagens é sensacional! Economizo na conta de luz e nas farmácias da minha região.",
    name: "Juliana Costa",
    location: "Florianópolis/SC"
  },
  {
    quote: "Achei que fosse complicado, mas foi muito simples. Hoje pago menos e ajudo o meio ambiente.",
    name: "Rafael Lima",
    location: "Campinas/SP"
  },
  {
    quote: "Me surpreendi com a economia. Já recomendei para minha família inteira!",
    name: "Amanda Freitas",
    location: "Vitória/ES"
  },
];

const faqs = [
  {
    question: "Preciso instalar alguma coisa?",
    answer: "Não! A iGreen Energy oferece energia solar 100% digital, sem necessidade de instalação de placas solares ou obras em sua residência."
  },
  {
    question: "Tem fidelidade ou taxa de cancelamento?",
    answer: "Não há fidelidade. Você pode cancelar quando quiser, sem taxa de cancelamento."
  },
  {
    question: "Quanto custa a adesão?",
    answer: "A adesão é 100% gratuita. Você só paga pela energia que consome."
  },
  {
    question: "Quanto tempo leva para começar a economizar?",
    answer: "O tempo de ativação varia de 90 a 180 dias, dependendo do seu estado."
  },
  {
    question: "E se eu mudar de endereço?",
    answer: "Você pode transferir sua assinatura para o novo endereço sem problemas."
  },
  {
    question: "Como os descontos do Clube iGreen são aplicados?",
    answer: "Os descontos são aplicados automaticamente ao apresentar o documento cadastrado nas farmácias, laboratórios e cinemas parceiros."
  },
];

export default function Home() {
  const [selectedState, setSelectedState] = useState("SP");
  const [billAmount, setBillAmount] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let popupShown = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 10 && !popupShown) {
        setShowExitPopup(true);
        popupShown = true;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Escape" || e.keyCode === 27) && !popupShown) {
        setShowExitPopup(true);
        popupShown = true;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email capturado:", email);
      setShowExitPopup(false);
      setEmail("");
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById("calculadora");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const currentState = states.find(s => s.code === selectedState);
  const estimatedSavings = billAmount ? (parseFloat(billAmount) * 0.1).toFixed(2) : "0";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={APP_LOGO} alt="iGreen Energy" className="h-40 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#como-funciona" className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded">Como Funciona</a>
            <a href="#calculadora" className="text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded">Calculadora</a>
            <a href="#simule" className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded">Simule Economia</a>
            <a href="#licenciados" className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded">Seja Licenciado</a>
            <a href="#duvidas" className="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded">Dúvidas</a>
          </div>
          <a href="https://wa.me/5592981697878?text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20energia!" target="_blank" rel="noopener noreferrer">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contato</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Economize até 20% na Conta de Luz com <span className="text-yellow-300">Energia Solar por Assinatura</span>
          </h1>
          <p className="text-lg mb-8 text-gray-100">
            Sem placas solares, sem obra, sem instalação. 100% digital, sem fidelidade e com acesso ao Clube iGreen com descontos exclusivos em farmácias, laboratórios, cinemas e muito mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToCalculator} className="bg-orange-500 hover:bg-orange-600 text-white text-base px-6 py-3">
              <Lightbulb className="w-5 h-5 mr-2" />
              Calcule Sua Economia
            </Button>
            <a href="https://wa.me/5592981697878?text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20energia!" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-base px-6 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">Até 20%</div>
              <p className="text-gray-700">Economia na conta de luz</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">0 Reais</div>
              <p className="text-gray-700">Sem instalação ou obra</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700">Digital e sem fidelidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Você Consome Energia Limpa. A Gente Cuida De Tudo</h2>
          <p className="text-center text-gray-600 mb-12">Simples, transparente e sem compromissos. Sua jornada para economizar com energia limpa começa com apenas alguns cliques.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-bold mb-2">Você se cadastra</h3>
              <p className="text-sm text-gray-600">Forneça seus dados básicos e informações da sua conta de luz em nosso site seguro.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="font-bold mb-2">Conectamos à usina solar</h3>
              <p className="text-sm text-gray-600">Nossa equipe faz a conexão com uma usina de energia solar mais próxima de você.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-bold mb-2">Receba créditos na fatura</h3>
              <p className="text-sm text-gray-600">Você passa a receber créditos de energia renovável diretamente na sua conta de luz.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2">Economize e ajude o planeta</h3>
              <p className="text-sm text-gray-600">Resultado? Conta reduzida, planeta agradece e você economiza sem esforço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-2">Calculadora de Economia Solar</h2>
          <p className="text-center text-gray-600 mb-8">Descubra quanto você pode economizar com energia solar</p>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Selecione seu estado</label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {states.map(state => (
                    <option key={state.code} value={state.code}>{state.code}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Valor médio da sua conta de luz (R$)</label>
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="Ex: 150"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-3">
                Calcular Economia
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">Importante: Valores estimados baseados em economia média de 10%. Não inclui taxa mínima da distribuidora, impostos e variações regionais. Simulação final será feita por nossos especialistas.</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-6">Veja quanto você pode economizar no seu estado com a iGreen Energy</h3>
            <p className="text-gray-600 mb-6">Selecione seu estado e descubra quanto você pode economizar com energia solar.</p>
            
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Selecione seu estado</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {states.map(state => (
                  <option key={state.code} value={state.code}>{state.code}</option>
                ))}
              </select>
            </div>

            {currentState && (
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-600">Economia média na conta de luz</p>
                  <p className="text-2xl font-bold text-green-600">Até {currentState.savings}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-600">Tempo de ativação</p>
                  <p className="text-2xl font-bold text-green-600">Entre {currentState.activation} dias</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Escolher a iGreen Energy?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Economia garantida</h3>
                <p className="text-gray-600 text-sm">Até 20% na conta de luz todo mês, sem instalação.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <HomeIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Sem instalação</h3>
                <p className="text-gray-600 text-sm">Sem placas solares, sem obra, sem dor de cabeça. 100% digital.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lock className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Sem fidelidade</h3>
                <p className="text-gray-600 text-sm">Cancele quando quiser, sem taxa de cancelamento.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">100% digital</h3>
                <p className="text-gray-600 text-sm">Você assina em minutos, sem sair de casa.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Gift className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Clube iGreen</h3>
                <p className="text-gray-600 text-sm">Descontos em farmácias, laboratórios, cinemas e muito mais.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Leaf className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Sustentável</h3>
                <p className="text-gray-600 text-sm">Energia limpa e renovável para um futuro melhor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Cases de Sucesso e Comprovação</h2>
          <p className="text-center text-gray-600 mb-12">Veja histórias reais de clientes e licenciados que transformaram sua renda com a iGreen Energy</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <video className="w-full h-64 object-cover bg-black" controls>
                <source src="/video-empresario.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className="p-6">
                <h3 className="font-bold mb-2">Depoimento - Empresário</h3>
                <p className="text-sm text-gray-600">Conheça como o empresário transformou seu negócio com a iGreen</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <video className="w-full h-64 object-cover bg-black" controls>
                <source src="/video-caribe.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className="p-6">
                <h3 className="font-bold mb-2">Viagem para o Caribe</h3>
                <p className="text-sm text-gray-600">Viagem dos nossos licenciados para o Caribe contada pelo nosso Sócio Márcio Garcia</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col">
              <video className="w-full h-64 object-cover bg-black" controls>
                <source src="/video-licenciado.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className="p-6">
                <h3 className="font-bold mb-2">Depoimento - Licenciado</h3>
                <p className="text-sm text-gray-600">Veja como nossos licenciados estão ganhando renda recorrente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed Section */}
      <section id="licenciados" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Transforme-se em um Licenciado iGreen</h2>
          <p className="text-center text-gray-600 mb-12">Ganhe comissões recorrentes e vitalícias com cada cliente que você cadastra. Transforme sua renda em um fluxo de ganho passivo que cresce a cada mês.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Ganho Recorrente</h3>
                <p className="text-gray-600 text-sm">Comissões mensais de cada cliente cadastrado, de forma vitalícia</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Sem Investimento</h3>
                <p className="text-gray-600 text-sm">Cadastro 100% gratuito. Comece a ganhar assim que seus clientes forem ativados</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Comunidade de Sucesso</h3>
                <p className="text-gray-600 text-sm">Faça parte de uma rede de licenciados bem-sucedidos em todo Brasil</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Lightbulb className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Suporte Completo</h3>
                <p className="text-gray-600 text-sm">Equipe dedicada para ajudar no seu crescimento e sucesso</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8 border border-green-200 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Comece a Ganhar Hoje!</h3>
            <p className="text-gray-700 mb-6">Não perca mais tempo. Cadastre-se como licenciado agora e comece a construir sua renda recorrente vitalícia.</p>
            <a href="https://wa.me/5592981697878?text=Ol%C3%A1%2C%20quero%20ser%20um%20licenciado%20da%20IGreen%20Energy!" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-base px-8 py-3 w-full">
                <Lightbulb className="w-5 h-5 mr-2" />
                Quero Ser um Licenciado
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="duvidas" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tem dúvidas? A gente responde</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="font-bold text-left">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto Para Economizar na Sua Conta de Luz?</h2>
          <p className="text-gray-700 mb-8">Fale direto com um licenciado iGreen Energy! Atendimento rápido e personalizado, tire todas as suas dúvidas agora mesmo.</p>
          <div className="flex justify-center">
            <a href="https://wa.me/5592981697878?text=Ol%C3%A1%2C%20quero%20economizar%20na%20minha%20conta%20de%20energia!" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-base px-8 py-3">
                <Lightbulb className="w-5 h-5 mr-2" />
                Fale Agora Pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">iGreen Energy</h3>
              <p className="text-sm">Energia solar por assinatura para um futuro sustentável e econômico.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Navegação</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#como-funciona" className="hover:text-white">Como Funciona</a></li>
                <li><a href="#calculadora" className="hover:text-white">Calculadora</a></li>
                <li><a href="#simule" className="hover:text-white">Simule Economia</a></li>
                <li><a href="#licenciados" className="hover:text-white">Seja Licenciado</a></li>
                <li><a href="#duvidas" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Redes Sociais</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 iGreen Energy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Espera! 😊</h2>
              <p className="text-gray-700">
                Ganhe <span className="text-orange-500 font-bold">até 20% de desconto</span> na sua conta de energia. Inscreva-se agora e receba uma simulação gratuita!
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Seu melhor email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
              >
                Quero Meu Desconto! 🎁
              </button>
            </form>

            <button
              onClick={() => setShowExitPopup(false)}
              className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm"
            >
              Não, obrigado
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
