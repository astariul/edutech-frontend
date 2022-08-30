import React, {useState, useEffect} from "react";
// import CourseRepositry from "../repositories/Course";
import { ICourse } from "../dto/Course";
import { createStyles, Loader, SimpleGrid } from '@mantine/core';
import SimpleCourseCard from './SimpleCourseCard';

export const sampleCourses = [
  {
    "id": "1",
    "image": "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    "category": "React",
    "description": "",
    "orgPrice": 100000,
    "title": "FrontEnd-All-in-One",
    "footer": "733 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "level": "",
    "instructorName": "Elsa Gardenowl",
  },
  {
    "id": "2",
    "image": "https://images.unsplash.com/photo-1654327911816-da98acbb1564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "category": "React",
    "description": "",
    "orgPrice": 110000,
    "title": "Getting Start with React/TypeScript",
    "footer": "430 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "level": "",
    "instructorName": "Elsa Gardenowl",
  },
  {
    "id": "3",
    "image": "https://images.unsplash.com/photo-1654327911816-da98acbb1564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "category": "React",
    "description": "",
    "orgPrice": 110000,
    "title": "Style your React component with CSS2",
    "footer": "430 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "level": "",
    "instructorName": "Elsa Gardenowl",
  },
  {
    "id": "4",
    "image": "https://images.unsplash.com/photo-1654289586293-d1a10366b916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "category": "backend",
    "description": "",
    "orgPrice": 120000,
    "title": "Python & FastAPI : write efficient REST APIs",
    "footer": "2467 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "level": "",
    "instructorName": "Patrick Shyu",
  },
  {
    "id": "5",
    "image": "https://images.unsplash.com/photo-1648287235569-b3e498e01dca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "category": "Backend",
    "description": "backend",
    "orgPrice": 130000,
    "title": "Scaling your ML models to millions of users",
    "footer": "125 people followed this class",
    "video": "https://www.youtube.com/embed/Dorf8i6lCuk",
    "level": "",
    "instructorName": "Rina Artstain",
  },
];

const useStyles = createStyles((theme) => ({
  simpleCourseGrid: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
  }
}));

interface SimpleCourseGridProps {
    cols: number,
    roadMapeType: string
}

const SimpleCourseGrid = ({cols, roadMapeType}: SimpleCourseGridProps) => {
    const [courses, setCourses] = useState<ICourse[]>([])
    const [loading, setLoading] = useState(true);
    const {classes}  = useStyles();
    const categoryDict : {[roadMapeType: string]: string[]} = {
        'frontend': ['html/css', 'react', 'typeScript'],
        'backend': ['backend', 'nodejs', 'django']
    }

    useEffect(
        () => {
            // new CourseRepositry()
            //     .getCourses()
            //     .then(
            //         (data) => setCourses(data)
            //     )
            setCourses(sampleCourses);
            return () => {
                setCourses([]);
                setLoading(false);
            }
        }, []
    )

    if (loading) return <Loader />;
    return (
        <>
            <SimpleGrid cols={cols} className={classes.simpleCourseGrid}>
                {
                    courses.map(
                        (course) => {
                        let counter = 0;
                        if ((counter < cols) && (categoryDict[roadMapeType].includes(course.category.toLocaleLowerCase()))) {
                            counter += 1;
                            return <SimpleCourseCard key={course.id} {...course}/>
                        }
                        else{
                            return null
                        }
                    })
                }
            </SimpleGrid>
        </>
    )
}

export default SimpleCourseGrid;
