import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import { Separator } from '@voilajsx/uikit/separator';
import { Alert, AlertDescription } from '@voilajsx/uikit/alert';
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
  Sparkles
} from 'lucide-react';
import { SEO } from '../components';

export const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@fresherbot.com",
      description: "Professional support team responds within 24 hours",
      action: "mailto:support@fresherbot.com"
    },
    {
      icon: Phone,
      title: "Direct Phone",
      value: "+91 7032309797",
      description: "Business hours: Monday-Friday, 9:00 AM - 6:00 PM IST",
      action: "tel:+917032309797"
    },
    {
      icon: MapPin,
      title: "Corporate Office",
      value: "Hyderabad, India",
      description: "Hitech City business district with metro connectivity",
      action: null
    }
  ];

  const services = [
    {
      icon: Building2,
      title: "Campus Recruitment Management",
      description: "Complete recruitment lifecycle from talent identification to final placement with automated workflows"
    },
    {
      icon: GraduationCap,
      title: "Training & Development Programs",
      description: "Comprehensive skill development initiatives to enhance student employability and career readiness"
    },
    {
      icon: Brain,
      title: "AI-Powered Assessment Solutions",
      description: "Advanced evaluation systems for aptitude, coding, and psychometric assessments with analytics"
    },
    {
      icon: Handshake,
      title: "Strategic Partnership Development",
      description: "Building lasting relationships between educational institutions and corporate organizations"
    }
  ];

  const partnerTypes = [
    {
      title: "Educational Institutions",
      description: "Universities and colleges seeking to optimize placement outcomes and student career success",
      icon: GraduationCap
    },
    {
      title: "Corporate Organizations",
      description: "Companies looking for efficient talent acquisition and quality recruitment processes",
      icon: Building2
    },
    {
      title: "Training Institutes",
      description: "Organizations focused on skill development and professional training programs",
      icon: Users
    }
  ];

  return (
    <>
      <SEO
        title="Contact Fresherbot - Enterprise Campus Recruitment Solutions"
        description="Get in touch with Fresherbot for comprehensive campus recruitment solutions. Contact our team for AI-powered assessments, training programs, and recruitment management."
      />
      <div className="space-y-20 max-w-7xl mx-auto px-8">
        {/* Hero Section */}
        <section className="space-y-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Our Team
            </Badge>
            
            <h1 className="voila-heading text-5xl md:text-6xl font-bold">
              Get in Touch with Fresherbot
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your campus recruitment process? Our enterprise solutions team 
              is here to help you implement AI-powered assessments, comprehensive training programs, 
              and end-to-end recruitment management.
            </p>
          </div>

          <Alert className="border-2 border-primary/20 bg-primary/5 max-w-4xl mx-auto">
            <Sparkles className="h-5 w-5" />
            <AlertDescription className="text-lg text-center">
              <strong>Enterprise Support:</strong> Our dedicated team provides personalized consultation 
              and implementation support for all Fresherbot solutions.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        {/* Contact Information */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple channels to connect with our professional support team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group text-center">
                <CardHeader className="space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <contact.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{contact.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary">
                      {contact.action ? (
                        <a href={contact.action} className="hover:underline">
                          {contact.value}
                        </a>
                      ) : (
                        contact.value
                      )}
                    </div>
                    <CardDescription className="text-base">{contact.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Office Location */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Corporate Headquarters</Badge>
            <h2 className="text-4xl font-bold">Office Location</h2>
          </div>

          <Card className="border-2 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Fresherbot Technologies</CardTitle>
              <CardDescription className="text-lg">Enterprise Campus Recruitment Solutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="text-lg leading-relaxed">
                  <strong>2nd Floor, Oyster Uptown</strong><br />
                  Beside Durgam Cheruvu Metro Station<br />
                  Hitech City, Hyderabad – 500081, India
                </div>
                
                <Alert className="border-primary/20 bg-primary/5 max-w-md mx-auto">
                  <MapPin className="h-4 w-4" />
                  <AlertDescription>
                    Strategically located in Hyderabad's premier technology hub with excellent metro connectivity
                  </AlertDescription>
                </Alert>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border">
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="font-semibold">Metro Access</div>
                    <div className="text-sm text-muted-foreground">Durgam Cheruvu Station</div>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="font-semibold">Business District</div>
                    <div className="text-sm text-muted-foreground">Hitech City Hub</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Services Overview */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Enterprise Solutions</Badge>
            <h2 className="text-4xl font-bold">How We Can Help</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive campus recruitment and talent development solutions for modern organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Partnership Opportunities */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-4 py-2">Partnership Opportunities</Badge>
            <h2 className="text-4xl font-bold">Ready to Partner With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with diverse organizations to transform campus recruitment and talent development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group text-center">
                <CardHeader className="space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <partner.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <CardTitle className="text-xl">{partner.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{partner.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Actions */}
        <section>
          <Card className="border-2 bg-muted/30">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="px-4 py-2 text-base">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started Today
                </Badge>
                <h2 className="text-4xl font-bold">Ready to Transform Your Recruitment Process?</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Contact our enterprise solutions team to discuss your specific requirements and learn 
                  how Fresherbot can optimize your campus recruitment initiatives.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="text-lg px-10 py-6" asChild>
                  <a href="mailto:support@fresherbot.com">
                    <Mail className="mr-2 h-5 w-5" />
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
              
              <Alert className="max-w-3xl mx-auto border-2 border-primary/20 bg-background/90">
                <MessageCircle className="h-5 w-5" />
                <AlertDescription className="text-base">
                  <strong>Direct Contact:</strong>{' '}
                  <a href="mailto:support@fresherbot.com" className="text-primary hover:underline font-semibold">
                    support@fresherbot.com
                  </a>{' '}
                  |{' '}
                  <a href="tel:+917032309797" className="text-primary hover:underline font-semibold">
                    +91 7032309797
                  </a>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

        {/* Business Information */}
        <section>
          <div className="bg-muted/30 rounded-2xl p-10">
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold">Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="border">
                  <CardContent className="p-6 text-center space-y-3">
                    <Clock className="h-8 w-8 text-primary mx-auto" />
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM IST
                    </div>
                  </CardContent>
                </Card>

                <Card className="border">
                  <CardContent className="p-6 text-center space-y-3">
                    <Globe className="h-8 w-8 text-secondary mx-auto" />
                    <div className="font-semibold">Service Coverage</div>
                    <div className="text-sm text-muted-foreground">
                      Pan India Operations<br />
                      Remote & On-site Support
                    </div>
                  </CardContent>
                </Card>

                <Card className="border">
                  <CardContent className="p-6 text-center space-y-3">
                    <CheckCircle className="h-8 w-8 text-accent mx-auto" />
                    <div className="font-semibold">Response Commitment</div>
                    <div className="text-sm text-muted-foreground">
                      Within 24 hours<br />
                      Professional support guaranteed
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;