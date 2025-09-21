import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Progress } from '@voilajsx/uikit/progress';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  ArrowRight, Users, Brain, Target, Shield, Award, TrendingUp,
  CheckCircle, Building2, GraduationCap, Globe, Zap, Sparkles, Play,
  Rocket, Mail, Phone, MapPin
} from 'lucide-react';
import { SEO } from '../components';

export const HomePage: React.FC = () => {

  const stats = [
    { label: "Students Trained", value: "50,000+", growth: 85, icon: Users },
    { label: "Partner Universities", value: "100+", growth: 92, icon: GraduationCap },
    { label: "Hiring Partners", value: "500+", growth: 78, icon: Building2 },
    { label: "Placement Success", value: "87%", growth: 87, icon: TrendingUp }
  ];

  const universities = [
    "IIT Delhi", "IIT Mumbai", "NIT Trichy", "BITS Pilani", 
    "Anna University", "VIT University", "SRM University", "KIIT University"
  ];

  const companies = [
    "Microsoft", "Google", "Amazon", "TCS", "Infosys", 
    "Wipro", "Accenture", "IBM", "HCL", "Tech Mahindra"
  ];

  const features = [
    {
      icon: Target,
      title: "End-to-End Recruitment Management",
      description: "Complete recruitment lifecycle from talent identification to final placement with automated workflows and real-time tracking.",
      benefits: ["Automated Assessment Workflows", "Real-time Candidate Tracking", "Integrated Communication Tools", "Performance Analytics Dashboard"],
      image: "/api/placeholder/500/300"
    },
    {
      icon: Brain,
      title: "AI-Powered Assessment Engine",
      description: "Advanced machine learning algorithms for precise talent evaluation with bias-free, scalable assessment capabilities.",
      benefits: ["Predictive Analytics", "Bias-Free Evaluation", "Multi-Domain Assessments", "Instant Result Generation"],
      image: "/api/placeholder/500/300"
    },
    {
      icon: Users,
      title: "Comprehensive Training Ecosystem",
      description: "Industry-aligned skill development programs with expert-led training modules and personalized learning paths.",
      benefits: ["40+ Industry-Relevant Courses", "Expert Instructor Network", "Personalized Learning Paths", "Skills Gap Analysis"],
      image: "/api/placeholder/500/300"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security infrastructure with comprehensive audit trails, data protection, and regulatory compliance.",
      benefits: ["ISO 27001 Certified", "GDPR Compliant", "End-to-End Encryption", "24/7 Security Monitoring"],
      image: "/api/placeholder/500/300"
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot - Transform Campus Recruitment with AI"
        description="Enterprise-grade campus recruitment platform trusted by 100+ universities and 500+ companies. AI-powered assessments, comprehensive training, and end-to-end recruitment management."
      />
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl" />
          <div className="relative max-w-7xl mx-auto px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Campus Recruitment Platform
                </Badge>
                
                <div className="space-y-6">
                  <h1 className="voila-heading text-5xl md:text-6xl font-bold">
                    Building Your Career...?
                  </h1>
                  <h2 className="voila-heading text-3xl md:text-4xl font-semibold text-primary">
                    We have got this Together
                  </h2>
                </div>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fresherbot revolutionizes campus hiring with AI-powered assessments, seamless training, 
                  and end-to-end recruitment management. We connect talent with opportunity, creating a 
                  smarter, faster, and more impactful hiring ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/get-started">
                      <Rocket className="mr-2 h-5 w-5" />
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/demo">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Demo
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Global Reach</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Card className="border-2 shadow-xl">
                  <CardContent className="p-2">
                    <img 
                      src="api/placeholder/600/400" 
                      alt="Fresherbot Platform Dashboard"
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-8">
          <Alert className="border-2 border-primary/20 bg-primary/5 mb-12">
            <TrendingUp className="h-5 w-5" />
            <AlertDescription className="text-lg font-medium">
              <strong>Live Impact:</strong> Over 50,000 students trained with 87% placement success rate across 100+ universities
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  <Progress value={stat.growth} className="h-2" />
                  <div className="text-xs text-muted-foreground">+{stat.growth}% growth</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="max-w-7xl mx-auto" />

        {/* Partners Section */}
        <section className="max-w-7xl mx-auto px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnering with premier educational institutions and Fortune 500 companies globally
            </p>
          </div>
          
          <Tabs defaultValue="universities" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="universities" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Universities
              </TabsTrigger>
              <TabsTrigger value="companies" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Companies
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="universities" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Premier Universities
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Leading educational institutions trust Fresherbot for campus recruitment excellence
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {universities.map((university, index) => (
                      <Card key={index} className="border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6 text-center space-y-3">
                          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div className="font-medium text-sm">{university}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="companies" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl flex items-center justify-center gap-2">
                    <Building2 className="h-6 w-6 text-secondary" />
                    Fortune 500 Companies
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Global corporations choose Fresherbot for strategic talent acquisition
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {companies.map((company, index) => (
                      <Card key={index} className="border hover:border-secondary/50 transition-colors">
                        <CardContent className="p-4 text-center space-y-3">
                          <div className="w-10 h-10 mx-auto bg-secondary/10 rounded-lg flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-secondary" />
                          </div>
                          <div className="font-medium text-sm">{company}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator className="max-w-7xl mx-auto" />

        {/* Platform Features */}
        <section className="max-w-7xl mx-auto px-8 space-y-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Platform Capabilities</Badge>
            <h2 className="text-4xl font-bold">Advanced Recruitment Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade solutions designed for modern campus recruitment challenges
            </p>
          </div>
          
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="mt-4">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex-1">
                  <Card className="border-2 shadow-lg">
                    <CardContent className="p-4">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="max-w-7xl mx-auto" />

        {/* Success Stories */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="bg-muted/30 rounded-3xl p-12 space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">Success Stories</Badge>
              <h2 className="text-4xl font-bold">Proven Results</h2>
              <p className="text-xl text-muted-foreground">Real impact from our platform implementations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-primary">Premier Technical University</CardTitle>
                      <Badge variant="outline">Education Partner</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">10,000+</div>
                      <div className="text-xs text-muted-foreground">Students Assessed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">35%</div>
                      <div className="text-xs text-muted-foreground">Higher Conversions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">60%</div>
                      <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                  </div>
                  <Progress value={85} className="h-3" />
                  <blockquote className="text-muted-foreground italic">
                    "Fresherbot's AI-powered platform revolutionized our placement process with exceptional results."
                  </blockquote>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-secondary">Fortune 500 Technology Company</CardTitle>
                      <Badge variant="outline">Corporate Partner</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-secondary">40%</div>
                      <div className="text-xs text-muted-foreground">Cost Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-xs text-muted-foreground">HR Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">50%</div>
                      <div className="text-xs text-muted-foreground">Faster Hiring</div>
                    </div>
                  </div>
                  <Progress value={92} className="h-3" />
                  <blockquote className="text-muted-foreground italic">
                    "The automated workflows transformed our campus recruitment ROI with measurable business impact."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-8">
          <Card className="border-2 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Zap className="w-4 h-4 mr-2" />
                  Ready to Transform?
                </Badge>
                <h2 className="text-4xl font-bold">Start Your Recruitment Revolution</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join 500+ companies and 100+ universities who trust Fresherbot for intelligent, 
                  efficient, and successful campus recruitment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="text-lg px-10 py-6" asChild>
                  <Link to="/get-started">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Started with Fresherbot
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                  <Link to="/contact">
                    <Users className="mr-2 h-5 w-5" />
                    Talk to Our Team
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@fresherbot.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 7032309797</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default HomePage;