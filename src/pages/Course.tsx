import CourseContent from '../components/CourseContent';
import { useLocation } from 'react-router-dom';

interface CourseProps {
  id: string;
  image: string;
  category: string;
  title: string;
  footer: string;
  description: string;
  price: number;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

const Course = () => {
  const location = useLocation();
  const state = location.state as CourseProps;

  return (
    <>
        <CourseContent
          id={state.id}
          image={state.image}
          category={state.category}
          title={state.title}
          footer={state.footer}
          description={state.description}
          price={state.price}
          author={state.author}
        />
    </>
  );
}

export default Course;
