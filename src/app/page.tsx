"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Cloud, ListChecks, Phone, Shield, ShieldCheck, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Process", id: "features" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Prof Roofing"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroBillboardTestimonial
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            title="Your Roof Shouldnt Fail When It Matters Most"
            description="Protect your home from hail, snow, and costly damage with Auroras trusted roofing specialists. We handle insurance claims, prevent expensive repairs, and build roofs engineered for Colorados extreme weather."
            testimonials={[
              { name: "John Doe", handle: "@johnd", testimonial: "Prof Roofing turned my insurance claim disaster into a seamless replacement.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-happy-homeowner-smiling-in-1775155461753-71516099.png?_wi=1" },
              { name: "Sarah Miller", handle: "@sarahm", testimonial: "The best experience I've had with a contractor in Colorado.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-business-owner-standing-co-1775155463827-34c63d3f.png?_wi=1" },
              { name: "Mike Smith", handle: "@mikes", testimonial: "Reliable, professional, and they handled everything with my insurer.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-an-elderly-couple-happy-with-1775155463471-3c87554c.png?_wi=1" },
              { name: "Lisa Wang", handle: "@lisaw", testimonial: "Detailed inspection, no hidden fees, just great work.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-busy-professional-standing-1775155461772-be546e05.png?_wi=1" },
              { name: "Tom Brown", handle: "@tomb", testimonial: "Expertise you can count on when the weather hits.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-young-family-happy-outside-1775155461906-2863ea2d.png?_wi=1" },
            ]}
            buttons={[{ text: "Get Free Roof Inspection", href: "#contact" }]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/a-high-end-residential-roof-replacement--1775155460672-212d80bd.png"
            imageAlt="Professional roof installation in Colorado"
            marqueeItems={[
              { type: "text-icon", text: "Storm Damage Certified", icon: Cloud },
              { type: "text-icon", text: "Licensed & Insured", icon: ShieldCheck },
              { type: "text-icon", text: "5-Star Local Rated", icon: Star },
              { type: "text-icon", text: "Expert Claim Support", icon: ListChecks },
              { type: "text-icon", text: "Warranty Backed", icon: Award },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Auroras Elite Specialists"
            title="Built to Outlast Colorado"
            description="We don't just repair roofs; we build resilient shields against Colorados unpredictable weather. Our deep mastery of insurance processes means you get maximum coverage with minimal stress."
            subdescription="Our team of seasoned veterans has seen it all, ensuring your home is protected by industry-leading standards and premium materials."
            icon={Shield}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/professional-roofing-team-on-a-job-site--1775155460252-c193dfcf.png"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardNine
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            showStepNumbers={true}
            tag="Expertly Handled"
            tagIcon={ShieldCheck}
            title="Precision Roofing Workflow"
            description="From inspection to final certification, we handle every detail with military-grade precision."
            features={[
              {
                id: 1,
                title: "Comprehensive Storm Audit",                description: "We identify hidden wind and hail damage often overlooked by insurance adjusters.",                phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/detail-shot-of-a-professional-roofing-in-1775155460469-327407bb.png?_wi=1" },
                phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/homeowner-shaking-hands-with-a-roofer-cl-1775155460269-e5f1ad66.png?_wi=1" }
              },
              {
                id: 2,
                title: "Insurance Advocacy",                description: "Our experts negotiate directly with your insurer to ensure your claim is fully funded.",                phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/detail-shot-of-a-professional-roofing-in-1775155460469-327407bb.png?_wi=2" },
                phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/homeowner-shaking-hands-with-a-roofer-cl-1775155460269-e5f1ad66.png?_wi=2" }
              },
              {
                id: 3,
                title: "Premium Material Build",                description: "We use only best-in-class materials engineered for longevity and extreme weather.",                phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/detail-shot-of-a-professional-roofing-in-1775155460469-327407bb.png?_wi=3" },
                phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/homeowner-shaking-hands-with-a-roofer-cl-1775155460269-e5f1ad66.png?_wi=3" }
              }
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSixteen
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Local Clients Trust Our Craft"
            description="Hundreds of Aurora homeowners have reclaimed their peace of mind through our dedicated services."
            testimonials={[
              { id: "1", name: "Sarah Miller", role: "CEO", company: "LocalBiz", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-happy-homeowner-smiling-in-1775155461753-71516099.png?_wi=2" },
              { id: "2", name: "John Doe", role: "Manager", company: "HomeCorp", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-business-owner-standing-co-1775155463827-34c63d3f.png?_wi=2" },
              { id: "3", name: "Lisa Wang", role: "Artist", company: "Studio", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-an-elderly-couple-happy-with-1775155463471-3c87554c.png?_wi=2" },
              { id: "4", name: "Mike Smith", role: "Pro", company: "TechLab", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-busy-professional-standing-1775155461772-be546e05.png?_wi=2" },
              { id: "5", name: "Tom Brown", role: "Owner", company: "Retail", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BfFkPfVLuI6a5BErkD9FBS3Zc3/portrait-of-a-young-family-happy-outside-1775155461906-2863ea2d.png?_wi=2" },
            ]}
            kpiItems={[
              { value: "1500+", label: "Roofs Secured" },
              { value: "98%", label: "Claim Success" },
              { value: "20yr", label: "Warranty Coverage" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            faqs={[
              { id: "1", title: "Does my insurance cover storm damage?", content: "Yes, standard policies typically cover wind and hail damage. We specialize in documenting these claims." },
              { id: "2", title: "How long does a full roof replacement take?", content: "Most residential replacements take 1-2 days depending on the size and complexity of your home." },
              { id: "3", title: "What kind of warranty do you provide?", content: "We offer industry-leading workmanship guarantees in addition to manufacturer material warranties." },
            ]}
            sideTitle="Expert Answers for Your Peace of Mind"
            faqsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactFaq
            animationType="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "1", title: "Do I need to be home for the inspection?", content: "No, we can perform a full roof evaluation safely while you're at work." },
              { id: "2", title: "Is the inspection really free?", content: "Absolutely. There's zero cost or obligation for our assessment." },
            ]}
            ctaTitle="Request Your Free Roof Inspection Today"
            ctaDescription="Don't wait for the next storm. Our team is ready to provide a thorough, zero-obligation assessment."
            ctaButton={{ text: "Get Free Inspection", href: "#" }}
            ctaIcon={Phone}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseReveal
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Services", href: "#features" }, { label: "Contact", href: "#contact" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
            ]}
            copyrightText="© 2024 Prof Roofing & Exteriors. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}