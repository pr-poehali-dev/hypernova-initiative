import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTAForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-primary mb-2">Спасибо за обращение!</p>
        <p className="text-muted-foreground">
          Наш специалист свяжется с вами в течение 30 минут.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <Input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
      />
      <Input
        type="tel"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
      />
      <Button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium tracking-wider uppercase text-sm px-8 py-3 transition-all duration-300"
      >
        Получить консультацию
      </Button>
    </form>
  );
}
