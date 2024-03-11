/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M49dIn6tShx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Form, useActionData } from "react-router-dom";

export default function ChatWithAi() {
  const msg = useActionData();
  console.log(msg);

  return (
    <div className="flex h-screen w-full flex-col bg-white text-black">
      <div className="flex h-20 items-center justify-center border-b border-gray-700">
        <h1 className="text-3xl font-semibold">😃 أنشأ قصة معي</h1>
      </div>
      <Form method="POST">
        <div className="flex h-20 items-center justify-between border-t border-gray-700 p-4">
          <Input
            className="flex-grow bg-gray-800 p-4 text-white placeholder-gray-400 direction "
            name="userStory"
            placeholder="ما هي القصة التي تريدها"
          />
          <button type="submit">
            <PlaneIcon className="ml-4 h-6 w-6 text-gray-400 cursor-pointer" />
          </button>
        </div>
      </Form>
      {/* <div className="flex items-center justify-center p-4">
        <div className="loader"></div>
      </div> */}
      <div className="flex items-center justify-center px-4">
        {/* <p>{msg}</p> */}
      </div>

      <div className="absolute bottom-4 right-4 flex items-center justify-center">
        <p className="text-xs text-gray-400">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
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
