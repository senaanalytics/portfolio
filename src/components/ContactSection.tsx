import { Globe, Mail, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: Globe,
    label: "Site",
    value: "senaanalytics.github.io/portfolio",
    link: "https://www.senaanalytics.github.io/portfolio"
  },
  {
    icon: Mail,
    label: "Email",
    value: "isaquesenadasilva1@gmail.com",
    link: "mailto:isaquesenadasilva1@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Isaque Sena",
    link: "https://www.linkedin.com/in/isaque-sena-794b89233/"
  }
];

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-accent rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Entre em contato comigo
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 hover-lift group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-sm font-medium text-muted-foreground mb-1">
                {contact.label}
              </h3>
              
              <p className="text-foreground font-medium text-sm break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Isaque Sena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
