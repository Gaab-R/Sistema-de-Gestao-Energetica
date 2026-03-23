# Backend

Aplicação responsável pela lógica do sistema SAPEX.

Cuida da simulação de dados, processamento, automação e integração com a interface web.

---

## Funcionalidades

- Simulação de sensores (temperatura, umidade, consumo, presença)  
- Envio de dados para nuvem  
- Armazenamento em JSON e MySQL  
- Cálculo de consumo e estimativa de custo  
- Análise de dados com IA  
- Automação baseada em regras  
- Servidor web com Flask  

---

## Estrutura

- main.py → aplicação principal  
- requirements.txt → dependências  
- dados_simulados.json → armazenamento local  

---

## Como executar

```bash
pip install -r requirements.txt
python main.py
