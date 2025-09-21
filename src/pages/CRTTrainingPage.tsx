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
  GraduationCap,
  Calculator,
  TrendingUp,
  CheckCircle,
  Building2,
  Code,
  BarChart3,
  MessageCircle,
  Award,
  Target,
  ArrowRight,
  PlayCircle,
  Users,
  Briefcase,
  Brain,
  Lightbulb,
  UserCheck,
  Mic,
  FileText,
  Zap,
  ChevronRight,
  Trophy,
  BookOpen,
  PenTool
} from 'lucide-react';
import { SEO } from '../components';

export const CRTTrainingPage: React.FC = () => {
  const focusAreas = [
    {
      icon: Calculator,
      title: "Aptitude & Reasoning Training",
      description: "Intensive training in quantitative aptitude, logical reasoning, and data interpretation",
      color: "primary",
      items: [
        { title: "Quantitative Aptitude", description: "Mathematical problem-solving techniques", icon: Calculator },
        { title: "Logical Reasoning", description: "Step-by-step problem solving strategies", icon: Brain },
        { title: "Data Interpretation", description: "Real recruitment test simulation", icon: BarChart3 }
      ]
    },
    {
      icon: Code,
      title: "Coding & Problem-Solving Skills",
      description: "Hands-on training in multiple programming languages with competitive programming practice",
      color: "secondary",
      items: [
        { title: "Multi-Language Training", description: "C, C++, Java, Python, C# and more", icon: Code },
        { title: "Competitive Programming", description: "Real-world coding challenges", icon: Trophy },
        { title: "Algorithmic Thinking", description: "Problem-solving strategies for coding rounds", icon: Lightbulb }
      ]
    },
    {
      icon: MessageCircle,
      title: "Communication & Soft Skills",
      description: "Training in English proficiency, public speaking, and personality development",
      color: "accent",
      items: [
        { title: "English Proficiency", description: "Public speaking and group discussions", icon: Mic },
        { title: "Personality Development", description: "Confidence and professionalism building", icon: UserCheck },
        { title: "Workplace Skills", description: "Teamwork, leadership, and etiquette", icon: Users }
      ]
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      description: "Mock interviews and comprehensive guidance for real hiring scenarios",
      color: "chart1",
      items: [
        { title: "Mock Interviews", description: "HR and technical interview simulation", icon: Briefcase },
        { title: "Resume Building", description: "Professional resume and presentation guidance", icon: FileText },
        { title: "Expert Feedback", description: "Continuous improvement from industry experts", icon: TrendingUp }
      ]
    }
  ];

  const trainerQualities = [
    {
      title: "5+ Years Experience",
      description: "Highly qualified trainers with real-world industry experience",
      icon: Award,
      color: "primary"
    },
    {
      title: "Industry Insights",
      description: "Corporate exposure and practical problem-solving methods",
      icon: Building2,
      color: "secondary"
    },
    {
      title: "Placement-Ready Focus",
      description: "Expertise ensures students are confident and job-ready",
      icon: Target,
      color: "accent"
    }
  ];

  const benefits = [
    "5+ years experienced trainers guiding every step",
    "End-to-end placement preparation — from aptitude to final interview",
    "Covers technical + non-technical skills",
    "Industry-oriented training methodology",
    "Proven track record of helping students succeed in top companies",
    "Builds confidence, skills, and employability"
  ];

  const outcomes = [
    {
      title: "Enhanced Problem-Solving",
      description: "Improved coding abilities and analytical thinking",
      icon: Brain,
      progress: 90
    },
    {
      title: "Communication Skills",
      description: "Better presentation and interpersonal abilities",
      icon: MessageCircle,
      progress: 85
    },
    {
      title: "Higher Placement Success",
      description: "Increased success rates across top recruiters",
      icon: TrendingUp,
      progress: 92
    },
    {
      title: "Industry Readiness",
      description: "Competitive edge with practical skills",
      icon: Trophy,
      progress: 88
    }
  ];

  const trainingProcess = [
    { 
      number: "1", 
      title: "Skill Assessment", 
      desc: "Evaluate current abilities and identify improvement areas",
      icon: BarChart3,
      color: "primary"
    },
    { 
      number: "2", 
      title: "Structured Training", 
      desc: "Comprehensive modules covering all placement areas",
      icon: BookOpen,
      color: "secondary"
    },
    { 
      number: "3", 
      title: "Practice & Mock Tests", 
      desc: "Real-time practice with simulated environments",
      icon: PenTool,
      color: "accent"
    },
    { 
      number: "4", 
      title: "Final Preparation", 
      desc: "Interview coaching and placement readiness",
      icon: UserCheck,
      color: "chart1"
    }
  ];

  return (
    <>
      <SEO
        title="Campus Recruitment Training (CRT) - Preparing Students for Competitive Hiring"
        description="Comprehensive campus placement preparation program covering aptitude, coding, communication, and interview skills with experienced trainers."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Campus Recruitment Training (CRT)
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Preparing Students for Competitive Hiring
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Campus placements are a crucial milestone in every student's journey. At{' '}
                <strong className="text-primary">Fresherbot</strong>, our{' '}
                <Badge variant="outline" className="mx-1">Campus Recruitment Training (CRT) Program</Badge>{' '}
                equips students with the{' '}
                <Badge variant="outline" className="mx-1">skills</Badge>,{' '}
                <Badge variant="outline" className="mx-1">confidence</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">strategies</Badge>{' '}
                needed to excel in today's highly competitive hiring environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/request-training">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Request a Training Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo-session">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Get a Demo Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Focus Areas */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Training Focus</Badge>
            <h2 className="text-4xl font-bold">Key Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill development covering all aspects of campus recruitment
            </p>
          </div>
          
          <div className="space-y-12">
            {focusAreas.map((area, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${area.color}/20 to-${area.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <area.icon className={`h-10 w-10 text-${area.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{index + 1}. {area.title}</CardTitle>
                  <CardDescription className="text-lg">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {area.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="border bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CardContent className="p-6 space-y-3">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${area.color}/20 to-${area.color}/10 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`h-6 w-6 text-${area.color}`} />
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

        {/* Training Process */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Training Process</Badge>
            <h2 className="text-4xl font-bold">How Our CRT Program Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to comprehensive placement preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingProcess.map((step, index) => (
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

        {/* Expert Trainers */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Our Team</Badge>
            <h2 className="text-4xl font-bold">Expert Trainers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Highly qualified professionals with real-world industry experience
            </p>
          </div>

          <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
            <Award className="h-5 w-5" />
            <AlertDescription className="text-lg">
              All our sessions are conducted by <strong>highly qualified trainers with 5+ years of real-world experience</strong>. 
              Trainers bring <strong>industry insights, corporate exposure, and practical problem-solving methods</strong> into the classroom.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainerQualities.map((quality, index) => (
              <Card key={index} className={`border-2 hover:border-${quality.color}/50 transition-all duration-300 hover:shadow-xl group text-center`}>
                <CardHeader className="space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${quality.color}/20 to-${quality.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <quality.icon className={`h-10 w-10 text-${quality.color}`} />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{quality.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{quality.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-muted/30 border-2 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src="api/placeholder/64/64" />
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">ET</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">Expert Trainers</div>
                    <div className="text-sm text-muted-foreground">5+ Years Industry Experience</div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground italic">
                  "Their expertise ensures students are <strong className="text-primary">placement-ready and confident</strong> for any recruitment challenge."
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
              <h2 className="text-4xl font-bold">Why Choose Fresherbot CRT?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that ensure student success in competitive placements
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
            <h2 className="text-4xl font-bold">Outcomes of CRT Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in student capabilities and placement success
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
              <h3 className="text-2xl font-bold mb-2">CRT Program Impact</h3>
              <p className="text-muted-foreground">Student success metrics from our training programs</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Students Trained", value: "10,000+", progress: 95 },
                { label: "Placement Success Rate", value: "87%", progress: 87 },
                { label: "Top Company Placements", value: "75%", progress: 75 },
                { label: "Skill Improvement", value: "92%", progress: 92 }
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
                Start Training Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Give Your Students the Competitive Edge They Need</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join hundreds of institutions who trust Fresherbot CRT for comprehensive placement preparation. 
                Transform your students into industry-ready professionals with our proven training methodology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/request-training">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Request a Training Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/demo-session">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Get a Demo Session
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                <Trophy className="inline h-4 w-4 mr-1" />
                <strong>Expert Trainers</strong> • <strong>Proven Results</strong> • <strong>Industry-Ready Skills</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CRTTrainingPage;