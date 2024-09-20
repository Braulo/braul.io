"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { Project } from "../utils/projects";
import { IoCloseOutline } from "react-icons/io5";

export default function DialogProjects({
  onClose,
  selectedValue,
  open,
  project,
}: {
  onClose: any;
  selectedValue: any;
  open: any;
  project: Project;
}) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = () => {
    onClose("close");
  };

  return (
    <Dialog onClose={handleClose} open={open} className="relative ">
      <DialogBackdrop
        transition
        className="fixed inset-0 backdrop-blur-xl transition-opacity data-[closed]:opacity-10 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg dark:bg-[#0f0f0f] bg-[#fafafa] transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:w-full max-w-5xl  shadow-lg shadow-[#00FF29]/50"
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-row-reverse">
              <div className="sm:flex text-left">
                <div className="mt-3 sm:mt-0 text-left">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <DialogTitle as="h3" className="leading-6 text-2xl">
                        {project.name}
                      </DialogTitle>
                    </div>
                    <IoCloseOutline
                      type="button"
                      size={40}
                      onClick={() => handleListItemClick()}
                      className="hover:cursor-pointer"
                    ></IoCloseOutline>
                  </div>
                  <div>
                    <div className="dark:text-slate-500 text-xs">
                      <p>Published in {project.published}</p>
                      <p>Defunct in {project.defunct}</p>
                    </div>
                    <div className="flex gap-4 sm:flex-row-reverse flex-col-reverse">
                      <div className="flex-[50%]">
                        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                          {project?.otherImages?.map((image) => (
                            <div key={image}>
                              <img src={image} alt="not found" width={300} height={200} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-[50%]">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 justify-start items-center mt-4">
                            <div className="w-1 h-8 bg-[#00FF29]" />
                            <h1 className="text-xl">Project Description</h1>
                          </div>
                          <p className="text-sm dark:text-slate-500">
                            {project.description}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum totam at
                            nobis doloribus accusamus, deleniti hic asperiores error, nostrum
                            adipisci saepe quaerat suscipit sed quam et officiis qui dicta
                            repellendus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Suscipit, consectetur voluptatum officiis hic cupiditate ullam aut animi
                            dolore praesentium, numquam minus molestias vero quod fuga placeat
                            adipisci pariatur ipsum voluptas? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Earum totam at nobis doloribus accusamus, deleniti hic
                            asperiores error, nostrum adipisci saepe quaerat
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 justify-start items-center mt-4">
                            <div className="w-1 h-8 bg-[#00FF29]" />
                            <h1 className="text-xl">My Role</h1>
                          </div>
                          <p className="text-sm dark:text-slate-500">
                            {project.role}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum totam at
                            nobis doloribus accusamus, deleniti hic asperiores error, nostrum
                            adipisci
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 justify-start items-center mt-4">
                            <div className="w-1 h-8 bg-[#00FF29]" />
                            <h1 className="text-xl">Techstack</h1>
                          </div>
                          <div className="flex flex-wrap">
                            {project.techstack.map((skill) => (
                              <div
                                key={skill}
                                className="p-2 m-1 text-white bg-[#1E1E1E] rounded-full hover:bg-[#00FF29] hover:text-black hover:cursor-pointer"
                              >
                                #{skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
