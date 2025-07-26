"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow bg-background ${className}`}>
        <CardContent className="p-8 text-center">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
