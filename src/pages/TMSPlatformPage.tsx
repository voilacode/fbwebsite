import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
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
  School,
  Monitor,
  Shield,
  Globe,
  Network,
  Headphones,
  Star,
  Clock,
  Brain
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const TMSPlatformPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Database,
      title: "Comprehensive Student Records Management",
      description: "Maintain complete academic records with centralized database access, ensuring every student's academic history and progress is tracked systematically for institutional transparency",
      color: "primary",
      items: [
        {
          title: "Complete Academic Records",
          description: "Comprehensive academic history maintenance with detailed performance tracking and milestone documentation",
          icon: FileText
        },
        {
          title: "Centralized Database Access",
          description: "Unified student data repository with secure access control for management, trainers, and administrators",
          icon: Database
        },
        {
          title: "Access Control Management",
          description: "Role-based permissions ensuring appropriate data access for different user types and administrative levels",
          icon: Eye
        }
      ]
    },
    {
      icon: Calendar,
      title: "Advanced Attendance Tracking System",
      description: "Track student attendance across the entire academic year with automated reporting, engagement insights, and participation analytics for comprehensive monitoring",
      color: "secondary",
      items: [
        {
          title: "Year-Round Attendance Monitoring",
          description: "Continuous attendance tracking throughout the academic year with real-time updates and notifications",
          icon: CalendarIcon
        },
        {
          title: "Automated Attendance Reports",
          description: "Intelligent reporting system analyzing classes attended, missed sessions, and attendance patterns",
          icon: ClipboardList
        },
        {
          title: "Engagement Analytics",
          description: "Deep insights into student participation levels, involvement metrics, and engagement trends",
          icon: TrendingUp
        }
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics & Intelligence",
      description: "Monitor individual and batch-level performance with detailed insights, test participation tracking, and strength analysis for data-driven educational decisions",
      color: "accent",
      items: [
        {
          title: "Individual & Batch Performance",
          description: "Comprehensive tracking of personal achievements and group performance metrics with comparative analysis",
          icon: Users
        },
        {
          title: "Test Participation Analytics",
          description: "Detailed monitoring of test attendance, completion rates, and assessment engagement patterns",
          icon: CheckCircle
        },
        {
          title: "Strength & Improvement Analysis",
          description: "AI-powered insights identifying student strengths, weaknesses, and targeted improvement recommendations",
          icon: Target
        }
      ]
    },
    {
      icon: Settings,
      title: "Trainer & Curriculum Management Hub",
      description: "Streamlined curriculum planning with comprehensive trainer and session management, ensuring optimal resource allocation and industry-aligned program delivery",
      color: "chart1",
      items: [
        {
          title: "Advanced Curriculum Planning",
          description: "Sophisticated scheduling and course design tools with industry alignment and competency mapping",
          icon: BookOpen
        },
        {
          title: "Trainer Management System",
          description: "Complete trainer lifecycle management including assignments, performance tracking, and feedback systems",
          icon: UserCheck
        },
        {
          title: "Industry Alignment Programs",
          description: "Strategic skill gap analysis and industry-driven program development for enhanced employability",
          icon: Briefcase
        }
      ]
    }
  ];

  const managementFormats = [
    {
      title: "Student Lifecycle Management",
      description: "Complete student journey tracking from enrollment to graduation with comprehensive record keeping",
      technologies: ["Academic Records", "Progress Tracking", "Performance Analytics", "Milestone Management"],
      icon: Users,
      color: "primary",
      duration: "Full Academic Year",
      format: "Comprehensive Tracking"
    },
    {
      title: "Training Program Administration",
      description: "End-to-end training program management with curriculum design and trainer coordination",
      technologies: ["Curriculum Design", "Session Scheduling", "Trainer Assignment", "Resource Planning"],
      icon: BookOpen,
      color: "secondary",
      duration: "Program-based",
      format: "Administrative Control"
    },
    {
      title: "Attendance & Engagement Monitoring",
      description: "Real-time attendance tracking with engagement analytics and participation insights",
      technologies: ["Real-time Tracking", "Engagement Metrics", "Participation Analysis", "Automated Reports"],
      icon: Calendar,
      color: "accent",
      duration: "Daily Monitoring",
      format: "Live Tracking System"
    },
    {
      title: "Performance Analytics Dashboard",
      description: "Comprehensive analytics and reporting for data-driven educational decision making",
      technologies: ["Performance Metrics", "Batch Analytics", "Trend Analysis", "Predictive Insights"],
      icon: BarChart3,
      color: "chart1",
      duration: "Real-time Analytics",
      format: "Intelligence Platform"
    }
  ];

  const managementAreas = [
    {
      title: "Student Management",
      description: "Complete student lifecycle tracking and performance monitoring",
      features: ["Academic Records", "Attendance Tracking", "Performance Monitoring", "Progress Reports"],
      icon: Users,
      color: "primary",
      benefits: ["Comprehensive tracking", "Real-time monitoring", "Performance insights", "Progress analytics"]
    },
    {
      title: "Training Management",
      description: "Comprehensive training program control and curriculum administration",
      features: ["Curriculum Design", "Session Scheduling", "Trainer Assignment", "Resource Planning"],
      icon: BookOpen,
      color: "secondary",
      benefits: ["Program optimization", "Resource efficiency", "Quality assurance", "Schedule management"]
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive reporting capabilities",
      features: ["Performance Analytics", "Attendance Reports", "Engagement Metrics", "Success Tracking"],
      icon: BarChart3,
      color: "accent",
      benefits: ["Data-driven decisions", "Performance insights", "Trend analysis", "Success metrics"]
    }
  ];

  const benefits = [
    "End-to-end training workflow automation with comprehensive digital management",
    "Attendance & performance tracking for the entire academic year with real-time insights",
    "Actionable insights into student engagement, test participation, and learning patterns",
    "Trainer & curriculum management made simple with automated scheduling and coordination",
    "Helps institutions bridge skill gaps with industry-driven programs and competency mapping",
    "Comprehensive analytics and reporting for data-driven educational decision making"
  ];

  const successMetrics = [
    { label: "Student Records Managed", value: "100K+", description: "Comprehensive tracking", progress: 95 },
    { label: "Attendance Accuracy", value: "99%", description: "Real-time monitoring", progress: 99 },
    { label: "Training Programs", value: "500+", description: "Active management", progress: 88 },
    { label: "Institution Satisfaction", value: "96%", description: "Platform effectiveness", progress: 96 }
  ];

  const useCases = [
    {
      title: "Educational Institutions",
      description: "Universities and colleges seeking comprehensive academic progress monitoring",
      icon: GraduationCap,
      benefits: ["Academic record management", "Performance tracking", "Attendance monitoring", "Progress analytics"]
    },
    {
      title: "Training Organizations",
      description: "Professional training institutes managing multiple programs and trainers",
      icon: School,
      benefits: ["Multi-program management", "Trainer coordination", "Schedule optimization", "Resource planning"]
    },
    {
      title: "Corporate Training",
      description: "Companies evaluating training effectiveness before recruitment drives",
      icon: Building2,
      benefits: ["Training effectiveness", "Skill assessment", "Performance evaluation", "ROI measurement"]
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot TMS Platform - Smarter Training Management for Modern Institutions"
        description="Comprehensive Training Management System for end-to-end training workflows, student records, attendance tracking, and performance analytics with advanced reporting capabilities."
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
                    <Users className="w-4 h-4" />
                    Training Management Platform
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Smarter Training
                    </span>
                    <br />
                    Management for Institutions
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Digitize <strong className="text-foreground">end-to-end training workflows</strong> with <strong className="text-foreground">comprehensive analytics</strong> and <strong className="text-foreground">intelligent automation</strong> for modern institutions.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Student Records</div>
                      <div className="text-xs text-muted-foreground">Complete tracking</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Attendance</div>
                      <div className="text-xs text-muted-foreground">Real-time monitoring</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Analytics</div>
                      <div className="text-xs text-muted-foreground">Performance insights</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/demo">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Schedule Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Complete automation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Real-time tracking
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Advanced analytics
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                    src={asset('product/tms/training-management.png')}
                    alt="Fresherbot TMS Training Management Platform"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">100K+</div>
                    <div className="text-sm text-muted-foreground">Records</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">99%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Management Formats Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Management Modules</Badge>
            <h2 className="text-4xl font-bold">Choose Your Management Approach</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Multiple management modules designed for different institutional needs and training objectives. Each module offers comprehensive tools for effective training administration and student success monitoring.
            </p>
          </div>
          
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="student" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('product/tms/student-management.png')}
                      alt="Student Lifecycle Management"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="h-6 w-6 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">Full Academic Year</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Comprehensive Tracking</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Student Lifecycle Management</CardTitle>
                        <CardDescription className="text-lg">Complete student journey tracking from enrollment to graduation with comprehensive record keeping</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Academic Records", "Progress Tracking", "Performance Analytics", "Milestone Management"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-primary" />
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
            
            <TabsContent value="training" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('product/tms/training-administration.png')}
                      alt="Training Program Administration"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="h-6 w-6 text-secondary" />
                          <Badge variant="outline" className="text-secondary border-secondary">Program-based</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Administrative Control</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Training Program Administration</CardTitle>
                        <CardDescription className="text-lg">End-to-end training program management with curriculum design and trainer coordination</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Curriculum Design", "Session Scheduling", "Trainer Assignment", "Resource Planning"].map((activity, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-4 h-4 text-secondary" />
                            </div>
                            <div>
                              <div className="font-semibold">{activity}</div>
                              <div className="text-xs text-muted-foreground">Admin function</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="attendance" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('product/tms/attendance-monitoring.png')}
                      alt="Attendance & Engagement Monitoring"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Calendar className="h-6 w-6 text-accent" />
                          <Badge variant="outline" className="text-accent border-accent">Daily Monitoring</Badge>
                          <Badge variant="outline" className="text-chart1 border-chart1">Live Tracking System</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Attendance & Engagement Monitoring</CardTitle>
                        <CardDescription className="text-lg">Real-time attendance tracking with engagement analytics and participation insights</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Real-time Tracking", "Engagement Metrics", "Participation Analysis", "Automated Reports"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{feature}</div>
                              <div className="text-xs text-muted-foreground">Tracking feature</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('product/tms/performance-dashboard.png')}
                      alt="Performance Analytics Dashboard"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <BarChart3 className="h-6 w-6 text-chart1" />
                          <Badge variant="outline" className="text-chart1 border-chart1">Real-time Analytics</Badge>
                          <Badge variant="outline" className="text-primary border-primary">Intelligence Platform</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Performance Analytics Dashboard</CardTitle>
                        <CardDescription className="text-lg">Comprehensive analytics and reporting for data-driven educational decision making</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Performance Metrics", "Batch Analytics", "Trend Analysis", "Predictive Insights"].map((metric, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-chart1/10 rounded-lg flex items-center justify-center">
                              <BarChart3 className="w-4 h-4 text-chart1" />
                            </div>
                            <div>
                              <div className="font-semibold">{metric}</div>
                              <div className="text-xs text-muted-foreground">Analytics component</div>
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
            <Badge variant="secondary" className="px-4 py-2">Platform Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Comprehensive TMS platform designed for maximum training effectiveness, institutional efficiency, and student success through advanced management tools and analytics.
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
                            index === 0 ? asset('product/tms/student-records.png') :
                            index === 1 ? asset('product/tms/attendance-tracking.png') :
                            index === 2 ? asset('product/tms/performance-analyticss.png') :
                            index === 3 ? asset('product/tms/curriculum-management.png') :
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
                          Feature {index + 1}
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
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Management Areas */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Management Areas</Badge>
            <h2 className="text-4xl font-bold">Complete Training Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive control over every aspect of institutional training programs and student development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementAreas.map((area, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <area.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{area.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">Key Features:</div>
                    <div className="grid grid-cols-1 gap-1">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">Benefits:</div>
                    <div className="grid grid-cols-1 gap-1">
                      {area.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Use Cases */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Use Cases</Badge>
            <h2 className="text-4xl font-bold">Who Benefits from Our TMS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored training management solutions for different institutional needs and organizational objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">Key Benefits:</div>
                    <div className="grid grid-cols-1 gap-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Choose */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-4 md:p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Why Choose Our TMS
              </Badge>
              <h2 className="text-4xl font-bold">Why Choose Fresherbot TMS?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive training management platform that streamlines operations and improves educational outcomes
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

        {/* Success Metrics */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Impact</Badge>
            <h2 className="text-4xl font-bold">TMS Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our comprehensive training management platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">{metric.value}</div>
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                    <CardDescription className="text-sm">{metric.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
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
                  Transform Your Training
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Take Complete Control of Your Training Programs</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join hundreds of institutions who trust Fresherbot TMS for comprehensive training management, 
                  student tracking, and performance analytics that drive real educational outcomes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Schedule Demo
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

              <div className="pt-6">
                <div className="text-sm text-muted-foreground flex flex-wrap justify-center lg:justify-start gap-4">
                  <span>✅ <strong>Complete Automation</strong></span>
                  <span>✅ <strong>Real-time Tracking</strong></span>
                  <span>✅ <strong>Advanced Analytics</strong></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <video
                  src={asset('product/tms/tmsvideo.mp4')}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                 
                >
                  Video not supported
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

export default TMSPlatformPage