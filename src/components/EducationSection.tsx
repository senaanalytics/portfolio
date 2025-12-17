import { GraduationCap } from "lucide-react";

const educations = [
  {
    title: "Ciência da Computação",
    status: "Cursando"
  },
  {
    title: "Ensino Técnico em Informática",
    status: "Concluído"
  }
];

const EducationSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Formações
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {educations.map((education, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 flex items-center gap-4 hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {education.title}
                </h3>
                <span className="text-sm text-accent">
                  {education.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
