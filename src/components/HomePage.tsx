/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jFTSLoQvXR7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 md:py-6">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <a className="flex items-center space-x-2" href="#">
            <span className="sr-only">Home</span>
            <SquareIcon className="w-6 h-6" />
            <span className="font-semibold">KidsAI</span>
          </a>
          <nav className="hidden space-x-4 text-sm font-medium lg:flex">
            <a
              className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
              href="#"
            >
              Story
            </a>
            <a
              className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
              href="#"
            >
              Paint
            </a>
            <a
              className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
              href="#"
            >
              About
            </a>
            <a
              className="text-gray-900 hover:underline dark:text-gray-100 dark:hover:underline"
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              className="inline-flex h-8 items-center justify-center rounded-lg border border-gray-200 border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              Sign In
            </a>
            <a
              className="inline-flex h-8 items-center justify-center rounded-lg border border-gray-200 border-gray-200 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-50 dark:hover:bg-gray-50/90 dark:hover:text-gray-50"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/relaxed/[-0.5rem] lg:text-7xl/relaxed/[-1rem]">
                Imagine. Create. Explore.
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Spark your creativity with AI-powered stories and magical
                paintings.
              </p>
            </div>
            <div className="grid items-start w-full gap-4 sm:grid-cols-2 md:gap-6 lg:gap-12">
              <div className="flex flex-col items-center gap-2 sm:items-start sm:pl-0">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center border border-gray-200 border-gray-200 sm:w-[250px] sm:h-[250px] dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <Button size="lg" variant="outline">
                  Generate Story
                </Button>
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start sm:pl-0">
                <img
                  alt="Image"
                  className="aspect-square overflow-hidden rounded-xl object-cover object-center border border-gray-200 border-gray-200 sm:w-[250px] sm:h-[250px] dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <Button size="lg" variant="outline">
                  Create Art
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20 dark:bg-gray-800">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let your imagination run wild.
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI creates enchanting stories and beautiful artwork that
                inspire creativity and curiosity.
              </p>
            </div>
            <div className="grid gap-6 md:gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-200 border-gray-200 dark:border-gray-800"
                  height="340"
                  src="/placeholder.svg"
                  width="600"
                />
                <Button size="lg">Explore Stories</Button>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center border border-gray-200 border-gray-200 dark:border-gray-800"
                  height="340"
                  src="/placeholder.svg"
                  width="600"
                />
                <Button size="lg">Paint Masterpiece</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SquareIcon(props: { className: string }) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </svg>
  );
}
