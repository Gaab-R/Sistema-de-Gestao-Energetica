# Database

Estrutura do banco de dados do sistema SAPEX.

Responsável por armazenar dados de usuários, sensores e consumo energético.

---

## Estrutura

- schema.sql → criação das tabelas  
- inserts.sql → dados iniciais  
- run.sql → execução completa  

---

## Modelagem

O banco foi pensado para um sistema de monitoramento energético com:

- usuários  
- dados de sensores  
- consumo mensal  

---

## Tabelas

usuarios  
- id (PK)  
- nome  
- perfil  

dados_sensores  
- id (PK)  
- usuario_id (FK)  
- data_registro  
- temperatura  
- umidade  
- consumo  

contas_luz  
- id (PK)  
- usuario_id (FK)  
- mes  
- consumo_total  
- valor_estimado  

---

## Como executar

```sql
SOURCE run.sql;
