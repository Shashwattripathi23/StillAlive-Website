import Image from "next/image";
import MobileFrameCarousel from "@/components/MobileFrameCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUsers,
  faLock,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const appScreenshots = [
    "/1.jpg",
    "/2.jpg",
    //   "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/2.1.jpg",
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-3 bg-noise pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-kalam font-bold text-white">
                Still <span className="text-yellow-500">Alive</span>?
              </h1>
            </div>

            {/* Meet the Dev Button */}
            <div className="flex items-center">
              <a
                href="https://github.com/shashwattripathi23"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 hover:from-yellow-500 hover:to-yellow-600 border border-yellow-500/30 hover:border-yellow-500 text-white hover:text-white px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-300 hover:shadow-md hover:shadow-yellow-500/25 flex items-center gap-1.5"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faGithub} className="text-sm" />
                  <span>Meet the Dev</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 ">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/50 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 lg:pr-8 mt-20 sm:mt-0">
            <div className="space-y-6">
              {/* <div className="inline-block">
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 text-sm font-medium rounded-full border border-yellow-500/20 ">
                  Mobile Confession App
                </span>
              </div> */}

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-kalam font-bold text-white leading-tight">
                Still <span className="text-yellow-500">Alive</span>?
              </h1>

              <p className="text-lg sm:text-xl text-yellow-500/80 font-kalam font-medium italic -mt-2">
                let&apos;s dump some words for when you&apos;re not...
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"></div>

              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
                A safe space to express emotions, share confessions, leave
                behind last words, and connect anonymously with others who
                understand.
              </p>
            </div>

            {/* Features highlight */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-yellow-500 text-sm"
                    />
                  </div>
                  <span className="text-white font-medium">Last Words</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Deliver messages after demise
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-yellow-500 text-sm"
                    />
                  </div>
                  <span className="text-white font-medium">Anonymous</span>
                </div>
                <p className="text-gray-400 text-sm">Safe confession forums</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="text-yellow-500 text-sm"
                    />
                  </div>
                  <span className="text-white font-medium">Secure</span>
                </div>
                <p className="text-gray-400 text-sm">End-to-end encrypted</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-yellow-500 text-sm"
                    />
                  </div>
                  <span className="text-white font-medium">Global</span>
                </div>
                <p className="text-gray-400 text-sm">Worldwide community</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8">
              {/* <button
                disabled
                className="group relative bg-gray-700 text-gray-400 px-4 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:font-semibold flex items-center justify-center gap-2 sm:gap-3 cursor-not-allowed opacity-60"
              >
                <FontAwesomeIcon
                  icon={faApple}
                  className="text-sm sm:text-xl"
                />
                <span className="text-sm sm:text-base">Coming Soon</span>
              </button> */}
              <a
                href="https://github.com/Shashwattripathi23/StillAlive-Website/releases/download/v1.0.2/Still.Alive1.0.2.apk"
                download="StillAlive.apk"
                className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-4 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/25 flex items-center justify-center gap-2 sm:gap-3"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">Download APK</span>
              </a>
              <div className="flex items-center justify-center mt-2">
                <span className="text-xs text-gray-400 font-medium">
                  App Version 1.0.2
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Mobile Frame Carousel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/10 via-yellow-500/10 to-yellow-400/10 rounded-3xl blur-2xl"></div>
              <div className="relative">
                <MobileFrameCarousel
                  images={appScreenshots}
                  autoSlide={true}
                  slideInterval={4000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Image showcase */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-6  rounded-3xl blur-3xl"></div>
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src="/2.jpg"
                  alt="App Screenshot"
                  width={180}
                  height={360}
                  className="rounded-xl shadow-2xl professional-glow"
                />
                <Image
                  src="/3.jpg"
                  alt="App Screenshot"
                  width={180}
                  height={360}
                  className="rounded-xl shadow-2xl mt-8 professional-glow"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 lg:pl-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-yellow-500/10 text-yellow-500 text-sm font-medium rounded-full border border-yellow-500/20">
                  Your Digital Confidant
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-kalam font-bold text-white leading-tight">
                A Safe <span className="text-yellow-500">Space</span> for Your
                Deepest Thoughts
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"></div>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                Still Alive? is more than just an app—it&apos;s your digital
                confidant. Express emotions, share confessions, leave behind
                last words, and connect anonymously with others who understand.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Sometimes the most important words are the hardest to say. We
                provide a platform where vulnerability meets safety, where your
                thoughts find their voice.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">100%</div>
                <div className="text-sm text-gray-400">Anonymous</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  256-bit
                </div>
                <div className="text-sm text-gray-400">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-kalam font-bold text-white mb-8">
              Features That <span className="text-yellow-500">Matter</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every feature is designed with your privacy, security, and
              emotional well-being in mind
            </p>
          </div>

          {/* Feature 1 - Left aligned */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    height={36}
                    className="text-lg text-white"
                  />
                </div>
                <h3 className="text-3xl font-kalam font-bold text-white">
                  Last Words Delivery
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Deliver heartfelt messages and private words after demise. Your
                final thoughts, preserved and shared when it matters most. Set
                up automated delivery to loved ones based on your preferences.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Automated delivery system
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Customizable timing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Multiple recipients
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4  rounded-3xl blur-3xl"></div>
                <Image
                  src="/4.jpg"
                  alt="Last Words Feature"
                  width={320}
                  height={480}
                  className="rounded-xl shadow-2xl professional-glow"
                />
              </div>
            </div>
          </div>

          {/* Feature 2 - Right aligned */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4  rounded-3xl blur-3xl"></div>
                <Image
                  src="/5.jpg"
                  alt="Anonymous Confessions"
                  width={320}
                  height={480}
                  className="rounded-xl shadow-2xl professional-glow"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faUsers}
                    height={36}
                    className="text-lg text-white"
                  />
                </div>
                <h3 className="text-3xl font-kalam font-bold text-white">
                  Anonymous Confessions
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Share your deepest confessions in anonymous forums. Connect with
                others through replies and find solace in shared experiences.
                Your identity remains completely protected.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Complete anonymity
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Community support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Moderated environment
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 - Left aligned */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    height={36}
                    className="text-sm text-white"
                  />
                </div>
                <h3 className="text-3xl font-kalam font-bold text-white">
                  Secure & Private
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                End-to-end encrypted storage with Google Cloud security. Your
                most intimate thoughts are protected with enterprise-grade
                encryption and privacy measures.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  256-bit encryption
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Zero-knowledge architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  GDPR compliant
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4  rounded-3xl blur-3xl"></div>
                <Image
                  src="/6.jpg"
                  alt="Security Feature"
                  width={320}
                  height={480}
                  className="rounded-xl shadow-2xl professional-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Call-to-Action */}
      <footer className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-black"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-kalam font-bold text-white mb-6">
            Because some words deserve to be{" "}
            <span className="text-yellow-500">heard</span>.
          </h2>
          <div className="w-32 h-1 bg-yellow-500 mx-auto mb-16 rounded-full"></div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              disabled
              className="group relative bg-gray-700 text-gray-400 px-10 py-5 rounded-2xl font-semibold text-lg min-w-[250px] cursor-not-allowed opacity-60"
            >
              <span className="flex items-center justify-center gap-3">
                <FontAwesomeIcon icon={faApple} className="text-2xl" />
                Coming Soon
              </span>
            </button>
            <a
              href="https://github.com/Shashwattripathi23/StillAlive-Website/releases/download/v1.0.2/Still.Alive1.0.2.apk"
              download="StillAlive.apk"
              className="group relative bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/25 min-w-[250px] flex items-center justify-center"
            >
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download APK
              </span>
            </a>
          </div>

          {/* Contact */}
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-gray-400 mb-3 text-lg">
              Questions? Connect with the developer
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors text-xl font-medium"
            >
              Contact Me
            </a>
            <p className="text-gray-600 text-sm mt-6">
              © 2025 Still Alive? App. Your thoughts matter.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
