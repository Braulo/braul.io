"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { Project } from "../utils/projects";
import { IoCloseOutline } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation";

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
  const { t } = useTranslation("common");
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
                      <p>
                        {t("published")} {project.published}
                      </p>
                      {project.defunct ? (
                        <p>
                          {t("defunct")} {project.defunct}
                        </p>
                      ) : (
                        <a href={project.link}>{project.link}</a>
                      )}
                      {project.link && project.bigImage ? (
                        <a href={project.link}>{project.link}</a>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="flex gap-4 sm:flex-row-reverse flex-col-reverse">
                      <div className="flex-[50%]">
                        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                          {project?.otherImages?.map((image) => (
                            <div key={image}>
                              {project.bigImage ? (
                                <img src={image} alt="not found" width={200} height={100} />
                              ) : (
                                <img src={image} alt="not found" width={300} height={200} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex-[50%]">
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 justify-start items-center mt-4">
                            <div className="w-1 h-8 bg-[#00FF29]" />
                            <h1 className="text-xl">{t("project-description")}</h1>
                          </div>
                          <p className="text-sm dark:text-slate-500">{t(project.description)}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 justify-start items-center mt-4">
                            <div className="w-1 h-8 bg-[#00FF29]" />
                            <h1 className="text-xl">{t("role")}</h1>
                          </div>
                          <p className="text-sm dark:text-slate-500">{t(project.role)}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-4 justify-start items-center mt-4">
                            <div className="w-1 h-8 bg-[#00FF29]" />
                            <h1 className="text-xl">{t("techstack")}</h1>
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
