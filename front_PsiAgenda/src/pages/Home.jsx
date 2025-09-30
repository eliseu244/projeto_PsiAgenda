// Importações necessárias
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import { motion } from 'framer-motion'; // Para animações suaves
import { Shield, Zap, Users, Calendar, Activity, FileText } from 'lucide-react'; // Ícones vetoriais
import { Button } from '../components/Button'; // Botão customizado do projeto

// Página inicial (Home)
export const Home = () => {
  // Lista de recursos/funcionalidades que serão exibidos na seção de "features"
  const features = [
    {
      icon: Calendar,
      title: 'Agenda Dinâmica',
      description: 'Visualização de horários disponíveis com marcação automática e lembretes por e-mail'
    },
    {
      icon: Shield,
      title: 'Privacidade Garantida',
      description: 'Autenticação segura via JWT e proteção total dos dados sensíveis dos pacientes'
    },
    {
      icon: Activity,
      title: 'Análise Inteligente',
      description: 'Machine Learning para identificar padrões emocionais e agrupar perfis de risco'
    },
    {
      icon: Users,
      title: 'Impacto Social',
      description: 'Voltado para projetos voluntários, universidades e ONGs que oferecem apoio psicológico'
    },
    {
      icon: FileText,
      title: 'Histórico Estruturado',
      description: 'Registro organizado de sessões com temas, recomendações e evolução do paciente'
    },
    {
      icon: Zap,
      title: 'Interface Acolhedora',
      description: 'Design responsivo e acessível, pensado para conforto emocional dos usuários'
    }
  ];

  return (
    <div className='bg-[#b1e7de]'>
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center text-center py-20">
        <div>
          {/* Animação de entrada do framer-motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Início invisível + deslocado
            animate={{ opacity: 1, y: 0 }}   // Anima até visível + posição normal
            transition={{ duration: 0.8 }}
          >
            {/* Logo centralizada */}
            <div className="w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-8  overflow-hidden ">
              <img src="/logo2.svg" alt="Lunysse" className="w-full h-full object-cover" />
            </div>
            
            {/* Nome do sistema */}
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
              PsiAgenda
            </h1>
            
            {/* Subtítulo */}
            <h3 className="text- md:text-3xl font-medium text-dark mb-6">
            Sistema de agendamento PsiAgenda
            </h3>
            
            {/* Descrição principal */}
            <p className=" p-10 m-10 text-xl text-dark mb-8 max-w-3xl mx-auto leading-relaxed">
            O PsiAgenda é uma plataforma que une tecnologia e responsabilidade social para transformar a forma como atendimentos psicológicos voluntários são organizados em universidades, ONGs e projetos sociais.
Desenvolvido especialmente para instituições que oferecem apoio psicológico gratuito, o sistema traz praticidade e segurança para profissionais e gestores da área.

            </p>
            
           
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};
