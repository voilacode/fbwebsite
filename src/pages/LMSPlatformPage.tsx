import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  BookOpen,
  Play,
  TrendingUp,
  CheckCircle,
  Users,
  Building2,
  GraduationCap,
  BarChart3,
  Clock,
  Globe,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  PlayCircle,
  Video,
  PenTool,
  Brain,
  FileText,
  Monitor,
  Zap,
  Code,
  Briefcase,
  MessageCircle,
  ChevronRight,
  Lightbulb,
  Settings,
  Eye,
  Calendar,
  Shield,
  Network,
  Star,
  Headphones
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const LMSPlatformPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Course Library",
      description: "Access to 40+ industry-relevant courses across technology, business, and soft skills with expert-curated content designed for modern workforce requirements",
      color: "primary",
      items: [
        {
          title: "40+ Industry Courses",
          description: "Comprehensive course collection covering technology, business, and essential soft skills for career growth",
          icon: BookOpen
        },
        {
          title: "Expert Video Lectures",
          description: "High-quality content delivered by subject matter experts and industry professionals",
          icon: Video
        },
        {
          title: "Self-Paced Learning",
          description: "Learn any language, subject, or skill at your own pace with flexible scheduling options",
          icon: Clock
        }
      ]
    },
    {
      icon: Target,
      title: "Interactive Learning Modules",
      description: "Step-by-step course structure with assignments, quizzes, and practice exercises designed for maximum engagement and knowledge retention",
      color: "secondary",
      items: [
        {
          title: "Structured Navigation",
          description: "Well-organized course progression with clear learning pathways and milestone tracking",
          icon: Target
        },
        {
          title: "Integrated Exercises",
          description: "Hands-on assignments, interactive quizzes, and practical tasks for skill application",
          icon: PenTool
        },
        {
          title: "Adaptive Pathways",
          description: "Personalized learning routes based on individual progress and skill development needs",
          icon: Brain
        }
      ]
    },
    {
      icon: FileText,
      title: "Assessments & Test Preparation",
      description: "Integrated test environment with mock tests, real-time feedback, and comprehensive evaluation systems for skill validation and improvement",
      color: "accent",
      items: [
        {
          title: "Self-Evaluation Tests",
          description: "Built-in assessment environment for continuous skill evaluation and progress measurement",
          icon: FileText
        },
        {
          title: "Mock Examinations",
          description: "Practice exams that simulate real testing conditions to boost confidence and performance",
          icon: Award
        },
        {
          title: "Real-time Feedback",
          description: "Immediate insights and recommendations for continuous improvement and skill enhancement",
          icon: TrendingUp
        }
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Analytics & Insights",
      description: "Visual dashboards with detailed analytics for students and institutions, providing actionable insights for learning optimization and progress tracking",
      color: "chart1",
      items: [
        {
          title: "Progress Tracking",
          description: "Individual learning progress dashboards with comprehensive performance metrics and achievements",
          icon: BarChart3
        },
        {
          title: "Strength Analysis",
          description: "Detailed analytics on improvement areas, skill gaps, and learning recommendations",
          icon: Target
        },
        {
          title: "Institutional Insights",
          description: "Batch-level performance analytics for institutions to monitor overall learning outcomes",
          icon: Users
        }
      ]
    }
  ];

  const learningFormats = [
    {
      title: "Video-Based Learning",
      description: "Expert-led video lectures with interactive elements and practical demonstrations",
      technologies: ["HD Video Content", "Interactive Elements", "Expert Instructors", "Mobile Access"],
      icon: Video,
      color: "primary",
      duration: "Self-paced",
      format: "Video Lectures"
    },
    {
      title: "Interactive Assessments",
      description: "Quizzes, assignments, and mock tests with immediate feedback and progress tracking",
      technologies: ["Real-time Quizzes", "Assignments", "Mock Tests", "Instant Feedback"],
      icon: FileText,
      color: "secondary",
      duration: "Continuous",
      format: "Assessment Suite"
    },
    {
      title: "Practical Exercises",
      description: "Hands-on coding challenges, projects, and real-world problem-solving tasks",
      technologies: ["Coding Challenges", "Live Projects", "Problem Solving", "Skill Application"],
      icon: Code,
      color: "accent",
      duration: "Project-based",
      format: "Practical Labs"
    },
    {
      title: "Progress Analytics",
      description: "Comprehensive tracking and analytics for learning progress and skill development",
      technologies: ["Performance Metrics", "Learning Analytics", "Progress Reports", "Skill Mapping"],
      icon: BarChart3,
      color: "chart1",
      duration: "Real-time",
      format: "Analytics Dashboard"
    }
  ];

  const courseCategories = [
    {
      title: "Technology Courses",
      count: "20+",
      courses: ["Python Programming", "Java Development", "Web Development", "Data Science", "Machine Learning", "Cloud Computing"],
      icon: Code,
      color: "primary",
      description: "Cutting-edge technology skills for modern developers"
    },
    {
      title: "Business Skills",
      count: "15+",
      courses: ["Project Management", "Digital Marketing", "Business Analytics", "Leadership", "Entrepreneurship", "Finance"],
      icon: Briefcase,
      color: "secondary",
      description: "Essential business competencies for career advancement"
    },
    {
      title: "Soft Skills",
      count: "10+",
      courses: ["Communication", "Presentation Skills", "Team Building", "Time Management", "Problem Solving", "Critical Thinking"],
      icon: MessageCircle,
      color: "accent",
      description: "Interpersonal skills for professional success"
    }
  ];

  const benefits = [
    "Access to 40+ comprehensive courses across multiple domains and industries",
    "Interactive video-based learning with expert instructors and practical demonstrations",
    "Built-in quizzes, assignments, and comprehensive assessment systems",
    "Self-paced learning flexibility, accessible anytime and anywhere globally",
    "Actionable insights with detailed performance analytics and progress tracking",
    "Personalized learning pathways adapted to individual skill levels and goals"
  ];

  const successMetrics = [
    { label: "Active Courses", value: "40+", description: "Multi-domain curriculum", progress: 95 },
    { label: "Video Content Hours", value: "500+", description: "Expert-led lectures", progress: 92 },
    { label: "Practice Assessments", value: "1000+", description: "Skill evaluations", progress: 88 },
    { label: "Student Satisfaction", value: "95%", description: "Learning effectiveness", progress: 95 }
  ];

  const useCases = [
    {
      title: "Educational Institutions",
      description: "Universities and colleges seeking to enhance digital learning capabilities",
      icon: GraduationCap,
      benefits: ["Digital learning integration", "Student skill enhancement", "Performance tracking", "Curriculum supplementation"]
    },
    {
      title: "Individual Students",
      description: "Learners looking to gain additional skills and advance their careers",
      icon: Users,
      benefits: ["Skill development", "Career advancement", "Flexible learning", "Progress tracking"]
    },
    {
      title: "Training Organizations",
      description: "Corporate training providers and professional development companies",
      icon: Building2,
      benefits: ["Scalable training delivery", "Progress monitoring", "Custom learning paths", "Analytics insights"]
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot LMS Platform - Complete Digital Learning Ecosystem for Modern Education"
        description="Comprehensive Learning Management System with 40+ courses, interactive modules, assessments, and performance tracking for institutions and students worldwide."
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
                    <BookOpen className="w-4 h-4" />
                    Digital Learning Platform
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Complete Digital
                    </span>
                    <br />
                    Learning Ecosystem
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Empower students with <strong className="text-foreground">40+ industry courses</strong>, <strong className="text-foreground">interactive learning</strong>, and <strong className="text-foreground">comprehensive analytics</strong> in one platform.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">40+ Courses</div>
                      <div className="text-xs text-muted-foreground">Multi-domain learning</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Video Learning</div>
                      <div className="text-xs text-muted-foreground">Expert instructors</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Analytics</div>
                      <div className="text-xs text-muted-foreground">Progress tracking</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/courses">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Explore Courses
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/demo">
                      Request Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Self-paced learning
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Expert instructors
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Performance analytics
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                    src={asset('product/lms/lms logo.png')}
                    alt="Fresherbot LMS Digital Learning Platform"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">40+</div>
                    <div className="text-sm text-muted-foreground">Courses</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Learning Formats Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Learning Formats</Badge>
            <h2 className="text-4xl font-bold">Choose Your Learning Experience</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Multiple learning formats designed for different educational objectives and skill development needs. Each format offers unique opportunities for knowledge acquisition and practical skill application.
            </p>
          </div>
          
          <Tabs defaultValue="video" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
              <TabsTrigger value="video">Video</TabsTrigger>
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="practical">Practical</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="video" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('product/lms/video based.png')}
                      alt="Video-Based Learning"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Video className="h-6 w-6 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">Self-paced</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Video Lectures</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Video-Based Learning</CardTitle>
                        <CardDescription className="text-lg">Expert-led video lectures with interactive elements and practical demonstrations</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["HD Video Content", "Interactive Elements", "Expert Instructors", "Mobile Access"].map((feature, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Video className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{feature}</div>
                              <div className="text-xs text-muted-foreground">Learning component</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="assessment" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('product/lms/coding-quiz.png')}
                      alt="Interactive Assessments"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <FileText className="h-6 w-6 text-secondary" />
                          <Badge variant="outline" className="text-secondary border-secondary">Continuous</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Assessment Suite</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Interactive Assessments</CardTitle>
                        <CardDescription className="text-lg">Quizzes, assignments, and mock tests with immediate feedback and progress tracking</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Real-time Quizzes", "Assignments", "Mock Tests", "Instant Feedback"].map((activity, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <FileText className="w-4 h-4 text-secondary" />
                            </div>
                            <div>
                              <div className="font-semibold">{activity}</div>
                              <div className="text-xs text-muted-foreground">Assessment type</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="practical" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('product/lms/problem-solving.png')}
                      alt="Practical Exercises"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Code className="h-6 w-6 text-accent" />
                          <Badge variant="outline" className="text-accent border-accent">Project-based</Badge>
                          <Badge variant="outline" className="text-chart1 border-chart1">Practical Labs</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Practical Exercises</CardTitle>
                        <CardDescription className="text-lg">Hands-on coding challenges, projects, and real-world problem-solving tasks</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Coding Challenges", "Live Projects", "Problem Solving", "Skill Application"].map((exercise, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Code className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{exercise}</div>
                              <div className="text-xs text-muted-foreground">Practical component</div>
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
                      src={asset('product/lms/performance matrics.png')}
                      alt="Progress Analytics"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <BarChart3 className="h-6 w-6 text-chart1" />
                          <Badge variant="outline" className="text-chart1 border-chart1">Real-time</Badge>
                          <Badge variant="outline" className="text-primary border-primary">Analytics Dashboard</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Progress Analytics</CardTitle>
                        <CardDescription className="text-lg">Comprehensive tracking and analytics for learning progress and skill development</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Performance Metrics", "Learning Analytics", "Progress Reports", "Skill Mapping"].map((metric, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-chart1/10 rounded-lg flex items-center justify-center">
                              <BarChart3 className="w-4 h-4 text-chart1" />
                            </div>
                            <div>
                              <div className="font-semibold">{metric}</div>
                              <div className="text-xs text-muted-foreground">Analytics feature</div>
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
              Comprehensive LMS platform designed for maximum learning effectiveness, student engagement, and skill development through advanced digital learning tools and analytics.
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
                            index === 0 ? asset('product/lms/courselibrary.png') :
                            index === 1 ? asset('product/lms/interactive-modules.png') :
                            index === 2 ? asset('product/lms/assessments-testing.png') :
                            index === 3 ? asset('product/lms/performance-analytics.png') :
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

        {/* Course Categories */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Course Categories</Badge>
            <h2 className="text-4xl font-bold">Explore Our Course Library</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive course collection across technology, business, and soft skills for complete professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <Card key={index} className={`border-2 hover:border-${category.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <category.icon className={`h-10 w-10 text-${category.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="outline" className="text-sm">{category.count} Courses</Badge>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="bg-muted/50 border rounded-lg p-3 text-sm text-center hover:bg-muted/80 transition-colors">
                        {course}
                      </div>
                    ))}
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
            <h2 className="text-4xl font-bold">Who Benefits from Our LMS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored learning solutions for different educational and professional development needs
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
                Why Choose Our LMS
              </Badge>
              <h2 className="text-4xl font-bold">Why Choose Fresherbot LMS?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital learning platform that transforms education delivery and student outcomes
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
            <h2 className="text-4xl font-bold">LMS Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our comprehensive digital learning platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <BookOpen className="h-8 w-8 text-primary" />
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
                  Start Learning Today
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Empower Your Students with Next-Generation Digital Learning</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join thousands of institutions and students who choose Fresherbot LMS for comprehensive, 
                  interactive, and effective learning experiences that drive real career outcomes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/courses">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Request Demo
                  </Link>
                </Button>
              </div>

              <div className="pt-6">
                <div className="text-sm text-muted-foreground flex flex-wrap justify-center lg:justify-start gap-4">
                  <span>✅ <strong>40+ Expert Courses</strong></span>
                  <span>✅ <strong>Interactive Learning</strong></span>
                  <span>✅ <strong>Progress Analytics</strong></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <video
                                  src={asset('product/lms/lmsvideo.mp4')}
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

export default LMSPlatformPage;