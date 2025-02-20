import React, { useState } from 'react';
import { Brain, Users, TrendingDown, Rocket, Target, Database, UserCheck, Clock, BarChart as ChartBar, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header 
        className="relative text-white" 
        style={{ 
          backgroundImage: 'url("background0.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex justify-center mb-12">
            <img 
              src="_11989206-png0.png" 
              alt="Indeks Logo" 
              className="h-16 md:h-20"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                SIMPLIFIQUE SUAS CONTRATAÇÕES
              </h1>
              <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold">
                Contrate com inteligência. Retenha com sucesso.
              </p>
              <div className="mt-10">
                <a 
                  href="https://indeks.task.com.br/empresa/login.php?hdChave=INDEKSRPA900004@200923" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
                >
                  Conhecer Agora
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white"
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Video Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <video 
              className="w-full rounded-xl shadow-2xl"
              controls
              autoPlay
              muted
              loop
            >
              <source src="video_seção_2.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Benefícios do Recrutamento Inteligente INDEKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<TrendingDown className="w-12 h-12 text-blue-600" />}
              title="Redução do Custo"
              description="Reduza custos de contratação que podem chegar a R$10.000 por vaga no Brasil."
            />
            <BenefitCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="Engajamento Imediato"
              description="Determine o perfil comportamental exato para as necessidades da sua empresa."
            />
            <BenefitCard
              icon={<Target className="w-12 h-12 text-blue-600" />}
              title="Prevenção de Turnover"
              description="Evite custos de demissão e impactos na produtividade da equipe."
            />
            <BenefitCard
              icon={<Rocket className="w-12 h-12 text-blue-600" />}
              title="Contratação Rápida"
              description="Reduza o tempo médio de 42 dias para preencher uma vaga."
            />
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/image-background0.png" 
                alt="RPA Analysis" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">E por isso que o RPA analisa graficamente:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Perfil comportamental
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Percepção do ambiente atual
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Padrão comportamental atual
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Nivel de energia
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Fontes de estresse
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Funcionalidades Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-blue-600" />}
              title="Inteligência Artificial Precisa"
              description="Ordenação automática de candidatos pelo RPA da INDEKS, encontrando as melhores compatibilidades."
            />
            <FeatureCard
              icon={<UserCheck className="w-10 h-10 text-blue-600" />}
              title="Definição de Cargo"
              description="Define a vaga de acordo com as exigências específicas do cargo e momento da empresa."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-blue-600" />}
              title="Seleção Rápida"
              description="Descubra em tempo recorde os perfis que melhor se enquadram às suas necessidades."
            />
            <FeatureCard
              icon={<ChartBar className="w-10 h-10 text-blue-600" />}
              title="Equipe Engajada"
              description="Garanta que a pessoa certa esteja no cargo certo, acelerando o engajamento da equipe."
            />
            <FeatureCard
              icon={<Database className="w-10 h-10 text-blue-600" />}
              title="Banco de Dados Poderoso"
              description="Mantenha um banco de candidatos pré-selecionados para reduzir custos de contratação."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-blue-600" />}
              title="Gestão de Talentos"
              description="Avalie perfis de colaboradores para mudanças de cargo e função com assertividade."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Transforme Seu Processo de Contratação
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Descubra como a INDEKS pode otimizar seu processo de recrutamento e seleção com tecnologia avançada.
          </p>
          <a 
            href="https://indeks.task.com.br/empresa/login.php?hdChave=INDEKSRPA900004@200923" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Conhecer Agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://api.whatsapp.com/send?phone=31993131001&text=Olá. Estou entrando em contato para conhecer a ATS INDEKS. Como essa plataforma pode melhorar meu processo de recrutamento e seleção?" 
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 transition-opacity"
        >
          <img src="whatsapp.gif" alt="WhatsApp" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;