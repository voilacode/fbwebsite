import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  Rocket,
  Target,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  BarChart3,
  MessageCircle,
  Award,
  Star,
  Sparkles,
  ArrowRight,
  UserCheck,
  Zap,
  ChevronRight,
  Trophy,
  Eye,
  Brain,
  Mic,
  Calendar,
  Building2,
  Video,
  Play,
  Handshake,
  Users,
  BookOpen,
  Clock,
  PlayCircle,
  Network,
  FileText
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const FounderTalksPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Rocket,
      title: "Startup Stories that Inspire",
      description: "First-hand accounts of successful company building, entrepreneurial journeys, and breakthrough moments that motivate students to dream bigger and take bold career steps",
      color: "primary",
      items: [
        {
          title: "Company Building Journey",
          description: "How successful founders built companies from scratch, overcame challenges, and achieved remarkable growth",
          icon: Building2
        },
        {
          title: "Learning from Failures", 
          description: "Real stories of setbacks, failures, and turning points that shaped entrepreneurial success",
          icon: Target
        },
        {
          title: "Bold Career Steps",
          description: "Motivation to take calculated risks, pursue ambitious goals, and build innovative solutions",
          icon: Rocket
        }
      ]
    },
    {
      icon: Brain,
      title: "Career Guidance from Leaders",
      description: "Practical advice on career planning, skill development, industry readiness, and strategic thinking from experienced entrepreneurs and business leaders",
      color: "secondary", 
      items: [
        {
          title: "Strategic Career Planning",
          description: "Long-term career development strategies, skill building roadmaps, and market positioning advice",
          icon: BarChart3
        },
        {
          title: "Opportunity Recognition",
          description: "How to identify market opportunities, adapt to change, and leverage emerging trends for career growth",
          icon: Eye
        },
        {
          title: "Success Mindset Development",
          description: "Cultivating entrepreneurial thinking, resilience, and leadership qualities for professional achievement",
          icon: Brain
        }
      ]
    },
    {
      icon: Star,
      title: "Motivational & Interactive Sessions",
      description: "Engaging sessions that boost confidence, ambition, and entrepreneurial spirit through interactive discussions, Q&A rounds, and direct founder engagement",
      color: "accent",
      items: [
        {
          title: "Confidence Building Sessions",
          description: "Inspiring talks that boost student confidence, ambition, and belief in their entrepreneurial potential",
          icon: Trophy
        },
        {
          title: "Real Impact Stories",
          description: "How passion, perseverance, and innovation create lasting impact in business and society",
          icon: Award
        },
        {
          title: "Direct Founder Interaction",
          description: "Interactive Q&A sessions, personal stories sharing, and one-on-one networking opportunities",
          icon: MessageCircle
        }
      ]
    },
    {
      icon: Network,
      title: "Industry Network Building",
      description: "Connect students with entrepreneurial ecosystem leaders, build lasting professional relationships, and create pathways for mentorship and career opportunities",
      color: "chart1",
      items: [
        {
          title: "Professional Networking",
          description: "Build connections with founders, entrepreneurs, and industry leaders for ongoing guidance and opportunities",
          icon: Network
        },
        {
          title: "Mentorship Opportunities",
          description: "Long-term mentoring relationships with successful entrepreneurs and business leaders",
          icon: Handshake
        },
        {
          title: "Ecosystem Access",
          description: "Introduction to startup ecosystems, investor networks, and entrepreneurial communities",
          icon: Users
        }
      ]
    }
  ];

  const sessionFormats = [
    {
      title: "Entrepreneurial Journey Sessions",
      description: "Founders share their complete business building stories and key decisions",
      technologies: ["Startup Stories", "Business Models", "Growth Strategies", "Market Insights"],
      icon: Rocket,
      color: "primary",
      duration: "90 minutes",
      format: "Story-telling Session"
    },
    {
      title: "Interactive Leadership Workshops", 
      description: "Hands-on sessions with leadership exercises and team building activities",
      technologies: ["Leadership Skills", "Team Building", "Decision Making", "Problem Solving"],
      icon: Users,
      color: "secondary", 
      duration: "120 minutes",
      format: "Workshop Style"
    },
    {
      title: "Career Strategy Masterclasses",
      description: "Strategic career guidance and professional development planning sessions",
      technologies: ["Career Planning", "Skill Development", "Industry Insights", "Personal Branding"],
      icon: Target,
      color: "accent",
      duration: "150 minutes", 
      format: "Masterclass Program"
    },
    {
      title: "Innovation & Ideation Labs",
      description: "Creative thinking sessions focused on innovation and entrepreneurial mindset",
      technologies: ["Innovation Thinking", "Ideation Techniques", "Startup Concepts", "Market Analysis"],
      icon: Lightbulb,
      color: "chart1",
      duration: "180 minutes",
      format: "Interactive Lab"
    }
  ];

  const founderTypes = [
    {
      title: "Startup Founders", 
      description: "Tech startup pioneers and unicorn builders",
      achievements: ["Billion-dollar valuations", "Disruptive innovations", "Market leadership", "Global scaling"],
      icon: Rocket,
      color: "primary"
    },
    {
      title: "Serial Entrepreneurs",
      description: "Multi-company builders with diverse experiences", 
      achievements: ["Multiple exits", "Industry expertise", "Investment insights", "Scaling strategies"],
      icon: TrendingUp,
      color: "secondary"
    },
    {
      title: "Industry Leaders",
      description: "Corporate leaders and transformation champions",
      achievements: ["Fortune 500 experience", "Digital transformation", "Team leadership", "Innovation culture"],
      icon: Award,
      color: "accent"
    }
  ];

  const benefits = [
    "Builds entrepreneurial spirit and innovation mindset among students",
    "Provides real-world perspective beyond traditional academic learning", 
    "Connects students directly with successful leaders and innovators",
    "Encourages calculated risk-taking, creative thinking, and leadership development",
    "Inspires students to pursue ambitious career goals and startup ventures",
    "Creates lasting professional networks and mentorship opportunities"
  ];

  const successMetrics = [
    { label: "Founder Sessions Hosted", value: "200+", description: "Inspiring talks delivered", progress: 95 },
    { label: "Students Inspired", value: "50,000+", description: "Direct founder interaction", progress: 92 },
    { label: "Entrepreneurial Leaders", value: "150+", description: "Industry visionaries", progress: 88 },
    { label: "Innovation Mindset", value: "94%", description: "Student transformation", progress: 94 }
  ];

  return (
    <>
      <SEO
        title="Founder Talks - Learn Directly from Entrepreneurial Visionaries"
        description="Inspiring campus sessions with startup founders and industry leaders sharing real-life journeys, career insights, and entrepreneurial success strategies for student motivation."
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
                    Entrepreneurial Inspiration Platform
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Learn Directly from
                    </span>
                    <br />
                    Entrepreneurial Visionaries
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Connect students with <strong className="text-foreground">startup founders</strong>, gain <strong className="text-foreground">entrepreneurial wisdom</strong>, and build <strong className="text-foreground">innovation mindset</strong> for career success.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Startup Stories</div>
                      <div className="text-xs text-muted-foreground">Real journeys</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Career Guidance</div>
                      <div className="text-xs text-muted-foreground">Expert advice</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Inspiration</div>
                      <div className="text-xs text-muted-foreground">Motivational sessions</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/book-founder-session">
                      <Mic className="mr-2 h-5 w-5" />
                      Book Founder Session
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
                    Renowned founders
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Interactive Q&A
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                    src={asset('events/founder-talks/founders-hero.jpg')}
                    alt="Founder Talks Entrepreneurial Sessions"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Founders</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">94%</div>
                    <div className="text-sm text-muted-foreground">Inspiration Rate</div>
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
            <h2 className="text-4xl font-bold">Choose Your Inspiration Format</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Multiple session formats designed for different learning objectives and entrepreneurial development needs. Each format offers unique opportunities for student-founder interaction and comprehensive career inspiration.
            </p>
          </div>
          
          <Tabs defaultValue="journey" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto">
              <TabsTrigger value="journey">Journey</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="innovation">Innovation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="journey" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('events/founder-talks/journey.jpg')}
                      alt="Entrepreneurial Journey Session"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Rocket className="h-6 w-6 text-primary" />
                          <Badge variant="outline" className="text-primary border-primary">90 Minutes</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Story-telling Session</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Entrepreneurial Journey Sessions</CardTitle>
                        <CardDescription className="text-lg">Founders share their complete business building stories and key decisions</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Startup Stories", "Business Models", "Growth Strategies", "Market Insights"].map((topic, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Rocket className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-semibold">{topic}</div>
                              <div className="text-xs text-muted-foreground">Key focus area</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="leadership" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('events/founder-talks/leader.jpg')}
                      alt="Interactive Leadership Workshop"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="h-6 w-6 text-secondary" />
                          <Badge variant="outline" className="text-secondary border-secondary">120 Minutes</Badge>
                          <Badge variant="outline" className="text-accent border-accent">Workshop Style</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Interactive Leadership Workshops</CardTitle>
                        <CardDescription className="text-lg">Hands-on sessions with leadership exercises and team building activities</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Leadership Skills", "Team Building", "Decision Making", "Problem Solving"].map((activity, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-secondary" />
                            </div>
                            <div>
                              <div className="font-semibold">{activity}</div>
                              <div className="text-xs text-muted-foreground">Workshop component</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="strategy" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src={asset('events/founder-talks/skill.jpg')}
                      alt="Career Strategy Masterclass"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Target className="h-6 w-6 text-accent" />
                          <Badge variant="outline" className="text-accent border-accent">150 Minutes</Badge>
                          <Badge variant="outline" className="text-chart1 border-chart1">Masterclass Program</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Career Strategy Masterclasses</CardTitle>
                        <CardDescription className="text-lg">Strategic career guidance and professional development planning sessions</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Career Planning", "Skill Development", "Industry Insights", "Personal Branding"].map((service, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Target className="w-4 h-4 text-accent" />
                            </div>
                            <div>
                              <div className="font-semibold">{service}</div>
                              <div className="text-xs text-muted-foreground">Strategy element</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="innovation" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src={asset('events/founder-talks/ideation.jpg')}
                      alt="Innovation & Ideation Lab"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 mb-4">
                          <Lightbulb className="h-6 w-6 text-chart1" />
                          <Badge variant="outline" className="text-chart1 border-chart1">180 Minutes</Badge>
                          <Badge variant="outline" className="text-primary border-primary">Interactive Lab</Badge>
                        </div>
                        <CardTitle className="text-2xl mb-2">Innovation & Ideation Labs</CardTitle>
                        <CardDescription className="text-lg">Creative thinking sessions focused on innovation and entrepreneurial mindset</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        {["Innovation Thinking", "Ideation Techniques", "Startup Concepts", "Market Analysis"].map((aspect, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-chart1/10 rounded-lg flex items-center justify-center">
                              <Lightbulb className="w-4 h-4 text-chart1" />
                            </div>
                            <div>
                              <div className="font-semibold">{aspect}</div>
                              <div className="text-xs text-muted-foreground">Innovation focus</div>
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
              Comprehensive Founder Talks program designed for maximum entrepreneurial exposure, inspirational learning, and career development through structured interactions with successful founders and industry leaders.
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
                            index === 0 ? asset('events/founder-talks/inspire.jpg') :
                            index === 1 ? asset('events/founder-talks/career.jpg') :
                            index === 2 ? asset('events/founder-talks/interaction.jpg') :
                            index === 3 ? asset('events/founder-talks/network.jpg') :
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

        {/* Founder Types */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Visionary Speakers</Badge>
            <h2 className="text-4xl font-bold">Meet Our Founder Speakers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from diverse entrepreneurial experiences across industries and company stages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founderTypes.map((type, index) => (
              <Card key={index} className={`border-2 hover:border-${type.color}/50 transition-all duration-300 hover:shadow-xl group`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${type.color}/20 to-${type.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <type.icon className={`h-10 w-10 text-${type.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="text-base">{type.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    {type.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="bg-muted/50 border rounded-lg p-3 text-sm text-center hover:bg-muted/80 transition-colors">
                        {achievement}
                      </div>
                    ))}
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
                Why Choose Founder Talks
              </Badge>
              <h2 className="text-4xl font-bold">Why Choose Founder Talks?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Direct entrepreneurial inspiration that transforms student mindset and career aspirations
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
            <h2 className="text-4xl font-bold">Founder Talks Success Metrics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our entrepreneurial inspiration initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-2 text-center hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Rocket className="h-8 w-8 text-primary" />
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
                  Inspire Today
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Bring Entrepreneurial Spirit to Your Campus</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join dozens of institutions who trust Fresherbot's Founder Talks to bring inspiring entrepreneurial stories
                  and innovative wisdom directly to students. Create lasting impact with visionary leaders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/book-founder-session">
                    <Mic className="mr-2 h-5 w-5" />
                    Book Founder Session
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
                  <span>✅ <strong>Entrepreneurial Stories</strong></span>
                  <span>✅ <strong>Career Inspiration</strong></span>
                  <span>✅ <strong>Innovation Mindset</strong></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <video
                  src={asset('events/founder-talks/founder-video.mp4')}
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

export default FounderTalksPage;