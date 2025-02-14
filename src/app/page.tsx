"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, FileCheck, PenTool } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <AnimatePresence>
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground'
        >
          <div className='fixed inset-0 bg-grid-white/[0.02] -z-10' />
          <div className='fixed inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-background/80 -z-10' />
          <Hero />
          <Features />
          <HowItWorks />
          <Bottom />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Hero() {
  return (
    <section className='pt-32 pb-16 px-4'>
      <div className='container mx-auto max-w-5xl text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='space-y-6'
        >
          <h2 className='text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60'>
            Revolutionize Exam Evaluation
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Harness the power of AI to transform your assessment process with
            intelligent automation
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <SignUpButton mode='modal'>
              <Button
                size='lg'
                className='bg-primary text-primary-foreground hover:bg-primary/90'
              >
                Get Started
              </Button>
            </SignUpButton>
            <Button
              size='lg'
              variant='outline'
              className='border-primary text-primary hover:bg-primary/10'
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <FileCheck className='h-12 w-12 text-primary' />,
      title: "AI-Powered Grading",
      description:
        "Evaluate exams quickly and accurately with our advanced AI algorithms.",
    },
    {
      icon: <PenTool className='h-12 w-12 text-primary' />,
      title: "Question Generation",
      description:
        "Create diverse and challenging questions for your assessments effortlessly.",
    },
    {
      icon: <BrainCircuit className='h-12 w-12 text-primary' />,
      title: "Intelligent Analytics",
      description:
        "Gain insights into student performance and identify areas for improvement.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id='features' className='py-16 px-4'>
      <motion.div
        className='container mx-auto'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2
          variants={item}
          className='text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80'
        >
          Key Features
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className='relative group'
            >
              <Card className='bg-background border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20'>
                <CardHeader>
                  <motion.div
                    className='mb-4 group-hover:scale-110 transition-transform duration-300'
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className='text-xl font-bold'>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Upload Exam Sheets",
      description:
        "Easily upload scanned exam sheets or digital documents to our platform.",
    },
    {
      title: "AI Evaluation",
      description:
        "Our advanced AI algorithms analyze and grade the exams with high accuracy.",
    },
    {
      title: "Review and Adjust",
      description:
        "Review AI-generated results and make any necessary adjustments.",
    },
    {
      title: "Generate Reports",
      description:
        "Create comprehensive reports and analytics based on the evaluation results.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id='how-it-works' className='py-24 px-4 relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10' />
      <motion.div
        className='container mx-auto max-w-6xl'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2
          variants={item}
          className='text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80'
        >
          How It Works
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className='relative group'
            >
              <div className='absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='relative bg-card p-6 rounded-lg border border-border/50 group-hover:border-primary/50 transition-colors duration-300'>
                <motion.div
                  className='bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-primary/20 transition-colors duration-300'
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>
                <h3 className='text-xl font-bold mb-2'>{step.title}</h3>
                <p className='text-muted-foreground'>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Bottom() {
  return (
    <motion.section
      className='py-16 px-4'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className='container mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold mb-6'
        >
          Ready to Transform Your Exam Evaluation Process?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-xl mb-8 text-muted-foreground'
        >
          Join thousands of educators using Panthers AI to streamline their
          workflow.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SignUpButton mode='modal'>
            <Button className='bg-primary text-primary-foreground hover:bg-primary/90 mr-4 transition-transform duration-300 hover:scale-105'>
              Start Your Adventure
            </Button>
          </SignUpButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
