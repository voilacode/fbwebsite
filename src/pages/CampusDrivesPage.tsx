import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
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
  Target,
  Eye,
  ArrowRight,
  UserCheck,
  FileText,
  Zap,
  HandHeart,
  Handshake,
  PlayCircle,
  Sparkles,
  Briefcase,
  HelpCircle,
  Rocket,
  ClipboardList,
  Laptop,
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const CampusDrivesPage: React.FC = () => {
  // Key features
  const keyFeatures = [
    {
      icon: Brain,
      title: "Online Assessments & Shortlisting",
      description:
        "Conduct AI-driven assessments to evaluate aptitude, coding, and communication. Automated shortlisting ensures transparent and fair talent identification.",
      image: asset('product/campus/assessment.jpg'),
      items: [
        { title: "AI-Driven Assessments", description: "Evaluate aptitude, coding, and communication.", icon: Brain },
        { title: "Automated Shortlisting", description: "Performance-based employer requirements matching.", icon: Target },
        { title: "Transparent Process", description: "Fair evaluation ensuring the right talent is identified.", icon: Eye },
      ],
    },
    {
      icon: Calendar,
      title: "Interview Scheduling & Coordination",
      description:
        "End-to-end interview planning and scheduling with smooth coordination between students, institutions, and recruiters.",
      image: asset('product/campus/interviews.jpg'),
      items: [
        { title: "Interview Planning", description: "Complete scheduling and coordination system.", icon: Calendar },
        { title: "Multi-Party Coordination", description: "Students, institutions, and recruiters alignment.", icon: Users },
        { title: "Efficiency Optimization", description: "Minimized delays and maximum efficiency.", icon: Zap },
      ],
    },
    {
      icon: BarChart3,
      title: "Employer Dashboards",
      description:
        "Dedicated dashboards for HRs and recruiters with candidate profiles, assessment results, interview status, and real-time insights.",
      image: asset('product/campus/employee_dashboard.jpg'),
      items: [
        { title: "HR & Recruiter Dashboards", description: "Dedicated interfaces for hiring teams.", icon: Briefcase },
        { title: "Candidate Insights", description: "Profiles, assessment results, and interview status.", icon: FileText },
        { title: "Real-time Analytics", description: "Instant insights for better hiring decisions.", icon: BarChart3 },
      ],
    },
  ];

  // HR Support
  const hrSupportServices = [
    {
      title: "HRCC Sessions",
      description: "HR Counseling & Connect sessions with direct student interaction.",
      icon: MessageCircle,
    },
    {
      title: "Mock Interviews",
      description: "Practice interviews with real HR professionals.",
      icon: UserCheck,
    },
    {
      title: "Resume Reviews",
      description: "Professional resume checks and improvement guidance.",
      icon: FileText,
    },
    {
      title: "Career Guidance",
      description: "Personalized career counseling and development advice.",
      icon: Target,
    },
  ];

  // Benefits
  const benefits = [
    "End-to-end recruitment management — assessments to final hiring",
    "Real HRs visiting campuses to guide and evaluate students",
    "Seamless coordination between colleges and recruiters",
    "Proven track record of helping students get placed in top companies",
    "We go the extra mile — we prove our best to ensure successful placements",
  ];

  // Outcomes
  const outcomes = [
    {
      title: "Higher Placement Rates",
      description: "Increased placement percentages for institutions through structured drives.",
      icon: TrendingUp,
      progress: 92,
    },
    {
      title: "HR Exposure",
      description: "Students gain confidence through direct interaction with HRs.",
      icon: HandHeart,
      progress: 88,
    },
    {
      title: "Faster Hiring",
      description: "Streamlined recruitment ensuring quicker selection for employers.",
      icon: Zap,
      progress: 85,
    },
    {
      title: "Industry Collaboration",
      description: "Stronger institution–industry partnerships and long-term success.",
      icon: Handshake,
      progress: 90,
    },
  ];

  // Testimonials
  const successStories = [
    {
      name: "Amit Verma",
      role: "HR Manager, Infosys",
      feedback:
        "The Fresherbot campus drive solution streamlined our hiring process. We saved time and found highly qualified candidates effortlessly.",
      avatar: asset('product/testimonials/hr1.png'),
    },
    {
      name: "Priya Sharma",
      role: "Placement Officer, IIT Delhi",
      feedback:
        "Seamless coordination and transparent assessments — students and recruiters both had an excellent experience.",
      avatar: asset('product/testimonials/hr2.png'),
    },
    {
      name: "Rohit Mehta",
      role: "Recruitment Lead, Wipro",
      feedback:
        "Our placement rate increased by 40% after partnering with Fresherbot. A true game changer for campus hiring.",
      avatar: asset('product/testimonials/hr3.png'),
    },
  ];

  // Statistics
  const stats = [
    { label: "Campus Drives Conducted", value: "500+", icon: Building2 },
    { label: "Students Placed", value: "25,000+", icon: Users },
    { label: "Recruiter Partnerships", value: "300+", icon: Briefcase },
    { label: "Avg. Placement Rate", value: "92%", icon: TrendingUp },
  ];

  // Use Cases
  const useCases = [
    {
      title: "For Colleges",
      description: "Boost placement records and improve student outcomes with our structured recruitment drives.",
      icon: Building2,
      image: asset('product/campus/colleges.jpg'),
    },
    {
      title: "For Corporates",
      description: "Hire top-quality candidates from multiple institutions with AI-driven assessments.",
      icon: Briefcase,
      image: asset('product/campus/corporate.jpg'),
    },
    {
      title: "For Training Providers",
      description: "Seamlessly integrate assessments and hiring pipelines for your trainees.",
      icon: Sparkles,
      image: asset('product/campus/training.png'),
    },
  ];

  // How it Works
  const steps = [
    { title: "Register & Setup", description: "Institutions and recruiters register and set up their requirements.", icon: ClipboardList },
    { title: "Assessments", description: "AI-driven aptitude, coding, and communication evaluations.", icon: Laptop },
    { title: "Interviews", description: "Smoothly coordinated online or on-campus interviews.", icon: Users },
    { title: "Hiring Success", description: "Selected candidates receive offers, improving placement stats.", icon: Rocket },
  ];

  // FAQs
  const faqs = [
    { question: "How does Fresherbot ensure fair assessments?", answer: "We use AI-driven proctoring and objective evaluation metrics, ensuring transparency and fairness in every assessment." },
    { question: "Can we customize assessments as per recruiter needs?", answer: "Yes, assessments can be tailored to specific job roles, technical stacks, and skill requirements." },
    { question: "Do you support both online and offline drives?", answer: "Absolutely, Fresherbot supports hybrid, fully online, and traditional on-campus recruitment formats." },
    { question: "How do students benefit from HRCC sessions?", answer: "Students interact directly with HRs, improving confidence, communication, and interview readiness." },
  ];

  return (
    <>
      <SEO
        title="Campus Drives - End-to-End Recruitment Drive Management"
        description="Seamless campus recruitment drives connecting institutions, students, and employers with AI-driven assessments, HR support, and complete coordination."
      />

      {/* Hero Section */}
      <section className="relative py-16 text-center bg-background">
        <div className="container mx-auto space-y-8 px-6">
          <Badge variant="secondary" className="px-4 py-2 inline-flex items-center gap-2">
            <Building2 className="h-4 w-4" /> Campus Drives
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
              End-to-End
            </span>
            <br />
            Recruitment Drive Management
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            At <strong>Fresherbot</strong>, we specialize in conducting seamless campus recruitment drives that connect institutions, students, and employers on a single platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-6">
              <Link to="/book-campus-drive">
                <Building2 className="mr-2 h-5 w-5" /> Book a Campus Drive <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-6">
              <Link to="/demo">
                <PlayCircle className="mr-2 h-5 w-5" /> Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Key Features */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <Badge variant="secondary">Drive Features</Badge>
          <h2 className="text-4xl font-bold">Key Features</h2>
        </div>
        <div className="space-y-12">
          {keyFeatures.map((feature, idx) => (
            <div key={idx} className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={`${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <img src={feature.image} alt={feature.title} className="rounded-2xl border w-full object-cover" />
              </div>
              <div className="space-y-6">
                <CardTitle className="text-3xl">{feature.title}</CardTitle>
                <CardDescription className="text-lg">{feature.description}</CardDescription>
                <div className="grid gap-3">
                  {feature.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 border p-4 rounded-lg hover:bg-muted/30 transition">
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-muted flex-shrink-0">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* HR Support */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <Badge variant="secondary">HR Support</Badge>
          <h2 className="text-4xl font-bold">Beyond Technology: Our HR Support</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hrSupportServices.map((service, idx) => (
            <Card key={idx} className="border-2 text-center p-6 hover:shadow-md transition">
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center mx-auto">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Why Choose */}
      <section>
        <div className="text-center space-y-4 mb-10">
          <Badge variant="secondary">Why Choose Fresherbot</Badge>
          <h2 className="text-4xl font-bold">Why Choose Fresherbot?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="border-2 p-6 hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="font-medium">{benefit}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Outcomes */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <Badge variant="secondary">Outcomes</Badge>
          <h2 className="text-4xl font-bold">Outcomes of Campus Drives</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, idx) => (
            <Card key={idx} className="border-2 text-center p-6 hover:shadow-md transition">
              <outcome.icon className="h-10 w-10 mx-auto text-primary mb-4" />
              <CardTitle>{outcome.title}</CardTitle>
              <CardDescription>{outcome.description}</CardDescription>
              <Progress value={outcome.progress} className="h-2 mt-4" />
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Testimonials */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <Badge variant="secondary">Success Stories</Badge>
          <h2 className="text-4xl font-bold">What Our Partners Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, idx) => (
            <Card key={idx} className="border-2 p-6 hover:shadow-md transition text-center">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarImage src={story.avatar} alt={story.name} />
                <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{story.name}</CardTitle>
              <CardDescription>{story.role}</CardDescription>
              <p className="text-muted-foreground text-sm mt-3">"{story.feedback}"</p>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Statistics */}
      <section className="text-center space-y-8">
        <Badge variant="secondary">By the Numbers</Badge>
        <h2 className="text-4xl font-bold">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border-2 p-6 hover:shadow-md transition">
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
              <CardDescription>{stat.label}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Use Cases */}
      <section className="space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="secondary">Use Cases</Badge>
          <h2 className="text-4xl font-bold">Who Can Benefit?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="border-2 hover:shadow-md transition">
              <CardContent className="p-6 text-center space-y-4">
                <useCase.icon className="h-8 w-8 text-primary mx-auto" />
                <CardTitle>{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
                <img src={useCase.image} alt={useCase.title} className="rounded-lg mt-4 border" />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* How it Works */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="secondary">How it Works</Badge>
          <h2 className="text-4xl font-bold">Seamless Campus Drive Process</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <Card key={idx} className="border-2 p-6 text-center hover:shadow-md transition">
              <step.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Recruiters Showcase */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="secondary">Trusted by Recruiters</Badge>
          <h2 className="text-4xl font-bold">Our Hiring Partners</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {/* Replace placeholders with actual recruiter logos */}
          <img src={asset('product/recruiters/logo1.png')} alt="Logo 1" className="h-12 object-contain" />
          <img src={asset('product/recruiters/logo2.png')} alt="Logo 2" className="h-12 object-contain" />
          <img src={asset('product/recruiters/logo3.png')} alt="Logo 3" className="h-12 object-contain" />
          <img src={asset('product/recruiters/logo4.png')} alt="Logo 4" className="h-12 object-contain" />
        </div>
      </section>

      <Separator className="my-16" />

      {/* FAQs */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="secondary">FAQs</Badge>
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="border-2 p-6 hover:shadow-md transition">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" /> {faq.question}
              </CardTitle>
              <CardDescription className="mt-2">{faq.answer}</CardDescription>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Final CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-primary/90 via-accent/90 to-orange-500/90 text-white rounded-2xl max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Campus Drives?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join Fresherbot and streamline your recruitment drives with AI-driven assessments, HR support, and seamless coordination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="px-8 py-6">
            <Link to="/book-campus-drive">Book a Campus Drive</Link>
          </Button>
          <Button size="lg" asChild className="px-8 py-6">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
export default CampusDrivesPage;