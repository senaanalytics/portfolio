const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Sobre mim
          </h2>
        </div>
        
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Seja muito bem-vindo(a) ao meu portfólio. Conheça a minha trajetória:
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 text-center">
              <span className="text-6xl md:text-7xl font-bold text-accent">4+</span>
              <p className="text-muted-foreground mt-2">Anos de<br />experiência</p>
            </div>
            
            <div className="flex-1">
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                Anos de experiência profissional em Análise de Dados, com foco em transformar dados brutos em insights estratégicos. 
                Atuo na criação de dashboards interativos no Power BI, automatização de processos e desenvolvimento de pipelines ETL. 
                Meu objetivo é ajudar empresas a tomar decisões mais inteligentes baseadas em dados confiáveis e visualizações claras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
