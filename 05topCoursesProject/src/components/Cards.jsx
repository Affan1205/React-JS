import { useState } from "react";
import Card from "./Card";
function Cards(props) {
	let courses = props.courses;
	let category = props.category;
	const [likedCourses, setLikedCourses] = useState([]); //starting mein koi bhi course liked nahi ha

	function getCourses() {
		if (category === "All") {
			let allCourses = [];
			// Object.values(obj)
			// obj: The object whose values you want to extract.
			// Returns: A new array containing the object's values.
			Object.values(courses).forEach((array) => {
				array.forEach((courseData) => {
					allCourses.push(courseData);
				});
			});
			return allCourses;
		} else {
			// mein sirf specific category ka array pass karung
			return courses[category];
		}
	}

	return (
		<div className="flex flex-wrap justify-center gap-4 mb-4">
			{getCourses().map(function (course) {
				return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>;
			})}
		</div>
	);
}
export default Cards;
