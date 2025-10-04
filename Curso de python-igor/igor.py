#Manipulação de dados em tabelas
import pandas as pd    #Importando as bibliotecas
import matplotlib.pyplot as plt #Importando as bibliotecas
import seaborn as sns #Importando as bibliotecas
import plotly.express as px #Importando as bibliotecas

df=pd.read_csv("https://raw.githubusercontent.com/guilhermeonrails/data-jobs/refs/heads/main/salaries.csv")
print(df.head()) #padrão -5 primeiras linhas
print(df.tail()) #padrão -5 ultimas linhas
print(df.describe()) 
print(df.columns) #Mostra todas as colunas
print(df.dtypes) #Mostra o tipo de cada coluna como : int/float/object
print(df.shape) #Quantidade total de linhas e colunas da tabela
print(df['experience_level'].value_counts()) #Mostra as linhas da coluna "experience_level"
print(df['employment_type'].value_counts())  #Mostra as linhas da coluna "employment_type"
print(df['salary'].value_counts())   #Mostra as linhas da coluna "salary"
print(df['company_size'].value_counts())     #Mostra as linhas da coluna "company_size"

novos_nomes = { #Usando dicionario para mudar os nomes da coluna da tabela para um melhor entendimento.
    'work_year' : 'ano',
    'experience_level' : 'senioridade', 
    'employment_type' : 'contrato',
    'job_title' : 'cargo', 
    'salary' : 'salario',
    'salary_currency' : 'moeda',
    'salary_in_usd' : 'usd',
    'employee_residence' : 'residencia',
    'remote_ratio' : 'remoto',
    'company_location' : 'empresa',
    'company_size' : 'tamanho_da_empresa'
}

df.rename(columns=novos_nomes, inplace=True)
# Verificando os resultados 
print(df.head())

senioridade = { # Troca dos nomes dos valores da coluna 'senioridade'
    'SE': 'senior',
    'MI': 'pleno',
    'EN' : 'junior',
    'EX' : 'executivo'
}

df['senioridade'] = df['senioridade'].replace(senioridade) #resultado e quantidade de valores
print (df['senioridade'].value_counts())

contrato = {
    'FT' : 'integral',
    'CT' : 'contrato',
    'PT' : 'parcial',
    'FL' : 'Freelancer'
}

df ['contrato'] = df['contrato'].replace(contrato)
print(df['contrato'].value_counts())

remoto = {
    0 : 'presencial',
    100 : 'remoto',
    50 : 'hibrido,'
}

df ['remoto'] = df['remoto'].replace(remoto)
print(df['remoto'].value_counts())

tamanho_da_empresa = {
    'M' : 'média',
    'L' : 'grande',
    'S' : 'pequena'
}

df ['tamanho_da_empresa'] = df['tamanho_da_empresa'].replace(tamanho_da_empresa)
print(df['tamanho_da_empresa'].value_counts())

print(df.isnull()) # Analisar quantos dados nulos existem
print(df.isnull().sum())

print(df['ano'].unique())   # Analisar quais dados nulos existem
print(df[df.isnull().any(axis=1)])

df_limpo = df.dropna()  # Retirar as linhas de dados nulos
print(df_limpo.isnull().sum())

print(df_limpo.head())

df_limpo = df_limpo.assign(ano = df_limpo['ano'].astype('int64')) # Mudar o ano de 'float' para 'int'
print(df_limpo.head())

#Criando o primeiro gráfico
ordem = df_limpo.groupby('senioridade') ['usd'].mean().sort_values(ascending=True).index

plt.figure(figsize=(8,5)) # Largura e altura do gráfico
sns.barplot(data=df_limpo, x='senioridade', y='usd', order=ordem) # Gráfico de barras
plt.title("Salário medio por senioridade")  # Título do gráfico
plt.xlabel('Senioridade') # Nome do eixo X
plt.ylabel('Salário médio anual (USD)') # Nome do eixo Y
plt.show() #Exibe os Gráficos Criados



plt.figure(figsize=(10,5))
sns.histplot(df_limpo ['usd'], bins= 50, kde=True)
plt.title("Distribuição dos sálarios anuais")
plt.xlabel("Salário em USD")
plt.ylabel("Frequência")
plt.show()

plt.figure(figsize=(8,5))
sns.boxplot(x=df_limpo['usd'])
plt.title("Boxplot Salário")
plt.xlabel("Salário em USD")
plt.show()
