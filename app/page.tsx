"use client"

import { AnimatedCard } from "@/components/animated-card"
import { AnimatedSection } from "@/components/animated-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

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
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function W4DigitalLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-red-900 to-red-700 dark:from-red-800 dark:to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W4</span>
            </div>
            <span className="text-xl font-bold text-foreground">W4 Digital</span>
          </motion.div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-900 hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-700 text-white">
                Diagnóstico Gratuito
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-transparent dark:from-red-800/10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-6 bg-red-900/10 text-red-900 hover:bg-red-900/20 dark:bg-red-800/20 dark:text-red-400">
                Soluções Digitais Completas
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Tecnologia, tráfego e automações para{" "}
              <span className="text-red-900 dark:text-red-400">escalar o seu negócio</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Combinamos estratégias de tráfego pago, desenvolvimento de sistemas e automações inteligentes para
              transformar sua empresa em uma máquina de vendas.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-red-900 hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-700 text-white px-8 py-4 text-lg"
                >
                  Solicite um diagnóstico gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-900 text-red-900 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950/20 px-8 py-4 text-lg bg-transparent"
                >
                  Conheça nossos casos
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">O que fazemos pela sua empresa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções integradas que trabalham juntas para maximizar seus resultados
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard delay={0}>
              <motion.div
                className="w-16 h-16 bg-red-900/10 dark:bg-red-800/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="h-8 w-8 text-red-900 dark:text-red-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4">Tráfego Pago</h3>
              <p className="text-muted-foreground">
                Campanhas otimizadas no Google Ads e Meta Ads com foco total em performance e ROI.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.1}>
              <motion.div
                className="w-16 h-16 bg-red-900/10 dark:bg-red-800/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="h-8 w-8 text-red-900 dark:text-red-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4">Desenvolvimento</h3>
              <p className="text-muted-foreground">
                Sites, sistemas e aplicações sob medida para otimizar sua operação e experiência do cliente.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <motion.div
                className="w-16 h-16 bg-red-900/10 dark:bg-red-800/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="h-8 w-8 text-red-900 dark:text-red-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4">Automações</h3>
              <p className="text-muted-foreground">
                Integrações e automações que economizam tempo e aumentam suas vendas no piloto automático.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <motion.div
                className="w-16 h-16 bg-red-900/10 dark:bg-red-800/20 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Search className="h-8 w-8 text-red-900 dark:text-red-400" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4">Diagnóstico</h3>
              <p className="text-muted-foreground">
                Análise completa e gratuita do seu negócio com consultoria personalizada e estratégica.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Como ajudamos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Badge className="mb-6 bg-red-900/10 text-red-900 dark:bg-red-800/20 dark:text-red-400">
                Resultados Comprovados
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Como ajudamos sua empresa a crescer
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossos clientes experimentam crescimento real e mensurável através de nossas soluções integradas.
              </p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Mais Leads Qualificados</h3>
                    <p className="text-muted-foreground">
                      Aumento médio de 300% na geração de leads através de campanhas otimizadas.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Vendas Escaláveis</h3>
                    <p className="text-muted-foreground">
                      Sistemas e automações que permitem crescer sem aumentar proporcionalmente os custos.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Tempo Economizado</h3>
                    <p className="text-muted-foreground">
                      Automações que liberam até 20 horas semanais da sua equipe para focar no estratégico.
                    </p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-red-900 to-red-800 dark:from-red-800 dark:to-red-700 rounded-2xl p-8 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="h-8 w-8 text-white" />
                  </motion.div>
                  <blockquote className="text-xl font-medium mb-6">
                    "A W4 Digital transformou completamente nossa operação. Em 6 meses, triplicamos nossos leads e
                    automatizamos 80% dos nossos processos de vendas."
                  </blockquote>
                  <cite className="text-red-200">— CEO de empresa do setor de educação</cite>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Diagnóstico Gratuito */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Diagnóstico Gratuito da W4</h2>
              <p className="text-xl text-muted-foreground">
                Análise completa do seu negócio com recomendações personalizadas para acelerar seu crescimento
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h3 className="text-2xl font-bold text-foreground mb-6">Como funciona:</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="w-8 h-8 bg-red-900 dark:bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Análise inicial:</strong> Avaliamos seu site, campanhas atuais
                      e processos de vendas
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="w-8 h-8 bg-red-900 dark:bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Identificação de oportunidades:</strong> Mapeamos pontos de
                      melhoria e potencial de crescimento
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="w-8 h-8 bg-red-900 dark:bg-red-800 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Plano estratégico:</strong> Apresentamos um roadmap
                      personalizado para seus objetivos
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="border-0 shadow-xl bg-background">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                        Solicite seu diagnóstico gratuito
                      </h3>
                      <form className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <Input
                            placeholder="Seu nome completo"
                            className="border-border focus:border-red-900 focus:ring-red-900 dark:focus:border-red-400 dark:focus:ring-red-400"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <Input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="border-border focus:border-red-900 focus:ring-red-900 dark:focus:border-red-400 dark:focus:ring-red-400"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <Input
                            placeholder="WhatsApp (com DDD)"
                            className="border-border focus:border-red-900 focus:ring-red-900 dark:focus:border-red-400 dark:focus:ring-red-400"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <Input
                            placeholder="Site da sua empresa (opcional)"
                            className="border-border focus:border-red-900 focus:ring-red-900 dark:focus:border-red-400 dark:focus:ring-red-400"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="w-full bg-red-900 hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-700 text-white py-3 text-lg">
                            Quero meu diagnóstico gratuito
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </motion.div>
                      </form>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        Resposta em até 24 horas • Sem compromisso
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a W4 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-900/10 text-red-900 dark:bg-red-800/20 dark:text-red-400">
              Sobre a W4 Digital
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Inovação e parceria estratégica para resultados excepcionais
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos uma agência de soluções digitais que vai além do tradicional. Combinamos tecnologia de ponta,
              estratégias de tráfego pago comprovadas e automações inteligentes para criar um ecossistema digital que
              impulsiona o crescimento sustentável do seu negócio.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Nossa missão é ser seu parceiro estratégico na transformação digital, focando sempre em resultados
              mensuráveis e no crescimento real da sua empresa. Cada projeto é tratado com a dedicação e o cuidado que
              seu negócio merece.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-red-900 dark:text-red-400 mb-2">50+</div>
                <p className="text-muted-foreground">Projetos entregues</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-red-900 dark:text-red-400 mb-2">300%</div>
                <p className="text-muted-foreground">Aumento médio em leads</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-red-900 dark:text-red-400 mb-2">24h</div>
                <p className="text-muted-foreground">Tempo de resposta</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-800 dark:from-red-800 dark:to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para escalar seu negócio?</h2>
            <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
              Solicite agora sua análise gratuita e comece a escalar com a W4 Digital
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-white text-red-900 hover:bg-neutral-100 px-8 py-4 text-lg mb-8">
                Solicitar diagnóstico gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6 pt-8 border-t border-red-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="#" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="#" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="#" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="#" className="flex items-center space-x-2 text-red-100 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>E-mail</span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="flex items-center justify-center space-x-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-red-900 to-red-700 dark:from-red-800 dark:to-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">W4</span>
            </div>
            <span className="text-foreground font-bold">W4 Digital</span>
          </motion.div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} W4 Digital. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
