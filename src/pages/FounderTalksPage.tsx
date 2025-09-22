import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Progress } from '@voilajsx/uikit/progress';
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
  Handshake
} from 'lucide-react';
import { SEO } from '../components';

export const FounderTalksPage: React.FC = () => {
  const studentGains = [
    {
      icon: Rocket,
      title: "Startup Stories that Inspire",
      description: "First-hand accounts of successful company building and entrepreneurial journeys",
      color: "primary",
      items: [
        { title: "Company Building", description: "How successful founders built companies from scratch", icon: Building2 },
        { title: "Learning from Failures", description: "Lessons from failures, challenges, and turning points", icon: Target },
        { title: "Bold Career Steps", description: "Motivation to take bold steps in career and entrepreneurship", icon: Rocket }
      ]
    },
    {
      icon: Target,
      title: "Career Guidance from Leaders",
      description: "Practical advice on career planning, skill development, and industry readiness",
      color: "secondary",
      items: [
        { title: "Career Planning", description: "Strategic advice on career development and skill building", icon: BarChart3 },
        { title: "Opportunity Recognition", description: "How to identify opportunities and adapt to change", icon: Eye },
        { title: "Success Mindset", description: "Cultivating the right mindset for achievement", icon: Brain }
      ]
    },
    {
      icon: Star,
      title: "Motivational Sessions",
      description: "Insightful sessions that boost confidence, ambition, and entrepreneurial spirit",
      color: "accent",
      items: [
        { title: "Confidence Building", description: "Sessions that boost confidence and ambition", icon: Trophy },
        { title: "Real Impact Stories", description: "How passion and perseverance create lasting impact", icon: Award },
        { title: "Direct Engagement", description: "Interactive Q&A with founders and leaders", icon: MessageCircle }
      ]
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
    "Builds entrepreneurial spirit among students",
    "Provides real-world perspective beyond textbooks", 
    "Connects students with leaders and innovators",
    "Encourages risk-taking, innovation, and leadership qualities"
  ];

  const outcomes = [
    {
      title: "Big Dreams",
      description: "Students feel motivated to dream big and achieve more",
      icon: Star,
      progress: 95
    },
    {
      title: "Entrepreneurial Culture",
      description: "Institutions foster innovation mindset on campus",
      icon: Lightbulb,
      progress: 90
    },
    {
      title: "Industry Connection",
      description: "Stronger industry-academia relationships",
      icon: Handshake,
      progress: 88
    },
    {
      title: "Leadership Qualities",
      description: "Enhanced risk-taking and innovation capabilities",
      icon: Trophy,
      progress: 92
    }
  ];

  const talkProcess = [
    { 
      number: "1", 
      title: "Founder Selection", 
      desc: "Curate inspiring leaders and entrepreneurs for your campus",
      icon: UserCheck,
      color: "primary"
    },
    { 
      number: "2", 
      title: "Session Planning", 
      desc: "Coordinate logistics and customize content for your audience",
      icon: Calendar,
      color: "secondary"
    },
    { 
      number: "3", 
      title: "Inspirational Talk", 
      desc: "Founder shares journey, insights, and interactive Q&A",
      icon: Mic,
      color: "accent"
    },
    { 
      number: "4", 
      title: "Impact & Follow-up", 
      desc: "Measure engagement and build lasting connections",
      icon: TrendingUp,
      color: "chart1"
    }
  ];

  return (
    <>
      <SEO
        title="Founder Talks - Learn Directly from the Visionaries"
        description="Inspiring campus sessions with startup founders and industry leaders sharing real-life journeys, career insights, and entrepreneurial success strategies."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Rocket className="w-4 h-4 mr-2" />
                  Founder Talks
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Learn Directly from the Visionaries
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At <strong className="text-primary">Fresherbot</strong>, we believe true inspiration comes from those who've walked the path of{' '}
                <Badge variant="outline" className="mx-1">innovation</Badge>,{' '}
                <Badge variant="outline" className="mx-1">entrepreneurship</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">leadership</Badge>.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  Our <strong>Founder Talks</strong> bring <strong>startup founders, entrepreneurs, and industry leaders</strong> to campuses 
                  to share their <strong>real-life journeys, career insights, and success strategies</strong>.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/book-founder-session">
                    <Mic className="mr-2 h-5 w-5" />
                    Book a Founder Session
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

        {/* What Students Gain */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Student Benefits</Badge>
            <h2 className="text-4xl font-bold">What Students Gain</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive learning experience that combines inspiration, guidance, and practical insights
            </p>
          </div>
          
          <div className="space-y-12">
            {studentGains.map((gain, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${gain.color}/20 to-${gain.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <gain.icon className={`h-10 w-10 text-${gain.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{gain.title}</CardTitle>
                  <CardDescription className="text-lg">{gain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gain.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="border bg-muted/30 hover:bg-muted/50 transition-colors">
                        <CardContent className="p-6 space-y-3">
                          <div className={`w-12 h-12 bg-gradient-to-br from-${gain.color}/20 to-${gain.color}/10 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`h-6 w-6 text-${gain.color}`} />
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

        {/* Video Showcase Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Session Highlights</Badge>
            <h2 className="text-4xl font-bold">Founder Stories in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch inspiring moments from our founder talks and see the impact on students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Video className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Startup Journey Stories</CardTitle>
                  <CardDescription>Real founders sharing their entrepreneurial journeys</CardDescription>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Stories
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-10 w-10 text-secondary" />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg">Student Interactions</CardTitle>
                  <CardDescription>Q&A sessions and direct student engagement</CardDescription>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Play className="mr-2 h-4 w-4" />
                  View Interactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Talk Process */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Session Flow</Badge>
            <h2 className="text-4xl font-bold">How Founder Talks Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured approach to bringing entrepreneurial inspiration to your campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talkProcess.map((step, index) => (
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

        {/* Why Founder Talks Matter */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative p-10 space-y-8">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                Why They Matter
              </Badge>
              <h2 className="text-4xl font-bold">Why Founder Talks Matter</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Essential experiences that shape entrepreneurial mindset and career perspectives
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
            <Badge variant="secondary" className="px-4 py-2">Session Impact</Badge>
            <h2 className="text-4xl font-bold">Outcomes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable transformation in student mindset and institutional culture
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
              <h3 className="text-2xl font-bold mb-2">Founder Talks Impact</h3>
              <p className="text-muted-foreground">Real results from our entrepreneurial inspiration sessions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Founder Sessions", value: "200+", progress: 95 },
                { label: "Students Inspired", value: "50,000+", progress: 90 },
                { label: "Startup Founders", value: "150+", progress: 85 },
                { label: "Campus Partners", value: "80+", progress: 88 }
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
                Inspire Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Bring the Spirit of Entrepreneurship to Your Campus</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join dozens of institutions who trust Fresherbot to bring <strong>inspiring founder stories and entrepreneurial wisdom</strong> 
                directly to their students. Create lasting impact with visionary leaders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/book-founder-session">
                  <Mic className="mr-2 h-5 w-5" />
                  Book a Founder Session
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
                <Rocket className="inline h-4 w-4 mr-1" />
                <strong>Entrepreneurial Spirit</strong> • <strong>Real Success Stories</strong> • <strong>Direct Inspiration</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FounderTalksPage;