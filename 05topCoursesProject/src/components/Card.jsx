import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //check karo kya mere liked course ke andar mere current course ki id ha kya ?
      //agar current course ki id padi ha toh , matlab woh pehle se liked hua pada ha
      //agar koi pehle se liked hua pada ha toh mujhe liked se hatana ha (mujhe usko remove krna ha)
      //toh mujhe mere current course ko liked course wale se remove krna padega
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id)); //cid course ki id ko refer kr raha ha
      toast.warning("like removed");
    } else {
      //current course pehle liked nahi hai toh mujhe liked course wale array mein insert krna ha
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]); //purane ke saath saath current course ki id ko bhi insert kiya
      }
      toast.success("liked successfully");
    }
  }
  return (
    <div className="bg-[#22223b] bg-opacity-80 w-[300px] rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt="" />

        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-3 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem"></FcLike> : <FcLikePlaceholder fontSize="1.75rem" />}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white text-lg font-semibold leading-6">{course.title}</p>
        <p className="mt-2 text-white">
          {
            course.description.length>100?(course.description.substr(0,100))+"...":(course.description)
          }
        </p>
      </div>
    </div>
  );
}
export default Card;
