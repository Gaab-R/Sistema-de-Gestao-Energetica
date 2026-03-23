# Templates

Arquivos de interface HTML do sistema SAPEX.

Responsáveis pela renderização das páginas no navegador usando Flask (Jinja2).

---

## Estrutura

- index.html → dashboard principal do sistema  

---

## O que faz

O template principal:

- Exibe o dashboard de monitoramento  
- Mostra dados dos sensores  
- Apresenta análises e recomendações  
- Renderiza gráficos de consumo  
- Integra dados vindos do backend  

---

## Integração com o backend

Os dados são enviados pelo Flask via `render_template`:

- ultimo_dado  
- ultimo_dado_json  
- consumo_atual  
- valor_janeiro  
- emissoes_co2  
- analise_ia  
- acao  

No HTML:

```html
{{ variavel }}
