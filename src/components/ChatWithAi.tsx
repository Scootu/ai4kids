/**
 * v0 by Vercel.
 * @see https://v0.dev/t/M49dIn6tShx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Form, useActionData } from "react-router-dom";

export default function ChatWithAi() {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const msg = useActionData() as string | null;
  console.log(msg);
  useEffect(() => {
    setIsClick(false);
  }, [msg]);

  return (
    <div className="flex h-screen w-full flex-col bg-white text-black">
      <div className="flex h-20 items-center justify-center border-b border-gray-700">
        <h1 className="text-3xl font-semibold">😃 أنشأ قصة معي</h1>
      </div>
      <div className="grid grid-cols-2 p-4 items-center justify-center">
        <button
          className="p-4 bg-black text-white border rounded-sm shadow"
          onClick={() => {
            setContent("ما هي مغامرة الدب اليوم في القصر مع الأميرة");
          }}
        >
          ما هي مغامرة الدب اليوم في القصر مع الأميرة
        </button>
        <button
          className="p-4 bg-black text-white border rounded-sm shadow"
          onClick={() => {
            setContent("قصة عن أميرة شجاعة تذهب في مغامرة لإنقاذ مملكتها");
          }}
        >
          قصة عن أميرة شجاعة تذهب في مغامرة لإنقاذ مملكتها
        </button>
        <button
          className="p-4 bg-black text-white border rounded-sm shadow"
          onClick={() => {
            setContent(
              "قصة عن منزل شجرة سحري يمكنه نقل الأطفال إلى عوالم مختلفة."
            );
          }}
        >
          قصة عن منزل شجرة سحري يمكنه نقل الأطفال إلى عوالم مختلفة.
        </button>
        <button
          className="p-4 bg-black text-white border rounded-sm shadow"
          onClick={() => {
            setContent("فأر فضولي، بومة حكيمة، وراكون مؤذ.");
          }}
        >
          فأر فضولي، بومة حكيمة، وراكون مؤذ.
        </button>
      </div>
      <Form method="POST">
        <div className="flex h-20 items-center justify-between border-t border-gray-700 p-4">
          <Input
            className="flex-grow bg-gray-800 p-4 text-white placeholder-gray-400 direction "
            name="userStory"
            value={content}
            placeholder="ما هي القصة التي تريدها"
            onChange={() => {}}
          />
          <button
            type="submit"
            onClick={() => {
              setIsClick(true);
            }}
          >
            <PlaneIcon className="ml-4 h-6 w-6 text-gray-400 cursor-pointer" />
          </button>
        </div>
      </Form>
      {isClick == true && (
        <div className="flex items-center justify-center p-4">
          <div className="loader"></div>
        </div>
      )}
      {msg !== null && isClick == false && (
        <div className="flex items-center justify-center px-4 direction max-w-[1080px]  mx-auto">
          {<p>{msg}</p>}
        </div>
      )}
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
