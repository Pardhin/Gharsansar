// src/pages/Home.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Play,
  CheckCircle,
  X,
  Compass,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      kicker: "BEAUTIFUL SPACES",
      titleLine1: "Best Interior",
      titleLine2: "Designers in",
      highlightLine1: "Andhra Pradesh",
      highlightLine2: "& Telangana",
      description:
        "Transform your space into a story of comfort, elegance, and timeless design with bespoke décor collections and award-winning interior design services.",
      image: "/images/design/exact_hero_clean.jpg",
      primaryCta: "EXPLORE OUR DESIGNS",
      primaryLink: "/interior-design",
      secondaryCta: "SHOP NOW",
      secondaryLink: "/products",
    },
    {
      kicker: "BESPOKE INTERIORS",
      titleLine1: "Luxury Living",
      titleLine2: "Tailored for",
      highlightLine1: "Vijayawada &",
      highlightLine2: "Amaravati",
      description:
        "Premium 3D wall panels, architectural lighting, vinyl flooring, and custom furniture crafted to perfection for your dream space.",
      image: "/images/design/exact_hero_clean.jpg",
      primaryCta: "OUR INTERIOR WORKS",
      primaryLink: "/interior-design",
      secondaryCta: "VIEW CATALOG",
      secondaryLink: "/products",
    },
    {
      kicker: "TIMELESS ELEGANCE",
      titleLine1: "Crafting Homes",
      titleLine2: "That Truly",
      highlightLine1: "Feel Like",
      highlightLine2: "You",
      description:
        "From initial inspiration to final on-site installation, our dedicated design team handles every detail with craftsmanship and care.",
      image: "/images/design/exact_hero_clean.jpg",
      primaryCta: "BOOK CONSULTATION",
      primaryLink: "#consultation",
      secondaryCta: "FESTIVE GIFTS",
      secondaryLink: "/return-gifts",
    },
  ];

  // Quick 7 Categories matching user's design image (Upscaled to 550x410 clean photos, NO baked-in text)
  const quickCategories = [
    {
      title: "Wallpaper Rolls",
      image: "/images/design/cat_wallpaper.jpg",
      link: "/interior-design?category=Wallpaper%20Rolls",
    },
    {
      title: "Wall Art Effects",
      image: "/images/design/cat_wallart.jpg",
      link: "/interior-design?category=Wall%20Art%20Effect",
    },
    {
      title: "Vinyl Flooring",
      image: "/images/design/cat_vinyl.jpg",
      link: "/interior-design?category=Vinyl%20Flooring",
    },
    {
      title: "3D Wallpapers",
      image: "/images/design/cat_3d.jpg",
      link: "/interior-design?category=3d%20Wallpapers",
    },
    {
      title: "Vertical Garden",
      image: "/images/design/cat_garden.jpg",
      link: "/interior-design?category=Natural%20Vertical%20Garden",
    },
    {
      title: "Interior Decor",
      image: "/images/design/cat_decor.jpg",
      link: "/products",
    },
    {
      title: "Return Gifts",
      image: "/images/design/cat_gifts.jpg",
      link: "/return-gifts",
    },
  ];

  // 3 Process Steps matching Image 2 bottom (Upscaled to 540x380 clean photos, NO baked-in text)
  const processSteps = [
    {
      number: "01",
      title: "Share Your Ideas",
      description: "Tell us your style, space and requirements.",
      image: "/images/design/step_1_ideas.jpg",
    },
    {
      number: "02",
      title: "Get Expert Guidance",
      description: "Our designers create personalized plans.",
      image: "/images/design/step_2_guidance.jpg",
    },
    {
      number: "03",
      title: "We Deliver",
      description: "From products to installation, we handle it all.",
      image: "/images/design/step_3_deliver.jpg",
    },
  ];

  // 6 Interior Works matching Image 3 right grid (Clean photography, NO baked-in text)
  const interiorWorks = [
    {
      title: "Wallpaper Rolls",
      image: "/images/design/work_wallpaper_exact.jpg",
      link: "/interior-design?category=Wallpaper%20Rolls",
    },
    {
      title: "3D Wallpapers",
      image: "/images/design/work_3d_exact.jpg",
      link: "/interior-design?category=3d%20Wallpapers",
    },
    {
      title: "Wall Art Effects",
      image: "/images/design/work_wallart_exact.jpg",
      link: "/interior-design?category=Wall%20Art%20Effect",
    },
    {
      title: "Vinyl Flooring",
      image: "/images/design/work_vinyl_exact.jpg",
      link: "/interior-design?category=Vinyl%20Flooring",
    },
    {
      title: "Natural Vertical Garden",
      image: "/images/design/work_garden_exact.jpg",
      link: "/interior-design?category=Natural%20Vertical%20Garden",
    },
    {
      title: "Interior Decor",
      image: "/images/design/work_decor_exact.jpg",
      link: "/products",
    },
  ];

  // 5 Featured Categories matching Image 4 top
  const featuredCategories = [
    {
      title: "Wallpaper Rolls",
      count: "120+ Designs",
      image: "/images/design/cat_wallpaper.jpg",
      link: "/interior-design?category=Wallpaper%20Rolls",
    },
    {
      title: "Vinyl Flooring",
      count: "80+ Designs",
      image: "/images/design/cat_vinyl.jpg",
      link: "/interior-design?category=Vinyl%20Flooring",
    },
    {
      title: "3D Wallpapers",
      count: "100+ Designs",
      image: "/images/design/cat_3d.jpg",
      link: "/interior-design?category=3d%20Wallpapers",
    },
    {
      title: "Interior Decor",
      count: "500+ Products",
      image: "/images/design/cat_decor.jpg",
      link: "/products",
    },
    {
      title: "Vertical Garden",
      count: "80+ Designs",
      image: "/images/design/cat_garden.jpg",
      link: "/interior-design?category=Natural%20Vertical%20Garden",
    },
  ];

  // 4 Homes by Ghar Sansar Inspiration Gallery matching Image 4 bottom
  const galleryItems = [
    {
      title: "Modern Contemporary Living",
      location: "Governorpet, Vijayawada",
      image: "/images/design/gallery_1_upscaled.jpg",
    },
    {
      title: "Ambient Master Suite",
      location: "Benz Circle, Vijayawada",
      image: "/images/design/gallery_2_upscaled.jpg",
    },
    {
      title: "Opulent Dining Space",
      location: "Guntur",
      image: "/images/design/gallery_3_upscaled.jpg",
    },
    {
      title: "Bas-Relief Media Feature Wall",
      location: "Hyderabad",
      image: "/images/design/gallery_4_upscaled.jpg",
    },
  ];

  // Consultation Modal State
  const [isConsultModalOpen, setConsultModalOpen] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: "",
    phone: "",
    city: "Vijayawada",
    service: "Interior Design Consultation",
  });

  // Video Modal State
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  // Active gallery lightbox preview
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(
    null
  );

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultForm.name || !consultForm.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    toast.success("Thank you! Our design expert will contact you shortly.");
    setConsultModalOpen(false);
    setConsultForm({
      name: "",
      phone: "",
      city: "Vijayawada",
      service: "Interior Design Consultation",
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="bg-[#F5F0EA] min-h-screen font-sans text-gray-900 flex flex-col selection:bg-[#C86B4C] selection:text-white antialiased">
      {/* SEO Regional metadata */}
      <div className="sr-only">
        <h2>Best Interior Designers in Vijayawada, Andhra Pradesh &amp; Telangana</h2>
        <p>
          Ghar Sansar provides luxury interior design, wallpapers, vinyl flooring,
          curtains, and bespoke decor for Andhra Pradesh and Telangana.
        </p>
      </div>

      {/* =========================================================================
          1. HERO SECTION (Matching User Design Mockup Exactly)
          ========================================================================= */}
      <section className="relative w-full h-[76vh] min-h-[540px] max-h-[720px] flex items-center overflow-hidden">
        {/* Background Image: Clean, High-Res Living Room matching User Design */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.kicker}
              className="w-full h-full object-cover object-center"
            />
            {/* Cinematic Gradient Overlays: Deep left fade so text pops with pristine clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>
        ))}

        {/* Content Container aligned with exact mockup layout */}
        <div className="relative z-10 w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-16 sm:pt-20">
          <div className="max-w-2xl text-left">
            {/* Kicker tag in Terracotta matching design */}
            <motion.div
              key={`kicker-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-3.5"
            >
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-[#C86B4C] uppercase block font-sans">
                {heroSlides[currentSlide].kicker}
              </span>
            </motion.div>

            {/* Editorial Serif Heading matching design mockup */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] leading-[1.08] font-normal text-white mb-5 tracking-tight drop-shadow-sm"
            >
              {heroSlides[currentSlide].titleLine1}
              <br />
              {heroSlides[currentSlide].titleLine2}
              <br />
              <span className="text-[#C86B4C] font-serif">
                {heroSlides[currentSlide].highlightLine1}
              </span>
              <br />
              <span className="text-[#C86B4C] font-serif">
                {heroSlides[currentSlide].highlightLine2}
              </span>
            </motion.h1>

            {/* Subtitle paragraph */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-[15px] text-white/85 font-light leading-relaxed max-w-lg mb-7"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* Action Buttons matching design mockup */}
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              {/* Primary Pill Button: Explore Our Designs (#C57053) */}
              <Link
                to={heroSlides[currentSlide].primaryLink}
                className="bg-[#C57053] hover:bg-[#B36044] text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold tracking-wider text-xs uppercase flex items-center space-x-2 transition-all shadow-md hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <span>{heroSlides[currentSlide].primaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Secondary Outline Pill Button: Shop Now */}
              <Link
                to={heroSlides[currentSlide].secondaryLink}
                className="border border-white/80 hover:border-white hover:bg-white/10 text-white px-7 sm:px-8 py-3.5 rounded-full font-semibold tracking-wider text-xs uppercase transition-all backdrop-blur-xs hover:scale-102 active:scale-98"
              >
                <span>{heroSlides[currentSlide].secondaryCta}</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Hero Bar: Slider Controls on Left & Vertical Branding on Right */}
        <div className="absolute inset-x-0 bottom-7 z-20 w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 flex items-end justify-between pointer-events-none">
          {/* Bottom Left: Pagination (01 02 03), Line Indicator & Arrows */}
          <div className="flex items-center space-x-4 sm:space-x-5 pointer-events-auto">
            {/* Number indicators */}
            <div className="flex items-center space-x-2.5 sm:space-x-3 text-xs font-serif font-bold">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-colors cursor-pointer ${
                    idx === currentSlide
                      ? "text-white scale-110"
                      : "text-white/40 hover:text-white/80"
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            {/* Progress line */}
            <div className="w-16 sm:w-24 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C86B4C] transition-all duration-500 rounded-full"
                style={{
                  width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                }}
              />
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-full border border-white/30 hover:border-white text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-7 h-7 rounded-full border border-white/30 hover:border-white text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Right: Vertical Accent Line & Text */}
          <div className="hidden md:flex items-center space-x-3 text-right">
            <div className="w-[1px] h-10 bg-white/40" />
            <div className="text-left font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-white/80 uppercase leading-snug">
              CRAFTING<br />
              HOMES<br />
              THAT FEEL<br />
              LIKE YOU
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. QUICK CATEGORIES RIBBON (Immediately below Hero in #F5F0EA)
          ========================================================================= */}
      <section className="w-full bg-[#F5F0EA] py-8 sm:py-10 border-b border-[#E2D8C9]">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5 sm:gap-4 lg:gap-5">
            {quickCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex flex-col items-center cursor-pointer text-center"
              >
                {/* Rounded image container with clean, upscaled photography */}
                <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xs border border-[#E2D8C9] bg-white group-hover:shadow-md transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>
                {/* Title in elegant Serif font matching design */}
                <span className="font-serif text-xs sm:text-sm font-semibold text-gray-900 mt-2.5 group-hover:text-[#C86B4C] transition-colors leading-tight">
                  {cat.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. "COMPLETE INTERIOR SOLUTIONS" / From Inspiration to Installation
          ========================================================================= */}
      <section className="w-full bg-[#F5F0EA] py-14 sm:py-18 border-b border-[#E2D8C9]">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & Button (Span 4) */}
            <div className="lg:col-span-4 flex flex-col">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C86B4C] mb-2.5">
                COMPLETE INTERIOR SOLUTIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-gray-900 leading-[1.14] font-normal mb-3.5">
                From Inspiration
                <br />
                to Installation
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal max-w-sm">
                We make your home transformation journey simple, seamless and
                stress-free.
              </p>
              <Link
                to="/interior-design"
                className="bg-[#C57053] hover:bg-[#B36044] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs hover:shadow-md inline-flex items-center gap-2 self-start"
              >
                <span>How It Works</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Column: 3 Process Cards with connecting arrows (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="relative flex flex-col group">
                  {/* Step Image */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xs border border-[#E2D8C9] bg-white mb-3.5">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>

                  {/* Step Number in Terracotta Serif */}
                  <span className="font-serif text-2xl font-bold text-[#C86B4C] leading-none mb-1">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Connecting Arrow between cards on tablet/desktop */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-3.5 top-1/3 -translate-y-1/2 z-10 text-gray-400">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. "INTERIOR DESIGN SERVICES" / Our Interior Works
          ========================================================================= */}
      <section className="w-full bg-[#F5F0EA] py-14 sm:py-18 border-b border-[#E2D8C9]">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Dining Showcase with "Watch Our Work" button (Span 5) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-sm border border-[#E2D8C9] group min-h-[380px] sm:min-h-[440px] bg-black">
              <img
                src="/images/design/dining_exact_upscaled.jpg"
                alt="Our Interior Works Dining Showcase"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              {/* Floating "Watch Our Work" Badge at Bottom Left matching design */}
              <button
                onClick={() => setVideoModalOpen(true)}
                className="absolute bottom-5 left-5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 px-4 py-2.5 rounded-full flex items-center space-x-3 transition-all duration-300 shadow-lg cursor-pointer group/btn"
              >
                <div className="w-7 h-7 rounded-full bg-[#C86B4C] flex items-center justify-center text-white shrink-0 group-hover/btn:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="text-xs font-semibold tracking-wide pr-1">
                  Watch Our Work
                </span>
              </button>
            </div>

            {/* Right Column: Header & 6 Grid Cards (Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              {/* Header row with "View All Designs ->" and carousel arrows */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C86B4C] block mb-1">
                    INTERIOR DESIGN SERVICES
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal">
                    Our Interior Works
                  </h2>
                  <p className="text-xs text-gray-500 mt-1 font-normal">
                    Transform your space with our professional interior design
                    solutions.
                  </p>
                </div>

                <div className="flex items-center space-x-3 self-start sm:self-auto shrink-0">
                  <Link
                    to="/interior-design"
                    className="text-xs font-semibold text-gray-800 hover:text-[#C86B4C] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View All Designs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C86B4C]" />
                  </Link>

                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => navigate("/interior-design")}
                      aria-label="Previous"
                      className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => navigate("/interior-design")}
                      aria-label="Next"
                      className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 columns x 2 rows Grid with clean photography */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {interiorWorks.map((work) => (
                  <Link
                    key={work.title}
                    to={work.link}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xs border border-[#E2D8C9] bg-black cursor-pointer"
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    {/* Bottom dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Bottom Title + Arrow matching design */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 flex items-center justify-between">
                      <span className="font-serif text-xs sm:text-[13px] font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                        {work.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. "FEATURED CATEGORIES" / Curated for Modern Homes
          ========================================================================= */}
      <section className="w-full bg-[#F5F0EA] py-14 sm:py-18 border-b border-[#E2D8C9]">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          {/* Header row with arrows */}
          <div className="flex items-end justify-between mb-7 sm:mb-8">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C86B4C] block mb-1">
                FEATURED CATEGORIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal">
                Curated for Modern Homes
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate("/products")}
                aria-label="Previous category"
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/products")}
                aria-label="Next category"
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5 Category Cards in a row matching design */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex flex-col bg-transparent cursor-pointer"
              >
                {/* Rounded image container */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-[#E2D8C9] bg-white mb-3">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                {/* Card footer: Title + Count on left, Circle arrow button on right */}
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#C86B4C] transition-colors leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-normal mt-0.5">
                      {cat.count}
                    </p>
                  </div>

                  {/* Circular Arrow Button matching design */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 group-hover:border-[#C86B4C] group-hover:bg-[#C86B4C] text-gray-700 group-hover:text-white flex items-center justify-center shrink-0 transition-all shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. "BOOK A FREE INTERIOR CONSULTATION" Banner
          ========================================================================= */}
      <section id="consultation" className="w-full bg-[#F5F0EA] py-10 sm:py-14">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="rounded-3xl bg-[#6B3724] text-white p-8 sm:p-10 lg:p-14 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Heading, Subtitle & Book Now button (Span 5) */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/80 mb-2">
                  BOOK A FREE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 leading-[1.12]">
                  INTERIOR CONSULTATION
                </h2>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed mb-6 max-w-sm">
                  Get expert advice, personalized design ideas and product
                  recommendations for your space.
                </p>
                <button
                  onClick={() => setConsultModalOpen(true)}
                  className="bg-[#C57053] hover:bg-[#B36044] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 self-start cursor-pointer hover:scale-102 active:scale-98"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Middle Column: 2x2 Feature Icons (Span 4) */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-5 sm:gap-6 border-y lg:border-y-0 lg:border-x border-white/15 py-6 lg:py-0 lg:px-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-200">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Personalized Designs
                    </h4>
                    <p className="text-[10.5px] text-white/70 mt-0.5">
                      Tailored to your space
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-200">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Functional Spaces
                    </h4>
                    <p className="text-[10.5px] text-white/70 mt-0.5">
                      Optimized comfort
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-200">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      Premium Products
                    </h4>
                    <p className="text-[10.5px] text-white/70 mt-0.5">
                      Highest durability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-amber-200">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      End-to-End Support
                    </h4>
                    <p className="text-[10.5px] text-white/70 mt-0.5">
                      Complete execution
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Armchair Cutout Image matching design (Span 3) */}
              <div className="lg:col-span-3 flex items-center justify-center">
                <div className="w-full max-w-[260px] aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black/20">
                  <img
                    src="/images/design/armchair_upscaled.jpg"
                    alt="Luxury Interior Armchair and Fluted Wall"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. "INSPIRATION GALLERY" / Homes by Ghar Sansar
          ========================================================================= */}
      <section className="w-full bg-[#F5F0EA] py-14 sm:py-18 border-b border-[#E2D8C9]">
        <div className="w-full max-w-[1520px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          {/* Header row with "View Gallery ->" and carousel arrows */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-8">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C86B4C] block mb-1">
                INSPIRATION GALLERY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-normal">
                Homes by Ghar Sansar
              </h2>
              <p className="text-xs text-gray-500 mt-1 font-normal">
                Real homes. Real ideas. Real transformations.
              </p>
            </div>

            <div className="flex items-center space-x-3 self-start sm:self-auto shrink-0">
              <Link
                to="/interior-design"
                className="text-xs font-semibold text-gray-800 hover:text-[#C86B4C] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C86B4C]" />
              </Link>

              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => navigate("/interior-design")}
                  aria-label="Previous gallery"
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigate("/interior-design")}
                  aria-label="Next gallery"
                  className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Gallery Cards matching design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-[#E2D8C9] bg-black cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-serif text-xs sm:text-sm font-bold">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-300">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isConsultModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConsultModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#F5F0EA] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E2D8C9] z-10"
            >
              <button
                onClick={() => setConsultModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-200/50"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C86B4C] block mb-1">
                EXPERT GUIDANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Book Your Free Consultation
              </h3>
              <p className="text-xs text-gray-600 mb-6">
                Tell us about your home and our lead interior designer in
                Vijayawada will contact you with 3D concepts.
              </p>

              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={consultForm.name}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, name: e.target.value })
                    }
                    className="w-full bg-white border border-[#E2D8C9] rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#C86B4C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={consultForm.phone}
                    onChange={(e) =>
                      setConsultForm({ ...consultForm, phone: e.target.value })
                    }
                    className="w-full bg-white border border-[#E2D8C9] rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#C86B4C]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      City
                    </label>
                    <select
                      value={consultForm.city}
                      onChange={(e) =>
                        setConsultForm({ ...consultForm, city: e.target.value })
                      }
                      className="w-full bg-white border border-[#E2D8C9] rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#C86B4C]"
                    >
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Eluru">Eluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Other">Other AP / Telangana</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={consultForm.service}
                      onChange={(e) =>
                        setConsultForm({
                          ...consultForm,
                          service: e.target.value,
                        })
                      }
                      className="w-full bg-white border border-[#E2D8C9] rounded-xl px-3 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#C86B4C]"
                    >
                      <option value="Interior Design Consultation">
                        Full Interior Design
                      </option>
                      <option value="Wallpaper & 3D Wallpapers">
                        3D Wallpapers &amp; Wall Art
                      </option>
                      <option value="Vinyl & Wooden Flooring">
                        Vinyl / Wooden Flooring
                      </option>
                      <option value="Vertical Garden & Greenery">
                        Vertical Garden
                      </option>
                      <option value="Curtains & Motorized Blinds">
                        Curtains &amp; Blinds
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#C57053] hover:bg-[#B36044] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          VIDEO SHOWCASE MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl z-10 aspect-video flex items-center justify-center border border-white/20"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src="/videos/homedine.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          GALLERY LIGHTBOX MODAL
          ========================================================================= */}
      <AnimatePresence>
        {activeGalleryIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGalleryIndex(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-3xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setActiveGalleryIndex(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-[16/10] w-full bg-black">
                <img
                  src={galleryItems[activeGalleryIndex].image}
                  alt={galleryItems[activeGalleryIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 text-white flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold">
                    {galleryItems[activeGalleryIndex].title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {galleryItems[activeGalleryIndex].location}
                  </p>
                </div>
                <Link
                  to="/interior-design"
                  className="text-xs font-semibold text-[#C86B4C] hover:underline"
                >
                  Explore More Designs →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
