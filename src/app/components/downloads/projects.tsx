import Link from "next/link";

type ReleaseAsset = {
  name: string;
  url: string;
  size: string;
};

type SoftwareEntry = {
  slug: string;
  title: string;
  category: "Aplicativos" | "Biblioteca" | "Sistemas";
  description: string;
  repoUrl: string;
  repoLabel: string;
  releaseName: string;
  releaseTag: string;
  publishedAt: string;
  highlights: string[];
  assets: ReleaseAsset[];
};

type LegacyEntry = {
  title: string;
  description: string;
  downloadUrl: string;
  kind: string;
};

type PdfEntry = {
  title: string;
  description: string;
  file: string;
};

const fallbackSoftware: SoftwareEntry[] = [
  {
    slug: "painel-pro",
    title: "Painel Pro",
    category: "Aplicativos",
    description:
      "Aplicativo desktop para telemetria de jogos, envio serial para painéis e motion, além de exposição de dados por HTTP e UDP.",
    repoUrl: "https://github.com/DIY-Steering-Wheel/DSW-painel-pro-OFC",
    repoLabel: "DIY-Steering-Wheel/DSW-painel-pro-OFC",
    releaseName: "nova versão V9",
    releaseTag: "9",
    publishedAt: "2026-07-12T19:36:39Z",
    highlights: [
      "Compatibilidade ampliada com novos jogos, incluindo Forza, Dirt Rally e Farming Simulator.",
      "Melhorias no envio serial para painéis, motion e até quatro dispositivos adicionais.",
      "Novo sistema de manipulação de variáveis com limites, mesclas e ajustes por jogo.",
    ],
    assets: [
      {
        name: "DSW_Painel_Pro_Setup.exe",
        url: "https://github.com/DIY-Steering-Wheel/DSW-painel-pro-OFC/releases/download/9/DSW_Painel_Pro_Setup.exe",
        size: "22,2 MB",
      },
    ],
  },
  {
    slug: "wheel-hub",
    title: "Wheel Hub",
    category: "Aplicativos",
    description:
      "Central de configuração e manutenção para bases e volantes do ecossistema DSW Wheel, com perfis, firmware e utilitários integrados.",
    repoUrl: "https://github.com/DIY-Steering-Wheel/DSW-wheel-hub",
    repoLabel: "DIY-Steering-Wheel/DSW-wheel-hub",
    releaseName: "nova versão V2",
    releaseTag: "2",
    publishedAt: "2026-07-04T13:15:08Z",
    highlights: [
      "Animação de volante para facilitar a visualização.",
      "Melhorias na fluidez, nos perfis e no sistema de injeção de firmware.",
      "Novas verificações em pedais e câmbio.",
    ],
    assets: [
      {
        name: "DSW-Wheel-Hub-Setup.exe",
        url: "https://github.com/DIY-Steering-Wheel/DSW-wheel-hub/releases/download/2/DSW-Wheel-Hub-Setup.exe",
        size: "43,7 MB",
      },
    ],
  },
];

const legacySoftware: LegacyEntry[] = [
  {
    title: "DSW Button Box Pro",
    description:
      "Projeto legado para button box com Arduino Leonardo e múltiplos analógicos.",
    downloadUrl:
      "https://drive.usercontent.google.com/download?id=19LYOJu8YpEkC1aB4EFmfJIRspdoxR6GX&export=download&authuser=0",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW",
    description:
      "Versão antiga para desenvolvimento de volantes caseiros com Arduino Leonardo.",
    downloadUrl:
      "https://drive.google.com/file/d/1YXFUSyRE2AWyxrU9cIi9hvI1CEAW8DYR/view?usp=sharing",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW Lite",
    description:
      "Versão anterior simplificada do software DSW para setups mais básicos.",
    downloadUrl:
      "https://www.mediafire.com/file/liphk6nk52j5zv0/DSW_lite_V5.zip/file",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW Button Box",
    description: "Ferramenta antiga para criação de button box com Arduino Leonardo.",
    downloadUrl:
      "https://www.mediafire.com/file/gvf8hbtkxcdls28/Button_box.zip/file",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW Hex to Arduino",
    description: "Utilitário legado para enviar arquivos `.hex` para placas Arduino.",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1FM6WTYsfnZAgtsX0peS9I7DZ-0QMbzWv",
    kind: "Utilitário legado",
  },
  {
    title: "EMC Lite",
    description: "Arquivos antigos relacionados ao EMC Lite.",
    downloadUrl:
      "https://drive.google.com/drive/folders/1_bqvdywVJx2uescXi4YgN1H_9-k0qUPQ",
    kind: "Sistema legado",
  },
  {
    title: "Fedit",
    description: "Ferramenta auxiliar mantida apenas para compatibilidade com setups antigos.",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1lfnVPUbXxLOgoSSfZWfEtef8UX4uZrBu",
    kind: "Utilitário legado",
  },
  {
    title: "Wheel Check",
    description: "Utilitário antigo para testes e calibração de força no volante.",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=11N7InqSofK3GbgqR1T1nZJ99MwxX9yit",
    kind: "Utilitário legado",
  },
  {
    title: "DFU STM32 Uploader + Zadig Driver",
    description:
      "Pacote antigo para gravação e preparação de dispositivos STM32.",
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1cLnIvUBaWs4XC-Uh8bom_lHw6QDuox2c",
    kind: "Sistema legado",
  },
  {
    title: "DIView",
    description: "Leitor legado para inspeção de eixos e botões em controladores.",
    downloadUrl:
      "https://drive.google.com/file/d/1pI5-aUEYOS0FNJ9ZHuAyVqFT8vWK4TdG/view?usp=sharing",
    kind: "Utilitário legado",
  },
  {
    title: "DX Tweak 2",
    description: "Ferramenta clássica para ajuste fino de dispositivos DirectInput.",
    downloadUrl:
      "https://drive.google.com/file/d/1NliW-I78wInlkKsnmFG_7_RDtJoQxj1H/view?usp=sharing",
    kind: "Utilitário legado",
  },
];

const pdfEntries: PdfEntry[] = [
  {
    title: "Esquema de ligação do drive BTS 7960",
    description: "Ligação do driver BTS 7960 com EMC Lite, DSW Lite e DSW Wheel.",
    file: "/Esquema%20de%20liga%C3%A7%C3%A3o%20do%20drive%20bts%207960%20emc-lite%20,%20DSW%20lite%20e%20DSW%20Wheel.pdf",
  },
  {
    title: "Porta USB caída no Arduino",
    description: "Solução possível para recuperar placas com a porta USB danificada.",
    file: "/Porta%20USB%20ca%C3%ADda%20no%20%20ardu%C3%ADno.pdf",
  },
  {
    title: "Esquema chave de luz Volkswagen",
    description: "Material de apoio citado nos vídeos e montagens.",
    file: "/chave_luz_vw.pdf",
  },
  {
    title: "Qual STM escolher",
    description: "Guia rápido com o posicionamento da DSW para escolher STM32.",
    file: "/Qual%20STM%20escolher%20%20%281%29.pdf",
  },
  {
    title: "Como utilizar XLoader",
    description: "Passo a passo para usar XLoader e resolver travamentos no Arduino.",
    file: "/Como%20utilizar%20x%20loader%20e%20como%20resolver%20travamento%20do%20ardu%C3%ADno.pdf",
  },
  {
    title: "Especificações dos motores RS",
    description: "Parâmetros superficiais de motores RS 555, 775, 895 e 997.",
    file: "/895%20low%20speed.pdf",
  },
  {
    title: "Como fazer um volante com encoder e FFB",
    description: "Guia introdutório para montar um volante com ou sem force feedback.",
    file: "/Como%20fazer%20um%20volante%20com%20Encoder%20e%20ffb%20ou%20sem.pdf",
  },
  {
    title: "Sensor hall analógico",
    description: "Artigo sobre ligação elétrica, montagem e uso de sensores hall.",
    file: "/Sensor%20hall%20Anal%C3%B3gico.pdf",
  },
];

const githubRepos = [
  {
    slug: "painel-pro",
    repo: "DIY-Steering-Wheel/DSW-painel-pro-OFC",
  },
  {
    slug: "wheel-hub",
    repo: "DIY-Steering-Wheel/DSW-wheel-hub",
  },
] as const;

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(isoDate));
}

function formatBytes(size: number) {
  const megabytes = size / (1024 * 1024);
  return `${megabytes.toFixed(1).replace(".", ",")} MB`;
}

async function fetchLatestSoftware() {
  const releases = await Promise.all(
    githubRepos.map(async ({ slug, repo }) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repo}/releases/latest`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
            next: {
              revalidate: 3600,
            },
          },
        );

        if (!response.ok) {
          return null;
        }

        const release = await response.json();
        const fallback = fallbackSoftware.find((item) => item.slug === slug);

        if (!fallback) {
          return null;
        }

        return {
          ...fallback,
          releaseName: release.name || fallback.releaseName,
          releaseTag: release.tag_name || fallback.releaseTag,
          publishedAt: release.published_at || fallback.publishedAt,
          assets:
            Array.isArray(release.assets) && release.assets.length > 0
              ? release.assets.map((asset: { name: string; browser_download_url: string; size: number }) => ({
                  name: asset.name,
                  url: asset.browser_download_url,
                  size: formatBytes(asset.size),
                }))
              : fallback.assets,
        } satisfies SoftwareEntry;
      } catch {
        return null;
      }
    }),
  );

  return fallbackSoftware.map(
    (fallback) =>
      releases.find((release) => release?.slug === fallback.slug) ?? fallback,
  );
}

const categoryIntro: Record<SoftwareEntry["category"] | "Arquivos PDF", string> = {
  Aplicativos:
    "Os programas principais da DSW ficam concentrados aqui, sempre apontando para a release pública mais recente.",
  Biblioteca:
    "Espaço reservado para bibliotecas e pacotes auxiliares que forem publicados oficialmente.",
  Sistemas:
    "Aqui vão entrar sistemas, firmwares e ferramentas de base quando eles estiverem prontos para distribuição pública.",
  "Arquivos PDF":
    "Todo o material que antes estava em Aprendiz agora fica junto de Downloads para centralizar o acesso.",
};

function EmptyCategory({ title }: { title: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white/70">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 leading-7">
        Ainda não existe item público destacado nesta categoria. Quando um novo
        pacote oficial entrar no ar, ele aparece aqui.
      </p>
    </div>
  );
}

export const ProjectsDownloads = async () => {
  const software = await fetchLatestSoftware();
  const categories: SoftwareEntry["category"][] = [
    "Aplicativos",
    "Biblioteca",
    "Sistemas",
  ];

  return (
    <div className="min-h-screen bg-[--background] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-12 lg:px-8 lg:py-16">
        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-8 lg:p-12">
          <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80">
            Central de downloads DSW
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight lg:text-6xl">
            Tudo em Downloads, com foco no que importa agora.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Removemos a separação antiga e deixamos visível só o que faz sentido
            destacar hoje: os programas principais da DSW, os arquivos PDF e os
            itens legados escondidos em uma área separada.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            <span className="rounded-full border border-white/10 px-4 py-2">
              Releases verificadas em 13/07/2026
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Atualização automática do GitHub quando disponível
            </span>
          </div>
        </section>

        {categories.map((category) => {
          const items = software.filter((entry) => entry.category === category);

          return (
            <section key={category} id={category.toLowerCase()}>
              <div className="mb-8 flex flex-col gap-3">
                <h2 className="text-3xl font-bold lg:text-4xl">{category}</h2>
                <p className="max-w-3xl text-base leading-7 text-white/70">
                  {categoryIntro[category]}
                </p>
              </div>

              {items.length === 0 ? (
                <EmptyCategory title={category} />
              ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {items.map((item) => (
                    <article
                      key={item.slug}
                      className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                            {item.category}
                          </span>
                          <h3 className="mt-4 text-2xl font-bold lg:text-3xl">
                            {item.title}
                          </h3>
                        </div>
                        <div className="rounded-2xl border border-white/10 px-4 py-3 text-right">
                          <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                            Última release
                          </p>
                          <p className="mt-1 text-lg font-semibold">
                            {item.releaseName}
                          </p>
                          <p className="text-sm text-white/60">
                            v{item.releaseTag} • {formatDate(item.publishedAt)}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-base leading-7 text-white/75">
                        {item.description}
                      </p>

                      <div className="mt-6 grid gap-3">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white/80"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href={item.repoUrl}
                          target="_blank"
                          className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white hover:text-black"
                        >
                          Ver
                        </Link>
                        <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-3 text-sm text-white/60">
                          {item.repoLabel}
                        </span>
                      </div>

                      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                        <h4 className="text-lg font-semibold">
                          Arquivos da última release
                        </h4>
                        <div className="mt-4 grid gap-3">
                          {item.assets.map((asset: ReleaseAsset) => (
                            <div
                              key={asset.url}
                              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:flex-row lg:items-center lg:justify-between"
                            >
                              <div>
                                <p className="font-medium">{asset.name}</p>
                                <p className="text-sm text-white/55">
                                  {asset.size}
                                </p>
                              </div>
                              <Link
                                href={asset.url}
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:opacity-85"
                              >
                                Baixar
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        <section id="arquivos-pdf">
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-3xl font-bold lg:text-4xl">Arquivos PDF</h2>
            <p className="max-w-3xl text-base leading-7 text-white/70">
              {categoryIntro["Arquivos PDF"]}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {pdfEntries.map((entry) => (
              <article
                key={entry.file}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-bold">{entry.title}</h3>
                <p className="mt-3 leading-7 text-white/70">{entry.description}</p>
                <div className="mt-6">
                  <Link
                    href={entry.file}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white hover:text-black"
                  >
                    Ver
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <details className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <summary className="cursor-pointer list-none text-xl font-semibold">
              Exibir Programas Descontinuados
            </summary>
            <p className="mt-4 max-w-3xl leading-7 text-white/65">
              Esses itens continuam acessíveis para compatibilidade com projetos
              antigos, mas não são mais o foco principal da vitrine.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {legacySoftware.map((entry) => (
                <article
                  key={entry.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{entry.title}</h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/50">
                      {entry.kind}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-white/70">{entry.description}</p>
                  <div className="mt-5">
                    <Link
                      href={entry.downloadUrl}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 font-medium text-white transition hover:bg-white hover:text-black"
                    >
                      Ver arquivo legado
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </details>
        </section>
      </div>
    </div>
  );
};
