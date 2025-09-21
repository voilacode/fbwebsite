import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Progress } from '@voilajsx/uikit/progress';
import {
  Users,
  Calendar,
  TrendingUp,
  CheckCircle,
  Building2,
  GraduationCap,
  BarChart3,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  PlayCircle,
  FileText,
  ClipboardList,
  UserCheck,
  BookOpen,
  Settings,
  Zap,
  Database,
  PieChart,
  Calendar as CalendarIcon,
  ChevronRight,
  Eye,
  Briefcase,
  School
} from 'lucide-react';
import { SEO } from '../components';

export const TMSPlatformPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Database,
      title: "Comprehensive Student Records",
      description: "Maintain complete academic records with centralized database access",
      color: "primary",
      items: [
        { title: "Complete Academic Records", description: "Every student's academic history maintained", icon: FileText },
        { title: "Centralized Database", description: "Student details, performance, and progress", icon: Database },
        { title: "Easy Access Control", description: "Management, trainers, and administrators", icon: Eye }
      ]
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Track student attendance across the entire academic year",
      color: "secondary",
      items: [
        { title: "Year-Round Tracking", description: "Monitor attendance throughout academic year", icon: CalendarIcon },
        { title: "Automated Reports", description: "Classes attended and missed analytics", icon: ClipboardList },
        { title: "Engagement Insights", description: "Student participation and involvement metrics", icon: TrendingUp }
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Monitor individual and batch-level performance with detailed insights",
      color: "accent",
      items: [
        { title: "Individual & Batch Tracking", description: "Personal and group performance monitoring", icon: Users },
        { title: "Test Participation", description: "Number of tests attended and completed", icon: CheckCircle },
        { title: "Strength Analysis", description: "Student strengths and improvement areas", icon: Target }
      ]
    },
    {
      icon: Settings,
      title: "Trainer & Curriculum Management",
      description: "Streamlined curriculum planning with trainer and session management",
      color: "chart1",
      items: [
        { title: "Curriculum Planning", description: "Streamlined scheduling and course design", icon: BookOpen },
        { title: "Trainer Management", description: "Manage trainers, sessions, and feedback", icon: UserCheck },
        { title: "Industry Alignment", description: "Bridge skill gaps with industry programs", icon: Briefcase }
      ]
    }
  ];

  const benefits = [
    "End-to-end training workflow automation",
    "Attendance & performance tracking for the entire academic year",
    "Actionable insights into student engagement & test participation",
    "Trainer & curriculum management made easy",
    "Helps institutions bridge the skill gap with industry-driven programs"
  ];

  const useCases = [
    {
      title: "Colleges & Universities",
      description: "Monitor academic progress & student performance comprehensively",
      icon: GraduationCap,
      color: "primary"
    },
    {
      title: "Training Institutes",
      description: "Manage multiple trainers, batches, and schedules efficiently",
      icon: School,
      color: "secondary"
    },
    {
      title: "Recruitment Drives",
      description: "Evaluate training effectiveness before placements",
      icon: Building2,
      color: "accent"
    }
  ];

  const managementAreas = [
    {
      title: "Student Management",
      description: "Complete student lifecycle tracking",
      features: ["Academic Records", "Attendance Tracking", "Performance Monitoring", "Progress Reports"],
      icon: Users,
      color: "primary"
    },
    {
      title: "Training Management",
      description: "Comprehensive training program control",
      features: ["Curriculum Design", "Session Scheduling", "Trainer Assignment", "Resource Planning"],
      icon: BookOpen,
      color: "secondary"
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and reporting",
      features: ["Performance Analytics", "Attendance Reports", "Engagement Metrics", "Success Tracking"],
      icon: BarChart3,
      color: "accent"
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot TMS Platform - Smarter Training Management for Institutions"
        description="Comprehensive Training Management System for end-to-end training workflows, student records, attendance tracking, and performance analytics."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  Fresherbot TMS Platform
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Smarter Training Management for Institutions
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The <strong className="text-primary">Fresherbot Training Management System (TMS)</strong> is designed to simplify and digitize{' '}
                <Badge variant="outline" className="mx-1">end-to-end training workflows</Badge>{' '}
                for colleges, universities, and training providers.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  From curriculum design to student performance tracking, our TMS ensures{' '}
                  <strong>complete transparency and control</strong> for institutions.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Management Areas Overview */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Overview</Badge>
            <h2 className="text-4xl font-bold">Complete Training Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive control over every aspect of institutional training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementAreas.map((area, index) => (
              <Card key={index} className={`border-2 hover:border-${area.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${area.color}/20 to-${area.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <area.icon className={`h-10 w-10 text-${area.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-muted/50 border rounded-lg p-3 text-sm text-center hover:bg-muted/80 transition-colors">
                        {feature}
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
            <Badge variant="secondary" className="px-4 py-2">Platform Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed for efficient training management and student success
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

        {/* Training Workflow */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Training Workflow</Badge>
            <h2 className="text-4xl font-bold">End-to-End Training Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete training lifecycle from planning to performance evaluation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: "1", 
                title: "Plan Curriculum", 
                desc: "Design and schedule comprehensive training programs",
                icon: BookOpen,
                color: "primary"
              },
              { 
                number: "2", 
                title: "Manage Trainers", 
                desc: "Assign trainers and coordinate training sessions",
                icon: UserCheck,
                color: "secondary"
              },
              { 
                number: "3", 
                title: "Track Progress", 
                desc: "Monitor attendance and student engagement",
                icon: BarChart3,
                color: "accent"
              },
              { 
                number: "4", 
                title: "Analyze Results", 
                desc: "Evaluate performance and training effectiveness",
                icon: PieChart,
                color: "chart1"
              }
            ].map((step, index) => (
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

        {/* Why Choose */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Why Choose Us
              </Badge>
              <h2 className="text-4xl font-bold">Why Choose Fresherbot TMS?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that streamline training management and improve outcomes
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

        {/* Use Cases */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Use Cases</Badge>
            <h2 className="text-4xl font-bold">Who Benefits from Our TMS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored training management solutions for different institutional needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`border-2 hover:border-${useCase.color}/50 transition-all duration-300 hover:shadow-xl group text-center`}>
                <CardHeader className="space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${useCase.color}/20 to-${useCase.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <useCase.icon className={`h-10 w-10 text-${useCase.color}`} />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl" />
          <div className="relative p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Training Management Impact</h3>
              <p className="text-muted-foreground">Real metrics from institutions using Fresherbot TMS</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Student Records", value: "100K+", progress: 95 },
                { label: "Attendance Accuracy", value: "99%", progress: 99 },
                { label: "Training Programs", value: "500+", progress: 85 },
                { label: "Institution Satisfaction", value: "96%", progress: 96 }
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
                Transform Your Training
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Take Control of Your Training Programs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join hundreds of institutions who trust Fresherbot TMS for comprehensive training management, 
                student tracking, and performance analytics.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/demo">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Get Started
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                📊 <strong>Complete Training Control</strong> • <strong>Performance Analytics</strong> • <strong>24/7 Support</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TMSPlatformPage;