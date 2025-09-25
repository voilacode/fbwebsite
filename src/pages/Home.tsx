import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Progress } from '@voilajsx/uikit/progress';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  ArrowRight, Users, Brain, Target, Shield, Award, TrendingUp,
  CheckCircle, Building2, GraduationCap, Globe, Zap, Sparkles, Play,
  Rocket, Mail, Phone, MapPin, BookOpen, Calendar, Mic, Handshake,
  BarChart3, Database, Settings, Code, Video, FileText, Network,
  Star, Clock, Eye, Lightbulb, Monitor, PieChart
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const HomePage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Target,
      title: "End-to-End Recruitment Management",
      description: "Complete recruitment lifecycle management from talent identification to final placement with automated workflows, real-time tracking, and comprehensive analytics for optimal hiring outcomes",
      color: "primary",
      items: [
        {
          title: "Automated Assessment Workflows",
          description: "Streamlined assessment processes with intelligent automation and candidate progression tracking",
          icon: Settings
        },
        {
          title: "Real-time Candidate Tracking",
          description: "Live monitoring of candidate progress through recruitment pipeline with instant updates",
          icon: Eye
        },
        {
          title: "Integrated Communication Tools",
          description: "Seamless communication platform connecting recruiters, candidates, and hiring managers",
          icon: Network
        }
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Assessment Engine",
      description: "Advanced machine learning algorithms for precise talent evaluation with bias-free, scalable assessment capabilities, predictive analytics, and instant result generation for informed hiring decisions",
      color: "secondary",
      items: [
        {
          title: "Predictive Analytics Intelligence",
          description: "AI-driven insights predicting candidate success and performance potential with high accuracy",
          icon: Brain
        },
        {
          title: "Bias-Free Evaluation System",
          description: "Objective assessment methodology eliminating unconscious bias for fair candidate evaluation",
          icon: Shield
        },
        {
          title: "Multi-Domain Assessment Suite",
          description: "Comprehensive evaluation across technical, cognitive, and behavioral competencies",
          icon: Target
        }
      ]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Training Ecosystem",
      description: "Industry-aligned skill development programs with expert-led training modules, personalized learning paths, and comprehensive skill gap analysis for enhanced employability and career readiness",
      color: "accent",
      items: [
        {
          title: "40+ Industry-Relevant Courses",
          description: "Extensive course library covering technology, business skills, and professional development",
          icon: BookOpen
        },
        {
          title: "Expert Instructor Network",
          description: "Access to industry professionals and subject matter experts for high-quality training delivery",
          icon: Users
        },
        {
          title: "Personalized Learning Paths",
          description: "Adaptive learning routes tailored to individual skill levels and career objectives",
          icon: Lightbulb
        }
      ]
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security infrastructure with comprehensive audit trails, data protection protocols, and regulatory compliance ensuring complete data security and privacy protection",
      color: "chart1",
      items: [
        {
          title: "ISO 27001 Certified Security",
          description: "International standard compliance for information security management systems",
          icon: Shield
        },
        {
          title: "GDPR Compliant Operations",
          description: "Full compliance with global data protection regulations and privacy requirements",
          icon: FileText
        },
        {
          title: "24/7 Security Monitoring",
          description: "Continuous security surveillance with real-time threat detection and response",
          icon: Clock
        }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: "Campus Recruitment Platform",
      description: "Complete recruitment lifecycle management with AI-powered assessments",
      technologies: ["AI Assessments", "Workflow Automation", "Candidate Tracking", "Analytics Dashboard"],
      icon: Target,
      color: "primary",
      duration: "End-to-End",
      format: "Recruitment Suite"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive digital learning platform with 40+ industry-relevant courses",
      technologies: ["Video Learning", "Interactive Assessments", "Progress Tracking", "Skill Analytics"],
      icon: BookOpen,
      color: "secondary",
      duration: "Self-Paced",
      format: "Learning Platform"
    },
    {
      title: "Training Management System",
      description: "Complete training workflow automation with attendance and performance tracking",
      technologies: ["Student Records", "Attendance Tracking", "Performance Analytics", "Curriculum Management"],
      icon: Database,
      color: "accent",
      duration: "Full Academic Year",
      format: "Management System"
    },
    {
      title: "Professional Development Programs",
      description: "HR Campus Connect and Founder Talks for industry exposure and inspiration",
      technologies: ["HR Interactions", "Founder Sessions", "Industry Insights", "Career Guidance"],
      icon: Handshake,
      color: "chart1",
      duration: "Session-Based",
      format: "Professional Programs"
    }
  ];

  const stats = [
    { label: "Students Trained", value: "50,000+", growth: 85, icon: Users, description: "Across multiple domains" },
    { label: "Partner Universities", value: "100+", growth: 92, icon: GraduationCap, description: "Leading institutions" },
    { label: "Hiring Partners", value: "500+", growth: 78, icon: Building2, description: "Global companies" },
    { label: "Placement Success", value: "87%", growth: 87, icon: TrendingUp, description: "Average success rate" }
  ];

  const universities = [
    "IIT Delhi", "IIT Mumbai", "NIT Trichy", "BITS Pilani", 
    "Anna University", "VIT University", "SRM University", "KIIT University"
  ];

  const companies = [
    "Microsoft", "Google", "Amazon", "TCS", "Infosys", 
    "Wipro", "Accenture", "IBM", "HCL", "Tech Mahindra"
  ];

  const successStories = [
    {
      title: "Premier Technical University",
      type: "Education Partner",
      icon: GraduationCap,
      color: "primary",
      metrics: [
        { label: "Students Assessed", value: "10,000+", color: "primary" },
        { label: "Higher Conversions", value: "35%", color: "secondary" },
        { label: "Time Saved", value: "60%", color: "accent" }
      ],
      quote: "Fresherbot's AI-powered platform revolutionized our placement process with exceptional results.",
      progress: 85
    },
    {
      title: "Fortune 500 Technology Company",
      type: "Corporate Partner", 
      icon: Building2,
      color: "secondary",
      metrics: [
        { label: "Cost Reduction", value: "40%", color: "secondary" },
        { label: "HR Satisfaction", value: "95%", color: "primary" },
        { label: "Faster Hiring", value: "50%", color: "accent" }
      ],
      quote: "The automated workflows transformed our campus recruitment ROI with measurable business impact.",
      progress: 92
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot - Transform Campus Recruitment with AI-Powered Solutions"
        description="Enterprise-grade campus recruitment platform trusted by 100+ universities and 500+ companies. AI-powered assessments, comprehensive training, and end-to-end recruitment management."
      />
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden md:py-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

          <div className="relative container mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-10">
                <div className="space-y-6">
                  <Badge variant="secondary" className="bg-muted text-foreground inline-flex items-center gap-2 px-4 py-2">
                    <Sparkles className="w-4 h-4" />
                    AI-Powered Campus Recruitment Platform
                  </Badge>

                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                        Building Your Career?
                      </span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                      We've Got This Together
                    </h2>
                  </div>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Revolutionize campus hiring with <strong className="text-foreground">AI-powered assessments</strong>, <strong className="text-foreground">seamless training</strong>, and <strong className="text-foreground">end-to-end recruitment management</strong>.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">AI-Powered</div>
                      <div className="text-xs text-muted-foreground">Smart assessments</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">End-to-End</div>
                      <div className="text-xs text-muted-foreground">Complete solution</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Enterprise</div>
                      <div className="text-xs text-muted-foreground">Secure & scalable</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/get-started">
                      <Rocket className="mr-2 h-5 w-5" />
                      Get Started Today
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/demo">
                      Watch Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Enterprise security
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    ISO certified
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Global reach
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                    src={asset('home/fresherbot.png')}
                    alt="Fresherbot Platform Dashboard"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">87%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Live Impact Alert */}
        <section className="container mx-auto px-8">
          <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-5xl mx-auto">
            <TrendingUp className="h-5 w-5" />
            <AlertDescription className="text-lg font-medium">
              <strong>Live Impact:</strong> Over 50,000 students trained with 87% placement success rate across 100+ universities and 500+ companies globally
            </AlertDescription>
          </Alert>
        </section>

        {/* Solutions Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Solutions</Badge>
            <h2 className="text-4xl font-bold">Choose Your Solution Approach</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Comprehensive suite of solutions designed for different recruitment and training objectives. Each solution offers unique capabilities for effective talent management and student success.
            </p>
          </div>
          
          <Tabs defaultValue="recruitment" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto">
              <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recruitment" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('home/campus placements.png')}
                      alt="Campus Recruitment Platform"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="h-6 w-6 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">End-to-End</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Recruitment Suite</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Campus Recruitment Platform</CardTitle>
                        <CardDescription className="text-lg">Complete recruitment lifecycle management with AI-powered assessments</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["AI Assessments", "Workflow Automation", "Candidate Tracking", "Analytics Dashboard"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Target className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{feature}</div>
                              <div className="text-xs text-muted-foreground">Platform component</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="learning" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('home/learning-platform.png')}
                      alt="Learning Management System"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="h-6 w-6 text-secondary" />
                          <Badge variant="outline" className="text-secondary border-secondary">Self-Paced</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Learning Platform</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Learning Management System</CardTitle>
                        <CardDescription className="text-lg">Comprehensive digital learning platform with 40+ industry-relevant courses</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Video Learning", "Interactive Assessments", "Progress Tracking", "Skill Analytics"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-4 h-4 text-secondary" />
                            </div>
                            <div>
                              <div className="font-semibold">{feature}</div>
                              <div className="text-xs text-muted-foreground">Learning feature</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('home/training-management.png')}
                      alt="Training Management System"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Database className="h-6 w-6 text-accent" />
                          <Badge variant="outline" className="text-accent border-accent">Full Academic Year</Badge>
                          <Badge variant="outline" className="text-chart1 border-chart1">Management System</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Training Management System</CardTitle>
                        <CardDescription className="text-lg">Complete training workflow automation with attendance and performance tracking</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Student Records", "Attendance Tracking", "Performance Analytics", "Curriculum Management"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Database className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{feature}</div>
                              <div className="text-xs text-muted-foreground">Management component</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="development" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('home/professional-development.png')}
                      alt="Professional Development Programs"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Handshake className="h-6 w-6 text-chart1" />
                          <Badge variant="outline" className="text-chart1 border-chart1">Session-Based</Badge>
                          <Badge variant="outline" className="text-primary border-primary">Professional Programs</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Professional Development Programs</CardTitle>
                        <CardDescription className="text-lg">HR Campus Connect and Founder Talks for industry exposure and inspiration</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["HR Interactions", "Founder Sessions", "Industry Insights", "Career Guidance"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-chart1/10 rounded-lg flex items-center justify-center">
                              <Handshake className="w-4 h-4 text-chart1" />
                            </div>
                            <div>
                              <div className="font-semibold">{feature}</div>
                              <div className="text-xs text-muted-foreground">Development program</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-12" />

        {/* Key Features */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Capabilities</Badge>
            <h2 className="text-4xl font-bold">Advanced Recruitment Technology</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Enterprise-grade solutions designed for modern campus recruitment challenges with comprehensive features for optimal hiring outcomes and student success.
            </p>
          </div>
          
          <div className="space-y-16">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden my-6">
                <div className={`grid lg:grid-cols-5 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Feature Image */}
                  <div className={`lg:col-span-2 relative ${index % 2 === 1 ? 'lg:col-start-4' : ''} flex items-center justify-center p-6`}>
                    <div className="relative w-full max-w-sm mx-auto">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/20 via-${feature.color}/10 to-transparent z-10`} />
                        <img
                          src={
                            index === 0 ? asset('home/recruitment-management.png') :
                            index === 1 ? asset('home/ai-assessment-engine.png') :
                            index === 2 ? asset('home/training-ecosystem.png') :
                            index === 3 ? asset('home/enterprise-security.png') :
                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                          }
                          alt={`${feature.title} illustration`}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-${feature.color}/40 to-${feature.color}/30 rounded-2xl flex items-center justify-center z-20 backdrop-blur-sm border border-white/20`}>
                          <feature.icon className={`h-7 w-7 text-${feature.color}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className={`lg:col-span-3 p-4 md:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Badge variant="secondary" className="px-3 py-1">
                          Capability {index + 1}
                        </Badge>
                        <CardTitle className="text-3xl font-bold">{feature.title}</CardTitle>
                        <CardDescription className="text-lg leading-relaxed">{feature.description}</CardDescription>
                      </div>

                      <div className="grid grid-cols-1 gap-3">
                        {feature.items.map((item, itemIndex) => (
                          <Card key={itemIndex} className="border bg-muted/30 hover:bg-muted/50 transition-colors py-3 px-1 my-1">
                            <CardContent className="px-3 py-2 flex items-start gap-3">
                              <div className={`w-8 h-8 bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <item.icon className={`h-4 w-4 text-${feature.color}`} />
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-semibold text-base leading-tight">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Button className="w-full sm:w-auto" asChild>
                        <Link to={`/${index === 0 ? 'recruitment' : index === 1 ? 'assessments' : index === 2 ? 'lms' : 'security'}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Stats Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Impact</Badge>
            <h2 className="text-4xl font-bold">Proven Results & Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real metrics demonstrating the effectiveness of our comprehensive recruitment platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <CardTitle className="text-lg">{stat.label}</CardTitle>
                    <CardDescription className="text-sm">{stat.description}</CardDescription>
                    <Progress value={stat.growth} className="h-2" />
                    <div className="text-xs text-muted-foreground">+{stat.growth}% growth</div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Partners Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Trusted Partners</Badge>
            <h2 className="text-4xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnering with premier educational institutions and Fortune 500 companies globally
            </p>
          </div>
          
          <Tabs defaultValue="universities" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="universities" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Universities
              </TabsTrigger>
              <TabsTrigger value="companies" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Companies
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="universities" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Premier Universities
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Leading educational institutions trust Fresherbot for campus recruitment excellence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {universities.map((university, index) => (
                      <Card key={index} className="border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 text-center space-y-3">
                          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="font-medium text-sm">{university}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="companies" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                    Fortune 500 Companies
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Global corporations choose Fresherbot for strategic talent acquisition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {companies.map((company, index) => (
                      <Card key={index} className="border hover:border-secondary/50 transition-colors">
                        <CardContent className="p-4 text-center space-y-3">
                          <div className="w-10 h-10 mx-auto bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-secondary" />
                          </div>
                          <div className="font-medium text-sm">{company}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="my-12" />

        {/* Success Stories */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-4 md:p-10 space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">Success Stories</Badge>
              <h2 className="text-4xl font-bold">Proven Results</h2>
              <p className="text-xl text-muted-foreground">Real impact from our platform implementations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {successStories.map((story, index) => (
                <Card key={index} className="border-2 bg-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-${story.color}/10 rounded-lg flex items-center justify-center`}>
                        <story.icon className={`h-6 w-6 text-${story.color}`} />
                      </div>
                      <div>
                        <CardTitle className={`text-${story.color}`}>{story.title}</CardTitle>
                        <Badge variant="outline">{story.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex}>
                          <div className={`text-2xl font-bold text-${metric.color}`}>{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <Progress value={story.progress} className="h-3" />
                    <blockquote className="text-muted-foreground italic">
                      "{story.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl -z-10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-4 md:p-12">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left relative z-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Zap className="w-4 h-4 mr-2" />
                  Ready to Transform?
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Start Your Recruitment Revolution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join 500+ companies and 100+ universities who trust Fresherbot for intelligent, 
                  efficient, and successful campus recruitment that drives real results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/get-started">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Started with Fresherbot
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Talk to Our Team
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@fresherbot.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 7032309797</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <video
                  src={asset('home/home.mp4')}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                 
                >
                  Video not supporting
                </video>
              </div>

              {/* Floating Elements - Behind content */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;