// src/pages/Home.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Play,
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
      primaryCta: "Explore Our Designs",
      primaryLink: "/interior-design",
      secondaryCta: "Shop Now",
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
      primaryCta: "Our Interior Works",
      primaryLink: "/interior-design",
      secondaryCta: "View Catalog",
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
      primaryCta: "Book Consultation",
      primaryLink: "#consultation",
      secondaryCta: "Festive Gifts",
      secondaryLink: "/return-gifts",
    },
  ];

  // Quick 7 Categories with 1264x848 ultra-high-definition studio images
  const quickCategories = [
    {
      title: "Wallpaper Rolls",
      count: "120+ Designs",
      image: "/images/design/cat_wallpaper.jpg",
      link: "/interior-design?category=Wallpaper%20Rolls",
    },
    {
      title: "Wall Art Effects",
      count: "85+ Designs",
      image: "/images/design/cat_wallart.jpg",
      link: "/interior-design?category=Wall%20Art%20Effect",
    },
    {
      title: "Vinyl Flooring",
      count: "90+ Designs",
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
      title: "Vertical Garden",
      count: "60+ Designs",
      image: "/images/design/cat_garden.jpg",
      link: "/interior-design?category=Natural%20Vertical%20Garden",
    },
    {
      title: "Interior Decor",
      count: "250+ Products",
      image: "/images/design/cat_decor.jpg",
      link: "/products",
    },
    {
      title: "Return Gifts",
      count: "150+ Gifts",
      image: "/images/design/cat_gifts.jpg",
      link: "/return-gifts",
    },
  ];

  // 3 Process Steps
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

  // 6 Interior Works for Asymmetric Portfolio
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

  // 5 Featured Categories
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

  // 4 Inspiration Gallery items
  const galleryItems = [
    {
      title: "Modern Contemporary Living",
      location: "Governorpet, Vijayawada",
      image: "/images/design/gallery_1_upscaled.jpg",
      type: "Residential Interior",
    },
    {
      title: "Ambient Master Suite",
      location: "Benz Circle, Vijayawada",
      image: "/images/design/gallery_2_upscaled.jpg",
      type: "Master Bedroom",
    },
    {
      title: "Opulent Dining Space",
      location: "Guntur",
      image: "/images/design/gallery_3_upscaled.jpg",
      type: "Dining & Bar",
    },
    {
      title: "Bas-Relief Media Feature Wall",
      location: "Hyderabad",
      image: "/images/design/gallery_4_upscaled.jpg",
      type: "Living Wall Art",
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
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

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
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen font-sans text-gray-900 flex flex-col selection:bg-[#C57053] selection:text-white antialiased">
      {/* Regional SEO metadata */}
      <div className="sr-only">
        <h2>Best Interior Designers in Vijayawada, Andhra Pradesh &amp; Telangana</h2>
        <p>
          Ghar Sansar provides luxury interior design, wallpapers, vinyl flooring,
          curtains, and bespoke decor for Andhra Pradesh and Telangana.
        </p>
      </div>

      {/* =========================================================================
          1. HERO SECTION (Cinematic Full-Bleed Composition Matching Target 1:1)
          ========================================================================= */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center bg-[#181513] overflow-hidden">
        {/* Full-Bleed Photography Background */}
        <div className="absolute inset-0 z-0">
          <motion.img
            key={`hero-bg-${currentSlide}`}
            initial={{ opacity: 0.9, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src={heroSlides[currentSlide].image}
            alt="Best Interior Designers in Andhra Pradesh & Telangana"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Dark Gradient Overlay across Left ~50% */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-45% to-transparent" />
          {/* Top subtle vignette for transparent navigation bar contrast */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 pt-28 pb-12 lg:pt-36 lg:pb-14 flex flex-col justify-between min-h-[85vh] lg:min-h-[92vh]">
          {/* Main Editorial Text Area */}
          <div className="my-auto max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center space-x-2.5 mb-3.5">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#C86B4C] uppercase font-sans">
                {heroSlides[currentSlide].kicker}
              </span>
            </div>

            {/* Editorial Heading: 4 Distinct Lines with Terracotta Accent */}
            <motion.h1
              key={`hero-title-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[66px] leading-[1.08] font-normal text-white mb-5 tracking-tight"
            >
              {heroSlides[currentSlide].titleLine1}
              <br />
              {heroSlides[currentSlide].titleLine2}
              <br />
              <span className="text-[#C86B4C]">
                {heroSlides[currentSlide].highlightLine1}
              </span>
              <br />
              <span className="text-[#C86B4C]">
                {heroSlides[currentSlide].highlightLine2}
              </span>
            </motion.h1>

            {/* Narrative Paragraph */}
            <motion.p
              key={`hero-desc-${currentSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-[14.5px] text-stone-200/90 font-light leading-relaxed max-w-lg mb-8"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                to={heroSlides[currentSlide].primaryLink}
                className="bg-[#C86B4C] hover:bg-[#B35E42] text-white px-7 sm:px-8 py-3.5 rounded-full font-medium tracking-wider text-xs uppercase inline-flex items-center space-x-2.5 transition-all shadow-md hover:shadow-lg hover:scale-102"
              >
                <span>{heroSlides[currentSlide].primaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to={heroSlides[currentSlide].secondaryLink}
                className="border border-white/80 hover:border-white text-white hover:bg-white/10 px-7 sm:px-8 py-3.5 rounded-full font-medium tracking-wider text-xs uppercase inline-flex items-center transition-all"
              >
                <span>{heroSlides[currentSlide].secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* Bottom Controls Bar: Left Slider Controls + Right Watermark */}
          <div className="flex items-end justify-between pt-8">
            {/* Slider Controls */}
            <div className="flex items-center space-x-4 text-white/90">
              <div className="flex items-center space-x-2.5 text-xs font-poppins font-bold">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-colors cursor-pointer ${
                      idx === currentSlide
                        ? "text-white"
                        : "text-white/45 hover:text-white/75"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              {/* Progress Line */}
              <div className="w-16 h-[2px] bg-white/25 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C86B4C] transition-all duration-500 rounded-full"
                  style={{
                    width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                  }}
                />
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center space-x-2 text-white/80">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Brand Watermark */}
            <div className="hidden sm:flex items-center space-x-3 text-right">
              <div className="w-[1.5px] h-11 bg-white/40" />
              <div className="font-sans text-[10px] tracking-[0.24em] text-white/90 uppercase font-light leading-tight text-left">
                CRAFTING
                <br />
                HOMES
                <br />
                THAT FEEL
                <br />
                LIKE YOU
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CATEGORY STRIP (7 Cards Horizontal Row directly below hero)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] pt-6 pb-2 sm:pt-8 sm:pb-3">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-3.5 lg:gap-4">
            {quickCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex flex-col items-center cursor-pointer text-center bg-white/75 hover:bg-white rounded-2xl p-2.5 sm:p-3 border border-[#E8E2D8]/80 hover:border-[#C86B4C]/50 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-full aspect-[1.1/1] rounded-xl overflow-hidden bg-stone-100 shadow-2xs">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                </div>
                <span className="font-poppins text-xs sm:text-[13px] font-semibold text-gray-900 mt-2.5 group-hover:text-[#C86B4C] transition-colors leading-tight">
                  {cat.title}
                </span>
                <span className="font-poppins text-[10.5px] text-gray-500 font-normal mt-0.5">
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPLETE INTERIOR SOLUTIONS ("From Inspiration to Installation")
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            
            {/* Left Column (Span 4) */}
            <div className="lg:col-span-4 flex flex-col justify-start pt-1">
              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#C86B4C] uppercase block mb-2">
                COMPLETE INTERIOR SOLUTIONS
              </span>
              <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[42px] text-gray-950 leading-[1.12] font-normal mb-3.5 tracking-tight">
                From Inspiration
                <br />
                to Installation
              </h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed mb-6 font-normal max-w-sm">
                We make your home transformation journey simple, seamless and
                stress-free.
              </p>
              <Link
                to="/interior-design"
                className="bg-[#C86B4C] hover:bg-[#B35E42] text-white px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-flex items-center gap-2 self-start transition-all shadow-xs hover:shadow-md"
              >
                <span>HOW IT WORKS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Column: 3 Process Steps (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-start relative">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="relative flex flex-col group">
                  {/* Step Image (1800x1344 High Definition Photography) */}
                  <div className="w-full aspect-[1.25/1] rounded-2xl overflow-hidden bg-stone-100 shadow-xs border border-[#E8E2D8]/80 mb-3">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>

                  {/* Step Number in Terracotta */}
                  <span className="font-poppins text-xl sm:text-2xl font-bold text-[#C86B4C] leading-none mb-1.5 block">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-poppins text-sm sm:text-base font-semibold text-gray-900 mb-1 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Connecting horizontal arrow between steps on desktop, aligned with image center */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-3 lg:-right-4 top-[32%] -translate-y-1/2 z-10 text-stone-400">
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR INTERIOR WORKS (Interior Design Services Showcase)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-14 sm:py-18 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 pb-4 border-b border-[#E8E2D8]/70">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#C86B4C] uppercase block mb-1">
                INTERIOR DESIGN SERVICES
              </span>
              <h2 className="font-poppins text-3xl sm:text-4xl text-gray-950 font-normal tracking-tight">
                Our Interior Works
              </h2>
              <p className="text-xs text-gray-600 mt-1 font-normal">
                Transform your space with our professional interior design solutions.
              </p>
            </div>

            <div className="flex items-center space-x-3 self-start sm:self-auto shrink-0">
              <Link
                to="/interior-design"
                className="text-xs font-semibold uppercase tracking-wider text-[#C86B4C] hover:text-[#B35E42] transition-colors inline-flex items-center gap-1.5 mr-2"
              >
                <span>View All Designs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => navigate("/interior-design")}
                aria-label="Previous"
                className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate("/interior-design")}
                aria-label="Next"
                className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Featured Project Showcase (Full Width Grand Banner) */}
          <div className="w-full relative aspect-[2.2/1] sm:aspect-[2.6/1] lg:aspect-[3/1] min-h-[240px] sm:min-h-[300px] max-h-[440px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-[#E8E2D8] group bg-black">
            <img
              src="/images/design/dining_exact_upscaled.jpg"
              alt="Featured Project: Bespoke Dining Room"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Bottom Play Button: Watch Our Work */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="bg-black/60 hover:bg-black/80 text-white px-4 py-2.5 rounded-full flex items-center space-x-3 transition-all backdrop-blur-md border border-white/20 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#C86B4C] flex items-center justify-center text-white shrink-0">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span className="text-xs font-medium tracking-wide">
                  Watch Our Work
                </span>
              </button>
            </div>
          </div>
          {/* Bottom Section: 5 Category Cards (from Second Image) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-5 mt-6 sm:mt-7 pt-6 border-t border-[#E8E2D8]/70">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Frame with Floating Arrow Button */}
                <div className="w-full aspect-[1.15/1] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 shadow-xs border border-[#E8E2D8] relative mb-2.5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circular Arrow Button */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 group-hover:bg-[#C86B4C] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption Below */}
                <div>
                  <h3 className="font-poppins text-sm font-semibold text-gray-900 group-hover:text-[#C86B4C] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-normal mt-0.5">
                    {cat.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================================
          6. INTERIOR CONSULTATION (Rich Terracotta-Brown Banner)
          ========================================================================= */}
      <section id="consultation" className="w-full bg-[#FAF7F2] py-12 sm:py-16 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="rounded-2xl lg:rounded-3xl bg-[#542B1B] text-white p-7 sm:p-10 lg:p-12 shadow-xl overflow-hidden relative border border-[#6B3724]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column (Span 5) */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#E09D82] uppercase mb-2">
                  BOOK A FREE
                </span>
                <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-3.5 leading-tight uppercase">
                  INTERIOR CONSULTATION
                </h2>
                <p className="text-xs sm:text-sm text-stone-200/90 font-light leading-relaxed mb-6 max-w-sm">
                  Get expert advice, personalized design ideas and product recommendations for your space.
                </p>
                <button
                  onClick={() => setConsultModalOpen(true)}
                  className="bg-[#C86B4C] hover:bg-[#B35E42] text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2 self-start cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Middle 2x2 Feature Pillars (Span 4) */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-5 border-y lg:border-y-0 lg:border-x border-white/15 py-6 lg:py-0 lg:px-7">
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full border border-[#E09D82]/50 flex items-center justify-center shrink-0 text-[#E09D82]">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Personalized Designs
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full border border-[#E09D82]/50 flex items-center justify-center shrink-0 text-[#E09D82]">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Functional Spaces
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full border border-[#E09D82]/50 flex items-center justify-center shrink-0 text-[#E09D82]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Premium Products
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full border border-[#E09D82]/50 flex items-center justify-center shrink-0 text-[#E09D82]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      End-to-End Support
                    </h4>
                  </div>
                </div>
              </div>

              {/* Right Armchair Photo (Span 3) */}
              <div className="lg:col-span-3 flex items-center justify-center">
                <div className="w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black/20">
                  <img
                    src="/images/design/armchair_upscaled.jpg"
                    alt="Interior Consultation Armchair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. INSPIRATION GALLERY ("Homes by Ghar Sansar")
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-14 sm:py-18 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 pb-4 border-b border-[#E8E2D8]/70">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#C86B4C] uppercase block mb-1">
                INSPIRATION GALLERY
              </span>
              <h2 className="font-poppins text-3xl sm:text-4xl text-gray-950 font-normal tracking-tight">
                Homes by Ghar Sansar
              </h2>
              <p className="text-xs text-gray-600 mt-1 font-normal">
                Real homes. Real ideas. Real transformations.
              </p>
            </div>

            <div className="flex items-center space-x-3 self-start sm:self-auto shrink-0">
              <Link
                to="/interior-design"
                className="text-xs font-semibold uppercase tracking-wider text-[#C86B4C] hover:text-[#B35E42] transition-colors inline-flex items-center gap-1.5 mr-2"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => navigate("/interior-design")}
                aria-label="Previous"
                className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate("/interior-design")}
                aria-label="Next"
                className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 4 Cards in a Single Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className="group relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-[#E8E2D8] bg-black cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
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
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-[#FAF7F2] rounded-xl p-6 sm:p-8 shadow-2xl border border-[#E8E2D8] z-10"
            >
              <button
                onClick={() => setConsultModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 text-gray-400 hover:text-gray-900 rounded-full hover:bg-stone-200/50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C57053] block mb-1">
                Expert Guidance
              </span>
              <h3 className="font-poppins text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
                Book Your Free Consultation
              </h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Tell us about your home and our lead interior designer in
                Vijayawada will contact you with bespoke 3D concepts.
              </p>

              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
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
                    className="w-full bg-white border border-[#E2DDD5] rounded-md px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#C57053]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
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
                    className="w-full bg-white border border-[#E2DDD5] rounded-md px-3.5 py-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#C57053]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <select
                      value={consultForm.city}
                      onChange={(e) =>
                        setConsultForm({ ...consultForm, city: e.target.value })
                      }
                      className="w-full bg-white border border-[#E2DDD5] rounded-md px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#C57053]"
                    >
                      <option value="Vijayawada">Vijayawada</option>
                      <option value="Guntur">Guntur</option>
                      <option value="Eluru">Eluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Other">Other AP / Telangana</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
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
                      className="w-full bg-white border border-[#E2DDD5] rounded-md px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#C57053]"
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
                  className="w-full mt-4 bg-[#C57053] hover:bg-[#B35E42] text-white py-3 rounded-md text-xs font-medium uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
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
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl z-10 aspect-video flex items-center justify-center border border-white/20"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
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
              className="relative w-full max-w-3xl bg-neutral-900 rounded-xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setActiveGalleryIndex(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
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
                  <h4 className="font-poppins text-base font-medium">
                    {galleryItems[activeGalleryIndex].title}
                  </h4>
                  <p className="text-xs text-stone-400">
                    {galleryItems[activeGalleryIndex].location}
                  </p>
                </div>
                <Link
                  to="/interior-design"
                  className="text-xs font-semibold text-[#D98267] hover:underline"
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