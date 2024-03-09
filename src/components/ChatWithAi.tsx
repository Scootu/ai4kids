/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M49dIn6tShx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatWithAi() {
  return (
    <div className="flex h-screen w-full flex-col bg-black text-white">
      <div className="flex h-20 items-center justify-center border-b border-gray-700">
        <h1 className="text-3xl font-semibold">How can I help you today?</h1>
      </div>
      <div className="flex-grow overflow-y-auto p-8">
        <div className="grid grid-cols-2 gap-8">
          <Button className="bg-gray-800 py-4 px-8 text-left">
            Make a content strategy for a newsletter featuring free local
            weekend events
          </Button>
          <Button className="bg-gray-800 py-4 px-8 text-left">
            Tell me a fun fact about the Roman Empire
          </Button>
          <Button className="bg-gray-800 py-4 px-8 text-left">
            Explain this code: "cat config.yaml | awk NF"
          </Button>
          <Button className="bg-gray-800 py-4 px-8 text-left">
            Compare storytelling techniques in novels and in films
          </Button>
        </div>
      </div>
      <div className="flex h-20 items-center justify-between border-t border-gray-700 p-4">
        <Input
          className="flex-grow bg-gray-800 p-4 text-white placeholder-gray-400"
          placeholder="Message ChatGPT..."
        />
        <PlaneIcon className="ml-4 h-6 w-6 text-gray-400" />
      </div>
      <div className="absolute bottom-4 right-4 flex items-center justify-center">
        <p className="text-xs text-gray-400">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
        <CircIlecon className="ml-2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}

function CircIlecon(props: { className: string }) {
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
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function PlaneIcon(props: { className: string }) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
