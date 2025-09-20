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
  Users, 
  Handshake, 
  TrendingUp, 
  CheckCircle, 
  Building2,
  Lightbulb,
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
  Briefcase,
  GraduationCap,
  Network,
  Eye,
  Settings,
  Brain,
  Mic,
  Calendar,
  PenTool,
  Search,
  Group,
  Star,
  BookOpen
} from 'lucide-react';
import { SEO } from '../components';

export const HRCampusConnectPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Handshake,
      title: "Direct HR Interaction",
      description: "Students and faculty connect with experienced HR professionals for real-world insights",
      color: "primary",
      items: [
        { title: "Experienced Professionals", description: "Connect with seasoned HR leaders and recruiters", icon: UserCheck },
        { title: "Corporate Culture Insights", description: "Real discussions on hiring strategies and expectations", icon: Building2 },
        { title: "Placement Preparation", description: "Clarify doubts and prepare better for placements", icon: Target }
      ]
    },
    {
      icon: TrendingUp,
      title: "Industry Insights & Trends",
      description: "HR leaders share latest recruitment practices and emerging career opportunities",
      color: "secondary",
      items: [
        { title: "Latest Practices", description: "Current recruitment methods and industry shifts", icon: TrendingUp },
        { title: "Career Opportunities", description: "Emerging roles and workplace dynamics", icon: Lightbulb },
        { title: "Market Awareness", description: "Stay ahead in evolving job market", icon: BarChart3 }
      ]
    },
    {
      icon: BookOpen,
      title: "Career Guidance & Best Practices",
      description: "Practical advice on professional development and workplace readiness",
      color: "accent",
      items: [
        { title: "Professional Skills", description: "Resume building and interview preparation guidance", icon: FileText },
        { title: "Interactive Sessions", description: "Mock HR sessions and Q&A rounds", icon: MessageCircle },
        { title: "Employability Focus", description: "Tailored guidance to improve job readiness", icon: Trophy }
      ]
    }
  ];

  const sessionTypes = [
    {
      title: "Industry Trends Sessions",
      description: "Latest hiring practices and market insights",
      features: ["Current Market Trends", "Skill Demand Analysis", "Future Opportunities", "Industry Shifts"],
      icon: TrendingUp,
      color: "primary"
    },
    {
      title: "Interactive Networking",
      description: "Direct connect between students and HR leaders",
      features: ["One-on-One Interactions", "Group Discussions", "Experience Sharing", "Doubt Resolution"],
      icon: Network,
      color: "secondary"
    },
    {
      title: "Career Guidance Workshops",
      description: "Practical skills and professional development",
      features: ["Resume Reviews", "Interview Preparation", "Workplace Etiquette", "Communication Skills"],
      icon: BookOpen,
      color: "accent"
    }
  ];

  const benefits = [
    "Live interaction with industry HR leaders",
    "Access to real-time hiring trends and practices",
    "Builds confidence and readiness for campus placements",
    "Strengthens the institution–industry relationship",
    "Helps students transition smoothly from campus to corporate"
  ];

  const outcomes = [
    {
      title: "Recruiter Clarity",
      description: "Students gain clear understanding of expectations",
      icon: Eye,
      progress: 94
    },
    {
      title: "Professional Skills",
      description: "Improved communication and workplace readiness",
      icon: MessageCircle,
      progress: 90
    },
    {
      title: "Placement Success",
      description: "Enhanced success rates through HR exposure",
      icon: TrendingUp,
      progress: 88
    },
    {
      title: "Industry Partnerships",
      description: "Stronger institution-industry relationships",
      icon: Handshake,
      progress: 92
    }
  ];

  const connectProcess = [
    { 
      number: "1", 
      title: "Session Planning", 
      desc: "Coordinate with institutions and HR professionals",
      icon: Calendar,
      color: "primary"
    },
    { 
      number: "2", 
      title: "HR Professional Setup", 
      desc: "Bring experienced industry leaders to campus",
      icon: UserCheck,
      color: "secondary"
    },
    { 
      number: "3", 
      title: "Interactive Sessions", 
      desc: "Facilitate networking and knowledge sharing",
      icon: MessageCircle,
      color: "accent"
    },
    { 
      number: "4", 
      title: "Follow-up & Impact", 
      desc: "Track outcomes and build lasting connections",
      icon: TrendingUp,
      color: "chart1"
    }
  ];

  return (
    <>
      <SEO
        title="HR Campus Connect - Bridging the Gap Between Industry & Academia"
        description="Connect students with HR leaders through interactive sessions, industry insights, career guidance, and direct professional networking opportunities."
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
                  HR Campus Connect
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Bridging the Gap Between Industry & Academia
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The <strong className="text-primary">HR Campus Connect (HRCC)</strong> program by{' '}
                <Badge variant="outline" className="mx-1">Fresherbot</Badge>{' '}
                is designed to bring{' '}
                <Badge variant="outline" className="mx-1">HR leaders</Badge>,{' '}
                <Badge variant="outline" className="mx-1">recruiters</Badge>,{' '}
                <Badge variant="outline" className="mx-1">students</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">faculty</Badge>{' '}
                together on one platform.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  Through interactive networking sessions, students gain <strong>first-hand exposure to industry expectations, 
                  hiring trends, and career guidance</strong> directly from corporate leaders.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/request-session">
                    <Calendar className="mr-2 h-5 w-5" />
                    Request a Session
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/partner-with-us">
                    <Handshake className="mr-2 h-5 w-5" />
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Session Types */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Session Types</Badge>
            <h2 className="text-4xl font-bold">HRCC Session Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive networking and guidance sessions tailored for different learning objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessionTypes.map((session, index) => (
              <Card key={index} className={`border-2 hover:border-${session.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${session.color}/20 to-${session.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <session.icon className={`h-10 w-10 text-${session.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                    <CardDescription className="text-base">{session.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {session.features.map((feature, featureIndex) => (
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
            <Badge variant="secondary" className="px-4 py-2">Program Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive HR connect program designed for maximum industry exposure and guidance
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

        {/* Connect Process */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Session Flow</Badge>
            <h2 className="text-4xl font-bold">How HRCC Sessions Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to connecting industry professionals with academic institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectProcess.map((step, index) => (
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

        {/* HR Professional Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Industry Professionals</Badge>
            <h2 className="text-4xl font-bold">Connect with Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced HR professionals sharing real-world insights and career guidance
            </p>
          </div>

          <Alert className="border-2 border-secondary/20 bg-gradient-to-r from-secondary/5 to-accent/5 max-w-4xl mx-auto">
            <Network className="h-5 w-5" />
            <AlertDescription className="text-lg">
              Students and faculty connect with <strong>experienced HR professionals</strong> for real-world discussions on{' '}
              <strong>corporate culture, hiring strategies, and expectations</strong> with opportunities to{' '}
              <strong>clarify doubts and prepare better for placements</strong>.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-muted/30 border-2">
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="h-16 w-16 border-2 border-primary/20 mx-auto">
                  <AvatarImage src="/api/placeholder/64/64" />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">HR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg">Senior HR Leaders</div>
                  <div className="text-sm text-muted-foreground">MNCs & Fortune 500 Companies</div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Sharing hiring trends and corporate expectations"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-2">
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="h-16 w-16 border-2 border-secondary/20 mx-auto">
                  <AvatarImage src="/api/placeholder/64/64" />
                  <AvatarFallback className="bg-secondary/10 text-secondary font-bold text-lg">RC</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg">Recruitment Consultants</div>
                  <div className="text-sm text-muted-foreground">Industry Specialists</div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Providing market insights and placement guidance"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 border-2">
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="h-16 w-16 border-2 border-accent/20 mx-auto">
                  <AvatarImage src="/api/placeholder/64/64" />
                  <AvatarFallback className="bg-accent/10 text-accent font-bold text-lg">TL</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg">Team Leaders</div>
                  <div className="text-sm text-muted-foreground">Tech & Business Domains</div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Sharing workplace realities and skill requirements"
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
                Why Choose HRCC
              </Badge>
              <h2 className="text-4xl font-bold">Why Choose HR Campus Connect?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Direct industry connection that bridges the gap between academic learning and professional readiness
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
              Measurable benefits that prepare students for successful transition to corporate careers
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
              <h3 className="text-2xl font-bold mb-2">HRCC Program Impact</h3>
              <p className="text-muted-foreground">Real results from our HR-student connect initiatives</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "HRCC Sessions Conducted", value: "300+", progress: 95 },
                { label: "Students Connected", value: "15,000+", progress: 90 },
                { label: "HR Professionals", value: "500+", progress: 85 },
                { label: "Institution Partnerships", value: "120+", progress: 88 }
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
                Connect Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Prepare Your Students with First-Hand HR Insights</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join hundreds of institutions who trust Fresherbot's <strong>HR Campus Connect</strong> to bridge the gap between 
                academia and industry. Give your students the competitive advantage of direct HR interaction and industry insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/request-session">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/partner-with-us">
                  <Handshake className="mr-2 h-5 w-5" />
                  Partner With Us
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                <Users className="inline h-4 w-4 mr-1" />
                <strong>Direct HR Connect</strong> • <strong>Industry Insights</strong> • <strong>Career Guidance</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HRCampusConnectPage;