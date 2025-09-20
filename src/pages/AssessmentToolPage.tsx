import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Code, 
  FileText, 
  Users, 
  Building2,
  GraduationCap,
  Eye,
  Lock,
  Zap,
  BarChart3,
  Clock,
  Globe,
  Award,
  Target,
  Sparkles,
  ArrowRight,
  Phone,
  PlayCircle
} from 'lucide-react';
import { SEO } from '../components';

export const AssessmentToolPage: React.FC = () => {
  const assessmentTypes = [
    {
      title: "MCQs & MAQs",
      description: "Objective assessments for quick evaluation",
      icon: CheckCircle,
      color: "primary"
    },
    {
      title: "Fills & Subjective",
      description: "Tests that assess conceptual understanding and problem-solving",
      icon: FileText,
      color: "secondary"
    },
    {
      title: "Coding Challenges",
      description: "Real-time coding assessments in C, C++, C#, Java, Python, and more",
      icon: Code,
      color: "accent"
    },
    {
      title: "Psychometric Tests",
      description: "Personality, behavior, and aptitude evaluations to measure workplace readiness",
      icon: Brain,
      color: "chart1"
    }
  ];

  const keyFeatures = [
    {
      icon: Target,
      title: "Wide Range of Assessments",
      description: "Support for multiple test formats to evaluate diverse skills across all domains",
      color: "primary",
      items: assessmentTypes
    },
    {
      icon: Brain,
      title: "AI-Powered Accuracy",
      description: "Real-time result generation with precision scoring and advanced analytics",
      color: "secondary",
      items: [
        { title: "Real-time Results", description: "Instant precision scoring", icon: Clock },
        { title: "Advanced Analytics", description: "Strengths, weaknesses, and learning gaps", icon: BarChart3 },
        { title: "Performance Dashboards", description: "Actionable insights for recruiters", icon: TrendingUp }
      ]
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Test integrity and fairness with comprehensive monitoring",
      color: "accent",
      items: [
        { title: "Anti-Cheating Mechanisms", description: "Browser monitoring and live alerts", icon: Eye },
        { title: "Swapping Prevention", description: "Automatic test termination on violations", icon: Lock },
        { title: "Data Protection", description: "Encrypted storage and compliance", icon: Shield }
      ]
    },
    {
      icon: Globe,
      title: "Scalability for Institutions",
      description: "Handle campus-wide assessments with thousands of students simultaneously",
      color: "chart1",
      items: [
        { title: "Campus-Wide Scale", description: "Thousands of students simultaneously", icon: Users },
        { title: "Zero Downtime", description: "Cloud-based high-performance infrastructure", icon: Zap },
        { title: "Flexible Scheduling", description: "Custom assessment creation", icon: Clock }
      ]
    }
  ];

  const benefits = [
    "Accurate and Transparent Results – AI ensures fair scoring across all candidates",
    "Wide Skill Coverage – From coding to psychometrics, one platform fits all",
    "Unmatched Security – Swapping detection, anti-cheating measures, and secure storage",
    "Seamless User Experience – Simple, fast, and mobile-friendly platform",
    "Recruiter & Institution Dashboards – One-stop analytics for quick hiring decisions"
  ];

  const useCases = [
    {
      title: "Colleges & Universities",
      description: "Conduct large-scale entrance or placement assessments with ease",
      icon: GraduationCap,
      color: "primary"
    },
    {
      title: "Corporates",
      description: "Screen candidates efficiently before final interviews",
      icon: Building2,
      color: "secondary"
    },
    {
      title: "Training Providers",
      description: "Measure student progress and learning outcomes effectively",
      icon: Award,
      color: "accent"
    }
  ];

  return (
    <>
      <SEO
        title="Fresherbot Assessment Tool - Smarter, Secure, and Scalable Online Assessments"
        description="AI-powered assessment platform with enterprise-grade security, wide skill coverage, and real-time analytics for campus recruitment and skill evaluation."
      />
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative text-center py-16 px-8">
            <div className="space-y-8 max-w-5xl mx-auto">
              <div className="space-y-2">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Brain className="w-4 h-4 mr-2" />
                  Fresherbot Assessment Tool
                </Badge>
              </div>
              
              <div className="space-y-4">
                <h1 className="voila-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Smarter, Secure, and Scalable Online Assessments
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The <strong className="text-primary">Fresherbot Assessment Tool</strong> is designed to bring{' '}
                <Badge variant="outline" className="mx-1">transparency</Badge>,{' '}
                <Badge variant="outline" className="mx-1">accuracy</Badge>, and{' '}
                <Badge variant="outline" className="mx-1">security</Badge>{' '}
                into campus recruitment and skill evaluation.
              </p>

              <Alert className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <Sparkles className="h-5 w-5" />
                <AlertDescription className="text-lg">
                  Built for institutions and recruiters, our platform goes beyond traditional tests by combining{' '}
                  <strong>AI-driven analytics</strong> with <strong>robust monitoring features</strong> — ensuring every result truly reflects the candidate's skills.
                </AlertDescription>
              </Alert>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
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
            <Badge variant="secondary" className="px-4 py-2">Platform Features</Badge>
            <h2 className="text-4xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive assessment capabilities powered by cutting-edge technology
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Assessment Types Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Assessment Types</Badge>
            <h2 className="text-4xl font-bold">Wide Range of Assessments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple test formats to evaluate diverse skills across all domains
            </p>
          </div>
          
          <Tabs defaultValue="mcq" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
              <TabsTrigger value="mcq">MCQs</TabsTrigger>
              <TabsTrigger value="subjective">Subjective</TabsTrigger>
              <TabsTrigger value="coding">Coding</TabsTrigger>
              <TabsTrigger value="psychometric">Psychometric</TabsTrigger>
            </TabsList>
            
            <TabsContent value="mcq" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">MCQs & MAQs</CardTitle>
                  <CardDescription className="text-lg">Objective assessments for quick evaluation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Single Choice</div>
                      <div className="text-sm text-muted-foreground">Traditional multiple choice questions</div>
                    </div>
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Multiple Choice</div>
                      <div className="text-sm text-muted-foreground">Multiple correct answers (MAQs)</div>
                    </div>
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">True/False</div>
                      <div className="text-sm text-muted-foreground">Binary choice questions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="subjective" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Fills & Subjective</CardTitle>
                  <CardDescription className="text-lg">Assess conceptual understanding and problem-solving</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Fill in the Blanks</div>
                      <div className="text-sm text-muted-foreground">Test specific knowledge points</div>
                    </div>
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Essay Questions</div>
                      <div className="text-sm text-muted-foreground">Long-form analytical responses</div>
                    </div>
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Short Answers</div>
                      <div className="text-sm text-muted-foreground">Concise problem-solving</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="coding" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Coding Challenges</CardTitle>
                  <CardDescription className="text-lg">Real-time coding assessments in popular languages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'Go', 'Rust'].map((lang, index) => (
                      <div key={index} className="bg-muted/50 border rounded-lg p-3 text-center">
                        <div className="font-medium text-sm">{lang}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="psychometric" className="mt-8">
              <Card className="border-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-chart1/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-chart1" />
                  </div>
                  <CardTitle className="text-2xl">Psychometric Tests</CardTitle>
                  <CardDescription className="text-lg">Personality, behavior, and aptitude evaluations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Personality Assessment</div>
                      <div className="text-sm text-muted-foreground">Behavioral traits and characteristics</div>
                    </div>
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Aptitude Tests</div>
                      <div className="text-sm text-muted-foreground">Logical and analytical reasoning</div>
                    </div>
                    <div className="bg-muted/50 border rounded-lg p-4 text-center">
                      <div className="font-semibold mb-2">Workplace Readiness</div>
                      <div className="text-sm text-muted-foreground">Professional skills evaluation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
              <h2 className="text-4xl font-bold">Why Choose Fresherbot's Assessment Tool?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive benefits that set us apart from traditional assessment platforms
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
            <h2 className="text-4xl font-bold">Who Benefits from Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored solutions for different organizations and their unique assessment needs
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

        {/* Final CTA */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl" />
          <div className="relative p-12 text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Zap className="w-4 h-4 mr-2" />
                Get Started Today
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Experience the Future of Assessments?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Join thousands of institutions and companies who trust Fresherbot for secure, scalable, 
                and AI-powered assessments. Transform your recruitment process today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/demo">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                ✅ <strong>Enterprise-Grade Security</strong> • <strong>AI-Powered Analytics</strong> • <strong>24/7 Support</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AssessmentToolPage;