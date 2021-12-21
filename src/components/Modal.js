import React, { useState, useRef } from "react";
//modal
import ReactModal from "react-modal";
//redux
import { useSelector, useDispatch } from "react-redux";
//icons
import { AiOutlineCamera } from "react-icons/ai";

ReactModal.setAppElement("#root");

function Modal() {
  const fileRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.isVisible);

  const closeModal = () => {
    dispatch({ type: "MODAL_STATE" });
    setSelectedFile(null);
  };

  /*     const uploadPicture = async () => {
    const result = await Storage.put("first-post", Logo, {
      contentType: "image/png",
      completeCallback: (event) => {
        console.log(`Successfully uploaded ${event.key}`);
      },
      progressCallback: (progress) => {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
      errorCallback: (err) => {
        console.error("Unexpected error while uploading", err);
      },
    });
    console.log(result);
  }; */

  const addPicture = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div>
      <ReactModal
        isOpen={modalState}
        contentLabel="Upload a post"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className="modal"
      >
        {selectedFile ? (
          <img
            src={selectedFile}
            onClick={() => setSelectedFile(null)}
            className="modal__upload-image"
            alt="upload-post"
          />
        ) : (
          <div
            className="modal__camera-icon"
            onClick={() => fileRef.current.click()}
          >
            <AiOutlineCamera aria-hidden="true" />
          </div>
        )}

        <h3 className="modal__upload-header">Upload a photo</h3>
        <div>
          <input type="file" ref={fileRef} hidden onChange={addPicture} />
        </div>
        <input
          type="text"
          name="upload-caption"
          placeholder="Enter a caption"
          className="modal__input-caption"
          ref={captionRef}
        />
        <button disabled={!selectedFile} className="modal__upload-button">
          Upload
        </button>
      </ReactModal>
    </div>
  );
}

export default Modal;
