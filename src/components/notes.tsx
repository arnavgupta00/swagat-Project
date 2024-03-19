"use client";

import {sanityClient} from "@/utils/configSanity"
import { PortableText } from "@portabletext/react"
type Note = {
  _id: string;
  title: string;
  content: any;
};

export const fetchSanity = async () => {
  const query = `*[_type == "notePost"]`;
  const result = await sanityClient.fetch(query);
  return result;
};

export const Notes = async () => {
  const notes: Note[] = await fetchSanity();

  return (
    <div className="max-h max-w p-8 flex flex-row justify-center items-center gap-8 flex-wrap">
      {notes.map((note) => (
        <div
          key={note._id}
          className="rounded-xl border-white max-w-64 max-h border-2 p-4"
        >
          <h3 className="text-2xl font-bold pb-4">{note.title}</h3>
          <hr className="p-2" />
          <PortableText value={note.content} />
        </div>
      ))}
    </div>
  );
};

export default Notes;
