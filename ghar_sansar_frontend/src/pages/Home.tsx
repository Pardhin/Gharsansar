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
      category: "Architectural Accents",
      image: "/images/design/work_wallpaper_exact.jpg",
      link: "/interior-design?category=Wallpaper%20Rolls",
      aspect: "landscape",
    },
    {
      title: "3D Wallpapers",
      category: "Relief Wall Sculpture",
      image: "/images/design/work_3d_exact.jpg",
      link: "/interior-design?category=3d%20Wallpapers",
      aspect: "square",
    },
    {
      title: "Wall Art Effects",
      category: "Artistic Wall Finishes",
      image: "/images/design/work_wallart_exact.jpg",
      link: "/interior-design?category=Wall%20Art%20Effect",
      aspect: "square",
    },
    {
      title: "Vinyl Flooring",
      category: "Luxury Wood Surfaces",
      image: "/images/design/work_vinyl_exact.jpg",
      link: "/interior-design?category=Vinyl%20Flooring",
      aspect: "square",
    },
    {
      title: "Natural Vertical Garden",
      category: "Living Green Architecture",
      image: "/images/design/work_garden_exact.jpg",
      link: "/interior-design?category=Natural%20Vertical%20Garden",
      aspect: "square",
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
          1. HERO SECTION (Editorial Asymmetric Composition - Bright, Natural, Luxurious)
          ========================================================================= */}
      <section className="relative w-full bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[640px] items-stretch">
          
          {/* Left Editorial Content Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between px-6 sm:px-10 lg:px-12 xl:px-16 pt-24 pb-10 lg:py-20 z-10 bg-[#FAF7F2]">
            {/* Main Content */}
            <div className="my-auto max-w-xl">
              {/* Eyebrow with terracotta accent line */}
              <div className="flex items-center space-x-2.5 mb-3.5">
                <span className="w-5 h-[1.5px] bg-[#C57053]" />
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C57053] uppercase font-sans">
                  {heroSlides[currentSlide].kicker}
                </span>
              </div>

              {/* Editorial Serif Heading */}
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] leading-[1.12] font-normal text-gray-950 mb-4 tracking-tight"
              >
                {heroSlides[currentSlide].titleLine1} {heroSlides[currentSlide].titleLine2}{" "}
                <span className="text-[#C57053] italic">
                  {heroSlides[currentSlide].highlightLine1}
                </span>{" "}
                <span className="text-[#C57053]">
                  {heroSlides[currentSlide].highlightLine2}
                </span>
              </motion.h1>

              {/* Editorial Narrative Paragraph */}
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs sm:text-sm md:text-[14.5px] text-gray-650 font-normal leading-relaxed max-w-lg mb-7"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* Restrained Brand CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={heroSlides[currentSlide].primaryLink}
                  className="bg-[#C57053] hover:bg-[#B35E42] text-white px-7 py-3 rounded-md font-medium tracking-wider text-xs uppercase flex items-center space-x-2 transition-all shadow-xs hover:shadow-md"
                >
                  <span>{heroSlides[currentSlide].primaryCta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={heroSlides[currentSlide].secondaryLink}
                  className="text-gray-800 hover:text-[#C57053] text-xs uppercase font-medium tracking-wider py-2.5 px-1 inline-flex items-center gap-1.5 transition-colors border-b border-gray-400 hover:border-[#C57053]"
                >
                  <span>{heroSlides[currentSlide].secondaryCta}</span>
                </Link>
              </div>
            </div>

            {/* Slider Controls Bar */}
            <div className="pt-6 mt-6 lg:mt-0 border-t border-[#E8E2D8]/80 flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="flex items-center space-x-2 text-xs font-serif font-bold text-gray-900">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-colors cursor-pointer ${
                        idx === currentSlide
                          ? "text-[#C57053] scale-105"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>

                <div className="w-14 h-[2px] bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C57053] transition-all duration-500 rounded-full"
                    style={{
                      width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="hidden sm:flex items-center space-x-2 text-right text-[10px] tracking-[0.2em] uppercase font-sans text-gray-500 font-medium">
                <span>Vijayawada</span>
                <span>•</span>
                <span>Hyderabad</span>
                <span>•</span>
                <span>Amaravati</span>
              </div>
            </div>
          </div>

          {/* Right High-Definition Photography Column (Span 7) - Bright, Natural, No Heavy Black Overlay */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-full overflow-hidden bg-stone-100">
            <motion.img
              key={`hero-img-${currentSlide}`}
              initial={{ opacity: 0.85, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={heroSlides[currentSlide].image}
              alt="Luxury Interior Design by Ghar Sansar"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle soft edge blend on desktop for seamless architectural cohesion */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FAF7F2] to-transparent pointer-events-none" />
            
            {/* Floating Architecture Watermark Badge at bottom right */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm border border-stone-200/80 shadow-2xs hidden sm:block">
              <p className="font-sans text-[10px] tracking-[0.22em] text-gray-700 uppercase font-medium">
                Crafting Homes That Feel Like You
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SHOP BY CATEGORY (Editorial Horizontal Presentation - Zero Empty Space)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-10 lg:py-14 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 pb-4 border-b border-[#E8E2D8]/70">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C57053] uppercase block mb-1">
                Shop by Category
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 tracking-tight">
                Curated Collections for Every Space
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs uppercase font-medium tracking-wider text-gray-700 hover:text-[#C57053] transition-colors inline-flex items-center gap-1.5 mt-2 sm:mt-0"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 7 Clean Rectangular Categories with 1264x848 Ultra-High-Definition Imagery */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3.5 sm:gap-4 lg:gap-5">
            {quickCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex flex-col items-center cursor-pointer text-center"
              >
                {/* Architectural rectangular frame with subtle radius */}
                <div className="w-full aspect-[1.4/1] rounded-md overflow-hidden bg-stone-100 shadow-2xs border border-[#E8E2D8] group-hover:border-[#C57053]/50 transition-all duration-300">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>
                {/* Refined typography underneath */}
                <span className="font-serif text-xs sm:text-[13px] font-medium text-gray-900 mt-2.5 group-hover:text-[#C57053] transition-colors leading-tight">
                  {cat.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. HOW WE WORK ("From Inspiration to Installation" - Editorial Horizontal Journey)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-16 lg:py-22 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Editorial Typography & Narrative (Span 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between pt-2">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C57053] uppercase block mb-2">
                  Complete Interior Solutions
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-gray-950 leading-[1.12] font-normal mb-4 tracking-tight">
                  From Inspiration
                  <br />
                  to Installation
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-7 font-normal max-w-sm">
                  We make your home transformation journey simple, seamless and
                  stress-free with personalized architectural guidance.
                </p>
              </div>

              <Link
                to="/interior-design"
                className="text-gray-900 hover:text-[#C57053] text-xs uppercase font-medium tracking-wider inline-flex items-center gap-2 transition-colors self-start pb-1 border-b border-gray-400 hover:border-[#C57053]"
              >
                <span>How It Works</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C57053]" />
              </Link>
            </div>

            {/* Right Column: 3 Horizontal Process Chapters (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 relative">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="relative flex flex-col group">
                  {/* Clean Photography Frame (No Heavy Border) */}
                  <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-stone-100 shadow-2xs border border-[#E8E2D8] mb-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>

                  {/* Step Number in Terracotta Serif */}
                  <span className="font-serif text-2xl font-light text-[#C57053] leading-none mb-1.5">
                    {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-serif text-base font-semibold text-gray-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs text-gray-600 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Connecting divider indicator on desktop */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-3.5 top-1/4 -translate-y-1/2 z-10 text-stone-300">
                      <span className="w-3 h-[1px] bg-stone-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OUR INTERIOR WORKS (Asymmetrical Portfolio Gallery)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-16 lg:py-22 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8E2D8]/70">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C57053] uppercase block mb-1">
                Interior Design Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-950 font-normal tracking-tight">
                Our Interior Works
              </h2>
              <p className="text-xs text-gray-600 mt-1 font-normal">
                Transform your space with our professional interior design solutions.
              </p>
            </div>

            <div className="flex items-center space-x-4 self-start sm:self-auto shrink-0">
              <Link
                to="/interior-design"
                className="text-xs uppercase font-medium tracking-wider text-gray-700 hover:text-[#C57053] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View All Designs</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C57053]" />
              </Link>
            </div>
          </div>

          {/* Asymmetric Portfolio Grid: 1 Large Feature Showcase (Left) + Asymmetric Collage (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left: Grand Feature Dining Room Showcase (Span 7) */}
            <div className="lg:col-span-7 relative rounded-md overflow-hidden shadow-xs border border-[#E8E2D8] group min-h-[420px] lg:min-h-[520px] bg-black">
              <img
                src="/images/design/dining_exact_upscaled.jpg"
                alt="Featured Project: Luxury Dining Room"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              {/* Soft bottom vignette for typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

              {/* Top Left Tag */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-semibold tracking-[0.18em] text-gray-800 uppercase">
                Featured Project: Dining &amp; Living
              </div>

              {/* Bottom Details & Watch Our Work Play Button */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                    Bespoke Luxury Dining Room
                  </h3>
                  <p className="text-xs text-stone-300 font-light">
                    Governorpet, Vijayawada • Fluted Walnut &amp; Tropical Garden View
                  </p>
                </div>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="bg-white/90 hover:bg-white text-gray-900 px-4 py-2.5 rounded-full flex items-center space-x-2.5 transition-all duration-300 shadow-md cursor-pointer self-start sm:self-auto shrink-0"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C57053] flex items-center justify-center text-white shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide">
                    Watch Our Work
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Asymmetric Portfolio Gallery (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5">
              
              {/* Top Landscape Highlight */}
              <Link
                to={interiorWorks[0].link}
                className="group relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1.8/1] rounded-md overflow-hidden shadow-2xs border border-[#E8E2D8] bg-black"
              >
                <img
                  src={interiorWorks[0].image}
                  alt={interiorWorks[0].title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-amber-200/90 font-medium block">
                      {interiorWorks[0].category}
                    </span>
                    <h4 className="font-serif text-base font-medium text-white">
                      {interiorWorks[0].title}
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>

              {/* Middle 2 Split Columns */}
              <div className="grid grid-cols-2 gap-4">
                {interiorWorks.slice(1, 3).map((work) => (
                  <Link
                    key={work.title}
                    to={work.link}
                    className="group relative aspect-[4/3] rounded-md overflow-hidden shadow-2xs border border-[#E8E2D8] bg-black"
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between">
                      <h4 className="font-serif text-xs sm:text-[13px] font-medium text-white leading-tight">
                        {work.title}
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom 2 Split Columns */}
              <div className="grid grid-cols-2 gap-4">
                {interiorWorks.slice(3, 5).map((work) => (
                  <Link
                    key={work.title}
                    to={work.link}
                    className="group relative aspect-[4/3] rounded-md overflow-hidden shadow-2xs border border-[#E8E2D8] bg-black"
                  >
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between">
                      <h4 className="font-serif text-xs sm:text-[13px] font-medium text-white leading-tight">
                        {work.title}
                      </h4>
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
          5. FEATURED CATEGORIES ("Curated for Modern Homes" - Clean Architectural Ecommerce)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-16 lg:py-22 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8E2D8]/70">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C57053] uppercase block mb-1">
                Featured Categories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-950 font-normal tracking-tight">
                Curated for Modern Homes
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate("/products")}
                aria-label="Previous category"
                className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate("/products")}
                aria-label="Next category"
                className="w-7 h-7 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 5 Architectural Portrait Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Frame */}
                <div className="w-full aspect-[4/5] rounded-md overflow-hidden bg-stone-100 shadow-2xs border border-[#E8E2D8] mb-3">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                </div>

                {/* Caption below with subtle arrow */}
                <div className="flex items-center justify-between px-0.5">
                  <div>
                    <h3 className="font-serif text-sm font-medium text-gray-900 group-hover:text-[#C57053] transition-colors leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 font-normal mt-0.5">
                      {cat.count}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#C57053] group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. INTERIOR CONSULTATION (Intentional Dark Architectural Contrast Break)
          ========================================================================= */}
      <section id="consultation" className="w-full bg-[#FAF7F2] py-14 sm:py-20 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="rounded-2xl lg:rounded-3xl bg-[#1C1815] text-white p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden relative border border-[#2D2621]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtitle & Book Now button (Span 5) */}
              <div className="lg:col-span-5 flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D98267] uppercase mb-2">
                  Book a Free
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-3.5 leading-[1.12]">
                  Interior Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#A8A095] font-light leading-relaxed mb-7 max-w-sm">
                  Get expert advice, personalized design ideas and bespoke product
                  recommendations tailored to your space.
                </p>
                <button
                  onClick={() => setConsultModalOpen(true)}
                  className="bg-[#C57053] hover:bg-[#B35E42] text-white px-7 py-3 rounded-md text-xs font-medium uppercase tracking-wider transition-all shadow-sm inline-flex items-center gap-2 self-start cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Middle Column: 2x2 Feature Pillars (Span 4) */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-6 border-y lg:border-y-0 lg:border-x border-[#2D2621] py-8 lg:py-0 lg:px-8">
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-sm bg-stone-800/80 flex items-center justify-center shrink-0 text-[#D98267]">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Personalized Designs
                    </h4>
                    <p className="text-[10.5px] text-[#A8A095] mt-0.5">
                      Tailored to your space
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-sm bg-stone-800/80 flex items-center justify-center shrink-0 text-[#D98267]">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Functional Spaces
                    </h4>
                    <p className="text-[10.5px] text-[#A8A095] mt-0.5">
                      Optimized comfort
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-sm bg-stone-800/80 flex items-center justify-center shrink-0 text-[#D98267]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Premium Products
                    </h4>
                    <p className="text-[10.5px] text-[#A8A095] mt-0.5">
                      Highest durability
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-sm bg-stone-800/80 flex items-center justify-center shrink-0 text-[#D98267]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      End-to-End Support
                    </h4>
                    <p className="text-[10.5px] text-[#A8A095] mt-0.5">
                      Complete execution
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Luxury Armchair Photography (Span 3) */}
              <div className="lg:col-span-3 flex items-center justify-center">
                <div className="w-full max-w-[260px] aspect-square rounded-xl overflow-hidden shadow-md border border-[#2D2621] bg-black/40">
                  <img
                    src="/images/design/armchair_upscaled.jpg"
                    alt="Luxury Interior Armchair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. INSPIRATION GALLERY ("Homes by Ghar Sansar" - Magazine-Like Composition)
          ========================================================================= */}
      <section className="w-full bg-[#FAF7F2] py-16 lg:py-22 border-b border-[#E8E2D8]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E8E2D8]/70">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-[#C57053] uppercase block mb-1">
                Inspiration Gallery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-gray-950 font-normal tracking-tight">
                Homes by Ghar Sansar
              </h2>
              <p className="text-xs text-gray-600 mt-1 font-normal">
                Real homes. Real ideas. Real transformations.
              </p>
            </div>

            <div className="flex items-center space-x-4 self-start sm:self-auto shrink-0">
              <Link
                to="/interior-design"
                className="text-xs uppercase font-medium tracking-wider text-gray-700 hover:text-[#C57053] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C57053]" />
              </Link>
            </div>
          </div>

          {/* Magazine Composition: 1 Large Feature + 2 Stacked + 1 Panoramic View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Card 1: Large Feature (Span 7) */}
            <div
              onClick={() => setActiveGalleryIndex(0)}
              className="lg:col-span-7 group relative aspect-[16/11] rounded-md overflow-hidden shadow-2xs border border-[#E8E2D8] bg-black cursor-pointer"
            >
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="text-[10px] tracking-wider uppercase text-amber-200/90 font-medium block">
                  {galleryItems[0].type}
                </span>
                <h4 className="font-serif text-lg font-medium">
                  {galleryItems[0].title}
                </h4>
                <p className="text-[11px] text-stone-300 mt-0.5">{galleryItems[0].location}</p>
              </div>
            </div>

            {/* Stacked Pair (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-5 sm:gap-6">
              {galleryItems.slice(1, 3).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveGalleryIndex(idx + 1)}
                  className="group relative aspect-[16/9] lg:aspect-auto lg:h-[calc(50%-12px)] rounded-md overflow-hidden shadow-2xs border border-[#E8E2D8] bg-black cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="text-[10px] tracking-wider uppercase text-amber-200/90 font-medium block">
                      {item.type}
                    </span>
                    <h4 className="font-serif text-sm font-medium">
                      {item.title}
                    </h4>
                    <p className="text-[10.5px] text-stone-300 mt-0.5">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Panoramic 4th Detail Image across the full width */}
            <div
              onClick={() => setActiveGalleryIndex(3)}
              className="lg:col-span-12 group relative aspect-[21/9] sm:aspect-[24/8] rounded-md overflow-hidden shadow-2xs border border-[#E8E2D8] bg-black cursor-pointer"
            >
              <img
                src={galleryItems[3].image}
                alt={galleryItems[3].title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-amber-200/90 font-medium block">
                    {galleryItems[3].type}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-medium">
                    {galleryItems[3].title}
                  </h4>
                  <p className="text-xs text-stone-300">{galleryItems[3].location}</p>
                </div>
                <span className="text-xs text-stone-300 font-serif italic hidden sm:inline">
                  Click to view full detail
                </span>
              </div>
            </div>
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
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 mb-2">
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
                  <h4 className="font-serif text-base font-medium">
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