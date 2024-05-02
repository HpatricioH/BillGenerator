import GithubSvg from "@/app/core/ui/svgs/GithubSvg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-dark-primary text-base-content min-h-[4rem]">
      <aside>
        <Link href="https://github.com/HpatricioH/BillGenerator" rel="noreferrer" target="_blank">
          <GithubSvg className="h-6 w-6 fill-white" />
        </Link>
      </aside>
    </footer>
  )
}