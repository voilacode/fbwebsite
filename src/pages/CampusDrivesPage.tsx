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
  Building2, 
  Brain, 
  TrendingUp, 
  CheckCircle, 
  Users,
  Calendar,
  BarChart3,
  MessageCircle,
  Globe,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  Phone,
  PlayCircle,
  UserCheck,
  FileText,
  Clock,
  Zap,
  ChevronRight,
  Trophy,
  BookOpen,
  Briefcase,
  GraduationCap,
  HandHeart,
  Eye,
  Settings,
  MonitorSpeaker,
  Handshake
} from 'lucide-react';
import { SEO } from '../components';

export const CampusDrivesPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Brain,
      title: "Online Assessments & Shortlisting",
      description: "AI-driven assessments with automated shortlisting for transparent talent identification",
      color: "primary",
      items: [
        { title: "AI-Driven Assessments", description: "Evaluate aptitude, coding, and communication", icon: Brain },
        { title: "Automated Shortlisting", description: "Performance-based employer requirements matching", icon: Target },
        { title: "Transparent Process", description: "Fair evaluation ensuring right talent identification", icon: Eye }
      ]
    },
    {
      icon: Calendar,
      title: "Interview Scheduling & Coordination",
      description: "End-to-end interview planning with smooth coordination between all stakeholders",
      color: "secondary",
      items: [
        { title: "Interview Planning", description: "Complete scheduling and coordination system", icon: Calendar },
        { title: "Multi-Party Coordination", description: "Students, institutions, and recruiters alignment", icon: Users },
        { title: "Efficiency Optimization", description: "Minimized delays and maximum selection efficiency", icon: Zap }
      ]
    },
    {
      icon: BarChart3,
      title: "Employer Dashboards",
      description: "Dedicated dashboards providing real-time insights for faster hiring decisions",
      color: "accent",
      items: [
        { title: "HR & Recruiter Dashboards", description: "Dedicated interfaces for hiring teams", icon: Briefcase },
        { title: "Candidate Insights", description: "Profiles, assessment results, and interview status", icon: FileText },
        { title: "Real-time Analytics", description: "Instant insights for better hiring decisions", icon: BarChart3 }
      ]
    }
  ];

  const hrSupportServices = [
    {
      title: "HRCC Sessions",
      description: "HR Counseling & Connect sessions with direct student interaction",
      icon: MessageCircle,
      color: "primary"
    },
    {
      title: "Mock Interviews",
      description: "Practice interviews with real HR professionals",
      icon: UserCheck,
      color: "secondary"
    },
    {
      title: "Resume Reviews",
      description: "Professional resume checks and improvement guidance",
      icon: FileText,
      color: "accent"
    },
    {
      title: "Career Guidance",
      description: "Personalized career counseling and development advice",
      icon: Target,
      color: "chart1"
    }
  ];

  const benefits = [
    "End-to-end recruitment management — assessments to final hiring",
    "Real HRs visiting campuses to guide and evaluate students",
    "Seamless coordination between colleges and recruiters",
    "Proven track record of helping students get placed in top companies",
    "We go the extra mile — we prove our best to ensure successful placements"
  ];

  const outcomes = [
    {
      title: "Higher Placement Rates",
      description: "Increased placement percentages for institutions",
      icon: TrendingUp,
      progress: 92
    },
    {
      title: "HR Exposure",
      description: "Well-prepared students with real HR interaction experience",
      icon: HandHeart,
      progress: 88
    },
    {
      title: "Faster Hiring",
      description: "Streamlined and efficient recruitment for employers",
      icon: Zap,
      progress: 85
    },
    {
      title: "Industry Collaboration",
      description: "Stronger institution-industry partnerships",
      icon: Handshake,
      progress: 90
    }
  ];

  const driveProcess = [
    { 
      number: "1", 
      title: "Drive Setup", 
      desc: "Complete recruitment drive planning and coordination",
      icon: Settings,
      color: "primary"
    },
    { 
      number: "2", 
      title: "Online Assessments", 
      desc: "AI-powered evaluations and automated shortlisting",
      icon: Brain,
      color: "secondary"
    },
    { 
      number: "3", 
      title: "HR Campus Visit", 
      desc: "On-campus HR sessions and direct student interaction",
      icon: Building2,
      color: "accent"
    },
    { 
      number: "4", 
      title: "Final Selection", 
      desc: "Interview coordination and placement completion",
      icon: Trophy,
      color: "chart1"
    }
  ];

  return (
    <>
      <SEO
        title="Campus Drives - End-to-End Recruitment Drive Management"
        description="Seamless campus recruitment drives connecting institutions, students, and employers with AI-driven assessments, HR support, and complete coordination."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Building2 className="w-4 h-4 mr-2" />
                  Campus Drives
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  End-to-End Recruitment Drive Management
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At <strong className="text-primary">Fresherbot</strong>, we specialize in conducting{' '}
                <Badge variant="outline" className="mx-1">seamless campus recruitment drives</Badge>{' '}
                that connect institutions, students, and employers on a single platform.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  From assessments to interviews, we handle the entire process with{' '}
                  <strong>precision and efficiency</strong>, ensuring successful outcomes for all stakeholders.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/book-campus-drive">
                    <Building2 className="mr-2 h-5 w-5" />
                    Book a Campus Drive
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

        {/* Key Features */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Drive Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive recruitment drive management with cutting-edge technology
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

        {/* Drive Process */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Drive Process</Badge>
            <h2 className="text-4xl font-bold">How Our Campus Drives Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to comprehensive recruitment drive management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {driveProcess.map((step, index) => (
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

        {/* Beyond Technology - HR Support */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">HR Support</Badge>
            <h2 className="text-4xl font-bold">Beyond Technology: Our HR Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We go beyond online tools by bringing HR professionals directly to campuses
            </p>
          </div>

          <Alert className="border-2 border-secondary/20 bg-gradient-to-r from-secondary/5 to-accent/5 max-w-4xl mx-auto">
            <HandHeart className="h-5 w-5" />
            <AlertDescription className="text-lg">
              We don't just stop at online tools — we <strong>take HR professionals directly to colleges</strong> to conduct 
              comprehensive support sessions that help students gain confidence and perform better in real placements.
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrSupportServices.map((service, index) => (
              <Card key={index} className={`border-2 hover:border-${service.color}/50 transition-all duration-300 hover:shadow-xl group text-center`}>
                <CardHeader className="space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <service.icon className={`h-10 w-10 text-${service.color}`} />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-muted/30 border-2 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 justify-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-secondary/20">
                    <AvatarImage src="/api/placeholder/64/64" />
                    <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-lg">HR</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-lg">HR Campus Connect</div>
                    <div className="text-sm text-muted-foreground">Direct HR-Student Interaction</div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground italic">
                  "This <strong className="text-secondary">direct HR interaction</strong> helps students{' '}
                  <strong className="text-accent">gain confidence and perform better</strong> in real placements."
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
              <h2 className="text-4xl font-bold">Why Choose Fresherbot for Campus Drives?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that ensure successful recruitment outcomes for all
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
            <Badge variant="secondary" className="px-4 py-2">Drive Results</Badge>
            <h2 className="text-4xl font-bold">Outcomes of Campus Drives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable benefits for institutions, students, and recruiting companies
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
              <h3 className="text-2xl font-bold mb-2">Campus Drive Success Metrics</h3>
              <p className="text-muted-foreground">Real results from our recruitment drive management</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Campus Drives Conducted", value: "500+", progress: 95 },
                { label: "Students Placed", value: "25,000+", progress: 90 },
                { label: "Partner Companies", value: "200+", progress: 85 },
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
                Ready to Partner?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Partner with Fresherbot Campus Drives</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join hundreds of institutions and companies who trust us for{' '}
                <strong>successful, efficient, and impactful recruitment events</strong>. 
                Experience the difference of comprehensive drive management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/book-campus-drive">
                  <Building2 className="mr-2 h-5 w-5" />
                  Book a Campus Drive
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
                <Handshake className="inline h-4 w-4 mr-1" />
                <strong>End-to-End Management</strong> • <strong>Real HR Support</strong> • <strong>Proven Results</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CampusDrivesPage;