"use client";

import ButtonSubmit from "@/components/ButtonSubmit";
import ManageHeading from "@/components/ManageHeading";
import { createData } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsMutating(true);
    try {
      await createData("/publications", {
        title,
        description,
        image,
      });
      toast.success("Data added successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);

      setTimeout(() => {
        router.push("/admin/publications");
        router.refresh();
      }, 2000);
    } catch (error) {
      toast.error("Error adding data", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsMutating(false);
    }
  };

  return (
    <section className="grid grid-rows-[10%_auto] gap-y-6 p-4">
      <ManageHeading table="Publications" />

      <div className="grid grid-rows-[auto_1fr] gap-4 rounded-lg bg-gray-50 px-16 py-12 dark:bg-gray-700">
        <div className="text-center">
          <h3 className=" mb-4 text-3xl font-medium text-gray-700 dark:text-gray-50">
            Add Publication
          </h3>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            aperiam dolorum totam, ducimus impedit laborum?
          </p>
        </div>

        <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Title
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Image
            </label>
            <input
              type="text"
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-50">
              Description
            </label>
            <textarea
              rows={6}
              className="rounded-sm border border-gray-300 bg-gray-50 px-2 py-2 text-sm text-gray-700 outline-none dark:border-gray-900 dark:bg-gray-800 dark:text-gray-50"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <ButtonSubmit isMutating={isMutating} text="submit" />
            <button className="rounded-sm border border-gray-500 bg-gray-50 px-6 py-2 text-blue-500">
              <Link href="/admin/publications">Cancel</Link>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={1000} />
    </section>
  );
};

export default AddStudent;
