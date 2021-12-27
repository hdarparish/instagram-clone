import React, { useState, useRef, useEffect } from "react";
//modal
import ReactModal from "react-modal";
//redux
import { useSelector, useDispatch } from "react-redux";
//icons
import { AiOutlineCamera } from "react-icons/ai";
//aws
import { Storage, API, Auth } from "aws-amplify";
import { createPost } from "../graphql/mutations";
//uuid
import { v4 as uuidv4 } from "uuid";

ReactModal.setAppElement("#root");

function Modal() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [viewSelectedFile, setViewSelectedFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [user, setUser] = useState(null);

  const fileRef = useRef(null);
  const captionRef = useRef(null);

  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.isVisible);

  useEffect(() => {
    Auth.currentSession()
      .then((user) => setUser(user))
      .catch(() => console.log("Not signed in"));
  }, []);

  //
  const closeModal = () => {
    dispatch({ type: "MODAL_STATE" });
    setSelectedFile(null);
    setViewSelectedFile(null);
  };

  const uploadPicture = async () => {
    //upload the image to s3
    let imageRef = await Storage.put(fileName, selectedFile);
    //get the image url
    // const imageURL = await Storage.get(fileName);

    //create a post
    const product = {
      username: user?.idToken?.payload?.name.split(" ").join("."),
      caption: captionRef.current.value,
      profileImage: user?.idToken?.payload?.picture,
      image: imageRef.key,
    };
    //upload the post
    await API.graphql({
      query: createPost,
      variables: { input: product },
    });

    closeModal();

    /*     await API.graphql({
      query: updateProduct,
      variables: {
        input: { id: result.data.createProduct.id, image: imageRef.key },
      },
    }); */

    /*     const fileName = "product-image-1";
    await Storage.put(fileName);
 */
    /*  const result = await Storage.put("first-post", Logo, {
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
    console.log(result); */
  };

  const addPicture = async (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setViewSelectedFile(readerEvent.target.result);
      setFileName(`${uuidv4()}.${e.target.files[0].name.split(".").pop()}`);
      setSelectedFile(e.target.files[0]);
    };

    // setSelectedFile(e.target.files[0]);
    /* 
    await Storage.put(file.name, file);

    const s3Image = await Storage.get(file.name);
    console.log(s3Image); */
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
        {viewSelectedFile ? (
          <img
            src={viewSelectedFile}
            onClick={() => setViewSelectedFile(null)}
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
        <button
          disabled={!viewSelectedFile}
          className="modal__upload-button"
          onClick={uploadPicture}
        >
          Upload
        </button>
      </ReactModal>
    </div>
  );
}

export default Modal;
