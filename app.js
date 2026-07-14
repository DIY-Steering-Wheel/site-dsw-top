const fallbackSoftware = [
  {
    slug: "painel-pro",
    title: "Painel Pro",
    category: "Aplicativos",
    description:
      "Aplicativo desktop para telemetria de jogos, envio serial para paineis e motion, alem de exposicao de dados por HTTP e UDP.",
    repoUrl: "https://github.com/DIY-Steering-Wheel/DSW-painel-pro-OFC",
    repoLabel: "DIY-Steering-Wheel/DSW-painel-pro-OFC",
    releaseName: "nova versao V9",
    releaseTag: "9",
    publishedAt: "2026-07-12T19:36:39Z",
    releaseNotes:
      "Compatibilidade ampliada com novos jogos, incluindo Forza, Dirt Rally e Farming Simulator.\n\nMelhorias no envio serial para paineis, motion e ate quatro dispositivos adicionais.\n\nNovo sistema de manipulacao de variaveis com limites, mesclas e ajustes por jogo.",
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
      "Central de configuracao e manutencao para bases e volantes do ecossistema DSW Wheel, com perfis, firmware e utilitarios integrados.",
    repoUrl: "https://github.com/DIY-Steering-Wheel/DSW-wheel-hub",
    repoLabel: "DIY-Steering-Wheel/DSW-wheel-hub",
    releaseName: "nova versao V2",
    releaseTag: "2",
    publishedAt: "2026-07-04T13:15:08Z",
    releaseNotes:
      "Animacao de volante para facilitar a visualizacao.\n\nMelhorias na fluidez, nos perfis e no sistema de injecao de firmware.\n\nNovas verificacoes em pedais e cambio.",
    assets: [
      {
        name: "DSW-Wheel-Hub-Setup.exe",
        url: "https://github.com/DIY-Steering-Wheel/DSW-wheel-hub/releases/download/2/DSW-Wheel-Hub-Setup.exe",
        size: "43,7 MB",
      },
    ],
  },
];

const githubRepos = [
  { slug: "painel-pro", repo: "DIY-Steering-Wheel/DSW-painel-pro-OFC" },
  { slug: "wheel-hub", repo: "DIY-Steering-Wheel/DSW-wheel-hub" },
];

const pdfEntries = [
  {
    title: "Esquema de ligacao do drive BTS 7960",
    description: "Ligacao do driver BTS 7960 com EMC Lite, DSW Lite e DSW Wheel.",
    file: "public/Esquema%20de%20liga%C3%A7%C3%A3o%20do%20drive%20bts%207960%20emc-lite%20,%20DSW%20lite%20e%20DSW%20Wheel.pdf",
  },
  {
    title: "Porta USB caida no Arduino",
    description: "Solucao possivel para recuperar placas com a porta USB danificada.",
    file: "public/Porta%20USB%20ca%C3%ADda%20no%20%20ardu%C3%ADno.pdf",
  },
  {
    title: "Esquema chave de luz Volkswagen",
    description: "Material de apoio citado nos videos e montagens.",
    file: "public/chave_luz_vw.pdf",
  },
  {
    title: "Qual STM escolher",
    description: "Guia rapido com o posicionamento da DSW para escolher STM32.",
    file: "public/Qual%20STM%20escolher%20%20%281%29.pdf",
  },
  {
    title: "Como utilizar XLoader",
    description: "Passo a passo para usar XLoader e resolver travamentos no Arduino.",
    file: "public/Como%20utilizar%20x%20loader%20e%20como%20resolver%20travamento%20do%20ardu%C3%ADno.pdf",
  },
  {
    title: "Especificacoes dos motores RS",
    description: "Parametros superficiais de motores RS 555, 775, 895 e 997.",
    file: "public/895%20low%20speed.pdf",
  },
  {
    title: "Como fazer um volante com encoder e FFB",
    description: "Guia introdutorio para montar um volante com ou sem force feedback.",
    file: "public/Como%20fazer%20um%20volante%20com%20Encoder%20e%20ffb%20ou%20sem.pdf",
  },
  {
    title: "Sensor hall analogico",
    description: "Artigo sobre ligacao eletrica, montagem e uso de sensores hall.",
    file: "public/Sensor%20hall%20Anal%C3%B3gico.pdf",
  },
];

const legacySoftware = [
  {
    title: "DSW Button Box Pro",
    description: "Projeto legado para button box com Arduino Leonardo e multiplos analogicos.",
    downloadUrl: "https://drive.usercontent.google.com/download?id=19LYOJu8YpEkC1aB4EFmfJIRspdoxR6GX&export=download&authuser=0",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW",
    description: "Versao antiga para desenvolvimento de volantes caseiros com Arduino Leonardo.",
    downloadUrl: "https://drive.google.com/file/d/1YXFUSyRE2AWyxrU9cIi9hvI1CEAW8DYR/view?usp=sharing",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW Lite",
    description: "Versao anterior simplificada do software DSW para setups mais basicos.",
    downloadUrl: "https://www.mediafire.com/file/liphk6nk52j5zv0/DSW_lite_V5.zip/file",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW Button Box",
    description: "Ferramenta antiga para criacao de button box com Arduino Leonardo.",
    downloadUrl: "https://www.mediafire.com/file/gvf8hbtkxcdls28/Button_box.zip/file",
    kind: "Aplicativo descontinuado",
  },
  {
    title: "DSW Hex to Arduino",
    description: "Utilitario legado para enviar arquivos .hex para placas Arduino.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1FM6WTYsfnZAgtsX0peS9I7DZ-0QMbzWv",
    kind: "Utilitario legado",
  },
  {
    title: "EMC Lite",
    description: "Arquivos antigos relacionados ao EMC Lite.",
    downloadUrl: "https://drive.google.com/drive/folders/1_bqvdywVJx2uescXi4YgN1H_9-k0qUPQ",
    kind: "Sistema legado",
  },
  {
    title: "Fedit",
    description: "Ferramenta auxiliar mantida apenas para compatibilidade com setups antigos.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1lfnVPUbXxLOgoSSfZWfEtef8UX4uZrBu",
    kind: "Utilitario legado",
  },
  {
    title: "Wheel Check",
    description: "Utilitario antigo para testes e calibracao de forca no volante.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=11N7InqSofK3GbgqR1T1nZJ99MwxX9yit",
    kind: "Utilitario legado",
  },
  {
    title: "DFU STM32 Uploader + Zadig Driver",
    description: "Pacote antigo para gravacao e preparacao de dispositivos STM32.",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1cLnIvUBaWs4XC-Uh8bom_lHw6QDuox2c",
    kind: "Sistema legado",
  },
  {
    title: "DIView",
    description: "Leitor legado para inspecao de eixos e botoes em controladores.",
    downloadUrl: "https://drive.google.com/file/d/1pI5-aUEYOS0FNJ9ZHuAyVqFT8vWK4TdG/view?usp=sharing",
    kind: "Utilitario legado",
  },
  {
    title: "DX Tweak 2",
    description: "Ferramenta classica para ajuste fino de dispositivos DirectInput.",
    downloadUrl: "https://drive.google.com/file/d/1NliW-I78wInlkKsnmFG_7_RDtJoQxj1H/view?usp=sharing",
    kind: "Utilitario legado",
  },
];

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(isoDate));
}

function formatBytes(size) {
  const megabytes = size / (1024 * 1024);
  return `${megabytes.toFixed(1).replace(".", ",")} MB`;
}

async function fetchLatestSoftware() {
  const releases = await Promise.all(
    githubRepos.map(async ({ slug, repo }) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
          headers: { Accept: "application/vnd.github+json" },
        });
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
          releaseNotes: (release.body && release.body.trim()) || fallback.releaseNotes,
          assets:
            Array.isArray(release.assets) && release.assets.length > 0
              ? release.assets.map((asset) => ({
                  name: asset.name,
                  url: asset.browser_download_url,
                  size: formatBytes(asset.size),
                }))
              : fallback.assets,
        };
      } catch {
        return null;
      }
    }),
  );

  return fallbackSoftware.map(
    (fallback) => releases.find((release) => release && release.slug === fallback.slug) || fallback,
  );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderSoftwareCard(item) {
  const assets = item.assets
    .map(
      (asset) => `
        <div class="asset-row">
          <div>
            <p class="mb-1 fw-medium">${asset.name}</p>
            <p class="mb-0 small text-white-50">${asset.size}</p>
          </div>
          <a class="btn btn-download btn-sm px-4" href="${asset.url}" target="_blank" rel="noreferrer">Baixar agora</a>
        </div>
      `,
    )
    .join("");

  const notes = escapeHtml(item.releaseNotes || "").trim() || "Sem log detalhado para esta release.";

  return `
    <div class="col-lg-6">
      <article class="download-card h-100">
        <div class="d-flex flex-wrap justify-content-between gap-3 align-items-start">
          <div>
            <span class="status-badge status-live">${item.category}</span>
            <h3 class="h3 mt-3 mb-0">${item.title}</h3>
          </div>
          <div class="release-box">
            <p class="release-label">Ultima release</p>
            <p class="release-name">${item.releaseName}</p>
            <p class="release-meta">v${item.releaseTag} • ${formatDate(item.publishedAt)}</p>
          </div>
        </div>
        <p class="text-white-50 mt-3">${item.description}</p>
        <div class="release-log-box mt-3">
          <p class="release-label mb-2">Log da atualizacao</p>
          <div class="release-log">${notes}</div>
        </div>
        <div class="d-flex flex-wrap gap-3 mt-3">
          <a class="btn btn-outline-light btn-sm" href="${item.repoUrl}" target="_blank" rel="noreferrer">Ver GitHub</a>
          <span class="repo-pill">${item.repoLabel}</span>
        </div>
        <div class="asset-box mt-3">
          <h4 class="h6 mb-3">Arquivos da ultima release</h4>
          <div class="d-grid gap-3">${assets}</div>
        </div>
      </article>
    </div>
  `;
}

function renderPdfCard(entry) {
  return `
    <div class="col-lg-6">
      <article class="archive-card h-100">
        <h3 class="h5 d-flex align-items-center gap-2"><i class="bi bi-file-earmark-pdf text-info"></i>${entry.title}</h3>
        <p class="text-white-50 mt-3">${entry.description}</p>
        <button
          class="btn btn-outline-light btn-sm mt-3 pdf-preview-btn"
          type="button"
          data-pdf-title="${entry.title}"
          data-pdf-file="${entry.file}"
        >
          <i class="bi bi-eye me-2"></i>Visualizar PDF
        </button>
      </article>
    </div>
  `;
}

function renderLegacyCard(entry) {
  return `
    <div class="col-lg-6">
      <article class="archive-card h-100">
        <div class="d-flex flex-wrap justify-content-between gap-3 align-items-start">
          <h3 class="h5 mb-0">${entry.title}</h3>
          <span class="repo-pill">${entry.kind}</span>
        </div>
        <p class="text-white-50 mt-3">${entry.description}</p>
        <a class="btn btn-outline-light btn-sm mt-3" href="${entry.downloadUrl}" target="_blank" rel="noreferrer">Abrir arquivo legado</a>
      </article>
    </div>
  `;
}

async function initDownloadsPage() {
  const softwareGrid = document.getElementById("software-grid");
  const pdfGrid = document.getElementById("pdf-grid");
  const legacyGrid = document.getElementById("legacy-grid");
  const githubStatus = document.getElementById("github-status");
  const pdfSection = document.getElementById("arquivos-pdf");
  const legacySection = document.getElementById("legados");
  if (!softwareGrid || !pdfGrid || !legacyGrid || !githubStatus || !pdfSection || !legacySection) {
    return;
  }

  githubStatus.textContent = "Buscando releases mais recentes no GitHub...";
  const software = await fetchLatestSoftware();
  softwareGrid.innerHTML = software.map(renderSoftwareCard).join("");

  if (pdfEntries.length > 0) {
    pdfGrid.innerHTML = pdfEntries.map(renderPdfCard).join("");
  } else {
    pdfSection.hidden = true;
  }

  if (legacySoftware.length > 0) {
    legacyGrid.innerHTML = legacySoftware.map(renderLegacyCard).join("");
  } else {
    legacySection.hidden = true;
  }

  const pdfModalElement = document.getElementById("pdfModal");
  const pdfModalTitle = document.getElementById("pdfModalTitle");
  const pdfModalFrame = document.getElementById("pdfModalFrame");
  const pdfModalOpen = document.getElementById("pdfModalOpen");
  if (pdfModalElement && pdfModalTitle && pdfModalFrame && pdfModalOpen) {
    const pdfModal = new bootstrap.Modal(pdfModalElement);
    document.querySelectorAll(".pdf-preview-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const title = button.getAttribute("data-pdf-title") || "Visualizar PDF";
        const file = button.getAttribute("data-pdf-file") || "";
        pdfModalTitle.innerHTML = `<i class="bi bi-file-earmark-pdf"></i><span>${title}</span>`;
        pdfModalFrame.src = file;
        pdfModalOpen.href = file;
        pdfModal.show();
      });
    });

    pdfModalElement.addEventListener("hidden.bs.modal", () => {
      pdfModalFrame.src = "";
      pdfModalOpen.removeAttribute("href");
    });
  }

  githubStatus.textContent = "Se o GitHub nao responder, a pagina usa os links de fallback ja definidos.";
}

function createAxisMeter(value, label) {
  const percent = Math.max(0, Math.min(100, ((value + 1) / 2) * 100));
  return `
    <div class="axis-meter">
      <div class="d-flex justify-content-between small text-white-50 mb-1">
        <span>${label}</span>
        <span>${percent.toFixed(0)}%</span>
      </div>
      <div class="progress axis-progress">
        <div class="progress-bar bg-danger" style="width:${percent}%"></div>
      </div>
      <div class="small text-white-50 mt-1">Raw: ${value.toFixed(3)}</div>
    </div>
  `;
}

function createButtonBadge(button, index) {
  const classes = button.pressed ? "button-live" : "button-idle";
  return `
    <div class="button-badge ${classes}">
      <strong>B${index}</strong>
      <span>${button.pressed ? "ON" : "OFF"}</span>
      <small>${(button.value * 100).toFixed(0)}%</small>
    </div>
  `;
}

function initGamepadPage() {
  const list = document.getElementById("gamepad-list");
  const empty = document.getElementById("gamepad-empty");
  const status = document.getElementById("gamepad-status");
  const frameCounter = document.getElementById("frame-counter");
  if (!list || !empty || !status || !frameCounter) {
    return;
  }

  let frame = 0;

  function render() {
    const pads = Array.from(navigator.getGamepads ? navigator.getGamepads() : []).filter(Boolean);
    frame = (frame + 1) % 100;
    frameCounter.textContent = frame.toString().padStart(2, "0");

    if (pads.length === 0) {
      empty.hidden = false;
      list.innerHTML = "";
      status.textContent = "Aguardando dispositivo";
    } else {
      empty.hidden = true;
      status.textContent = `${pads.length} dispositivo(s) detectado(s)`;
      list.innerHTML = pads
        .map((pad) => {
          const axes = pad.axes.map((value, index) => createAxisMeter(value, `Axis ${index}`)).join("");
          const buttons = pad.buttons.map((button, index) => createButtonBadge(button, index)).join("");
          return `
            <div class="col-xl-6">
              <article class="download-card h-100">
                <div class="d-flex flex-wrap justify-content-between gap-3 align-items-start">
                  <div>
                    <h2 class="h5 mb-1">${pad.id}</h2>
                    <p class="mb-0 text-white-50">Indice ${pad.index} • Mapping: ${pad.mapping || "padrao"}</p>
                  </div>
                  <span class="status-badge status-live">Conectado</span>
                </div>
                <div class="row g-4 mt-1">
                  <div class="col-md-6">
                    <h3 class="h6 mb-3">Axes</h3>
                    <div class="d-grid gap-3">${axes || "<p class='text-white-50 mb-0'>Sem eixos</p>"}</div>
                  </div>
                  <div class="col-md-6">
                    <h3 class="h6 mb-3">Buttons</h3>
                    <div class="buttons-grid">${buttons || "<p class='text-white-50 mb-0'>Sem botoes</p>"}</div>
                  </div>
                </div>
              </article>
            </div>
          `;
        })
        .join("");
    }

    window.requestAnimationFrame(render);
  }

  window.addEventListener("gamepadconnected", render);
  window.addEventListener("gamepaddisconnected", render);
  window.requestAnimationFrame(render);
}

function initCalculatorPage() {
  const tabs = Array.from(document.querySelectorAll("[data-tab]"));
  const panels = Array.from(document.querySelectorAll("[data-panel]"));
  if (!tabs.length || !panels.length) {
    return;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selected = tab.getAttribute("data-tab");
      tabs.forEach((item) => item.classList.toggle("active", item === tab));
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.getAttribute("data-panel") === selected);
      });
    });
  });

  document.getElementById("calcTorqueBtn").addEventListener("click", () => {
    const torqueMotora = Number(document.getElementById("torqueMotora").value || 0);
    const relacaoMotora = Number(document.getElementById("relacaoMotoraTorque").value || 1);
    const relacaoMovida = Number(document.getElementById("relacaoMovidaTorque").value || 1);
    const torque = torqueMotora * (relacaoMovida / relacaoMotora);
    const torqueFinal = torque - 0.074 * torque;
    document.getElementById("torqueResultado").textContent = `${torqueFinal.toFixed(2)} Nm`;
  });

  document.getElementById("calcConversaoBtn").addEventListener("click", () => {
    const valor = Number(document.getElementById("valorConversao").value || 0);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const table = {
      "Nm:kgfm": 0.10197,
      "Nm:kgfcm": 10.197,
      "Nm:Ncm": 100,
      "kgfm:Nm": 9.80665,
      "kgfm:kgfcm": 1000,
      "kgfm:Ncm": 980.665,
      "kgfcm:Nm": 0.09807,
      "kgfcm:kgfm": 0.001,
      "kgfcm:Ncm": 10,
      "Ncm:Nm": 0.01,
      "Ncm:kgfm": 0.00102,
      "Ncm:kgfcm": 0.1,
    };
    const key = `${fromUnit}:${toUnit}`;
    const factor = table[key];
    const result = factor ? valor * factor : valor;
    document.getElementById("conversaoResultado").textContent = result.toFixed(2);
  });

  document.getElementById("calcRpmBtn").addEventListener("click", () => {
    const rpmMotora = Number(document.getElementById("rpmMotora").value || 0);
    const relacaoMotora = Number(document.getElementById("relacaoMotoraRpm").value || 1);
    const relacaoMovida = Number(document.getElementById("relacaoMovidaRpm").value || 1);
    const result = (rpmMotora * relacaoMotora) / relacaoMovida;
    document.getElementById("rpmResultado").textContent = `${result.toFixed(2)} rpm`;
  });

  document.getElementById("calcCorrenteBtn").addEventListener("click", () => {
    const voltage = Number(document.getElementById("voltage").value || 0);
    const power = Number(document.getElementById("power").value || 0);
    const withMargin = document.getElementById("withMargin").checked;
    let current = voltage === 0 ? 0 : power / voltage;
    if (withMargin) {
      current += 6.4;
    }
    document.getElementById("correnteResultado").textContent = `${current.toFixed(2)} A`;
  });
}

function initSerialPage() {
  const connectButton = document.getElementById("serial-connect");
  const disconnectButton = document.getElementById("serial-disconnect");
  const clearButton = document.getElementById("serial-clear");
  const sendButton = document.getElementById("serial-send");
  const baudRateInput = document.getElementById("serial-baudrate");
  const logArea = document.getElementById("serial-log");
  const outputInput = document.getElementById("serial-output");
  const statusTag = document.getElementById("serial-status");
  if (!connectButton || !disconnectButton || !clearButton || !sendButton || !baudRateInput || !logArea || !outputInput || !statusTag) {
    return;
  }

  let port = null;
  let reader = null;
  let writer = null;
  let keepReading = false;
  let textEncoder = null;

  function appendLog(message) {
    logArea.value += `${message}\n`;
    logArea.scrollTop = logArea.scrollHeight;
  }

  function setStatus(message) {
    statusTag.textContent = message;
  }

  async function disconnect() {
    keepReading = false;
    try {
      if (reader) {
        await reader.cancel();
        reader.releaseLock();
      }
    } catch {}
    try {
      if (writer) {
        writer.releaseLock();
      }
    } catch {}
    try {
      if (port) {
        await port.close();
      }
    } catch {}
    reader = null;
    writer = null;
    port = null;
    textEncoder = null;
    setStatus("Desconectado");
  }

  async function readLoop() {
    while (port && keepReading && port.readable) {
      try {
        reader = port.readable.getReader();
        while (keepReading) {
          const { value, done } = await reader.read();
          if (done) {
            break;
          }
          if (value) {
            appendLog(new TextDecoder().decode(value));
          }
        }
      } catch (error) {
        appendLog(`[erro] ${error.message}`);
      } finally {
        if (reader) {
          reader.releaseLock();
          reader = null;
        }
      }
    }
  }

  connectButton.addEventListener("click", async () => {
    if (!("serial" in navigator)) {
      appendLog("[erro] Web Serial API nao suportada neste navegador.");
      setStatus("Sem suporte");
      return;
    }

    try {
      port = await navigator.serial.requestPort();
      await port.open({ baudRate: Number(baudRateInput.value || 115200) });
      keepReading = true;
      writer = port.writable.getWriter();
      textEncoder = new TextEncoder();
      setStatus("Conectado");
      appendLog("[info] Porta serial conectada.");
      readLoop();
    } catch (error) {
      appendLog(`[erro] ${error.message}`);
      setStatus("Falha na conexao");
    }
  });

  disconnectButton.addEventListener("click", async () => {
    await disconnect();
  });

  clearButton.addEventListener("click", () => {
    logArea.value = "";
  });

  sendButton.addEventListener("click", async () => {
    if (!writer || !textEncoder) {
      appendLog("[erro] Nenhuma porta conectada.");
      return;
    }
    try {
      const payload = outputInput.value;
      await writer.write(textEncoder.encode(payload));
      appendLog(`[tx] ${payload}`);
      outputInput.value = "";
    } catch (error) {
      appendLog(`[erro] ${error.message}`);
    }
  });

  outputInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendButton.click();
    }
  });

  window.addEventListener("beforeunload", () => {
    disconnect();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "downloads") {
    initDownloadsPage();
  }
  if (page === "gamepad") {
    initGamepadPage();
  }
  if (page === "calculator") {
    initCalculatorPage();
  }
  if (page === "serial") {
    initSerialPage();
  }
});
