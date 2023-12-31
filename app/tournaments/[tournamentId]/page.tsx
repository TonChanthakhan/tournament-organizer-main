import Link from "next/link";

interface Params {
  params: {
    tournamentId: string;
  };
}

export default function Tournament({ params }: Params) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
            <Link href={`/tournaments`}>
      <button
          className="text-sm mb-4 hover:text-[#333]"           
        >
          <span aria-hidden="true">&larr;</span> Back
        </button>
        </Link>
      <div className="text-3xl font-semibold">Overview</div>
      <div className="mt-8 font-medium space-y-2">
        <div className="">
          <Link
            href={`/tournaments/${params.tournamentId}/settings`}
            className="underline"
          >
            Settings
          </Link>
        </div>
        <div className="">
          <Link
            href={`/tournaments/${params.tournamentId}/stages`}
            className="underline"
          >
            Structure
          </Link>
        </div>
      </div>
    </div>
  );
}
