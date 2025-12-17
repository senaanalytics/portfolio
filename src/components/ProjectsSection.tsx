import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import dashboardLogistica from "@/assets/dashboard-logistica.png";
import dashboardMarketing from "@/assets/dashboard-marketing.png";
import dashboardEstoque from "@/assets/dashboard-estoque.png";
import dashboardFinanceiro from "@/assets/dashboard-financeiro.png";
import dashboardCompras from "@/assets/dashboard-compras.png";
import dashboardProjetos from "@/assets/dashboard-projetos.png";

const projects = [
  {
    title: "Dashboard Logística",
    description: "Análise completa de operações logísticas com indicadores de performance de entregas, gestão de rotas e otimização de custos de transporte.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOGZkMDIwMjctMWRmMi00NjlkLTlkYWQtOTUxODFjZmZjMjUxIiwidCI6IjlhMGM3NmM4LTUyNDYtNDM1Yi05OGRmLTUxMGU0Y2RhYWEzZCJ9",
    image: dashboardLogistica
  },
  {
    title: "Dashboard Marketing",
    description: "Métricas de campanhas, análise de ROI, funil de conversão e acompanhamento de performance em canais digitais.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMmRjOWE0YzctMTBlYy00NTQzLWFjOTQtOGNlNTkwMWY2YWQyIiwidCI6IjlhMGM3NmM4LTUyNDYtNDM1Yi05OGRmLTUxMGU0Y2RhYWEzZCJ9",
    image: dashboardMarketing
  },
  {
    title: "Dashboard Estoque",
    description: "Controle de inventário em tempo real, alertas de reposição, análise de giro de produtos e gestão de demanda.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiOGVlY2NmYzktNmZiYi00YmQyLWJiNWUtNTY2NjBiNDhlOTQ3IiwidCI6IjlhMGM3NmM4LTUyNDYtNDM1Yi05OGRmLTUxMGU0Y2RhYWEzZCJ9",
    image: dashboardEstoque
  },
  {
    title: "Dashboard Financeiro",
    description: "Visão consolidada de receitas, despesas, fluxo de caixa e indicadores financeiros para gestão estratégica.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNzBhNTk4YTItMDk0Yi00ZjMxLWI2NzktOTlmZWFmN2VjNTc4IiwidCI6IjlhMGM3NmM4LTUyNDYtNDM1Yi05OGRmLTUxMGU0Y2RhYWEzZCJ9",
    image: dashboardFinanceiro
  },
  {
    title: "Dashboard Compras",
    description: "Análise de fornecedores, gestão de pedidos, controle de custos e otimização do processo de aquisição.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDMxYjdjNGMtNDA2ZC00MDU5LWI5ZmMtOGVjYmY5N2FmMzZlIiwidCI6IjlhMGM3NmM4LTUyNDYtNDM1Yi05OGRmLTUxMGU0Y2RhYWEzZCJ9",
    image: dashboardCompras
  },
  {
    title: "Dashboard Projetos",
    description: "Acompanhamento de cronogramas, alocação de recursos, status de entregas e análise de produtividade da equipe.",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMjMxOTYzMzMtN2I3NS00MjE1LWFkNDItNmUxMDkwMTc4ZjEzIiwidCI6IjlhMGM3NmM4LTUyNDYtNDM1Yi05OGRmLTUxMGU0Y2RhYWEzZCJ9",
    image: dashboardProjetos
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore alguns projetos que já desenvolvi
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl overflow-hidden hover-lift group"
            >
              {/* Dashboard Image */}
              <div className="h-48 overflow-hidden border-b border-border">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 uppercase tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver detalhes
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
