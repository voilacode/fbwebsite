import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@voilajsx/uikit/tabs';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Users,
  GraduationCap,
  Brain,
  Handshake,
  ArrowRight,
  Clock,
  Globe,
  Zap,
  MessageCircle,
  PlayCircle,
  CheckCircle,
  Sparkles,
  Send,
  Calendar,
  FileText,
  Shield,
  Award,
  Target,
  TrendingUp,
  Mic,
  Video,
  HeadphonesIcon,
  Star,
  HelpCircle,
  Settings,
  Rocket,
  Network
} from 'lucide-react';
import { SEO } from '../components';
import { asset } from '../utils/asset';

export const ContactPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@fresherbot.com",
      description: "Professional support team responds within 24 hours",
      action: "mailto:support@fresherbot.com",
      color: "primary",
      response: "24 hours",
      availability: "24/7"
    },
    {
      icon: Phone,
      title: "Direct Phone",
      value: "+91 7032309797",
      description: "Business hours: Monday-Friday, 9:00 AM - 6:00 PM IST",
      action: "tel:+917032309797",
      color: "secondary",
      response: "Immediate",
      availability: "Mon-Fri 9AM-6PM"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Chat with our team",
      description: "Instant support during business hours for quick queries",
      action: null,
      color: "accent",
      response: "Real-time",
      availability: "Business hours"
    }
  ];

  const serviceCategories = [
    {
      icon: Building2,
      title: "Campus Recruitment Solutions",
      description: "Complete recruitment lifecycle management with AI-powered assessments and automated workflows",
      color: "primary",
      services: [
        { name: "Recruitment Management", icon: Users },
        { name: "AI Assessments", icon: Brain },
        { name: "Analytics Dashboard", icon: TrendingUp },
        { name: "Integration Support", icon: Settings }
      ]
    },
    {
      icon: GraduationCap,
      title: "Training & Development",
      description: "Comprehensive skill development programs to enhance student employability and career readiness",
      color: "secondary",
      services: [
        { name: "Skill Development", icon: Target },
        { name: "HR Campus Connect", icon: Handshake },
        { name: "Founder Talks", icon: Mic },
        { name: "Career Guidance", icon: Award }
      ]
    },
    {
      icon: Network,
      title: "Strategic Partnerships",
      description: "Building lasting relationships between educational institutions and corporate organizations",
      color: "accent",
      services: [
        { name: "Partnership Development", icon: Handshake },
        { name: "Industry Connect", icon: Building2 },
        { name: "Placement Support", icon: CheckCircle },
        { name: "Long-term Engagement", icon: Calendar }
      ]
    }
  ];

  const supportOptions = [
    {
      title: "Technical Support",
      description: "Platform setup, integration assistance, and technical troubleshooting",
      icon: Settings,
      color: "primary"
    },
    {
      title: "Sales Consultation", 
      description: "Product demonstrations, pricing discussions, and custom solution planning",
      icon: Target,
      color: "secondary"
    },
    {
      title: "Partnership Inquiry",
      description: "Strategic partnerships, institutional collaborations, and business development",
      icon: Handshake,
      color: "accent"
    },
    {
      title: "Training & Events",
      description: "Workshop scheduling, speaker bookings, and educational program planning",
      icon: Calendar,
      color: "chart1"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we implement Fresherbot solutions?",
      answer: "Most implementations can be completed within 2-4 weeks, including setup, integration, and team training."
    },
    {
      question: "Do you provide training for our campus placement team?",
      answer: "Yes, we provide comprehensive training and ongoing support to ensure your team maximizes the platform's potential."
    },
    {
      question: "Can Fresherbot integrate with our existing systems?",
      answer: "Absolutely! Our platform offers seamless integration with most existing campus management and HR systems."
    },
    {
      question: "What kind of support do you provide post-implementation?",
      answer: "We provide 24/7 technical support, regular system updates, and dedicated account management for all enterprise clients."
    }
  ];

  const partnerTypes = [
    {
      title: "Educational Institutions",
      description: "Universities, colleges, and educational organizations seeking to optimize placement outcomes",
      icon: GraduationCap,
      benefits: ["Improved placement rates", "Streamlined processes", "Better student outcomes", "Industry connections"]
    },
    {
      title: "Corporate Organizations", 
      description: "Companies looking for efficient talent acquisition and quality recruitment processes",
      icon: Building2,
      benefits: ["Quality talent pool", "Efficient screening", "Reduced hiring costs", "Better candidate experience"]
    },
    {
      title: "Training Partners",
      description: "Organizations focused on skill development and professional training programs",
      icon: Users,
      benefits: ["Enhanced curricula", "Industry alignment", "Skill assessments", "Career pathways"]
    }
  ];

  return (
    <>
      <SEO
        title="Contact Fresherbot - Transform Your Campus Recruitment Experience"
        description="Get in touch with Fresherbot for comprehensive campus recruitment solutions. Expert support for AI-powered assessments, training programs, and recruitment management."
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
                    <MessageCircle className="w-4 h-4" />
                    Enterprise Support Team
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                      Ready to Transform
                    </span>
                    <br />
                    Your Campus Recruitment?
                  </h1>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                    Connect with our <strong className="text-foreground">expert team</strong> for personalized consultation on <strong className="text-foreground">AI-powered solutions</strong> and <strong className="text-foreground">enterprise support</strong>.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">24hr Response</div>
                      <div className="text-xs text-muted-foreground">Guaranteed support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Enterprise Grade</div>
                      <div className="text-xs text-muted-foreground">Secure solutions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Proven Results</div>
                      <div className="text-xs text-muted-foreground">500+ institutions</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 shadow-lg" asChild>
                    <a href="mailto:support@fresherbot.com">
                      <Send className="mr-2 h-5 w-5" />
                      Contact Sales Team
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                    <Link to="/demo">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free consultation
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Custom solutions
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    24/7 support
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-2 relative md:pr-10">
                <div className="relative">
                  <img
                    src={asset('contact/support-team.png')}
                    alt="Fresherbot Support Team"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-background/95 backdrop-blur-sm border border-gray-200 rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Contact Methods Showcase */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Contact Options</Badge>
            <h2 className="text-4xl font-bold">Choose Your Preferred Contact Method</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Multiple channels to connect with our professional support team. Each method is designed for different types of inquiries and response time requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`border-2 hover:border-${method.color}/50 transition-all duration-300 hover:shadow-xl group text-center`}>
                <CardHeader className="space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${method.color}/20 to-${method.color}/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <method.icon className={`h-10 w-10 text-${method.color}`} />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary">
                      {method.action ? (
                        <a href={method.action} className="hover:underline">
                          {method.value}
                        </a>
                      ) : (
                        method.value
                      )}
                    </div>
                    <CardDescription className="text-base">{method.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pb-6">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="font-medium">Response</div>
                      <div className="text-muted-foreground">{method.response}</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="font-medium">Available</div>
                      <div className="text-muted-foreground">{method.availability}</div>
                    </div>
                  </div>
                  {method.action && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={method.action}>
                        Contact Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Support Categories */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Support Categories</Badge>
            <h2 className="text-4xl font-bold">How Can We Help You?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the type of support you need for faster, more targeted assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className={`border-2 hover:border-${option.color}/50 transition-all duration-300 hover:shadow-xl group cursor-pointer`}>
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${option.color}/20 to-${option.color}/10 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                    <option.icon className={`h-8 w-8 text-${option.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{option.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Services Overview */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Our Solutions</Badge>
            <h2 className="text-4xl font-bold">Enterprise Solutions Overview</h2>
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Comprehensive campus recruitment and talent development solutions designed for modern educational institutions and corporate organizations.
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`grid lg:grid-cols-5 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Service Image */}
                  <div className={`lg:col-span-2 relative ${index % 2 === 1 ? 'lg:col-start-4' : ''} flex items-center justify-center p-6`}>
                    <div className="relative w-full max-w-sm mx-auto">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/20 via-${category.color}/10 to-transparent z-10`} />
                        <img
                          src={
                            index === 0 ? asset('contact/recruitment-solutions.png') :
                            index === 1 ? asset('contact/training-development.png') :
                            index === 2 ? asset('contact/strategic-partnerships.png') :
                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                          }
                          alt={`${category.title} solutions`}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-${category.color}/40 to-${category.color}/30 rounded-2xl flex items-center justify-center z-20 backdrop-blur-sm border border-white/20`}>
                          <category.icon className={`h-7 w-7 text-${category.color}`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`lg:col-span-3 p-4 md:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Badge variant="secondary" className="px-3 py-1">
                          Solution {index + 1}
                        </Badge>
                        <CardTitle className="text-3xl font-bold">{category.title}</CardTitle>
                        <CardDescription className="text-lg leading-relaxed">{category.description}</CardDescription>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {category.services.map((service, serviceIndex) => (
                          <Card key={serviceIndex} className="border bg-muted/30 hover:bg-muted/50 transition-colors py-2 px-1">
                            <CardContent className="px-3 py-2 flex items-center gap-3">
                              <div className={`w-8 h-8 bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <service.icon className={`h-4 w-4 text-${category.color}`} />
                              </div>
                              <div className="font-semibold text-sm leading-tight">{service.name}</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Button className="w-full sm:w-auto" asChild>
                        <a href="mailto:support@fresherbot.com">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Partnership Opportunities */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Partnership Opportunities</Badge>
            <h2 className="text-4xl font-bold">Ready to Partner With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with diverse organizations to transform campus recruitment and talent development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <CardHeader className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <partner.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{partner.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{partner.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">Key Benefits:</div>
                    <div className="grid grid-cols-1 gap-1">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* FAQ Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold">Common Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to help you get started with Fresherbot solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Office Location */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Corporate Headquarters</Badge>
            <h2 className="text-4xl font-bold">Visit Our Office</h2>
          </div>

          <Card className="border-2 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Fresherbot Technologies</CardTitle>
                    <CardDescription className="text-lg">Enterprise Campus Recruitment Solutions</CardDescription>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-base leading-relaxed">
                    <strong>2nd Floor, Oyster Uptown</strong><br />
                    Beside Durgam Cheruvu Metro Station<br />
                    Hitech City, Hyderabad – 500081, India
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div className="text-sm">
                        <div className="font-medium">Metro Access</div>
                        <div className="text-muted-foreground">Durgam Cheruvu Station</div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-secondary" />
                      <div className="text-sm">
                        <div className="font-medium">Business District</div>
                        <div className="text-muted-foreground">Hitech City Hub</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative p-8">
                <img
                  src={asset('office/hyderabad-office.jpg')}
                  alt="Fresherbot Office Hyderabad"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl -z-10" />

          <div className="relative z-10 p-4 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                <Zap className="w-4 h-4 mr-2" />
                Get Started Today
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Transform Your Recruitment Process?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Contact our enterprise solutions team to discuss your specific requirements and learn 
                how Fresherbot can optimize your campus recruitment initiatives with AI-powered solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="text-lg px-10 py-6" asChild>
                <a href="mailto:support@fresherbot.com">
                  <Send className="mr-2 h-5 w-5" />
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6" asChild>
                <Link to="/demo">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>

            <div className="pt-6 max-w-3xl mx-auto">
              <Card className="border-2 border-primary/20 bg-background/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-base">
                    <strong>Direct Contact:</strong>{' '}
                    <a href="mailto:support@fresherbot.com" className="text-primary hover:underline font-semibold">
                      support@fresherbot.com
                    </a>{' '}
                    |{' '}
                    <a href="tel:+917032309797" className="text-primary hover:underline font-semibold">
                      +91 7032309797
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 flex flex-wrap justify-center gap-4">
                    <span>✅ <strong>24-hour Response</strong></span>
                    <span>✅ <strong>Free Consultation</strong></span>
                    <span>✅ <strong>Custom Solutions</strong></span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;