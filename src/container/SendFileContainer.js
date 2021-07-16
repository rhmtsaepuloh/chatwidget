import React from "react";
import { useDispatch } from "react-redux";
import SendFile from "../components/SendFile";
import { setRoutes } from "../redux/actions/routesActions";
import toast, { Toaster } from "react-hot-toast";
import { setFile, setImagePreview } from "../redux/actions/fileActions";

const SendFileContainer = () => {
  const dispatch = useDispatch();
  const onGoBack = () => {
    dispatch(setRoutes("/chatroom"));
  };
  const onChangeFile = (e) => {
    let allowedExtensions = new RegExp(
      /(\.jpg|\.jpeg|\.png|\.pdf|\.doc|\.docx|\.xls|\.xlsx|\.txt|\.gif)$/i
    );

    if (!allowedExtensions.exec(e.target.value)) {
      toast("Invalid file type");
      e.target.value = null;
    } else if (e.target.files[0].size / 1024 / 1024 > 5) {
      toast("Gagal mengunggah file. Ukuran file terlalu besar");
      e.target.value = null;
    } else {
      dispatch(setImagePreview(URL.createObjectURL(e.target.files[0])));
      dispatch(setFile(e.target.files[0]));
      dispatch(setRoutes("/chatroom"));
      e.target.value = null;
    }
  };
  return (
    <div>
      <SendFile onGoBack={onGoBack} onChangeFile={onChangeFile} />
      <Toaster
        position='bottom-center'
        toastOptions={{
          style: {
            background: "#3A3A3A",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default SendFileContainer;
