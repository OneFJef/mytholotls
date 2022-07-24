import Link from "next/link";

export default function header() {
  return (
    <div className="sticky top-0 bg-white z-50">
      <Link href={"/"}>
        <h1 className="flex justify-center p-4 font-bold text-2xl">
          Mytholotls
        </h1>
      </Link>
      <div className="flex justify-evenly">
        <Link href={"/store"}>
          <h2 className="rounded-t-md px-2 pt-1 border-x-2 border-t-2 border-cyan-600 bg-cyan-300 text-cyan-600 hover:border-cyan-300 hover:bg-cyan-600 hover:text-cyan-300">
            Store
          </h2>
        </Link>
        <Link href={"/learn"}>
          <h2 className="rounded-t-md px-2 pt-1 border-x-2 border-t-2 border-cyan-600 bg-cyan-300 text-cyan-600 hover:border-cyan-300 hover:bg-cyan-600 hover:text-cyan-300">
            Learn
          </h2>
        </Link>
        <Link href={"/blog"}>
          <h2 className="rounded-t-md px-2 pt-1 border-x-2 border-t-2 border-cyan-600 bg-cyan-300 text-cyan-600 hover:border-cyan-300 hover:bg-cyan-600 hover:text-cyan-300">
            Blog
          </h2>
        </Link>
      </div>
    </div>
  );
}
