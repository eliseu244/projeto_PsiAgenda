// Importações necessárias
import { Link } from 'react-router-dom'; // Usado para navegação entre páginas sem recarregar o site
import { Button } from '../components/Button'; // Importa um botão reutilizável
import { Heart, Target, Award, Users, Brain, Shield, Zap, Calendar, Activity, FileText } from 'lucide-react'; // Biblioteca de ícones SVG

// Componente funcional "About"
export const About = () => {
  // Array que define os valores da empresa/plataforma
  const values = [
   
  ];

  // Array de funcionalidades principais
  const features = [
  
  ];

  // Lista de problemas que a plataforma busca resolver
  const problems = [
    'Falta de controle e organização nos agendamentos',
    'Dificuldade de busca psicólogos dispostos a realizar acompanhamentos voluntários',
    'Impossibilidade de mapear perfis de risco com dados',
    'Ausência de ferramentas de análise e acompanhamento'
  ];

  // Lista de soluções propostas
  const solutions = [
    'Sistema digital centralizado com agendamento automatizado',
    'Registro estruturado e seguro de todas as sessões',
    'Painel administrativo com visão completa da agenda',
    'Machine Learning para agrupamento de perfis comportamentais',
    'Interface responsiva, acessível e emocionalmente confortável'
  ];

  return (
    <div className="py-12 space-y-16 bg-[#b1e7de]"> {/* Container principal com espaçamento entre seções */}

      {/* Seção Hero (introdução com logo e descrição) */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          {/* Logo centralizado */}
          <div className="w-60 h-60  flex items-center justify-center mx-auto mb-8 ">
            <img src="/logo2.svg" alt="Lunysse" className="w-full h-full rounded-xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Sobre o PsiAgenda</h1>
          <div className="bg-dark text-white backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <p className="text-lg  leading-relaxed mb-6">
              Somos uma plataforma que une tecnologia e responsabilidade social para otimizar atendimentos psicológicos voluntários em universidades, ONGs e projetos sociais.            </p>
            <p className="text-base text-dark/60 leading-relaxed">

            </p>
          </div>
        </div>
      </section>

      {/* Seção Missão e Visão */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Missão */}
          <div className="text-center bg-dark text-white backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold  mb-4">Nossa Missão</h2>
            <p className="text-white leading-relaxed mb-4">
              Nosso objetivo é democratizar o acesso a ferramentas tecnológicas avançadas para organizações que trabalham com recursos limitados, mas com grande impacto social.
            </p>
            <p className="text-dark/60 leading-relaxed text-sm">

            </p>
          </div>
          {/* Visão */}
          <div className="text-center bg-dark backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Visão</h2>
            <p className="text-white leading-relaxed mb-4">
              Queremos transformar a forma como projetos sociais gerenciam seus atendimentos, proporcionando mais eficiência, segurança e qualidade no cuidado oferecido.            </p>
            <p className="text-dark/60 leading-relaxed text-sm">

            </p>
          </div>
        </div>
      </section>

      {/* Seção Problemas e Soluções */}
      <section className="">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl font-bold text-dark text-center mb-8">Problemas que Resolvemos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lista de problemas */}
            <div className="text-center bg-dark backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 ">Desafios Identificados</h3>
              <ul className="space-y-3 list-none flex flex-col items-center">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {/* Bolinha decorativa */}
                   
                    <span className="text-white text-sm">{problem}</span>
                  </li>
                ))}
              </ul>

            </div>
            {/* Lista de soluções */}
            <div className=" text-center bg-dark backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Nossas Soluções</h3>
              <ul className="space-y-3 list-none flex flex-col items-center">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {/* Bolinha decorativa */}

                    <span className="text-white text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Funcionalidades */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark text-center mb-8"></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex items-start space-x-4">
                  {/* Ícone com fundo colorido */}
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-light to-accent rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
                    <p className="text-dark/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};
