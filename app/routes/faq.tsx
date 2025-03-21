"use client"

import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { MousePointerClick, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import CalAppPopUp from "~/components/CalAppPopUp"

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const faqItems = [
    {
      question: "What is ClickedTools?",
      answer:
        "ClickedTools is a comprehensive platform designed specifically for online educators. We provide tools for newsletter management, content publishing, audience management, and email marketing to help educators grow their student base and expand their impact.",
    },
    {
      question: "How can ClickedTools help me as an educator?",
      answer:
        "ClickedTools simplifies the technical aspects of running an online education business. Our platform helps you create engaging newsletters, manage your audience, automate email marketing, and publish content efficiently—allowing you to focus on what you do best: teaching.",
    },
    {
      question: "What is the free consultation about?",
      answer:
        "Our free consultation is a 20-minute session where we discuss your specific needs and goals as an educator. We'll explore how you might be able to achieve those goals, provide a website audit if applicable, and answer any questions you might have about our platform.",
    },
    {
      question: "What plans do you offer?",
      answer:
        "We offer three main plans: Free (includes a consulting session and website audit), Pro ($119 setup + $29/month for newsletter management and email marketing), and Premium ($799/month for custom magazine publications and advanced features). Each plan is designed to meet different needs and scales.",
    },
    {
      question: "Do I need technical skills to use ClickedTools?",
      answer:
        "No, ClickedTools is designed to be user-friendly for educators of all technical backgrounds. Our intuitive interface and comprehensive onboarding process make it easy to get started. Plus, our team is always available to provide support when needed.",
    },
    {
      question: "How does the newsletter management work?",
      answer:
        "Our newsletter management system allows you to create, design, and schedule educational newsletters with ease. You can segment your audience, track engagement metrics, and automate follow-ups to maximize the impact of your communications.",
    },
    {
      question: "What is the digital magazine feature?",
      answer:
        "Our digital magazine feature is a premium offering that provides you with professionally designed, interactive digital publications tailored to your brand. These magazines can include your educational content, course offerings, and more, presented in an engaging format that enhances the learning experience.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0 }}>
            <Link to="/" className="flex items-center gap-2">
              <MousePointerClick className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ClickedTools</span>
              <span className="text-xs text-muted-foreground hidden sm:inline-block">For Online Educators</span>
            </Link>
          </motion.div>
          <motion.nav
            className="hidden md:flex gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="/#pricing"
              className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              About
            </Link>
            <Link
              to="/faq"
              className="text-base font-medium transition-all text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-all"
            >
              FAQ
            </Link>
            <Link
              to="/#consultation"
              className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Consultation
            </Link>
          </motion.nav>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Button asChild className="hidden md:inline-flex">
              <a onClick={() => (window.location.href = "/magazine")}>Check Our Digital Magazine</a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </motion.div>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background border-b"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                to="/#pricing"
                className="text-base font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="text-base font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/faq"
                className="text-base font-medium p-2 bg-muted rounded-md text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/#consultation"
                className="text-base font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consultation
              </Link>
              <Button asChild className="w-full">
                <a
                  onClick={() => {
                    window.location.href = "/magazine"
                    setMobileMenuOpen(false)
                  }}
                >
                  Check Our Digital Magazine
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/Death_to_stock_communicate_hands_10.jpg"
              alt="FAQ background"
              className="object-cover opacity-100 w-full h-full"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-background"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="mt-6 text-xl text-gray-800 md:text-2xl italic">
                Find answers to common questions about ClickedTools
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white text-gray-900">
          <div className="container px-6 mx-auto">
            <motion.div
              className="max-w-3xl mx-auto space-y-8"
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            >
              {faqItems.map((item, index) => (
                <motion.div key={index} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <Card
                    className={`overflow-hidden transition-all border border-gray-300 rounded-xl bg-gray-50 shadow-lg ${openFAQ === index ? "border-primary shadow-primary/30" : "hover:shadow-md"
                      }`}
                  >
                    <CardContent className="p-0">
                      <button
                        className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                        onClick={() => toggleFAQ(index)}
                      >
                        <h3 className="text-xl font-semibold text-gray-900">{item.question}</h3>
                        {openFAQ === index ? (
                          <ChevronUp className="h-6 w-6 text-primary transition-transform transform rotate-180" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-500" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFAQ === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-0 border-t border-gray-300 text-gray-700">
                              <p className="leading-relaxed">{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background/0"></div>
          <div className="container relative z-10">
            <motion.div
              className="max-w-4xl mx-auto bg-card rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                      Ready to Elevate Your Educational Content?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Schedule a free consultation to see if ClickedTools is the right fit for your needs. Not all use
                      cases are a match, but we'll help you determine if we can achieve your goals together.
                    </p>
                  </motion.div>
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="grid gap-4">
                      <motion.div
                        className="flex flex-col gap-4 sm:flex-row"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div variants={fadeIn} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                          <CalAppPopUp />
                        </motion.div>
                        <motion.div variants={fadeIn} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            size="lg"
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                              window.location.href = "/#consultation";
                            }}
                          >
                            Schedule a Consultation
                          </Button>
                        </motion.div>
                      </motion.div>
                      <p className="text-sm text-center text-muted-foreground mt-4">
                        Free 20-minute consultation.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  className="relative hidden md:block"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <img
                    src="/Death_to_stock_photography_weekend_work (2 of 10).jpg"
                    alt="Consultation"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 flex justify-center items-center">
          <motion.div
            className="max-w-md w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg" id="contact-us">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:noahhaile@clickedtools.com">noahhaile@clickedtools.com</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-12">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-2 mb-4">
                <MousePointerClick className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ClickedTools</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Enhancing educational experiences across the web.</p>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/company/clickedtools"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, color: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="font-medium text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#testimonials"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="font-medium text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#contact-us"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default hash navigation behavior
                      document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Magazine
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs text-muted-foreground">&copy; 2025 ClickedTools. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

