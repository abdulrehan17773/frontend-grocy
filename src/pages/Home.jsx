import { useEffect } from 'react';
import { useGetCatQuery } from '../apis/catApi';
import { Container } from "../components";
import { Card } from "../components";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/slices/catSlice';

function Home() {
    const { data, isLoading, error } = useGetCatQuery();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category);

    useEffect(() => {
        if (data) {
            dispatch(setCategory(data.data));
        }
    }, [data, dispatch]);

    if (isLoading) {  // Show loading message WHILE fetching
        return <Container>Loading categories...</Container>;
    }

    if (error) {
        return <Container>Error: {error?.message}</Container>;
    }

    // Data is loaded, so render the categories
    return (
      <Container className="border border-l-0 border-r-0 border-top-1 border-bottom-1 overflow-y-auto flex justify-start items-center gap-5 " style={{ height: '20px' }}>
      {categories.length > 0 ? (
          categories.map((category) => (
              <Card key={category._id} category={category} />
          ))
      ) : (
          <div>No categories to display</div>
      )}
  </Container>
    );
}

export default Home;