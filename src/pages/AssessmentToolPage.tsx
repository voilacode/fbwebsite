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
      description: "Complete assessment suite covering technical skills, cognitive abilities, and personality traits for comprehensive candidate evaluation",
      color: "primary",
      items: [
        {
          title: "MCQs & MAQs",
          description: "Smart multiple-choice questions with adaptive difficulty, negative marking, and randomized pools to prevent cheating",
          icon: CheckCircle
        },
        {
          title: "Live Coding Challenges",
          description: "Real-time programming tests in 15+ languages with instant compilation, test validation, and plagiarism detection",
          icon: Code
        },
        {
          title: "Communication Tests",
          description: "Evaluate listening, reading, writing, and speaking skills with AI-powered grading and performance analytics",
          icon: FileText
        },
        {
          title: "Psychometric Analysis",
          description: "Personality profiling, cognitive testing, and emotional intelligence assessment with detailed psychology reports",
          icon: Brain
        }
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Accuracy",
      description: "Advanced AI technology that eliminates human bias and delivers consistent, precise scoring with enterprise-grade reliability",
      color: "secondary",
      items: [
        {
          title: "Instant Smart Scoring",
          description: "AI evaluates responses in real-time with 99.8% accuracy across thousands of simultaneous assessments",
          icon: Clock
        },
        {
          title: "Deep Learning Analytics",
          description: "Neural networks perform skill mapping, competency analysis, and detailed performance evaluation",
          icon: BarChart3
        },
        {
          title: "Predictive Intelligence",
          description: "Machine learning models forecast candidate success, job performance, and cultural fit with statistical confidence",
          icon: TrendingUp
        }
      ]
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Advanced security protocols ensuring test integrity, preventing cheating, and protecting sensitive data with military-grade encryption and compliance standards",
      color: "accent",
      items: [
        {
          title: "Advanced Anti-Cheating",
          description: "Real-time browser monitoring, tab switching detection, live proctoring alerts, and AI-powered behavior analysis",
          icon: Eye
        },
        {
          title: "Identity Verification",
          description: "Biometric authentication, facial recognition, and automatic test termination on suspicious activity",
          icon: Lock
        },
        {
          title: "Data Protection & Compliance",
          description: "End-to-end encryption, GDPR compliance, secure cloud storage, and audit trails for complete data security",
          icon: Shield
        }
      ]
    },
    {
      icon: Globe,
      title: "Scalability for Institutions",
      description: "Robust cloud infrastructure designed for educational institutions to conduct large-scale assessments, entrance exams, and placement tests with unlimited concurrent users and global accessibility",
      color: "chart1",
      items: [
        {
          title: "Massive Scale Support",
          description: "Handle 50,000+ concurrent users, unlimited assessments, and multi-campus deployments with consistent performance",
          icon: Users
        },
        {
          title: "Enterprise Infrastructure",
          description: "99.9% uptime guarantee, auto-scaling cloud servers, global CDN, and disaster recovery protocols",
          icon: Zap
        },
        {
          title: "Institutional Management",
          description: "Multi-tenant architecture, bulk student enrollment, custom branding, and comprehensive admin controls",
          icon: Clock
        }
      ]
    }
  ];

  const benefits = [
    "Accurate and Transparent Results – AI ensures fair scoring across all candidates",
    "Wide Skill Coverage – From coding to psychometrics, one platform fits all",
    "Unmatched Security – Swapping detection, anti-cheating measures, and secure storage",
    "Seamless User Experience – Simple, fast, and mobile-friendly platform",
    "Recruiter & Institution Dashboards – One-stop analytics for quick hiring decisions",
    "Global Scalability & Support – Cloud infrastructure with 24/7 technical assistance worldwide"
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
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3" />

          <div className="relative container mx-auto ">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-10">
                <div className="space-y-6">
                  <Badge variant="secondary" className="bg-muted text-foreground inline-flex items-center gap-2 px-4 py-2">
                    <Brain className="w-4 h-4" />
                    AI-Powered Assessment Platform
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Next-Generation
                    </span>
                    <br />
                    Assessment Platform
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Transform your recruitment with <strong className="text-foreground">secure</strong>, <strong className="text-foreground">scalable</strong>, and <strong className="text-foreground">intelligent</strong> assessments powered by AI.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Enterprise Security</div>
                      <div className="text-xs text-muted-foreground">Anti-cheating measures</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">AI Analytics</div>
                      <div className="text-xs text-muted-foreground">Real-time insights</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Global Scale</div>
                      <div className="text-xs text-muted-foreground">Thousands of users</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className=" text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/demo">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Get Started Free
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/contact">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No setup fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    14-day free trial
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Cancel anytime
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative pr-10">
                <div className="relative">
                  <img
                    src="https://i.ibb.co/mCQ4LS9f/3d08c7fa-6415-4666-9e17-114f5ca0ac62.jpg"
                    alt="Assessment Platform Dashboard"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Card */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Assessments</div>
                  </div>
                </div>
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
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Comprehensive online assessment capabilities powered by cutting-edge artificial intelligence technology, designed for educational institutions, corporate recruitment, and skill evaluation. Our advanced platform delivers secure, scalable, and intelligent testing solutions with real-time analytics, automated grading, and enterprise-grade security features to streamline your hiring process and academic assessments.
            </p>
          </div>
          
          <div className="space-y-16">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`grid lg:grid-cols-5 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Feature Image */}
                  <div className={`lg:col-span-2 relative ${index % 2 === 1 ? 'lg:col-start-4' : ''} flex items-center justify-center p-6`}>
                    <div className="relative w-full max-w-sm mx-auto">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/20 via-${feature.color}/10 to-transparent z-10`} />
                        <img
                          src={
                            index === 0 ? "/product/assessment/Wide Range of Assessments.jpg" :
                            index === 1 ? "/product/assessment/AI-Powered Accuracy.jpg" :
                            index === 2 ? "/product/assessment/Enterprise-Grade Security.jpg" :
                            index === 3 ? "/product/assessment/Scalability for Institutions.jpg" :
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
                  <div className={`lg:col-span-3 p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
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
                          <Card key={itemIndex} className="border bg-muted/30 hover:bg-muted/50 transition-colors py-3 px-1 my-1 ">
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
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src="/product/assessment/mcq.png"
                      alt="MCQ Assessment Interface"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <CardTitle className="text-2xl p-0">MCQs & MAQs</CardTitle>
                        <CardDescription className="text-lg">Objective assessments for quick evaluation</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Single Choice</div>
                          <div className="text-sm text-muted-foreground">Traditional multiple choice questions</div>
                        </div>
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Multiple Choice</div>
                          <div className="text-sm text-muted-foreground">Multiple correct answers (MAQs)</div>
                        </div>
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">True/False</div>
                          <div className="text-sm text-muted-foreground">Binary choice questions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="subjective" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src="/product/assessment/subjective.png"
                      alt="Subjective Assessment Interface"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <CardTitle className="text-2xl mb-2">Fills & Subjective</CardTitle>
                        <CardDescription className="text-lg">Assess conceptual understanding and problem-solving</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Fill in the Blanks</div>
                          <div className="text-sm text-muted-foreground">Test specific knowledge points</div>
                        </div>
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Essay Questions</div>
                          <div className="text-sm text-muted-foreground">Long-form analytical responses</div>
                        </div>
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Short Answers</div>
                          <div className="text-sm text-muted-foreground">Concise problem-solving</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="coding" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8">
                    <img
                      src="/product/assessment/coding.png"
                      alt="Coding Challenge Interface"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <CardTitle className="text-2xl mb-2">Coding Challenges</CardTitle>
                        <CardDescription className="text-lg">Real-time coding assessments in popular languages</CardDescription>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {['C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'Go', 'Rust'].map((lang, index) => (
                          <div key={index} className="bg-muted/50 border rounded-lg p-3 text-center">
                            <div className="font-medium text-sm">{lang}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="psychometric" className="mt-8">
              <Card className="border-2 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="flex items-center justify-center p-8 order-last lg:order-first">
                    <img
                      src="/product/assessment/psychometic.png"
                      alt="Psychometric Assessment Interface"
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-6">
                      <div className="text-center lg:text-left">
                        <CardTitle className="text-2xl mb-2">Psychometric Tests</CardTitle>
                        <CardDescription className="text-lg">Personality, behavior, and aptitude evaluations</CardDescription>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Personality Assessment</div>
                          <div className="text-sm text-muted-foreground">Behavioral traits and characteristics</div>
                        </div>
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Aptitude Tests</div>
                          <div className="text-sm text-muted-foreground">Logical and analytical reasoning</div>
                        </div>
                        <div className="bg-muted/50 border rounded-lg p-4">
                          <div className="font-semibold mb-2">Workplace Readiness</div>
                          <div className="text-sm text-muted-foreground">Professional skills evaluation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <Card key={index} className={`border-2 hover:border-${useCase.color}/50 transition-all duration-300 hover:shadow-xl group overflow-hidden`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={
                      index === 0 ? "/product/assessment/college.png" :
                      index === 1 ? "/product/assessment/company.png" :
                      index === 2 ? "/product/assessment/institute.png" :
                      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    }
                    alt={`${useCase.title} illustration`}
                    className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center space-y-4">
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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl -z-10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-12">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left relative z-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started Today
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Experience the Future of Assessments?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join thousands of institutions and companies who trust Fresherbot for secure, scalable,
                  and AI-powered assessments. Transform your recruitment process today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
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

              <div className="pt-6">
                <div className="text-sm text-muted-foreground flex flex-wrap justify-center lg:justify-start gap-4">
                  <span>✅ <strong>Enterprise-Grade Security</strong></span>
                  <span>✅ <strong>AI-Powered Analytics</strong></span>
                  <span>✅ <strong>24/7 Support</strong></span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-first lg:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/product/assessment/ready to experience.png"
                  alt="Ready to Experience Assessment Platform"
                  className="w-full h-full object-cover"
                />
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

export default AssessmentToolPage;