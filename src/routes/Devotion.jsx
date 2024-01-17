import { useState, useEffect } from "react";
import DevotionDisplay from "../features/DevotionComponents/DevotionDisplay";
import { useAuthContext } from "../hooks/useAuthContext";
import useAxiosInstance from "../api/axiosInstance";

const Devotion = () => {
  const { token, isAuthReady } = useAuthContext(); // get the authentication token
  const [devotions, setDevotions] = useState([]);
  const [selectedDevotion, setSelectedDevotion] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [editingDevotion, setEditingDevotion] = useState(null);
  const instance = useAxiosInstance(token);

  useEffect(() => {
    if (isAuthReady) {
      const fetchDevotions = async () => {
        try {
          const response = await instance.get("/devotion/show");
          setDevotions(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchDevotions();
    }
  }, [isAuthReady, token, instance]);

  // useState for adding multiple paragraphs

  // eslint-disable-next-line no-unused-vars
  const [form, setForm] = useState({
    month: "",
    day: "",
    title: "",
    chapter: "",
    verse: "",
    prayer: "",
  });

  const startEditing = (devotion) => {
    setEditingDevotion(devotion);
    setForm(devotion);
  };

  const handleDelete = async (id) => {
    try {
      await instance.delete(`/devotion/${id}`);
      // Remove the deleted devotion from the devotions array
      setDevotions(devotions.filter((devotion) => devotion._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex h-auto mt-12 w-[100%] mx-auto">
      <DevotionDisplay
        devotions={devotions}
        selectedDevotion={selectedDevotion}
        setSelectedDevotion={setSelectedDevotion}
        handleDelete={handleDelete}
        startEditing={startEditing}
      />
    </div>
  );
};

export default Devotion;
