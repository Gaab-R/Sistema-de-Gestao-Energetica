# ⚡ SAPEX – Sistema Inteligente de Gestão Energética em Edificações

Sistema desenvolvido para monitoramento, análise e otimização do consumo energético em edificações, utilizando conceitos de IoT (Internet of Energy), automação e inteligência artificial.

---

## 📌 Sobre o projeto

O SAPEX é uma solução que simula um ambiente inteligente capaz de:

- Monitorar variáveis ambientais em tempo real
- Analisar consumo energético
- Sugerir ações para economia de energia
- Automatizar dispositivos de forma inteligente

O sistema foi inspirado em redes IoT e no conceito de edificações sustentáveis.

---

## 🚀 Funcionalidades

- 📊 Monitoramento em tempo real (temperatura, umidade, consumo)
- 🤖 Análise com Inteligência Artificial
- ⚙️ Automação de dispositivos
- ☁️ Integração com nuvem (ThingSpeak)
- 🗄️ Armazenamento em banco de dados MySQL
- 📈 Dashboard interativo com gráficos

---

## 🧠 Tecnologias utilizadas

- Python (Flask)
- MySQL
- Pandas
- Transformers (Hugging Face)
- HTML, CSS, JavaScript
- Chart.js

---

## 📂 Estrutura do projeto


SAPEX/
├── app/              # Backend (Flask + lógica do sistema)
├── templates/        # Interface HTML
├── static/           # CSS e JavaScript
├── database/         # Scripts SQL (schema, inserts, views, procedures)
└── docs/             # Documentação e materiais (poster)


---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

git clone https://github.com/seu-usuario/sapex.git
cd sapex


### 2. Instalar dependências

pip install -r app/requirements.txt


### 3. Configurar banco de dados

Executar os arquivos em database/ na ordem:

- schema.sql
- inserts.sql
- views.sql
- procedures.sql

### 4. Executar aplicação

python app/main.py


### 5. Acessar no navegador

http://localhost:5000


---

## 📊 Resultados

- 🔻 Redução de até *35% no consumo energético*
- 🤖 Automação inteligente de dispositivos
- 🌱 Redução de emissões de CO₂
- ⚡ Melhor eficiência energética

---

## 🖼️ Poster do Projeto

![Poster SAPEX](docs/poster.png)

---

## ⚠️ Observações

- O sistema utiliza dados simulados
- MySQL é opcional (modo fallback funciona)
- IA pode exigir mais processamento

---

## 👨‍💻 Autor

Gabriel Rocha  
Engenharia da Computação

---

## 📄 Licença

Projeto acadêmico com fins educacionais.
