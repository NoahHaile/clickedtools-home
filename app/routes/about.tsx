import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { MousePointerClick, Users, Lightbulb, GraduationCap, BookOpen, Award } from 'lucide-react'
import { motion } from "framer-motion"
import { useState } from "react"
import CalAppPopUp from "~/components/CalAppPopUp"

export default function AboutPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

    const cardHover = {
        rest: { scale: 1 },
        hover: {
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    }

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <MousePointerClick className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold">ClickedTools</span>
                            <span className="text-xs text-muted-foreground hidden sm:inline-block">
                                For Online Educators
                            </span>
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
                            className="text-base font-medium transition-all text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-all"
                        >
                            About
                        </Link>
                        <Link
                            to="/faq"
                            className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
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

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Button asChild className="hidden md:inline-flex">
                            <a onClick={() => (window.location.href = "/magazine")}>
                                Check Our Digital Magazine
                            </a>
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
                                className="text-base font-medium p-2 bg-muted rounded-md text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/faq"
                                className="text-base font-medium p-2 hover:bg-muted rounded-md"
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
                                        window.location.href = "/magazine";
                                        setMobileMenuOpen(false);
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
                            src="/DeathtoStock_Desk9.jpg"
                            alt="Team collaboration"
                            className="object-cover opacity-30 w-full h-full"
                            loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-background"></div>
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
                                ClickedTools.<span className="text-primary">com</span>
                            </h1>
                            <p className="mt-6 text-xl text-gray-800 md:text-2xl">
                                Enhancing educational experiences across the web.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20 bg-muted/50">
                    <div className="container">
                        <div className="grid gap-12 md:grid-cols-2 items-center">
                            <motion.div
                                className="order-1 md:order-1"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="relative rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src="/Death_to_stock_photography_weekend_work (10 of 10).jpg"
                                        alt="Our team"
                                        className="w-full h-auto object-cover" // Added object-cover
                                        style={{ height: '100%', width: '100%' }} //added inline style to ensure image covers the container
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                className="order-2 md:order-2"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-lg">
                                    <p>
                                        ClickedTools was born from a simple observation: online educators
                                        were spending too much time marketing their courses instead of
                                        creating valuable content.
                                    </p>
                                    <p>
                                        Founded in 2024 by a pair of developers, we set out to create a
                                        platform that would simplify the process of building and growing an
                                        online education business.
                                    </p>
                                    <p>
                                        Today, we're proud to serve educators across the globe, helping them
                                        focus on what they do best. We handle the technical aspects of
                                        audience building and content delivery.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-20">
                    <div className="container">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission</h2>
                            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                                We're on a mission to build the digital infrastructure around education by giving educators the tools they need to reach a global audience.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Mission Point 1 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardContent className="pt-6">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "var(--primary)",
                                                    color: "var(--primary-foreground)",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Lightbulb className="h-6 w-6 text-primary" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold mb-2">Innovate</h3>
                                            <p className="text-muted-foreground">
                                                We continuously develop cutting-edge tools that simplify complex processes for educators, allowing them to focus on creating exceptional learning experiences.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Mission Point 2 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardContent className="pt-6">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "var(--primary)",
                                                    color: "var(--primary-foreground)",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <GraduationCap className="h-6 w-6 text-primary" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold mb-2">Educate</h3>
                                            <p className="text-muted-foreground">
                                                We believe in the power of education to transform lives. Our platform empowers educators to share their knowledge with a wider audience than ever before.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Mission Point 3 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardContent className="pt-6">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "var(--primary)",
                                                    color: "var(--primary-foreground)",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Users className="h-6 w-6 text-primary" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold mb-2">Connect</h3>
                                            <p className="text-muted-foreground">
                                                We foster meaningful connections between educators and learners, creating vibrant communities centered around shared knowledge and growth.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
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
                                    <Link to="/#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
                                    <Link to="/faq#contact-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
                                    <Link to="https://www.privacypolicies.com/live/eca32a20-b289-4a60-86f8-7dde3a81b369" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        Privacy Policy
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
                        <p className="text-xs text-muted-foreground">
                            &copy; 2025 ClickedTools. All rights reserved.
                        </p>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            <Link to="https://www.privacypolicies.com/live/eca32a20-b289-4a60-86f8-7dde3a81b369" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                                Privacy
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}
