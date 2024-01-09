import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import DevotionForm from "../features/DevotionComponents/DevotionForm";
import DevotionPreview from "@/features/DevotionComponents/DevotionPreview";
import {
  selectForm,
  selectParagraphs,
  selectPreviewUrl,
  updateForm,
  addParagraph,
  updateParagraph,
  removeParagraph,
  createDevotion, // replace submitForm with createDevotion
  deleteDevotion,
  // selectFile,
  updateFile,
  fetchDevotions, // import fetchDevotions
} from "../redux/devotionsSlice"; // replace with the actual path to your devotions slice

const CreateDevotion = () => {
  const { user, isAuthReady } = useAuthContext();
  const token = user?.token;
  const dispatch = useDispatch();
  const form = useSelector(selectForm);
  const paragraphs = useSelector(selectParagraphs);
  const previewUrl = useSelector(selectPreviewUrl);
  // const selectedFile = useSelector(selectFile);

  const handleParaChange = (e, index) => {
    dispatch(updateParagraph({ index, value: e.target.value }));
  };

  const handleChange = (e) => {
    dispatch(updateForm({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDevotion({ token: "your-token", devotion: form })); // replace submitForm with createDevotion
  };

  const deletePara = (index) => {
    dispatch(removeParagraph(index));
  };

  const handleDelete = (id) => {
    dispatch(deleteDevotion(id));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    dispatch(updateFile(file));
  };

  useEffect(() => {
    if (isAuthReady && token) {
      dispatch(fetchDevotions(token));
    }
  }, [dispatch, isAuthReady, token]);

  return (
    <div className=" flex h-auto mx-auto mt-12 w-[98%] gap-4">
      <DevotionPreview
        form={form}
        paragraphs={paragraphs}
        previewUrl={previewUrl}
      />
      <DevotionForm
        form={form}
        handleParaChange={handleParaChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        paragraphs={paragraphs}
        addPara={() => dispatch(addParagraph(""))}
        handleFileChange={handleFileChange}
        deletePara={deletePara}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default CreateDevotion;
