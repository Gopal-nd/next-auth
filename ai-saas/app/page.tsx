/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YuUQ5TeKvBY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col dark:bg-background dark:text-card-foreground">
      <section className="w-full h-[80vh] bg-gradient-to-r from-[#120000] to-[#000000] flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Unleash Your Creativity with AI</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Our AI-powered content generation platform helps you create stunning visuals, engaging copy, and more - with
            just a few clicks.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#000000] shadow transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="py-20 md:py-32 dark:bg-card dark:text-card-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4">
              <BrushIcon className="w-12 h-12 text-[#000000]" />
              <h3 className="text-2xl font-bold">Stunning Visuals</h3>
              <p className="text-muted-foreground">
                Create eye-catching visuals, from social media graphics to product images, with our AI-powered design
                tools.
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4">
              <FilePenIcon className="w-12 h-12 text-[#000000]" />
              <h3 className="text-2xl font-bold">Effortless Content</h3>
              <p className="text-muted-foreground">
                Generate high-quality copy for your website, ads, and more with our advanced language models.
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4">
              <GaugeIcon className="w-12 h-12 text-[#000000]" />
              <h3 className="text-2xl font-bold">Unparalleled Speed</h3>
              <p className="text-muted-foreground">
                Boost your productivity and save time with our lightning-fast content generation capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 bg-card">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the people who have experienced the power of our AI content generation platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Jared Palmer</h4>
                  <p className="text-muted-foreground text-sm">CEO, Acme Inc.</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Our team has been using this platform for months and it has completely transformed our content creation
                workflow. Highly recommended!"
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Shu Ding</h4>
                  <p className="text-muted-foreground text-sm">Founder, Vercel</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "This platform has been a game-changer for our marketing team. The AI-generated content is consistently
                high-quality and on-brand."
              </p>
            </div>
            <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Max Leiter</h4>
                  <p className="text-muted-foreground text-sm">CMO, Acme Inc.</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "I was skeptical at first, but this platform has exceeded all of my expectations. It's a must-have for
                any modern marketing team."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 dark:bg-background">
        <div className="container px-4 md:px-6 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sign up today and unlock the power of AI-powered content creation for your business.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center rounded-md bg-[#000000] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3730a3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}

function BrushIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function FilePenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function GaugeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}