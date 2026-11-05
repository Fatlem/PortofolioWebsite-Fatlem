import { Github, Linkedin, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { socials } from "../data/site";

export const socialIcons: Record<string, LucideIcon> = { 
  GitHub: Github, 
  LinkedIn: Linkedin, 
  Email: Mail, 
  WhatsApp: MessageCircle 
};

export const isExternal = (href: string) => href.startsWith("http");

export function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {socials.map(({ name, href }) => {
        const Icon = socialIcons[name];
        if (!Icon) return null;

        return (
          <a 
            key={name} 
            href={href} 
            aria-label={name} 
            {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-gray-600 transition hover:bg-white hover:text-ink active:scale-95"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}