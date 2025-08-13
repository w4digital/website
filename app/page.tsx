"use client"

import { easeOut } from "framer-motion"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

export default function W4DigitalTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mais vendas. Mais eficiência. Mais resultados.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Estratégia, marketing e tecnologia trabalhando juntos para fazer sua empresa crescer.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/seunumerowhatsapp"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            📞 Falar agora no WhatsApp
          </a>
          <a
            href="#diagnostico"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            📅 Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* Quem somos */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Quem somos</h2>
        <p className="text-lg leading-relaxed">
          A <strong>W4</strong> é uma agência digital que conecta <strong>marketing, tecnologia e automação</strong> para gerar resultados reais. Atuamos como <strong>Gestores de Jornada de Compra</strong>, cuidando de todo o processo: da geração de demanda até o pós-venda. Nosso foco é <strong>resultado mensurável</strong>, com soluções sob medida para cada cliente.
        </p>
      </section>

      {/* Serviços */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos serviços</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Marketing digital orientado a resultados</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Tráfego pago</li>
                <li>Gestão de redes sociais</li>
                <li>Funis de vendas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia sob medida</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Sites e landing pages</li>
                <li>CRMs personalizados</li>
                <li>Integrações e sistemas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Automação inteligente</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Disparos automáticos no WhatsApp</li>
                <li>E-mail marketing</li>
                <li>Fluxos comerciais</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Consultoria estratégica</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Diagnóstico completo</li>
                <li>Plano de ação personalizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Como funciona</h2>
        <ol className="space-y-6 text-lg">
          <li><strong>1. Diagnóstico gratuito</strong> – Entendemos seu negócio e seus desafios.</li>
          <li><strong>2. Plano personalizado</strong> – Estratégia feita para gerar resultados rápidos.</li>
          <li><strong>3. Execução completa</strong> – Marketing, tecnologia e automação trabalhando juntos.</li>
          <li><strong>4. Otimização contínua</strong> – Melhorias e ajustes baseados em resultados.</li>
        </ol>
      </section>

      {/* Por que escolher */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Por que escolher a W4</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg list-disc list-inside text-gray-700 text-left">
            <li>Visão completa da jornada do cliente</li>
            <li>Estratégia e execução no mesmo lugar</li>
            <li>Atendimento próximo e consultivo</li>
            <li>Soluções ágeis e escaláveis</li>
            <li>Base técnica sólida em desenvolvimento e automação</li>
          </ul>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Está pronto para transformar suas vendas e o atendimento da sua empresa?
        </h2>
        <p className="text-lg mb-8">Vamos criar juntos a sua estratégia.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/seunumerowhatsapp"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            📞 Falar agora pelo WhatsApp
          </a>
          <a
            href="#diagnostico"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          >
            📅 Agendar diagnóstico gratuito
          </a>
        </div>
      </section>
    </div>
  )
}
