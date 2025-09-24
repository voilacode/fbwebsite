import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@voilajsx/uikit/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@voilajsx/uikit/card";
import { Badge } from "@voilajsx/uikit/badge";
import { Separator } from "@voilajsx/uikit/separator";
import { Progress } from "@voilajsx/uikit/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@voilajsx/uikit/avatar";
import {
  BookOpen,
  Code,
  CheckCircle,
  Lightbulb,
  MessageCircle,
  Award,
  Target,
  ArrowRight,
  UserCheck,
  FileText,
  Zap,
  ChevronRight,
  Trophy,
  Briefcase,
  Eye,
  Wrench,
  PenTool,
  Search,
  Group,
  GraduationCap,
  Globe,
  Users,
} from "lucide-react";
import { SEO } from "../components";
import { asset } from "../utils/asset";

export const AcademicProjectsPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Target,
      title: "Guided Industry-Aligned Projects",
      description:
        "Projects designed to match real industry practices and standards across multiple domains.",
      image: asset("product/projects/industry2.png"),
      items: [
        { title: "Industry Standards", description: "Real-world practices and current technologies.", icon: Briefcase },
        { title: "Multiple Domains", description: "Software development, AI/ML, IoT, Data Science.", icon: Code },
        { title: "Employer-Valued Skills", description: "Graduate with skills employers truly value.", icon: Trophy },
      ],
    },
    {
      icon: Wrench,
      title: "Hands-On Learning & Mentorship",
      description:
        "Active project development with step-by-step guidance for strong conceptual clarity.",
      image: asset("product/projects/hands-on2.png"),
      items: [
        { title: "Design & Build", description: "Students actively design, build, and test projects.", icon: Wrench },
        { title: "Step-by-Step Guidance", description: "Mentors ensure strong conceptual clarity.", icon: UserCheck },
        { title: "Innovation Focus", description: "Encourages innovation and problem-solving.", icon: Lightbulb },
      ],
    },
    {
      icon: MessageCircle,
      title: "Trainer Support – Always Available",
      description:
        "Experienced trainers provide continuous support throughout the project journey.",
      image: asset("product/projects/support.png"),
      items: [
        { title: "5+ Years Experience", description: "Expert trainers available throughout journey.", icon: Award },
        { title: "Comprehensive Support", description: "Doubt resolution, code reviews, troubleshooting.", icon: MessageCircle },
        { title: "Quick Response", description: "Fast support for smooth project completion.", icon: Zap },
      ],
    },
    {
      icon: Search,
      title: "Practical Problem-Solving Exposure",
      description:
        "Develop skills in analysis, solution design, and effective implementation.",
      image: asset("product/projects/problem-solving.png"),
      items: [
        { title: "Problem Analysis", description: "Learn to analyze and design effective solutions.", icon: Search },
        { title: "Collaboration Skills", description: "Team collaboration, research, and execution.", icon: Group },
        { title: "Workplace Preparation", description: "Ready for real workplace challenges.", icon: Briefcase },
      ],
    },
  ];

  const extendedHighlights = [
    {
      icon: GraduationCap,
      title: "Certification on Completion",
      description: "Receive an industry-recognized certificate that validates your skills.",
    },
    {
      icon: Globe,
      title: "Global Relevance",
      description: "Projects built using tools and technologies applied worldwide.",
    },
    {
      icon: Users,
      title: "Peer Collaboration",
      description: "Work with peers on team projects, simulating real-world environments.",
    },
  ];

  const benefits = [
    "Industry-relevant projects aligned with current technologies.",
    "5+ years experienced trainers available for continuous support.",
    "Fast doubt resolution for uninterrupted project work.",
    "Builds confidence, skills, and practical exposure.",
    "Helps students stand out during placements and interviews.",
    "Certification boosts credibility in academic & career pursuits.",
    "Collaboration improves communication & leadership skills.",
  ];

  const outcomes = [
    { title: "Practical Experience", description: "Students gain hands-on experience beyond textbooks.", icon: Wrench, progress: 95 },
    { title: "Strong Portfolio", description: "Portfolio projects to showcase in interviews.", icon: FileText, progress: 90 },
    { title: "Faster Completion", description: "Quick project delivery with trainer support.", icon: Zap, progress: 88 },
    { title: "Industry Readiness", description: "Graduates become problem-solving professionals.", icon: Trophy, progress: 92 },
  ];

  const projectProcess = [
    { number: "1", title: "Project Selection", desc: "Choose from industry-aligned projects matching your interests.", icon: Target },
    { number: "2", title: "Planning & Design", desc: "Plan project architecture with mentor guidance.", icon: PenTool },
    { number: "3", title: "Development & Testing", desc: "Build, code, and test with continuous trainer support.", icon: Code },
    { number: "4", title: "Review & Portfolio", desc: "Final review and portfolio-ready project completion.", icon: Eye },
  ];

  const testimonials = [
    {
      name: "Ananya Gupta",
      role: "Final Year CS Student",
      feedback: "Working on my AI/ML project with Fresherbot gave me the confidence to crack my placement interviews. The trainer support was excellent.",
      avatar: asset("product/testimonials/student1.png"),
    },
    {
      name: "Rahul Mehta",
      role: "ECE Graduate",
      feedback: "The IoT project I built helped me land my internship at a top company. Practical exposure matters, and Fresherbot provided exactly that.",
      avatar: asset("product/testimonials/student2.png"),
    },
    {
      name: "Sneha Reddy",
      role: "Data Science Aspirant",
      feedback: "From planning to execution, I always had mentor guidance. My portfolio projects stood out during campus placements.",
      avatar: asset("product/testimonials/student3.png"),
    },
  ];

  return (
    <>
      <SEO
        title="Academic Projects - Real-World Learning Through Projects"
        description="Hands-on academic projects program with industry mentorship, certifications, and career-oriented outcomes."
      />

      <div className="space-y-16">
        {/* Hero */}
        <section className="bg-background">
          <div className="container mx-auto py-20 px-6 text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Academic Projects
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                Real-World
              </span>
              <br /> Learning Through Projects
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At <strong>Fresherbot</strong>, we believe the best way for students
              to learn is by <strong className="text-primary">doing</strong>. Our{" "}
              <span className="underline decoration-primary/40">Academic Projects Program</span>{" "}
              helps students gain <strong>hands-on experience, certifications, and career readiness</strong> while completing their academic requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="px-8 py-6 shadow-lg">
                <Link to="/explore-projects">
                  <BookOpen className="mr-2 h-5 w-5" /> Explore Project Options <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6">
                <Link to="/connect-trainer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Connect with a Trainer
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Features */}
        <section className="bg-muted/30 py-12 space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Program Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach that blends theory with practice and ensures industry readiness
            </p>
          </div>

          <div className="space-y-12">
            {keyFeatures.map((feature, idx) => (
              <div key={idx} className={`grid lg:grid-cols-5 gap-8 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:col-start-4" : ""} flex justify-center`}>
                  <img src={feature.image} alt={feature.title} className="rounded-2xl shadow-2xl w-full max-w-sm" />
                </div>
                <div className={`lg:col-span-3 space-y-6 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <CardTitle className="text-3xl">{feature.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">{feature.description}</CardDescription>
                  <div className="grid grid-cols-1 gap-3">
                    {feature.items.map((item, i) => (
                      <Card key={i} className="border-2 bg-background hover:shadow-xl transition-all">
                        <CardContent className="px-3 py-2 flex items-start gap-3">
                          <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                            <item.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Extended Highlights */}
        <section className="bg-background py-12">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2">Added Value</Badge>
            <h2 className="text-4xl font-bold">Beyond Academics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our projects go beyond academics, helping students gain certifications, global exposure, and teamwork skills
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 container mx-auto">
            {extendedHighlights.map((h, idx) => (
              <Card key={idx} className="p-6 border-2 text-center hover:shadow-xl transition-all">
                <h.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle>{h.title}</CardTitle>
                <CardDescription className="mt-2">{h.description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Project Process */}
        <section className="bg-muted/30 py-12 space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Project Journey</Badge>
            <h2 className="text-4xl font-bold">How Our Projects Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A step-by-step structured process ensuring smooth execution and learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectProcess.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="text-center border-2 hover:shadow-xl transition-all">
                  <CardHeader className="space-y-6">
                    <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-3xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{step.desc}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                {idx < 3 && <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground h-8 w-8" />}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Choose */}
        <section className="bg-background py-12">
          <div className="container mx-auto grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
              <Badge variant="secondary" className="px-4 py-2">Why Choose Fresherbot</Badge>
              <h2 className="text-4xl font-bold">Why Choose Fresherbot Academic Projects?</h2>
              <p className="text-xl text-muted-foreground">Comprehensive benefits bridging the gap between academics and industry readiness</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((b, idx) => (
                  <Card key={idx} className="border-2 bg-background hover:shadow-xl transition-all">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-base font-medium">{b}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Outcomes */}
        <section className="bg-muted/30 py-12 space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Program Results</Badge>
            <h2 className="text-4xl font-bold">Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Measurable benefits preparing students for career success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, idx) => (
              <Card key={idx} className="border-2 text-center hover:shadow-xl transition-all">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mx-auto">
                    <outcome.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{outcome.title}</CardTitle>
                  <CardDescription>{outcome.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={outcome.progress} className="h-3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Testimonials */}
        <section className="bg-background py-12 space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Success Stories</Badge>
            <h2 className="text-4xl font-bold">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="p-6 border-2 hover:shadow-xl transition-all">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{t.name}</CardTitle>
                  <CardDescription>{t.role}</CardDescription>
                  <p className="text-muted-foreground text-sm">"{t.feedback}"</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Final CTA */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <Badge variant="secondary" className="px-4 py-2 text-base inline-flex items-center gap-2">
                <Zap className="w-4 h-4" /> Start Your Project Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Accelerate Your Academic Learning</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of students who have transformed their academic experience with{" "}
                <strong>real-world projects, certifications, and expert mentorship</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="px-10 py-6 text-lg" asChild>
                  <Link to="/explore-projects">
                    <BookOpen className="mr-2 h-5 w-5" /> Explore Project Options <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-6 text-lg" asChild>
                  <Link to="/connect-trainer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Connect with a Trainer
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={asset("product/projects/final-cta.png")} alt="Start your project journey" className="rounded-2xl shadow-2xl w-full max-w-md" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcademicProjectsPage;
