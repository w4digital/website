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
  Award,
  BarChart3,
  CheckCircle,
  Clock,
  Code2,
  Globe,
  Headphones,
  Heart,
  Instagram,
  Lightbulb,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Rocket,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function W4DigitalTemplate() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/logo-w4.png" alt="W4 Digital" width={40} height={40} className="object-contain" />
              <span className="text-xl font-bold text-foreground font-poppins">W4 Digital</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Início
              </Link>
              <Link href="#servicos" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Serviços
              </Link>
              <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Sobre
              </Link>
              <Link href="#cases" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Cases
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Contato
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="hidden lg:flex bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="https://wa.me/558199895415" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Fale Conosco
                  </Link>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border"
            >
              <nav className="flex flex-col space-y-4 pt-4">
                <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
                <Link href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
                <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
                <Link href="#cases" className="text-muted-foreground hover:text-primary transition-colors">
                  Cases
                </Link>
                <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Fale Conosco
                </Button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 lg:pt-32 lg:pb-32 hero-bg section-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants}>
                <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Soluções Digitais Completas
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight font-poppins">
                  Transforme seu negócio com <span className="gradient-text">tecnologia de ponta</span>
                </h1>
              </motion.div>

              <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed">
                Especializados em tráfego pago, desenvolvimento web e automações. Aumentamos suas vendas em até{" "}
                <strong className="text-primary">500%</strong> com estratégias comprovadas.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                    <Rocket className="w-5 h-5 mr-2" />
                    Começar Agora
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 bg-transparent"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Ver Demonstração
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary stats-counter">150+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary stats-counter">500%</div>
                  <div className="text-sm text-muted-foreground">ROI Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary stats-counter">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform rotate-6"></div>
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl glass-card">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Tráfego Pago</h3>
                        <p className="text-sm text-muted-foreground">Campanhas de alta performance</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Desenvolvimento</h3>
                        <p className="text-sm text-muted-foreground">Sites e sistemas modernos</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Automações</h3>
                        <p className="text-sm text-muted-foreground">Processos inteligentes</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Consultoria</h3>
                        <p className="text-sm text-muted-foreground">Estratégias personalizadas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
              Soluções completas para seu <span className="gradient-text">crescimento digital</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos um ecossistema integrado de serviços digitais para maximizar seus resultados
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0} className="service-card group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">Tráfego Pago</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Campanhas de alta performance no Google Ads e Meta Ads com foco em ROI e conversões qualificadas.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Google Ads & Meta Ads
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Otimização de conversões
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Relatórios detalhados
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.1} className="service-card group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">Desenvolvimento Web</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Sites e sistemas sob medida com tecnologia de ponta, focados em performance e experiência do
                    usuário.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sites responsivos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      E-commerce completo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sistemas personalizados
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="service-card group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">Automações</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Automações inteligentes que otimizam processos, economizam tempo e aumentam a eficiência
                    operacional.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      CRM integrado
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      E-mail marketing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Funis de vendas
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="service-card group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">Consultoria Digital</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Análise estratégica completa com diagnóstico gratuito e consultoria personalizada para seu negócio.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Diagnóstico gratuito
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Estratégia personalizada
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Acompanhamento contínuo
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="service-card group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">Apps Mobile</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      iOS & Android
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Design intuitivo
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Integração completa
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.5} className="service-card group">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 font-poppins">Suporte 24/7</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Suporte técnico especializado disponível 24 horas por dia, 7 dias por semana.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Suporte 24/7
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Equipe especializada
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Resposta rápida
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 lg:py-32 bg-muted/30 section-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Sobre a W4 Digital
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8 font-poppins">
                Transformamos <span className="gradient-text">ideias em resultados</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Somos uma agência de soluções digitais especializada em transformar negócios através da tecnologia. Com
                mais de 5 anos de experiência, já ajudamos centenas de empresas a alcançar seus objetivos digitais.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Foco em Resultados</h3>
                      <p className="text-sm text-muted-foreground">ROI comprovado em todos os projetos</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Equipe Especializada</h3>
                      <p className="text-sm text-muted-foreground">Profissionais certificados</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Tecnologia Segura</h3>
                      <p className="text-sm text-muted-foreground">Soluções confiáveis e escaláveis</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Entrega Rápida</h3>
                      <p className="text-sm text-muted-foreground">Projetos no prazo acordado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary stats-counter">150+</div>
                  <div className="text-sm text-muted-foreground">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary stats-counter">5+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary stats-counter">98%</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform -rotate-6"></div>
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl glass-card">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground font-poppins">Certificações</h3>
                        <p className="text-muted-foreground">Google Partner & Meta Business Partner</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-foreground">Global</div>
                        <div className="text-sm text-muted-foreground">Alcance</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-foreground">Seguro</div>
                        <div className="text-sm text-muted-foreground">100%</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-foreground">Inovação</div>
                        <div className="text-sm text-muted-foreground">Constante</div>
                      </div>
                      <div className="bg-muted/50 rounded-xl p-4 text-center">
                        <Headphones className="w-8 h-8 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-foreground">Suporte</div>
                        <div className="text-sm text-muted-foreground">24/7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                Entre em Contato
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-poppins">
                Pronto para <span className="gradient-text">transformar seu negócio</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Solicite um diagnóstico gratuito e descubra como podemos ajudar sua empresa a crescer
              </p>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12">
              <AnimatedSection>
                <Card className="glass-card shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">
                      Solicite seu diagnóstico gratuito
                    </h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Seu nome"
                          className="h-12 border-2 border-border focus:border-primary focus:ring-primary"
                        />
                        <Input
                          type="email"
                          placeholder="Seu e-mail"
                          className="h-12 border-2 border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Telefone/WhatsApp"
                          className="h-12 border-2 border-border focus:border-primary focus:ring-primary"
                        />
                        <Input
                          placeholder="Empresa"
                          className="h-12 border-2 border-border focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <Input
                        placeholder="Site da empresa (opcional)"
                        className="h-12 border-2 border-border focus:border-primary focus:ring-primary"
                      />
                      <Button className="w-full h-12 cta-gradient hover:opacity-90 text-primary-foreground text-lg">
                        <Rocket className="w-5 h-5 mr-2" />
                        Solicitar Diagnóstico Gratuito
                      </Button>
                    </form>
                    <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>100% gratuito</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Sem compromisso</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Resposta em 24h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins">Outras formas de contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Telefone</div>
                          <div className="text-muted-foreground">(81) 99989-5415</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">E-mail</div>
                          <div className="text-muted-foreground">agenciaw4digital@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">Endereço</div>
                          <div className="text-muted-foreground">Recife, PE - Brasil</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Redes Sociais</h4>
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.instagram.com/agw4digital/"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Instagram className="w-6 h-6" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/w4digital/"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </Link>
                      <Link
                        href="https://wa.me/558199895415"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <MessageCircle className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 cta-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo-w4.png"
                  alt="W4 Digital"
                  width={32}
                  height={32}
                  className="object-contain filter brightness-0 invert"
                />
                <span className="text-xl font-bold font-poppins">W4 Digital</span>
              </div>
              <p className="text-primary-foreground/80">
                Transformando negócios através da tecnologia e inovação digital.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tráfego Pago
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Automações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Consultoria
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Carreira
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>(81) 99989-5415</li>
                <li>agenciaw4digital@gmail.com</li>
                <li>Recife, PE</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70">
              © {new Date().getFullYear()} W4 Digital. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
