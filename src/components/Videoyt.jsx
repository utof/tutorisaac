import React, { useState } from "react";
import YouTube from "react-youtube";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Videoyt({
  videoId,
  height = "390",
  width = "640",
  thumbnail,
  autoplay = 0,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideo = () => {
    setVideoPlaying(!videoPlaying);
    onOpenChange();
  };

  const opts = {
    height,
    width,
    playerVars: {
      autoplay,
    },
  };

  return (
    <>
      <div onClick={handleVideo}>
        <img
          src={thumbnail || "https://via.placeholder.com/150"}
          alt="thumbnail"
          style={{ cursor: "pointer" }}
        />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Video Title
              </ModalHeader>
              <ModalBody>
                {videoPlaying && <YouTube videoId={videoId} opts={opts} />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
