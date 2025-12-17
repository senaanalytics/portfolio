import { BarChart3, Layout, Cog, Database } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Visualização & Análise de Dados",
    description: "Transformação de dados complexos em visualizações claras e insights acionáveis para tomada de decisão estratégica."
  },
  {
    icon: Layout,
    title: "Design de Dashboards",
    description: "Criação de dashboards intuitivos e visualmente atraentes no Power BI, focados na experiência do usuário."
  },
  {
    icon: Cog,
    title: "Automações de Processos",
    description: "Desenvolvimento de soluções automatizadas para otimizar fluxos de trabalho e reduzir tarefas manuais repetitivas."
  },
  {
    icon: Database,
    title: "Criação de ETL",
    description: "Construção de pipelines de dados robustos para extração, transformação e carga de informações de múltiplas fontes."
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Principais Habilidades
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
