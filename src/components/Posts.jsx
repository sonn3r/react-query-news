import {
    StyledPostList,
    StyledPostTitle,
    StyledPostText,
    StyledButtonContainer,
    StyledButton
} from "./styles/Posts.styled.js";
import React, {useState} from "react";
import {useQuery} from "react-query";

const fetchData = async (page = 1) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default function Posts() {
    const [page, setPage] = useState(1);
    const {data, status} = useQuery(['posts', page], () => fetchData(page));

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setPage(prevPage => prevPage - 1);
    };

    return (
        <div>
            <StyledPostList>
                {status === 'loading' && <div>Loading...</div>}
                {status === 'error' && <div>Error fetching data</div>}
                {status === 'success' && (
                    data.map(post => (
                        <h3 key={post.id}>
                            <StyledPostTitle>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</StyledPostTitle>
                            <StyledPostText>{post.body}</StyledPostText>
                        </h3>
                    ))
                )}
            </StyledPostList>
            <StyledButtonContainer>
                <StyledButton onClick={prevPage} disabled={page === 1}>Previous page</StyledButton>
                <StyledButton onClick={nextPage}>Next page</StyledButton>
            </StyledButtonContainer>
        </div>
    );
}
