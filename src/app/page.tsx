import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link"

export default async function Home() {
   const snippets = await prisma.snippet.findMany();

  return (
    <div>
     <h2 className="font-bold text-4xl">Home</h2>
     <div className="flex items-center justify-between mx-auto py-4">
       <h1 className="font-bold">Snippets</h1>
        <Link href={"/snippet/new"}><Button className="bg-black text-white">New</Button></Link>   
     </div>
      {snippets.map((snippet) => (
         <div key={snippet.id} className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-2">
           <h1>{snippet.title}</h1>
           <Link href={`/snippet/${snippet.id}`}>
             <Button variant={'link'}>View</Button>
           </Link>
         </div>
      ))}
    </div>
  );
}
