import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Check, Mail, MousePointerClick, Loader, Palette, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import CalApp from "~/components/CalApp";
import CalAppPopUp from "~/components/CalAppPopUp";
import CalAppPopUpLarge from "~/components/CalAppPopUpLarge";

export default function LandingPage() {
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
                            to="#pricing"
                            className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default hash navigation behavior
                                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                            }}
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
                            className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            FAQ
                        </Link>
                        <Link
                            to="#consultation"
                            className="text-base font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default hash navigation behavior
                                document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
                            }}
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
                <AnimatePresence>
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
                                    to="#pricing"
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
                                    className="text-base font-medium p-2 hover:bg-muted rounded-md"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    FAQ
                                </Link>
                                <Link
                                    to="#consultation"
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
                </AnimatePresence>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/Death_to_stock_above_1.JPG"
                            alt="Educator creating content"
                            className="object-cover opacity-30 w-full h-full"
                            loading="eager" // Priority loading
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-background"></div>
                    </div>
                    <div className="container relative z-10 py-24 md:py-32 lg:py-40">
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                            <motion.div
                                className="flex flex-col justify-center space-y-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeIn}
                            >
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                    Broaden your impact as an <span className="text-primary">Educator</span>
                                </h1>
                                <p className="max-w-[600px] text-xl text-gray-800 md:text-2xl">
                                    Grow a student base with powerful publishing and email marketing tools.
                                </p>

                                <motion.div
                                    className="flex flex-col gap-4 sm:flex-row"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.div variants={fadeIn}>
                                        <CalAppPopUpLarge />
                                    </motion.div>
                                    <motion.div variants={fadeIn}>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="text-lg h-12"
                                            onClick={() => {
                                                document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >
                                            Book a Consultation
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="hidden md:flex items-center justify-center"
                                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                                transition={{
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                            >
                                <div className="relative w-full max-w-md aspect-[8/6] rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <img src="/MagazineWhite.png" alt="Magazine preview" className="object-cover w-full h-full" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-muted/50" id="features">
                    <div className="container">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Build a Learning Ecosystem</h2>
                            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                                The market for education is rapidly evolving. Learners expect more than video content.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Feature 1 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardHeader className="pb-2">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "var(--primary)",
                                                    color: "var(--primary-foreground)",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Palette className="h-6 w-6 text-primary" />
                                            </motion.div>
                                            <CardTitle className="text-xl">Tailored Educational Newsletters</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Deliver compelling newsletters designed to captivate learners and enhance engagement.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardHeader className="pb-2">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "var(--primary)",
                                                    color: "var(--primary-foreground)",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Mail className="h-6 w-6 text-primary" />
                                            </motion.div>
                                            <CardTitle className="text-xl">Automated Email Marketing</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Effortlessly convert your audience into students with smart automation using personalized
                                                newsletters, targeted promotions, and seamless follow-ups.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardHeader className="pb-2">
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                                                whileHover={{
                                                    scale: 1.1,
                                                    backgroundColor: "var(--primary)",
                                                    color: "var(--primary-foreground)",
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Loader className="h-6 w-6 text-primary" />
                                            </motion.div>
                                            <CardTitle className="text-xl">Blazing Fast Deployment & Load Speeds</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Launch your site quickly with fast deployment and ultra-low load times, ensuring a smooth user
                                                experience right from the start.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Feature 4 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover}>
                                    <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardHeader className="pb-2">
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
                                            <CardTitle className="text-xl">Intelligent Audience Insights</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">
                                                Gain real-time analytics on reader behavior, uncover audience trends, and optimize your content
                                                strategy with precision.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Consulting Experience */}
                <section className="py-16 relative overflow-hidden">
                    <div className="container relative z-20">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Consultation</h2>
                            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                                We guide you every step of the way, sharing proven strategies and actionable processes that deliver
                                results.
                            </p>
                        </motion.div>

                        <div className="grid gap-12 lg:grid-cols-2 items-center px-10 sm:px-24">
                            <motion.div
                                className="space-y-6 order-2 lg:order-1"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <motion.div className="space-y-2" variants={fadeIn}>
                                    <h3 className="text-2xl font-bold">Master Our Software Workflows</h3>
                                    <p className="text-muted-foreground">
                                        Learn the best practices for using our software to streamline your workflow and boost your
                                        productivity.
                                    </p>
                                </motion.div>

                                <motion.div className="space-y-2" variants={fadeIn}>
                                    <h3 className="text-2xl font-bold">Effective Audience Promotion Tips</h3>
                                    <p className="text-muted-foreground">
                                        Discover key strategies for promoting your work to the right audience and maximizing engagement.
                                    </p>
                                </motion.div>

                                <motion.div className="space-y-2" variants={fadeIn}>
                                    <h3 className="text-2xl font-bold">Set Clear Expectations</h3>
                                    <p className="text-muted-foreground">
                                        Understand what to expect during the process and how to achieve your goals efficiently.
                                    </p>
                                </motion.div>


                            </motion.div>

                            <motion.div
                                className="relative order-1 lg:order-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="relative w-full aspect-[18/9] rounded-lg overflow-hidden shadow-2xl"
                                    initial={{ y: 20 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <img src="/cms.png" alt="Magazine mockup" className="object-cover w-full h-full" />
                                </motion.div>
                                <motion.div
                                    className="absolute -bottom-6 -left-6 w-2/3 aspect-[18/9] rounded-lg overflow-hidden shadow-xl"
                                    initial={{ x: -20, y: 20, opacity: 0 }}
                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <img src="/listmonk.png" alt="Magazine detail" className="object-cover w-full h-full" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="pt-10 bg-primary/80" id="consultation">
                    <div className="container text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-primary-foreground/100">
                                Ready to Transform Your Educational Content?
                            </h2>
                            <p className="text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/80">
                                Schedule a quick meeting with us at your convenience and take the first step toward transforming your learning experience.
                            </p>
                        </motion.div>
                    </div>
                    <div className="container pb-16">
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <CalApp />
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-24 bg-muted overflow-hidden">
                    <div className="container px-4 sm:px-6">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            id="pricing"
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
                            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                                Choose the plan that works best for your educational content needs.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Basic Plan */}
                            <motion.div variants={fadeIn} className="flex">
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover} className="w-full">
                                    <Card className="border-2 border-primary transition-all hover:shadow-lg h-full relative">
                                        <div className="absolute top-0 right-0 z-10">
                                            <motion.div
                                                className="transform translate-x-[-8px] translate-y-[8px] bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded"
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Number.POSITIVE_INFINITY,
                                                    repeatType: "loop",
                                                }}
                                            >
                                                Popular
                                            </motion.div>
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Free</CardTitle>
                                            <div className="mt-4 flex items-baseline text-5xl font-extrabold">$0</div>
                                            <CardDescription className="mt-4">Perfect for educators who are just curious</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Consulting Session</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Website Audit</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Free Ebook for Course Creators</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full" onClick={() => (window.location.href = "/cal-app?plan=free")}>
                                                Get Started
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Pro Plan */}
                            <motion.div
                                variants={fadeIn}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex"
                            >
                                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="w-full">
                                    <Card className="border-2 transition-all hover:border-primary hover:shadow-lg h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Pro</CardTitle>
                                            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                                                $119
                                                <span className="ml-1 text-xl font-medium text-muted-foreground">+ $29/month</span>
                                            </div>
                                            <CardDescription className="mt-4">For growing educational platforms</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>NewsLetter Management</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Simple content publishing workflows</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Audience Management</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Email marketing (up to 10,000 subscribers)</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Detailed analytics and reporting</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Priority support</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <CalAppPopUp />
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Premium Plan */}
                            <motion.div variants={fadeIn} className="flex">
                                <motion.div whileHover="hover" initial="rest" animate="rest" variants={cardHover} className="w-full">
                                    <Card className="border-2 transition-all hover:border-primary hover:shadow-lg bg-gradient-to-b from-background to-muted/50 h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">Premium</CardTitle>
                                            <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                                                $799<span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                                            </div>
                                            <CardDescription className="mt-4">
                                                Two monthly publications with cutting-edge design and seamless user experience.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span className="break-words">Custom magazine publications tailored to your brand</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Advanced Email Marketing</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>24/7 Support</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Dedicated account manager</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Check className="h-5 w-5 flex-shrink-0 text-primary mr-2" />
                                                    <span>Story-driven designers focused on your vision</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            <CalAppPopUp />
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-muted/30" id="testimonials">
                    <div className="container">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Educators Worldwide</h2>
                            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                                See what our customers are saying about ClickedTools.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid gap-8 md:grid-cols-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Testimonial 1 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                    <Card className="bg-card/50 backdrop-blur-sm">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                    <img
                                                        src="/user.svg"
                                                        alt="Sarah Johnson"
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">User One</h4>
                                                    <p className="text-sm text-muted-foreground">Online Course Creator</p>
                                                </div>
                                            </div>
                                            <p className="italic text-muted-foreground">
                                                "Oh boy I love ClickedTools."
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Testimonial 2 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                    <Card className="bg-card/50 backdrop-blur-sm">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                    <img
                                                        src="/user.svg"
                                                        alt="Michael Chen"
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">User 2</h4>
                                                    <p className="text-sm text-muted-foreground">Educational Consultant</p>
                                                </div>
                                            </div>
                                            <p className="italic text-muted-foreground">
                                                "Oh boy I love ClickedTools."
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>

                            {/* Testimonial 3 */}
                            <motion.div variants={fadeIn}>
                                <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                    <Card className="bg-card/50 backdrop-blur-sm">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                    <img
                                                        src="/user.svg"
                                                        alt="Emily Rodriguez"
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">User 3</h4>
                                                    <p className="text-sm text-muted-foreground">Language Teacher</p>
                                                </div>
                                            </div>
                                            <p className="italic text-muted-foreground">
                                                "Oh boy I love ClickedTools."
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
                                                            document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" });
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
                                        src="/Death_to_stock_communicate_hands_2.jpg"
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
                                    <Link to="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default hash navigation behavior
                                            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                                        }}>

                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default hash navigation behavior
                                            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                                        }}>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent default hash navigation behavior
                                            document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                                        }}>
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
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq#contact-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/magazine" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
                        <p className="text-xs text-muted-foreground">
                            &copy; 2025 ClickedTools. All rights reserved.
                        </p>
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

