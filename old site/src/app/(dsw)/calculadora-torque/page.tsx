import { ContentCalculadoraTorque } from "@/app/components/calculadora-torque/content-calculadora";
import Footer from "@/app/components/ui/footer";

export default function CalculadoraTorque() {
  return (
    <div className="h-screen w-screen bg-[--background]">
      <ContentCalculadoraTorque />
      <Footer />
    </div>
  );
}
