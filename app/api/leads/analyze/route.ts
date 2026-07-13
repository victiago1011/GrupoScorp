import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize the GoogleGenAI client on the server
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, need } = await req.json();

    if (!name || !need) {
      return NextResponse.json(
        { error: "Nome e Necessidade são campos obrigatórios para análise." },
        { status: 400 }
      );
    }

    const prompt = `Analise o seguinte lead de venda da nossa agência de tecnologia (Grupo Scorp).
A agência fornece soluções em 4 pilares fundamentais:
1. Presença Digital (Sites institucionais, Landing pages, SEO, Integração com WhatsApp)
2. Gestão Inteligente (Painéis de dados/BI, Indicadores de Vendas, KPIs, Estoque)
3. Automação (Integrações de API, Fluxos de e-mail, Webhooks, CRM)
4. Sob Medida (Sistemas internos, Portais de Clientes, SaaS personalizado)

Dados do Lead:
Nome: ${name}
Empresa: ${company || 'Não informada'}
E-mail: ${email || 'Não informado'}
Telefone: ${phone || 'Não informado'}
Necessidade do Lead: ${need}

Analise a necessidade técnica deles e retorne as informações estruturadas de acordo com o esquema JSON solicitado.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "Você é um Analista de Negócios e Vendas Sênior da agência Grupo Scorp. Seu trabalho é qualificar leads recebidos pelo formulário de contato de forma extremamente profissional, identificando o pilar de atuação ideal, a prioridade comercial do lead (Baseada na clareza e urgência da necessidade) e escrevendo uma proposta de e-mail inicial excelente em português que se conecte diretamente com a dor relatada por eles, mantendo um tom executivo de alto padrão.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            priority: {
              type: Type.STRING,
              description: "Prioridade comercial: 'Alta', 'Média' ou 'Baixa'."
            },
            category: {
              type: Type.STRING,
              description: "Pilar principal sugerido para o projeto: 'Presença Digital', 'Gestão Inteligente', 'Automação' ou 'Sob Medida'."
            },
            summary: {
              type: Type.STRING,
              description: "Resumo analítico profissional de 1-2 frases sobre o desafio do cliente."
            },
            suggestedApproach: {
              type: Type.STRING,
              description: "Sugestões de arquitetura/solução técnica em formato de tópicos breves (Ex: 'Desenvolvimento em Next.js', 'Painel Recharts', etc)."
            },
            draftEmail: {
              type: Type.STRING,
              description: "Rascunho de e-mail de resposta inicial altamente personalizado e persuasivo em português. Use saudações adequadas para o cliente, explore a dor descrita, agende uma reunião breve e assine como 'Equipe Grupo Scorp'."
            }
          },
          required: ["priority", "category", "summary", "suggestedApproach", "draftEmail"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Resposta vazia da API do Gemini.");
    }

    const analysis = JSON.parse(resultText);
    return NextResponse.json(analysis);
  } catch (error: any) {
    console.error("Erro na rota /api/leads/analyze:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar a análise com IA.", details: error.message },
      { status: 500 }
    );
  }
}
