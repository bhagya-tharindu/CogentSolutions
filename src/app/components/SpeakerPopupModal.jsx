"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { XIcon } from "lucide-react";

const SpeakerPopupModal = ({ open, setOpen, selectedSpeaker }) => {
  return (
    <Dialog open={open} asChild>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <DialogTitle className="text-2xl font-medium">Speaker</DialogTitle>
            <XIcon className="cursor-pointer" onClick={() => setOpen()} />
          </div>
        </DialogHeader>
        <div className="md:grid md:grid-cols-[250px_1fr] md:gap-[16px] border">
          <img
            src={`/${selectedSpeaker.img}`}
            className="w-[auto] h-[auto] mb-4"
            alt=""
          />
          <div className="border-1 border-amber-50 p-4">
            <h2 className="text-[26px] font-medium mb-2 md:mb-4">
              {selectedSpeaker.name}
            </h2>
            <h5
              className={` ${
                selectedSpeaker.additionalPosition ? "" : "mb-2 md:mb-4"
              } text-[20px] font-medium`}
            >
              {selectedSpeaker.position}
            </h5>

            {selectedSpeaker.additionalPosition && (
              <h5 className="text-[20px] font-medium mb-2 md:mb-4">
                {selectedSpeaker.additionalPosition}
              </h5>
            )}
            <p>
              <b>Bio</b> {selectedSpeaker.bioInfoOne}
              {selectedSpeaker.bioInfoTwo && (
                <span>
                  <br />
                  <br />
                  {selectedSpeaker.bioInfoTwo}
                </span>
              )}
              {selectedSpeaker.bioInfoThree && (
                <span>
                  <br />
                  <br />
                  {selectedSpeaker.bioInfoThree}
                </span>
              )}
              {selectedSpeaker.bioInfoFour && (
                <span>
                  <br />
                  <br />
                  {selectedSpeaker.bioInfoFour}
                </span>
              )}
              {selectedSpeaker.bioInfoFive && (
                <span>
                  <br />
                  <br />
                  {selectedSpeaker.bioInfoFive}
                </span>
              )}
            </p>
          </div>
        </div>
        {/* <DialogDescription></DialogDescription> */}
        <DialogFooter>
          <button
            onClick={() => setOpen()}
            className="bg-[#6c757d] text-white py-2 px-3 rounded-[10px] hover:bg-gray-700 transition-all delay-100 cursor-pointer"
          >
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SpeakerPopupModal;
