import GithubSvg from "@/app/core/ui/svgs/GithubSvg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full text-gray-500 z-50 h-14 pt-4 backdrop-blur">
      <div className="flex justify-center items-center">
        <Link href="https://github.com/HpatricioH/BillGenerator" rel="noreferrer" target="_blank">
          <GithubSvg className="h-6 w-6 fill-white" />
        </Link>
      </div>
    </footer>
  )
}