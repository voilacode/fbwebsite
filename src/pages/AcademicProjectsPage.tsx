import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Progress } from '@voilajsx/uikit/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@voilajsx/uikit/avatar';
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
  HandHeart,
  Eye,
  Brain,
  Wrench,
  Cpu,
  Database,
  PenTool,
  Search,
  Group
} from 'lucide-react';
import { SEO } from '../components';

export const AcademicProjectsPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Target,
      title: "Guided Industry-Aligned Projects",
      description: "Projects designed to match real industry practices and standards across multiple domains",
      color: "primary",
      items: [
        { title: "Industry Standards", description: "Real-world practices and current technologies", icon: Briefcase },
        { title: "Multiple Domains", description: "Software development, AI/ML, IoT, data science", icon: Code },
        { title: "Employer-Valued Skills", description: "Graduate with skills employers truly value", icon: Trophy }
      ]
    },
    {
      icon: Wrench,
      title: "Hands-On Learning & Mentorship",
      description: "Active project development with step-by-step guidance for strong conceptual clarity",
      color: "secondary",
      items: [
        { title: "Design & Build", description: "Students actively design, build, and test projects", icon: Wrench },
        { title: "Step-by-Step Guidance", description: "Mentors ensure strong conceptual clarity", icon: UserCheck },
        { title: "Innovation Focus", description: "Encourages innovation and problem-solving", icon: Lightbulb }
      ]
    },
    {
      icon: MessageCircle,
      title: "Trainer Support – Always Available",
      description: "Experienced trainers provide continuous support throughout the project journey",
      color: "accent",
      items: [
        { title: "5+ Years Experience", description: "Expert trainers available throughout journey", icon: Award },
        { title: "Comprehensive Support", description: "Doubt resolution, code reviews, troubleshooting", icon: MessageCircle },
        { title: "Quick Response", description: "Fast support for smooth project completion", icon: Zap }
      ]
    },
    {
      icon: Search,
      title: "Practical Problem-Solving Exposure",
      description: "Develop skills in analysis, solution design, and effective implementation",
      color: "chart1",
      items: [
        { title: "Problem Analysis", description: "Learn to analyze and design effective solutions", icon: Search },
        { title: "Collaboration Skills", description: "Team collaboration, research, and execution", icon: Group },
        { title: "Workplace Preparation", description: "Ready for real workplace challenges", icon: Briefcase }
      ]
    }
  ];

  const projectDomains = [
    {
      title: "Software Development",
      description: "Full-stack web and mobile applications",
      technologies: ["React", "Node.js", "Python", "Java", "Mobile Apps"],
      icon: Code,
      color: "primary"
    },
    {
      title: "AI/ML & Data Science",
      description: "Machine learning and artificial intelligence projects",
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analysis", "Deep Learning"],
      icon: Brain,
      color: "secondary"
    },
    {
      title: "IoT & Hardware",
      description: "Internet of Things and embedded systems",
      technologies: ["Arduino", "Raspberry Pi", "Sensors", "Embedded C", "Hardware Design"],
      icon: Cpu,
      color: "accent"
    },
    {
      title: "Database & Analytics",
      description: "Database design and business intelligence",
      technologies: ["SQL", "NoSQL", "Data Visualization", "Business Intelligence", "Big Data"],
      icon: Database,
      color: "chart1"
    }
  ];

  const benefits = [
    "Industry-relevant projects aligned with current technologies",
    "5+ years experienced trainers available for continuous support",
    "Fast doubt resolution for uninterrupted project work",
    "Builds confidence, skills, and practical exposure",
    "Helps students stand out during placements and interviews"
  ];

  const outcomes = [
    {
      title: "Practical Experience",
      description: "Students gain hands-on experience beyond textbooks",
      icon: Wrench,
      progress: 95
    },
    {
      title: "Strong Portfolio",
      description: "Portfolio projects to showcase in interviews",
      icon: FileText,
      progress: 90
    },
    {
      title: "Faster Completion",
      description: "Quick project delivery with trainer support",
      icon: Zap,
      progress: 88
    },
    {
      title: "Industry Readiness",
      description: "Graduates become problem-solving professionals",
      icon: Trophy,
      progress: 92
    }
  ];

  const projectProcess = [
    { 
      number: "1", 
      title: "Project Selection", 
      desc: "Choose from industry-aligned projects matching your interests",
      icon: Target,
      color: "primary"
    },
    { 
      number: "2", 
      title: "Planning & Design", 
      desc: "Plan project architecture with mentor guidance",
      icon: PenTool,
      color: "secondary"
    },
    { 
      number: "3", 
      title: "Development & Testing", 
      desc: "Build, code, and test with continuous trainer support",
      icon: Code,
      color: "accent"
    },
    { 
      number: "4", 
      title: "Review & Portfolio", 
      desc: "Final review and portfolio-ready project completion",
      icon: Eye,
      color: "chart1"
    }
  ];

  return (
    <>
      <SEO
        title="Academic Projects - Real-World Learning Through Projects"
        description="Hands-on academic projects program with industry mentorship, practical experience, and expert trainer support for comprehensive skill development."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Academic Projects
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Real-World Learning Through Projects
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At <strong className="text-primary">Fresherbot</strong>, we believe the best way for students to learn is by{' '}
                <Badge variant="outline" className="mx-1">doing</Badge>. Our{' '}
                <Badge variant="outline" className="mx-1">Academic Projects Program</Badge>{' '}
                helps students gain{' '}
                <Badge variant="outline" className="mx-1">hands-on experience</Badge>,{' '}
                <Badge variant="outline" className="mx-1">practical knowledge</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">industry exposure</Badge>{' '}
                while completing their academic requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/explore-projects">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Project Options
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/connect-trainer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Connect with a Trainer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Project Domains */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Project Domains</Badge>
            <h2 className="text-4xl font-bold">Industry-Aligned Project Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from multiple domains covering current industry technologies and practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectDomains.map((domain, index) => (
              <Card key={index} className={`border-2 hover:border-${domain.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${domain.color}/20 to-${domain.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <domain.icon className={`h-10 w-10 text-${domain.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                    <CardDescription className="text-sm">{domain.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {domain.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-muted/50 border rounded-lg p-2 text-xs text-center hover:bg-muted/80 transition-colors">
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Features */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Program Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive project-based learning with expert guidance and industry focus
            </p>
          </div>
          
          <div className="space-y-12">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`h-10 w-10 text-${feature.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{index + 1}. {feature.title}</CardTitle>
                  <CardDescription className="text-lg">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {feature.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="border bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CardContent className="p-6 space-y-3">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`h-6 w-6 text-${feature.color}`} />
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Project Process */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Project Journey</Badge>
            <h2 className="text-4xl font-bold">How Our Academic Projects Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to hands-on learning with continuous mentorship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectProcess.map((step, index) => (
              <div key={index} className="relative">
                <Card className={`text-center border-2 hover:border-${step.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                  <CardHeader className="space-y-6">
                    <div className={`w-20 h-20 bg-gradient-to-br from-${step.color}/20 to-${step.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                      <span className={`text-3xl font-bold text-${step.color}`}>{step.number}</span>
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{step.desc}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
                {index < 3 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground h-8 w-8" />
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Trainer Support Highlight */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Expert Mentorship</Badge>
            <h2 className="text-4xl font-bold">Always Available Trainer Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals providing continuous guidance throughout your project journey
            </p>
          </div>

          <Alert className="border-2 border-secondary/20 bg-gradient-to-r from-secondary/5 to-accent/5 max-w-4xl mx-auto">
            <HandHeart className="h-5 w-5" />
            <AlertDescription className="text-lg">
              Our <strong>experienced trainers (5+ years)</strong> are available throughout the project journey with{' '}
              <strong>doubt resolution sessions, code reviews, and troubleshooting</strong> to ensure smooth and fast project completion.
            </AlertDescription>
          </Alert>

          <div className="text-center">
            <Card className="bg-muted/30 border-2 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-secondary/20">
                    <AvatarImage src="api/placeholder/64/64" />
                    <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-lg">MT</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">Expert Mentors</div>
                    <div className="text-sm text-muted-foreground">5+ Years Industry Experience</div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground italic">
                  "Quick support ensures <strong className="text-secondary">smooth and fast project completion</strong> while building{' '}
                  <strong className="text-accent">strong technical foundations</strong>."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Choose */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                Why Choose Us
              </Badge>
              <h2 className="text-4xl font-bold">Why Choose Fresherbot Academic Projects?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that bridge the gap between academic learning and industry readiness
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 bg-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-base font-medium leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Outcomes */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Program Results</Badge>
            <h2 className="text-4xl font-bold">Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable benefits that prepare students for successful careers in technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-xl transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <outcome.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-lg">{outcome.title}</CardTitle>
                    <CardDescription className="text-sm">{outcome.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-primary">{outcome.progress}%</div>
                    <Progress value={outcome.progress} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl" />
          <div className="relative p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Academic Projects Impact</h3>
              <p className="text-muted-foreground">Student success metrics from our project-based learning program</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects Completed", value: "5,000+", progress: 95 },
                { label: "Student Satisfaction", value: "94%", progress: 94 },
                { label: "Industry Alignment", value: "96%", progress: 96 },
                { label: "Placement Success", value: "89%", progress: 89 }
              ].map((stat, index) => (
                <Card key={index} className="text-center border-2 bg-background/90 backdrop-blur-sm">
                  <CardContent className="pt-6 space-y-3">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    <Progress value={stat.progress} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl" />
          <div className="relative p-12 text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Zap className="w-4 h-4 mr-2" />
                Start Your Project Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Accelerate Your Academic Learning</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of students who have transformed their academic experience with{' '}
                <strong>real-world projects and expert mentorship</strong>. 
                Build industry-ready skills while completing your academic requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/explore-projects">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Project Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/connect-trainer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Connect with a Trainer
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                <Wrench className="inline h-4 w-4 mr-1" />
                <strong>Hands-On Learning</strong> • <strong>Expert Mentorship</strong> • <strong>Industry-Ready Skills</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AcademicProjectsPage;