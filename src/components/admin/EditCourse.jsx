import useAxiosInstance from "../../api/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { selectCourse, setCourse } from "../../redux/courseSlice";
import { ArrowCircleLeft, ArrowSquareOut } from "@phosphor-icons/react";
import EditChapters from "./EditChapters";

function EditCourse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const instance = useAxiosInstance();
  const dispatch = useDispatch();
  const course = useSelector(selectCourse);

  //get a single course
  useEffect(() => {
    if (id) {
      instance
        .get("/course/get/" + id)
        .then((res) => {
          console.log(id);
          dispatch(
            setCourse({
              ...course,
              title: res.data.title,
              description: res.data.description,
              image: res.data.image,
              chapters: res.data.chapters,
            })
          );
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Course ID is undefined");
    }
  }, [id, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("Chapters data:", chapters);

    const formData = new FormData();
    formData.append("title", course.title);
    formData.append("description", course.description);
    if (typeof course.image === "string") {
      formData.append("image", course.image);
    } else if (course.image instanceof File) {
      formData.append("image", course.image, course.image.name);
    }
    formData.append("chapters", JSON.stringify(course.chapters)); // Convert chapters to JSON string and append it to formData

    // Loop through the chapters and slides to append any image files
    course.chapters.forEach((chapter, chapterIndex) => {
      chapter.slides.forEach((slide, slideIndex) => {
        slide.elements.forEach((element) => {
          if (element.type === "img" && element.value instanceof File) {
            // Append the file using chapter and slide indices to help reference the file on the server-side
            formData.append(
              `chapter_${chapterIndex}_slide_${slideIndex}_image`,
              element.value,
              `${chapterIndex}_${slideIndex}_${element.value.name}`
            );
          }
        });
      });
    });

    console.log(formData);

    const payload = Object.fromEntries(formData);
    console.log("payload" + payload);

    //update course
    instance
      .put("/course/update/" + id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Course updated: ", res.data);
        navigate("/admin/course");
      })
      .catch((err) => {
        console.error("Error updating course: ", err);
      });
  };

  return (
    <div className="w-full">
      <div className="flex justify-between border-gray-200 border-2 px-6 py-2">
        <button className="font-nokia-bold text-accent-6 flex flex-row gap-2 hover:text-accent-7 transition-all">
          <Link
            to="/admin/course"
            className="flex flex-row gap-2 items-center justify-center mt-3"
          >
            <ArrowCircleLeft weight="fill" size={24} /> <span>Back</span>
          </Link>
        </button>
        <div>
          <button
            onClick={handleSubmit}
            className="h-[45px] w-[120px] flex justify-center gap-2 font-semibold text-white bg-accent-6 rounded-md hover:bg-accent-7 transition-all"
            style={{ padding: "10px" }}
          >
            <span>Publish</span>
            <ArrowSquareOut size={22} weight="fill" className="self-centered" />
          </button>
        </div>
      </div>
      <EditChapters />
    </div>
  );
}

export default EditCourse;
