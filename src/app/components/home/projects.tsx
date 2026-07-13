import { ProjectItemHome } from "./project-item";

export const ProjectsHome = () => {
  return (
    <div className="mb-10 mt-10 flex w-full flex-col items-center justify-center lg:mt-36">
      <h1 className="mb-10 text-center text-3xl font-medium lg:text-4xl">
        Projetos em destaque
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:gap-8">
        <ProjectItemHome
          title="Painel Pro"
          description="Programa completo para extração de telemetria de jogos, envio serial para painéis e motion, além de integração via HTTP e UDP."
          url="/downloads"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="Wheel Hub"
          description="Central de configuração para bases e volantes DSW, com perfis, manutenção, firmware e ferramentas auxiliares."
          url="/downloads"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="Arquivos PDF"
          description="Guias, esquemas e materiais técnicos que antes ficavam separados na aba Aprendiz."
          url="/downloads#arquivos-pdf"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="DSW Gamepad Test"
          description="Teste online para validar volante, pedais e gamepads direto no navegador."
          url="/gamepad-test"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="Calculadora de Torque"
          description="Ferramenta online para estimar torque, energia e relação de polias do seu volante."
          url="/calculadora-torque"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="Programas Legados"
          description="Os softwares antigos continuam acessíveis, mas agora ficam recolhidos dentro da área de downloads."
          url="/downloads"
          status="FINALIZADO"
        />
      </div>
    </div>
  );
};
