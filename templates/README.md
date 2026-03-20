# 🌐 Templates

Este diretório contém os arquivos de interface HTML do sistema SAPEX, responsáveis pela renderização das páginas no navegador utilizando o mecanismo de templates do Flask (Jinja2).

---

## 📄 Arquivos


index.html   # Página principal do sistema (dashboard)


---

## 🧠 Descrição

O arquivo index.html é responsável por:

- Exibir o dashboard de monitoramento energético
- Mostrar dados em tempo real dos sensores simulados
- Apresentar análises e recomendações do sistema
- Renderizar gráficos de consumo energético
- Integrar dados dinâmicos do backend (Flask)

---

## 🔗 Integração com o backend

Os dados são enviados pelo Flask através da função render_template:


ultimo_dado
ultimo_dado_json
consumo_atual
valor_janeiro
emissoes_co2
analise_ia
acao


Esses dados são utilizados no HTML via Jinja2:


{{ variavel }}


E no JavaScript através de atributos do HTML:


data-ultimo-dado


---

## 🎨 Funcionalidades da interface

- Dashboard com indicadores de consumo
- Cards dinâmicos com status (eficiente, alto, etc.)
- Gráfico de comparação mensal (Chart.js)
- Navegação lateral interativa
- Seções:
  - Dashboard
  - Status
  - Relatórios

---

## ⚠️ Observações

- O template depende do Flask para renderização correta
- Os dados são atualizados conforme o backend processa novas informações
- A interface utiliza arquivos da pasta static/ (CSS e JavaScript)

---

## 🚀 Possíveis melhorias

- Responsividade para dispositivos móveis
- Novos gráficos (linha, pizza, etc.)
- Integração com APIs externas
- Interface com múltiplos usuários
