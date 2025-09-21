import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Progress } from '@voilajsx/uikit/progress';
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
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components';

export const LMSPlatformPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Course Library",
      description: "Access to 40+ industry-relevant courses across technology, business, and soft skills",
      color: "primary",
      items: [
        { title: "40+ Industry Courses", description: "Technology, business, and soft skills", icon: BookOpen },
        { title: "Expert Video Lectures", description: "High-quality content by subject matter experts", icon: Video },
        { title: "Self-Paced Learning", description: "Learn any language, subject, or skill at your pace", icon: Clock }
      ]
    },
    {
      icon: Target,
      title: "Interactive Learning Modules",
      description: "Step-by-step course structure with assignments, quizzes, and practice exercises",
      color: "secondary",
      items: [
        { title: "Structured Navigation", description: "Step-by-step course progression", icon: Target },
        { title: "Integrated Exercises", description: "Assignments, quizzes, and practice tasks", icon: PenTool },
        { title: "Adaptive Pathways", description: "Personalized skill development routes", icon: Brain }
      ]
    },
    {
      icon: FileText,
      title: "Assessments & Test Preparation",
      description: "Integrated test environment with mock tests and real-time feedback",
      color: "accent",
      items: [
        { title: "Self-Evaluation Tests", description: "Integrated assessment environment", icon: FileText },
        { title: "Mock Examinations", description: "Practice exams to boost confidence", icon: Award },
        { title: "Real-time Feedback", description: "Continuous improvement insights", icon: TrendingUp }
      ]
    },
    {
      icon: BarChart3,
      title: "Performance Tracking & Analytics",
      description: "Visual dashboards with detailed analytics for students and institutions",
      color: "chart1",
      items: [
        { title: "Progress Tracking", description: "Individual learning progress dashboards", icon: BarChart3 },
        { title: "Strength Analysis", description: "Detailed analytics on improvement areas", icon: Target },
        { title: "Institutional Insights", description: "Batch-level performance for institutions", icon: Users }
      ]
    },
    {
      icon: Monitor,
      title: "All-in-One Student Control",
      description: "Complete learning control from a single dashboard",
      color: "chart2",
      items: [
        { title: "Unified Dashboard", description: "Choose courses, watch videos, practice tests", icon: Monitor },
        { title: "Flexible Access", description: "Self-paced learning anytime, anywhere", icon: Globe },
        { title: "Growth Monitoring", description: "Track personal development and progress", icon: TrendingUp }
      ]
    }
  ];

  const courseCategories = [
    {
      title: "Technology Courses",
      count: "20+",
      courses: ["Python Programming", "Java Development", "Web Development", "Data Science", "Machine Learning", "Cloud Computing"],
      icon: Code,
      color: "primary"
    },
    {
      title: "Business Skills",
      count: "15+",
      courses: ["Project Management", "Digital Marketing", "Business Analytics", "Leadership", "Entrepreneurship", "Finance"],
      icon: Briefcase,
      color: "secondary"
    },
    {
      title: "Soft Skills",
      count: "10+",
      courses: ["Communication", "Presentation Skills", "Team Building", "Time Management", "Problem Solving", "Critical Thinking"],
      icon: MessageCircle,
      color: "accent"
    }
  ];

  const benefits = [
    "40+ courses across multiple domains",
    "Interactive video-based learning",
    "Built-in quizzes and assignments",
    "Self-paced learning, anytime & anywhere",
    "Actionable insights with performance analytics"
  ];

  const useCases = [
    {
      title: "Colleges & Universities",
      description: "Deliver digital learning alongside classroom teaching",
      icon: GraduationCap,
      color: "primary"
    },
    {
      title: "Students",
      description: "Gain additional skills, practice tests, and track growth",
      icon: Users,
      color: "secondary"
    },
    {
      title: "Training Providers",
      description: "Manage multiple courses and learners efficiently",
      icon: Building2,
      color: "accent"
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot LMS Platform - A Complete Digital Learning Ecosystem"
        description="Comprehensive Learning Management System with 40+ courses, interactive modules, assessments, and performance tracking for institutions and students."
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
                  Fresherbot LMS Platform
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  A Complete Digital Learning Ecosystem
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The <strong className="text-primary">Fresherbot Learning Management System (LMS)</strong> provides institutions and students with a{' '}
                <Badge variant="outline" className="mx-1">structured</Badge>,{' '}
                <Badge variant="outline" className="mx-1">interactive</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">engaging learning environment</Badge>.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  From course delivery to progress tracking, our LMS brings everything together in one platform — 
                  making learning <strong>simple, measurable, and effective</strong>.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
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
                    Request a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Course Library Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Course Library</Badge>
            <h2 className="text-4xl font-bold">40+ Industry-Relevant Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive course collection across technology, business, and soft skills
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

        {/* Key Features */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive learning tools designed for modern digital education
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

        {/* Learning Journey */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Learning Journey</Badge>
            <h2 className="text-4xl font-bold">How Students Learn</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step-by-step learning process designed for maximum engagement and retention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: "1", 
                title: "Choose Course", 
                desc: "Select from 40+ courses across multiple domains",
                icon: BookOpen,
                color: "primary"
              },
              { 
                number: "2", 
                title: "Watch & Learn", 
                desc: "High-quality video lectures by experts",
                icon: Play,
                color: "secondary"
              },
              { 
                number: "3", 
                title: "Practice & Test", 
                desc: "Interactive assignments and assessments",
                icon: PenTool,
                color: "accent"
              },
              { 
                number: "4", 
                title: "Track Progress", 
                desc: "Monitor growth with detailed analytics",
                icon: BarChart3,
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
              <h2 className="text-4xl font-bold">Why Choose Fresherbot LMS?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that make learning effective and engaging
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
            <h2 className="text-4xl font-bold">Who Benefits from Our LMS?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored learning solutions for different educational and training needs
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Courses", value: "40+", progress: 90 },
                { label: "Video Hours", value: "500+", progress: 85 },
                { label: "Practice Tests", value: "1000+", progress: 95 },
                { label: "Student Satisfaction", value: "95%", progress: 95 }
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
                Start Learning Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Empower Your Students with Next-Generation Digital Learning</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of institutions and students who choose Fresherbot LMS for comprehensive, 
                interactive, and effective learning experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/courses">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/demo">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Request a Demo
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                📚 <strong>40+ Courses</strong> • <strong>Video-Based Learning</strong> • <strong>Performance Analytics</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LMSPlatformPage;