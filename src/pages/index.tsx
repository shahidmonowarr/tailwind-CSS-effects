import { Inter } from "next/font/google";
import { MeteorPreview } from "./meteorPreview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="items-center h-screen flex justify-center">
      <MeteorPreview />
    </div>
  );
}
