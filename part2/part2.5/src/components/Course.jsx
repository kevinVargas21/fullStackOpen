import React from 'react';

const totalExercises = (course) => {
    return course.parts.reduce((x, part) => x + part.exercises, 0);
};



const Course = ({ courses }) => {



    return (
        <div>
            <h1>Web development curriculum</h1>

            {courses.map((course) => (
                <div key={course.id}>
                    <h2> {course.name}</h2>

                    {course.parts.map((part) => (
                        <>
                            <p key={part.id}>
                                {part.name} {part.exercises}
                            </p>

                        </>

                    ))}
                    <h3>Total of {totalExercises(course)} exercises </h3>
                </div>
            ))}

        </div>
    );
};

export default Course;
