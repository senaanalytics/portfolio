import { BookOpen } from "lucide-react";

const courses = [
  "Python para análise de dados",
  "Power BI do zero ao pro",
  "Estatística para análise de dados",
  "Análise de Dados utilizando SQL",
  "ETL na prática",
  "Introdução ao machine learning com Python",
  "Excel do básico ao avançado",
  "Excel VBA",
  "Versionamento com Git e GitHub"
];

const CoursesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cursos
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-4 flex items-center gap-3 hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {course}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
