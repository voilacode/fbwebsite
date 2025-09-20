import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
import { 
  Brain, 
  GraduationCap, 
  Target, 
  Eye,
  BookOpen,
  Users,
  Shield,
  Zap,
  Heart,
  Handshake,
  Globe,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Building2,
  Lightbulb,
  Star,
  Rocket
} from 'lucide-react';
import { SEO } from '../components';

export const AboutPage: React.FC = () => {
  const offerings = [
    {
      icon: Brain,
      title: "AI-Driven Assessments",
      description: "Skill-based, secure, and scalable evaluations covering coding, aptitude, and psychometric testing",
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Learning Management System",
      description: "Comprehensive LMS with 40+ courses, video learning, and self-paced assessment modules",
      color: "secondary"
    },
    {
      icon: Users,
      title: "Training Management System",
      description: "End-to-end training workflows with student records and performance tracking capabilities",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "Campus Recruitment Services",
      description: "Complete recruitment programs including CRT, hackathons, HR Campus Connect, and Founder Talks",
      color: "chart1"
    },
    {
      icon: Building2,
      title: "Recruitment Drive Management",
      description: "Full-service recruitment drive coordination from initial assessments to final interviews",
      color: "chart2"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student Success First",
      description: "Every solution we develop is designed to enhance student employability and career readiness",
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "AI and advanced technology deployed meaningfully to solve real recruitment challenges",
      color: "secondary"
    },
    {
      icon: Handshake,
      title: "Strategic Collaboration",
      description: "Building strong, lasting partnerships with educational institutions and corporate leaders",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Integrity & Transparency",
      description: "Trust and ethical practices form the foundation of every process and interaction",
      color: "chart1"
    },
    {
      icon: Globe,
      title: "Future-Ready Solutions",
      description: "Preparing students and recruiters for the evolving landscape of modern employment",
      color: "chart2"
    }
  ];

  const benefits = [
    "End-to-End Campus Recruitment in one integrated platform",
    "AI-powered analytics for smarter hiring decisions and insights",
    "5+ years of experience with expert trainers and HR professionals",
    "Trusted by leading colleges and Fortune 500 companies",
    "Proven impact with higher placement rates and reduced hiring timelines"
  ];

  return (
    <>
      <SEO
        title="About Fresherbot - Transforming Campus Recruitment"
        description="Learn about Fresherbot's mission to bridge the gap between students and recruiters through AI-powered assessments, training, and recruitment solutions."
      />
      <div className="space-y-20 max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              About Fresherbot
            </Badge>
            <h1 className="voila-heading text-5xl md:text-6xl font-bold">
              Transforming Campus Recruitment
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              <strong className="text-foreground">Fresherbot</strong> is a next-generation campus recruitment, 
              training, and assessment platform designed to revolutionize how students and recruiters connect 
              in the modern employment landscape.
            </p>
          </div>

          <Alert className="border-2 border-primary/20 bg-primary/5 max-w-4xl mx-auto">
            <Brain className="h-5 w-5" />
            <AlertDescription className="text-lg">
              We go beyond traditional hiring methods by focusing on <strong>skills, performance, and transparency</strong>, 
              ensuring that every student gets a fair opportunity to showcase their talent while helping recruiters 
              find the right fit efficiently.
            </AlertDescription>
          </Alert>

          <div className="text-center text-lg text-muted-foreground max-w-5xl mx-auto">
            Our comprehensive platform combines <strong className="text-primary">AI-powered assessment tools</strong>, 
            a robust <strong className="text-secondary">Learning Management System</strong>, and an integrated{' '}
            <strong className="text-accent">Training Management System</strong> to deliver a complete 
            360-degree solution for campus recruitment success.
          </div>
        </section>

        <Separator />

        {/* Our Story */}
        <section>
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Our Story</CardTitle>
              <CardDescription className="text-lg">The vision that drives our mission</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Traditional recruitment processes often fail to capture a student's{' '}
                <strong className="text-primary">true potential</strong>, leaving talented individuals 
                overlooked while companies struggle to find qualified candidates. Fresherbot was founded 
                with the vision to <strong className="text-accent">bridge this critical gap</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We collaborate directly with <strong className="text-secondary">educational institutions</strong>{' '}
                to prepare students for career success and partner with{' '}
                <strong className="text-chart1">corporate organizations</strong> to streamline their 
                hiring processes—making recruitment faster, smarter, and more skill-focused.
              </p>
              
              <Alert>
                <TrendingUp className="h-5 w-5" />
                <AlertDescription className="text-base">
                  Over the years, we have successfully helped <strong>thousands of students</strong> improve 
                  their employability while enabling companies to discover <strong>job-ready graduates</strong> at scale.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To <strong className="text-primary">empower students</strong> with the skills and opportunities 
                they need to succeed, while <strong className="text-secondary">simplifying recruitment</strong>{' '}
                for employers through AI-driven insights, comprehensive training programs, and 
                performance-based assessment solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the <strong className="text-secondary">global leader in campus recruitment</strong>, 
                creating a world where <strong className="text-accent">skills meet opportunities seamlessly</strong>{' '}
                and where both students and employers thrive in a future-ready employment ecosystem.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* What We Offer */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Our Solutions</Badge>
            <h2 className="text-4xl font-bold">Comprehensive Platform Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete suite of tools covering every aspect of modern campus recruitment and training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <offering.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{offering.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{offering.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Core Values */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Our Foundation</Badge>
            <h2 className="text-4xl font-bold">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The fundamental principles that guide every decision and interaction at Fresherbot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Why Choose Fresherbot */}
        <section>
          <div className="bg-muted/30 rounded-3xl p-12 space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Why Choose Fresherbot
              </Badge>
              <h2 className="text-4xl font-bold">Proven Results & Comprehensive Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover why leading institutions and companies choose Fresherbot for their recruitment needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-base font-medium leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert className="max-w-4xl mx-auto border-2 border-accent/20 bg-accent/5">
              <Heart className="h-6 w-6" />
              <AlertDescription className="text-xl font-semibold text-center">
                At Fresherbot, we believe in one fundamental principle:{' '}
                <span className="text-accent font-bold">When students succeed, everyone wins.</span>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Our Global Impact</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join the growing network of institutions and companies transforming campus recruitment through Fresherbot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 text-center">
              <CardContent className="pt-6 space-y-3">
                <Users className="w-8 h-8 mx-auto text-primary" />
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-base text-muted-foreground font-medium">Students Trained</div>
              </CardContent>
            </Card>
            
            <Card className="border-2 text-center">
              <CardContent className="pt-6 space-y-3">
                <GraduationCap className="w-8 h-8 mx-auto text-secondary" />
                <div className="text-3xl font-bold text-secondary">100+</div>
                <div className="text-base text-muted-foreground font-medium">Partner Universities</div>
              </CardContent>
            </Card>
            
            <Card className="border-2 text-center">
              <CardContent className="pt-6 space-y-3">
                <Building2 className="w-8 h-8 mx-auto text-accent" />
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-base text-muted-foreground font-medium">Hiring Partners</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;