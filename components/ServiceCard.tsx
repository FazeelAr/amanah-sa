import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index?: number;
  priority?: boolean;
  image?: string;
}

export default function ServiceCard({ title, description, icon, image, priority = false }: ServiceCardProps) {
  return (
    <Link href="/contact" className="block h-full group">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full cursor-pointer">
        <div className="relative h-44 md:h-48 overflow-hidden">
          <Image
            src={image || "/aim_service_visa.jpg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority={priority}
            loading={priority ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md w-11 h-11 md:w-12 h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg border border-white/30 text-white">
            {icon}
          </div>
          <div className="absolute inset-0 flex items-end justify-start p-4 md:p-5">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white">AMANAH</span>
          </div>
        </div>
        
        <div className="p-5 md:p-6 flex-grow flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/70 group-hover:text-accent transition-colors">
              Amanah Guidance
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
               <span className="text-lg">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
