import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-8 bg-slate-50 text-center py-5">
      <Link href="/todolist" className="text-3xl font-bold mb-4 underline">Work Manager Page</Link>

      <div className="flex justify-center">
        <img
          src="https://media.istockphoto.com/id/1224881204/photo/businesswoman-working-in-conference-with-sheet-on-laptop.jpg?s=612x612&w=0&k=20&c=S4P8rXmY8oRCO-rUha5RXwVXlgFezknLOuVfbbspM-0=" // Replace with the actual URL of your image
          alt="Work Manager"
          className="rounded-lg shadow-lg"
          style={{ maxWidth: '400px' }}
        />
      </div>

      <div className="mt-6">
        <p className="text-lg">
          Welcome to the Work Manager page! This is a static page to showcase your work management content.
        </p>
        <p className="text-lg mt-4">
          Customize this page by adding more components, fetching dynamic data, and integrating real functionality.
        </p>
      </div>
    </div>
  )
}
