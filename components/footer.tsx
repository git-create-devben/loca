import Link from "next/link";

export default function Footer() {
  return (
    <div className=" p-4 flex  gap-4 bg-[#202124]  w-full h-[5rem] items-center">
      <div className="flex items-center gap-4">
        <h2 className="text-[#caccce] text-3xl">Loca</h2>
        <Link href = "https://devben.vercel.app/"className="text-[#caccce] text-sm self-center ">
          Built by <b className="font-black">Dev⚡Ben</b>
        </Link>
      </div>
    </div>
  );
}
