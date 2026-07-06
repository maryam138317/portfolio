import { Personal_data } from "@/utils/data";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

export default function Footer() {
  const { social } = Personal_data;

  return (
    <footer
      style={{ background: "#0D1117", color: "white" }}
      className="p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
    >
      <div>
        <h6 className="text-sm font-bold mb-4 uppercase tracking-wide">Contact Me</h6>
        <ul className="flex flex-col gap-2">
          {Object.entries(social).map(([platform, url]) => (
            <li key={platform}>
              <Link
                href={url}
                target="_blank"
                className="flex items-center gap-1 text-sm capitalize opacity-80 hover:opacity-100 transition-opacity"
              >
                <span>{platform}</span>
                <IoIosLink />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/MyResume.pdf"
        download="maryam-jafartabar-cv.pdf"
        className="underline font-bold text-sm"
      >
        Download CV
      </Link>
    </footer>
  );
}