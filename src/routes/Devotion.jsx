import { useState } from "react";
import DevotionDisplay from "../features/DevotionComponents/DevotionDisplay";
import { useGetDevotionsQuery } from "../redux/api-slices/apiSlice"; // import the hook from your apiSlice

const Devotion = () => {
  const [selectedDevotion, setSelectedDevotion] = useState(null);
  const [editingDevotion, setEditingDevotion] = useState(null);

  // Use the useGetDevotionsQuery hook to fetch devotions
  const { data: devotions, error, isLoading } = useGetDevotionsQuery();

  // useState for adding multiple paragraphs
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

  if (isLoading) return "Loading...";
  if (error) return `Error: ${error.message}`;

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
        showControls={false}
      />
    </div>
  );
};

export default Devotion;
