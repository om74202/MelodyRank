"use client"
import { Headphones, Radio, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Appbar } from "./Appbar"
import Link from "next/link"
import {motion} from "framer-motion"

const features = [
  {
    title: "Fan Interaction",
    description: "Let fans choose the music.",
    Icon: Users,
    iconClass: "text-yellow-400",
  },
  {
    title: "Live Streaming",
    description: "Stream with real-time input.",
    Icon: Radio,
    iconClass: "text-green-400",
  },
  {
    title: "High-Quality Audio",
    description: "Crystal clear sound quality.",
    Icon: Headphones,
    iconClass: "text-blue-400",
  },
];


export const MotionLanding=()=>{

    // Framer Motion variants drive the staggered entrance animation on the hero + features
    const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // 👈 one-by-one appearance
      when:"beforeChildren"
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

    return (
            <motion.div variants={container} initial="hidden" animate="show" className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Appbar showThemeSwitch={false} />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div variants={container} className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.h1 variants={item} className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Let Your Fans Choose the Beat
              </motion.h1>
              <motion.p variants={item} className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Empower your audience to curate your music stream. Connect with
                fans like never before.
              </motion.p>
            </div>
            <motion.div variants={item} className="space-x-4">
              <Button className="bg-purple-600 transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-lg text-white hover:bg-purple-700">
                <Link
                  href={{
                    pathname: "/auth",
                    query: { authType: "signUp" },
                  }}
                >
                  Get Started
                </Link>
              </Button>
              <Button className="bg-white transition-all duration-300 ease-out
  hover:-translate-y-1 hover:shadow-lg text-purple-400 hover:bg-white/90">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <section className="w-full  bg-gray-800 bg-opacity-50 py-12 md:py-8 lg:py-16">
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="container px-4 md:px-6"
  >
    <h2 className="mb-8 text-center text-2xl font-bold tracking-tighter text-white sm:text-3xl">
      Key Features
    </h2>

    <div className="grid gap-8 sm:grid-cols-3">
      {features.map(({ title, description, Icon, iconClass }) => (
        <motion.div
          key={title}
          variants={item}
          className="flex flex-col items-center space-y-3 text-center"
        >
          <Icon className={`h-12 w-12 ${iconClass}`} />
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Ready to Transform Your Streams?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Join MusicStreamChoice today and create unforgettable
                experiences.
              </p>
            </div>
            <div className="w-full max-w-sm">
              {/* <form className="flex space-x-2">
                 <Input
                  className="focus-visible:ring-offset-0 focus-visible:ring-purple-600 bg-gray-800  bg-opacity-50 placeholder:text-gray-400 border-gray-400 text-white"
                  placeholder="Enter your email"
                  ref={mailRef}
                  type="email"
                /> */}
              <Link
                href={{
                  pathname: "/auth",
                  query: {
                    authType: "signUp",
                  },
                }}
              >
                <Button
                  type="submit"
                  className="bg-purple-600 text-white hover:bg-purple-700"
                >
                  Sign Up
                </Button>
              </Link>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-700 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-400">
          © 2023 MusicStreamChoice. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs text-gray-400 transition-colors hover:text-purple-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-400 transition-colors hover:text-purple-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </motion.div>
    )
}
