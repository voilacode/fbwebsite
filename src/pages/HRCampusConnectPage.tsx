import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  Users,
  Handshake,
  TrendingUp,
  CheckCircle,
  Building2,
  Lightbulb,
  BarChart3,
  MessageCircle,
  Target,
  Sparkles,
  ArrowRight,
  UserCheck,
  FileText,
  Zap,
  ChevronRight,
  Trophy,
  Network,
  Eye,
  Calendar,
  BookOpen,
  PlayCircle,
  Clock,
  Award,
  Brain,
  Settings,
  Phone,
  Shield,
  Star,
  Briefcase
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const HRCampusConnectPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Handshake,
      title: "Direct HR Professional Interaction",
      description: "Connect students and faculty with experienced HR professionals for real-world insights, corporate culture understanding, and practical career guidance through structured networking sessions",
      color: "primary",
      items: [
        {
          title: "Experienced HR Leaders",
          description: "Connect with seasoned professionals from Fortune 500 companies and leading MNCs across various industries",
          icon: UserCheck
        },
        {
          title: "Corporate Culture Insights",
          description: "Real discussions on workplace dynamics, hiring strategies, company expectations, and industry standards",
          icon: Building2
        },
        {
          title: "Placement Preparation Guidance",
          description: "Direct guidance on interview preparation, resume building, and workplace readiness from hiring experts",
          icon: Target
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Industry Insights & Market Trends",
      description: "HR leaders share latest recruitment practices, emerging career opportunities, skill demands, and market evolution insights to keep students ahead of industry changes",
      color: "secondary",
      items: [
        {
          title: "Latest Recruitment Practices",
          description: "Current hiring methodologies, assessment techniques, and emerging recruitment technologies in the industry",
          icon: TrendingUp
        },
        {
          title: "Emerging Career Opportunities",
          description: "New roles, future job markets, industry shifts, and skill evolution requirements across sectors",
          icon: Lightbulb
        },
        {
          title: "Market Intelligence",
          description: "Real-time job market analysis, salary trends, and competitive positioning strategies for career growth",
          icon: BarChart3
        }
      ]
    },
    {
      icon: BookOpen,
      title: "Career Guidance & Skill Development",
      description: "Practical advice on professional development, workplace readiness, and comprehensive skill building through interactive workshops and mentorship sessions",
      color: "accent",
      items: [
        {
          title: "Professional Skills Enhancement",
          description: "Resume optimization, interview techniques, communication skills, and professional presentation development",
          icon: FileText
        },
        {
          title: "Interactive Learning Sessions",
          description: "Mock HR interviews, Q&A rounds, case study discussions, and real-world scenario simulations",
          icon: MessageCircle
        },
        {
          title: "Employability Advancement",
          description: "Tailored guidance to improve job readiness, soft skills development, and career trajectory planning",
          icon: Trophy
        }
      ]
    },
    {
      icon: Network,
      title: "Industry-Academia Bridge Building",
      description: "Strengthen relationships between educational institutions and corporate world through sustained partnerships, collaborative programs, and long-term engagement initiatives",
      color: "chart1",
      items: [
        {
          title: "Professional Networking",
          description: "Build lasting connections between students, faculty, and industry professionals for continuous engagement",
          icon: Network
        },
        {
          title: "Institution Partnerships",
          description: "Develop strategic alliances between colleges and companies for placement programs and internships",
          icon: Handshake
        },
        {
          title: "Continuous Engagement",
          description: "Regular follow-ups, progress tracking, and sustained relationships for ongoing career support",
          icon: Calendar
        }
      ]
    }
  ];

  const benefits = [
    "Live interaction with industry HR leaders and recruitment experts",
    "Access to real-time hiring trends and evolving market practices",
    "Builds confidence and readiness for successful campus placements",
    "Strengthens the institution-industry relationship and partnerships",
    "Helps students transition smoothly from campus to corporate environment",
    "Direct exposure to workplace expectations and professional standards"
  ];

  const sessionFormats = [
    {
      title: "Industry Trends & Insights Sessions",
      description: "Latest hiring practices, market analysis, and future opportunities discussion",
      technologies: ["Market Analysis", "Hiring Trends", "Skill Demands", "Career Mapping"],
      icon: TrendingUp,
      color: "primary",
      duration: "90 minutes",
      format: "Interactive Panel"
    },
    {
      title: "Interactive Networking Workshops",
      description: "Direct student-HR professional interactions and networking opportunities",
      technologies: ["One-on-One Sessions", "Group Discussions", "Experience Sharing", "Q&A Rounds"],
      icon: Network,
      color: "secondary",
      duration: "120 minutes",
      format: "Workshop Style"
    },
    {
      title: "Career Guidance & Mentorship",
      description: "Professional development workshops and personalized career guidance",
      technologies: ["Resume Reviews", "Mock Interviews", "Soft Skills", "Career Planning"],
      icon: BookOpen,
      color: "accent",
      duration: "150 minutes",
      format: "Mentorship Program"
    },
    {
      title: "Corporate Culture Immersion",
      description: "Workplace readiness and corporate environment understanding sessions",
      technologies: ["Workplace Ethics", "Communication", "Team Dynamics", "Professional Conduct"],
      icon: Building2,
      color: "chart1",
      duration: "180 minutes",
      format: "Immersive Experience"
    }
  ];

  const successMetrics = [
    { label: "HRCC Sessions Hosted", value: "400+", description: "Multi-format programs", progress: 95 },
    { label: "Students Benefited", value: "25,000+", description: "Direct HR interaction", progress: 92 },
    { label: "HR Professionals", value: "800+", description: "Industry experts", progress: 88 },
    { label: "Placement Success Rate", value: "89%", description: "Improved outcomes", progress: 89 }
  ];

  return (
    <>
      <SEO
        title="HR Campus Connect - Bridging Industry-Academia Gap Through Direct Professional Interaction"
        description="Connect students with HR leaders through interactive sessions, industry insights, career guidance, and professional networking for enhanced placement success and career readiness."
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
                    Professional Networking Platform
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Bridging Industry
                    </span>
                    <br />
                    & Academia Gap
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Connect students with <strong className="text-foreground">HR leaders</strong>, gain <strong className="text-foreground">industry insights</strong>, and build <strong className="text-foreground">professional networks</strong> for career success.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Handshake className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Direct HR Connect</div>
                      <div className="text-xs text-muted-foreground">Industry professionals</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Market Insights</div>
                      <div className="text-xs text-muted-foreground">Latest trends</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Career Guidance</div>
                      <div className="text-xs text-muted-foreground">Professional development</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/request-session">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Request Session
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/partner-with-us">
                      Partner With Us
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No cost sessions
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Expert HR professionals
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Industry certificates
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                    src={asset('events/hr-campus-connect/hrcampus-heroicon.jpg')}
                    alt="HR Campus Connect Professional Networking"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">800+</div>
                    <div className="text-sm text-muted-foreground">HR Experts</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">89%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Session Formats Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Session Formats</Badge>
            <h2 className="text-4xl font-bold">Choose Your Interaction Format</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Multiple session formats designed for different learning objectives and professional development needs. Each format offers unique opportunities for student-HR professional interaction and comprehensive career guidance.
            </p>
          </div>
          
          <Tabs defaultValue="trends" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="networking">Networking</TabsTrigger>
              <TabsTrigger value="guidance">Guidance</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trends" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('events/hr-campus-connect/market-analysis.jpg')}
                      alt="Industry Trends Session"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp className="h-6 w-6 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">90 Minutes</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Interactive Panel</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Industry Trends & Insights Sessions</CardTitle>
                        <CardDescription className="text-lg">Latest hiring practices, market analysis, and future opportunities discussion</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Market Analysis", "Hiring Trends", "Skill Demands", "Career Mapping"].map((topic, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <BarChart3 className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{topic}</div>
                              <div className="text-xs text-muted-foreground">Core focus area</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="networking" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('events/hr-campus-connect/gd_session.jpg')}
                      alt="Interactive Networking Session"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Network className="h-6 w-6 text-secondary" />
                          <Badge variant="outline" className="text-secondary border-secondary">120 Minutes</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Workshop Style</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Interactive Networking Workshops</CardTitle>
                        <CardDescription className="text-lg">Direct student-HR professional interactions and networking opportunities</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["One-on-One Sessions", "Group Discussions", "Experience Sharing", "Q&A Rounds"].map((activity, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <MessageCircle className="w-4 h-4 text-secondary" />
                            </div>
                            <div>
                              <div className="font-semibold">{activity}</div>
                              <div className="text-xs text-muted-foreground">Networking format</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="guidance" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('events/hr-campus-connect/mock_interviews.jpg')}
                      alt="Career Guidance Session"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="h-6 w-6 text-accent" />
                          <Badge variant="outline" className="text-accent border-accent">150 Minutes</Badge>
                          <Badge variant="outline" className="text-chart1 border-chart1">Mentorship Program</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Career Guidance & Mentorship</CardTitle>
                        <CardDescription className="text-lg">Professional development workshops and personalized career guidance</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Resume Reviews", "Mock Interviews", "Soft Skills", "Career Planning"].map((service, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Target className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{service}</div>
                              <div className="text-xs text-muted-foreground">Development area</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="culture" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('events/hr-campus-connect/work_ethics.jpg')}
                      alt="Corporate Culture Session"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Building2 className="h-6 w-6 text-chart1" />
                          <Badge variant="outline" className="text-chart1 border-chart1">180 Minutes</Badge>
                          <Badge variant="outline" className="text-primary border-primary">Immersive Experience</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Corporate Culture Immersion</CardTitle>
                        <CardDescription className="text-lg">Workplace readiness and corporate environment understanding sessions</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Workplace Ethics", "Communication", "Team Dynamics", "Professional Conduct"].map((aspect, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-chart1/10 rounded-lg flex items-center justify-center">
                              <Building2 className="w-4 h-4 text-chart1" />
                            </div>
                            <div>
                              <div className="font-semibold">{aspect}</div>
                              <div className="text-xs text-muted-foreground">Cultural element</div>
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
            <Badge variant="secondary" className="px-4 py-2">Program Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Comprehensive HR Campus Connect program designed for maximum industry exposure, professional networking, and career development through structured interactions with experienced HR professionals and industry leaders.
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
                            index === 0 ? asset('events/hr-campus-connect/company_insights.jpg') :
                            index === 1 ? asset('events/hr-campus-connect/market_trends.jpg') :
                            index === 2 ? asset('events/hr-campus-connect/skill_development.jpg') :
                            index === 3 ? asset('events/hr-campus-connect/industry-acadamic.jpg') :
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

        {/* Why Choose */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-4 md:p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
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

        {/* Success Metrics */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Program Impact</Badge>
            <h2 className="text-4xl font-bold">HRCC Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our industry-academia bridging initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8 text-primary" />
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
                  Connect Today
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Prepare Students with Industry Insights</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join hundreds of institutions who trust Fresherbot's HR Campus Connect to bridge the gap between
                  academia and industry. Give your students the competitive advantage of direct HR interaction.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/request-session">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Request Session
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

              <div className="pt-6">
                <div className="text-sm text-muted-foreground flex flex-wrap justify-center lg:justify-start gap-4">
                  <span>✅ <strong>Direct HR Interaction</strong></span>
                  <span>✅ <strong>Industry Insights</strong></span>
                  <span>✅ <strong>Career Guidance</strong></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <video
                  src={asset('events/hr-campus-connect/HR-video.mp4')}
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

export default HRCampusConnectPage;