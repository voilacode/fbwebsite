import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription,CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import {
  GraduationCap,
  Users,
  Award,
  CheckCircle,
  Code,
  Briefcase,
  Mic,
  Target,
  PlayCircle,
  ArrowRight,
  Phone,
  Lightbulb,
  Trophy,
  Star,
  BookOpen,
  Laptop,
  ClipboardCheck,
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const CRTTrainingPage: React.FC = () => {
  const focusAreas = [
    {
      icon: Target,
      title: 'Aptitude & Reasoning',
      description:
        'Quantitative aptitude, logical reasoning, and data interpretation with mock tests and shortcut techniques.',
    },
    {
      icon: Code,
      title: 'Coding & Problem-Solving',
      description:
        'Hands-on programming in C, C++, Java, Python with DS & Algorithms, competitive coding, and coding round prep.',
    },
    {
      icon: Mic,
      title: 'Communication & Soft Skills',
      description:
        'Public speaking, GD practice, workplace communication, professional etiquette, and confidence building.',
    },
    {
      icon: Briefcase,
      title: 'Interview Preparation',
      description:
        'Resume workshops, HR & technical mock interviews, answering strategies, and expert feedback.',
    },
  ];

  const outcomes = [
    { label: 'Problem-Solving Ability', value: '92%', icon: Lightbulb },
    { label: 'Communication Skills', value: '88%', icon: Mic },
    { label: 'Placement Success Rate', value: '85%', icon: Trophy },
    { label: 'Industry Readiness', value: '90%', icon: Star },
  ];

  const benefits = [
    'End-to-end preparation — from aptitude to final interviews',
    'Mock drives & placement simulations',
    '5+ years experienced trainers with industry insights',
    'Blend of technical and non-technical training',
    'Proven track record with top recruiters',
    'Personalized feedback and mentoring',
  ];

  const methodology = [
    {
      icon: BookOpen,
      title: 'Structured Curriculum',
      description:
        'Step-by-step modules designed to strengthen core skills before advancing to complex problem-solving and interview scenarios.',
    },
    {
      icon: Laptop,
      title: 'Blended Learning',
      description:
        'Interactive classroom training combined with online assessments, video lessons, and coding platforms for self-practice.',
    },
    {
      icon: ClipboardCheck,
      title: 'Continuous Assessment',
      description:
        'Regular quizzes, mock interviews, and performance reports ensure steady improvement and measurable outcomes.',
    },
  ];

  return (
    <>
      <SEO
        title="Campus Recruitment Training (CRT) - Fresherbot"
        description="Fresherbot CRT program prepares students for competitive hiring with aptitude, coding, communication, and interview skills."
      />
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden md:py-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3" />

          <div className="relative container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <Badge
                    variant="secondary"
                    className="bg-muted text-foreground inline-flex items-center gap-2 px-4 py-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Campus Recruitment Training
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Preparing Students
                    </span>
                    <br />
                    for Competitive Hiring
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Campus placements are a crucial milestone. Fresherbot’s CRT equips students
                    with skills, confidence, and strategies to excel at every stage.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Aptitude & Coding</div>
                      <div className="text-xs text-muted-foreground">Strong foundations</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mic className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Soft Skills</div>
                      <div className="text-xs text-muted-foreground">Confidence & GDs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Interview Ready</div>
                      <div className="text-xs text-muted-foreground">Mock prep & feedback</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className=" text-lg px-8 py-6 shadow-lg" asChild>
                    <Link to="/contact">
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Request Training Program
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/demo">
                      Get Demo Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="relative">
                <img
                  src={asset('product/crt/hero.jpg')}
                  alt="CRT Training Illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Focus Areas */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              Focus Areas
            </Badge>
            <h2 className="text-4xl font-bold">Core Focus Areas</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              A structured CRT curriculum covering every skill needed to succeed in competitive
              placements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((fa, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 p-8 space-y-6 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                  <fa.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{fa.title}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  {fa.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Methodology */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              Training Approach
            </Badge>
            <h2 className="text-4xl font-bold">Our Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We follow a proven model that balances theory with practice, ensuring students not only
              learn but also apply their knowledge effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((m, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 p-6 text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                  <m.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{m.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {m.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Outcomes */}
        <section className="relative space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              Outcomes
            </Badge>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
              Program Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tangible skills and measurable growth achieved through our CRT program.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {outcomes.map((o, i) => (
              <Card
                key={i}
                className="border-2 p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <o.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold">{o.value}</div>
                <div className="text-base text-muted-foreground">{o.label}</div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Why Choose */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center p-4 md:p-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl font-bold">Why Choose Fresherbot CRT?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Comprehensive benefits that set our CRT apart from traditional training programs.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="border-2 bg-background/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
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

            <div className="relative">
              <img
                src={asset('product/crt/why_choose.png')}
                alt="Why Choose Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl -z-10" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-4 md:p-12">
            <div className="space-y-8 text-center lg:text-left relative z-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Users className="w-4 h-4 mr-2" />
                  Get Started Today
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Give Your Students the Competitive Edge They Need
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Partner with Fresherbot and transform your students into confident, placement-ready
                  professionals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 relative z-30">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Request Training Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/demo">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Demo Session
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <img
                src={asset('product/crt/final_cta.png')}
                alt="Final CTA Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CRTTrainingPage;
