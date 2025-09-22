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
  Zap,
  Code,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Trophy,
  Globe,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  UserCheck,
  FileText,
  Timer,
  ChevronRight,
  Briefcase,
  Rocket,
  Eye,
  Settings,
  Brain,
  DollarSign,
  Building2,
  Star,
  Group,
  Phone
} from 'lucide-react';
import { SEO } from '../components';

export const HackathonsPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Code,
      title: "Pure Development Competitions",
      description: "Focused on hands-on coding and building solutions from scratch with real-world problems",
      color: "primary",
      items: [
        { title: "Hands-On Coding", description: "Build solutions from scratch with pure development focus", icon: Code },
        { title: "Real-World Problems", description: "Work on actual industry problem statements", icon: Target },
        { title: "Team Collaboration", description: "Encourages teamwork and creative problem-solving", icon: Group }
      ]
    },
    {
      icon: Star,
      title: "Showcase of Creativity & Technical Skills",
      description: "Platform to demonstrate coding expertise and innovation with technical excellence",
      color: "secondary",
      items: [
        { title: "Innovation Showcase", description: "Demonstrate coding expertise and creative solutions", icon: Lightbulb },
        { title: "Technical Excellence", description: "Judged on originality, functionality, and skill", icon: Award },
        { title: "Peer Recognition", description: "Stand out among peers and recruiters", icon: Eye }
      ]
    },
    {
      icon: Trophy,
      title: "Exciting Rewards & Opportunities",
      description: "Attractive prizes, recruitment opportunities, and portfolio building chances",
      color: "accent",
      items: [
        { title: "Cash Prizes", description: "Attractive rewards for top-performing teams", icon: DollarSign },
        { title: "Direct Recruitment", description: "Job opportunities from participating companies", icon: Briefcase },
        { title: "Portfolio Building", description: "Strong projects and industry connections", icon: FileText }
      ]
    },
    {
      icon: Rocket,
      title: "Real-Time Industry Exposure",
      description: "Industry collaboration with startup energy and workplace challenge experience",
      color: "chart1",
      items: [
        { title: "Industry Experts", description: "Collaboration with experienced professionals", icon: UserCheck },
        { title: "Startup Energy", description: "Experience workplace challenges and dynamics", icon: Rocket },
        { title: "Time Constraints", description: "Build ability to deliver under pressure", icon: Timer }
      ]
    }
  ];

  const benefits = [
    "Compete in pure development-focused challenges",
    "Win cash prizes and recognition",
    "Direct recruitment opportunities from leading companies",
    "Gain hands-on problem-solving experience",
    "Network with industry professionals and peers"
  ];

  const outcomes = [
    {
      title: "Enhanced Skills",
      description: "Improved coding and innovation capabilities",
      icon: Brain,
      progress: 95
    },
    {
      title: "Strong Portfolio",
      description: "Real hackathon projects for showcasing",
      icon: FileText,
      progress: 90
    },
    {
      title: "Placement Opportunities",
      description: "Greater chances through recruiter participation",
      icon: TrendingUp,
      progress: 88
    },
    {
      title: "Tech Confidence",
      description: "Ability to tackle real-world challenges",
      icon: Trophy,
      progress: 92
    }
  ];

  const hackathonProcess = [
    { 
      number: "1", 
      title: "Problem Statement", 
      desc: "Receive real-world challenges to solve within timeframe",
      icon: Target,
      color: "primary"
    },
    { 
      number: "2", 
      title: "Team Formation", 
      desc: "Collaborate with peers to form development teams",
      icon: Group,
      color: "secondary"
    },
    { 
      number: "3", 
      title: "Development Sprint", 
      desc: "Code, build, and create solutions under time pressure",
      icon: Code,
      color: "accent"
    },
    { 
      number: "4", 
      title: "Pitch & Judge", 
      desc: "Present solutions and compete for prizes and recognition",
      icon: Trophy,
      color: "chart1"
    }
  ];

  const competitionTypes = [
    {
      title: "Web Development",
      description: "Full-stack web applications and responsive designs",
      technologies: ["React", "Node.js", "APIs", "Databases"],
      icon: Globe,
      color: "primary"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      icon: Phone,
      color: "secondary"
    },
    {
      title: "AI/ML Solutions",
      description: "Machine learning and artificial intelligence projects",
      technologies: ["Python", "TensorFlow", "Data Science", "NLP"],
      icon: Brain,
      color: "accent"
    },
    {
      title: "IoT & Hardware",
      description: "Internet of Things and embedded system solutions",
      technologies: ["Arduino", "Raspberry Pi", "Sensors", "Edge Computing"],
      icon: Settings,
      color: "chart1"
    }
  ];

  return (
    <>
      <SEO
        title="Hackathons - Innovation Through Real-Time Development Competitions"
        description="Join Fresherbot hackathons for hands-on coding competitions, cash prizes, recruitment opportunities, and real-world problem-solving experience."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Hackathons
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Innovation Through Real-Time Development Competitions
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At <strong className="text-primary">Fresherbot</strong>, our{' '}
                <Badge variant="outline" className="mx-1">Hackathons</Badge>{' '}
                provide students with the perfect platform to{' '}
                <Badge variant="outline" className="mx-1">innovate</Badge>,{' '}
                <Badge variant="outline" className="mx-1">code</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">create</Badge>.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  These real-time competitions encourage participants to <strong>think outside the box, solve real problems, 
                  and build working solutions</strong> under tight deadlines.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/register-hackathon">
                    <Rocket className="mr-2 h-5 w-5" />
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/host-hackathon">
                    <Building2 className="mr-2 h-5 w-5" />
                    Host a Hackathon
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Competition Types */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Competition Categories</Badge>
            <h2 className="text-4xl font-bold">Development Competition Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your specialty and compete in cutting-edge technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitionTypes.map((type, index) => (
              <Card key={index} className={`border-2 hover:border-${type.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${type.color}/20 to-${type.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <type.icon className={`h-10 w-10 text-${type.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription className="text-sm">{type.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {type.technologies.map((tech, techIndex) => (
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
            <Badge variant="secondary" className="px-4 py-2">Competition Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive hackathon experience designed for maximum learning and opportunity
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

        {/* Hackathon Process */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Competition Flow</Badge>
            <h2 className="text-4xl font-bold">How Our Hackathons Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured competition format designed for maximum innovation and collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hackathonProcess.map((step, index) => (
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

        {/* Industry Collaboration Highlight */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Industry Partnership</Badge>
            <h2 className="text-4xl font-bold">Real-Time Industry Exposure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience startup energy and workplace challenges with industry expert collaboration
            </p>
          </div>

          <Alert className="border-2 border-secondary/20 bg-gradient-to-r from-secondary/5 to-accent/5 max-w-4xl mx-auto">
            <Rocket className="h-5 w-5" />
            <AlertDescription className="text-lg">
              Hackathons are conducted in <strong>collaboration with industry experts</strong>. Students experience{' '}
              <strong>startup-like energy and workplace challenges</strong>, building the ability to{' '}
              <strong>deliver solutions under time constraints</strong>.
            </AlertDescription>
          </Alert>

          <div className="text-center">
            <Card className="bg-muted/30 border-2 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-secondary/20">
                    <AvatarImage src="api/placeholder/64/64" />
                    <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-lg">IE</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">Industry Experts</div>
                    <div className="text-sm text-muted-foreground">Real Workplace Experience</div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground italic">
                  "Students experience <strong className="text-secondary">startup-like energy</strong> and build{' '}
                  <strong className="text-accent">pressure-handling capabilities</strong> essential for tech careers."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Join */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                Why Join
              </Badge>
              <h2 className="text-4xl font-bold">Why Join Fresherbot Hackathons?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that accelerate your tech career through competitive coding
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
            <Badge variant="secondary" className="px-4 py-2">Competition Results</Badge>
            <h2 className="text-4xl font-bold">Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable benefits that transform students into confident tech professionals
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
              <h3 className="text-2xl font-bold mb-2">Hackathon Success Metrics</h3>
              <p className="text-muted-foreground">Real results from our development competitions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Hackathons Hosted", value: "150+", progress: 95 },
                { label: "Participants", value: "8,000+", progress: 90 },
                { label: "Prize Money Awarded", value: "₹50L+", progress: 85 },
                { label: "Recruitment Success", value: "78%", progress: 78 }
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
                Ready to Compete?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Turn Your Ideas into Reality</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of developers who have transformed their careers through{' '}
                <strong>competitive coding, innovation challenges, and direct recruitment opportunities</strong>. 
                Compete, innovate, and get hired with Fresherbot Hackathons.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/register-hackathon">
                  <Rocket className="mr-2 h-5 w-5" />
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/host-hackathon">
                  <Building2 className="mr-2 h-5 w-5" />
                  Host a Hackathon
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                <Code className="inline h-4 w-4 mr-1" />
                <strong>Pure Development</strong> • <strong>Cash Prizes</strong> • <strong>Direct Recruitment</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HackathonsPage;