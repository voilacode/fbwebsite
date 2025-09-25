import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
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
  Users,
  Phone,
  PlayCircle,
  Clock,
  BarChart3,
  Shield,
  Cpu,
  Smartphone,
  MonitorSpeaker,
  Wrench
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const HackathonsPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Code,
      title: "Pure Development Competitions",
      description: "Focused on hands-on coding and building innovative solutions from scratch, tackling real-world problems with cutting-edge technology stacks and frameworks",
      color: "primary",
      items: [
        {
          title: "Hands-On Coding Challenges",
          description: "Build complete solutions from scratch with pure development focus, no theoretical concepts - just real coding",
          icon: Code
        },
        {
          title: "Real-World Problem Statements",
          description: "Work on actual industry challenges provided by leading companies and startups across various domains",
          icon: Target
        },
        {
          title: "Team Collaboration Experience",
          description: "Form dynamic teams, distribute tasks, and experience professional development workflows under pressure",
          icon: Users
        }
      ]
    },
    {
      icon: Trophy,
      title: "Showcase Technical Excellence",
      description: "Platform to demonstrate coding expertise, innovation capabilities, and problem-solving skills with comprehensive evaluation by industry experts",
      color: "secondary",
      items: [
        {
          title: "Innovation Showcase Platform",
          description: "Demonstrate coding expertise, creative solutions, and technical innovation with live presentations",
          icon: Lightbulb
        },
        {
          title: "Expert Technical Evaluation",
          description: "Judged on code quality, originality, functionality, scalability, and practical implementation",
          icon: Award
        },
        {
          title: "Industry Recognition",
          description: "Stand out among peers, gain recruiter attention, and build professional technology networks",
          icon: Eye
        }
      ]
    },
    {
      icon: Rocket,
      title: "Career Acceleration Opportunities",
      description: "Direct pathways to employment, skill development, and professional growth through industry partnerships and recruitment-focused competitions",
      color: "accent",
      items: [
        {
          title: "Attractive Cash Rewards",
          description: "Compete for substantial prize pools, startup funding opportunities, and technology grants",
          icon: DollarSign
        },
        {
          title: "Direct Recruitment Pipeline",
          description: "Job opportunities from participating companies with fast-track interview processes for winners",
          icon: Briefcase
        },
        {
          title: "Professional Portfolio Building",
          description: "Create impressive project portfolios, GitHub showcases, and industry connections for career growth",
          icon: FileText
        }
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Industry Immersion",
      description: "Experience authentic startup environment, workplace dynamics, and high-pressure development scenarios with comprehensive mentorship and guidance",
      color: "chart1",
      items: [
        {
          title: "Industry Expert Mentorship",
          description: "Direct collaboration with experienced professionals, CTOs, and senior developers throughout the competition",
          icon: UserCheck
        },
        {
          title: "Startup Environment Simulation",
          description: "Experience fast-paced development cycles, agile methodologies, and deadline-driven project delivery",
          icon: Rocket
        },
        {
          title: "Pressure Performance Training",
          description: "Develop crucial ability to deliver high-quality solutions under tight deadlines and competitive pressure",
          icon: Timer
        }
      ]
    }
  ];

  const benefits = [
    "Compete in pure development-focused challenges with real coding",
    "Win substantial cash prizes and valuable technology rewards",
    "Direct recruitment opportunities from leading tech companies",
    "Gain hands-on problem-solving experience under industry pressure",
    "Network with industry professionals, mentors, and potential co-founders",
    "Build impressive portfolios with competition-winning projects"
  ];

  const competitionTracks = [
    {
      title: "Full-Stack Web Development",
      description: "Complete web applications with modern frameworks and cloud deployment",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Docker"],
      icon: Globe,
      color: "primary",
      complexity: "Advanced",
      duration: "48 hours"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions with modern UI/UX",
      technologies: ["React Native", "Flutter", "Firebase", "iOS", "Android"],
      icon: Smartphone,
      color: "secondary",
      complexity: "Intermediate",
      duration: "36 hours"
    },
    {
      title: "AI/ML & Data Science",
      description: "Machine learning models, data analytics, and intelligent automation",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter"],
      icon: Brain,
      color: "accent",
      complexity: "Expert",
      duration: "72 hours"
    },
    {
      title: "IoT & Hardware Innovation",
      description: "Connected devices, embedded systems, and smart automation solutions",
      technologies: ["Arduino", "Raspberry Pi", "IoT Sensors", "Edge Computing"],
      icon: Cpu,
      color: "chart1",
      complexity: "Advanced",
      duration: "60 hours"
    }
  ];

  const successMetrics = [
    { label: "Hackathons Hosted", value: "200+", description: "Multi-domain competitions", progress: 95 },
    { label: "Active Participants", value: "12,000+", description: "Talented developers", progress: 90 },
    { label: "Prize Money Distributed", value: "₹1.2Cr+", description: "Cash rewards & grants", progress: 88 },
    { label: "Placement Success Rate", value: "82%", description: "Direct recruitment", progress: 82 }
  ];

  return (
    <>
      <SEO
        title="Hackathons - Transform Ideas into Reality Through Competitive Development"
        description="Join Fresherbot's premium hackathons for hands-on coding competitions, substantial cash prizes, direct recruitment opportunities, and real-world problem-solving experience with industry mentorship."
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
                    <Rocket className="w-4 h-4" />
                    Competitive Development Platform
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Innovation Through
                    </span>
                    <br />
                    Real-Time Development
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Transform your ideas into reality with <strong className="text-foreground">competitive coding</strong>, <strong className="text-foreground">industry mentorship</strong>, and <strong className="text-foreground">direct recruitment</strong> opportunities.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Pure Development</div>
                      <div className="text-xs text-muted-foreground">Hands-on coding only</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Cash Prizes</div>
                      <div className="text-xs text-muted-foreground">Substantial rewards</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Direct Hiring</div>
                      <div className="text-xs text-muted-foreground">Job opportunities</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/register-hackathon">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Register Now
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/host-hackathon">
                      View Upcoming Events
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free participation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Industry mentorship
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Certificate & prizes
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                       src={asset('events/hackathons/pointingHacathon.jpeg')}
                    alt="Hackathon Development Environment"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">48Hr</div>
                    <div className="text-sm text-muted-foreground">Competition</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">₹5L+</div>
                    <div className="text-sm text-muted-foreground">Prize Pool</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Competition Tracks Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Development Tracks</Badge>
            <h2 className="text-4xl font-bold">Choose Your Competition Track</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Multiple specialized tracks designed for different technology domains and skill levels. Each track offers unique challenges, industry-relevant problem statements, and specialized mentorship from domain experts.
            </p>
          </div>
          
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
              <TabsTrigger value="web">Web Dev</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
              <TabsTrigger value="iot">IoT</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                    src={asset('events/hackathons/web development.jpg')}
                      alt="Web Development Track"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Globe className="h-6 w-6 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">48 Hours</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Advanced</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Full-Stack Web Development</CardTitle>
                        <CardDescription className="text-lg">Complete web applications with modern frameworks and cloud deployment</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["React.js", "Node.js", "MongoDB", "AWS", "Docker"].map((tech, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Code className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{tech}</div>
                              <div className="text-xs text-muted-foreground">Core technology</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="mobile" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                        src={asset('events/hackathons/Hacathon-mobile.jpg')}
                       alt="Mobile Development Track"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Smartphone className="h-6 w-6 text-secondary" />
                          <Badge variant="outline" className="text-secondary border-secondary">36 Hours</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Intermediate</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Mobile App Development</CardTitle>
                        <CardDescription className="text-lg">Native and cross-platform mobile solutions with modern UI/UX</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["React Native", "Flutter", "Firebase", "iOS", "Android"].map((tech, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <Smartphone className="w-4 h-4 text-secondary" />
                            </div>
                            <div>
                              <div className="font-semibold">{tech}</div>
                              <div className="text-xs text-muted-foreground">Mobile framework</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="ai" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                        src={asset('events/hackathons/hacathon-aiml.jpg')}
                      alt="AI/ML Development Track"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Brain className="h-6 w-6 text-accent" />
                          <Badge variant="outline" className="text-accent border-accent">72 Hours</Badge>
                          <Badge variant="outline" className="text-red-500 border-red-500">Expert</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">AI/ML & Data Science</CardTitle>
                        <CardDescription className="text-lg">Machine learning models, data analytics, and intelligent automation</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Jupyter"].map((tech, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Brain className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{tech}</div>
                              <div className="text-xs text-muted-foreground">AI/ML tool</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="iot" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('events/hackathons/hacathon-iot.jpg')}
                      alt="IoT Hardware Track"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Cpu className="h-6 w-6 text-chart1" />
                          <Badge variant="outline" className="text-chart1 border-chart1">60 Hours</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Advanced</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">IoT & Hardware Innovation</CardTitle>
                        <CardDescription className="text-lg">Connected devices, embedded systems, and smart automation solutions</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Arduino", "Raspberry Pi", "IoT Sensors", "Edge Computing"].map((tech, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-chart1/10 rounded-lg flex items-center justify-center">
                              <Cpu className="w-4 h-4 text-chart1" />
                            </div>
                            <div>
                              <div className="font-semibold">{tech}</div>
                              <div className="text-xs text-muted-foreground">Hardware platform</div>
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
            <Badge variant="secondary" className="px-4 py-2">Competition Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Comprehensive hackathon experience designed for maximum learning, innovation, and career opportunities through competitive development challenges, industry mentorship, and direct recruitment pathways.
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
                            index === 0 ? asset('events/hackathons/hacathoncompitition.jpg') :
                            index === 1 ? asset('events/hackathons/hacathon-showcase.jpg') :
                            index === 2 ? asset('events/hackathons/hacathon-acceleration.jpg') :
                            index === 3 ? asset('events/hackathons/hacathon-realtime.jpg') :
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

        {/* Why Join */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-4 md:p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Why Join Us
              </Badge>
              <h2 className="text-4xl font-bold">Why Join Fresherbot Hackathons?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that accelerate your tech career through competitive development
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
            <Badge variant="secondary" className="px-4 py-2">Success Metrics</Badge>
            <h2 className="text-4xl font-bold">Hackathon Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our competitive development platform
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
                  Ready to Compete?
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Turn Your Ideas into Reality</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join thousands of developers who have transformed their careers through competitive coding,
                  innovation challenges, and direct recruitment opportunities. Code, compete, and get hired with Fresherbot.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/register-hackathon">
                    <PlayCircle className="mr-2 h-5 w-5" />
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

              <div className="pt-6">
                <div className="text-sm text-muted-foreground flex flex-wrap justify-center lg:justify-start gap-4">
                  <span>✅ <strong>Pure Development Focus</strong></span>
                  <span>✅ <strong>Industry Mentorship</strong></span>
                  <span>✅ <strong>Direct Recruitment</strong></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">

<video
  src={asset('events/hackathons/hacathon.mp4')}
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

export default HackathonsPage;