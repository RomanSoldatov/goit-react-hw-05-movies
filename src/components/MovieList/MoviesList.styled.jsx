import styled from 'styled-components';

export const MovieListItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin: 0 auto;
  padding: 4px;
  margin-bottom: 30px;

  max-width: 100%;
  width: 260px;
  height: 100%;

  text-decoration: none;

  border: none;
  transform: scale(1);
  border-radius: 8px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }

  img {
    display: block;
    height: 100%;
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: transform 250ms linear;
    transform: scale(1);

    object-fit: cover;
    object-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MoviePoster = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h2`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 2px;
  padding-right: 2px;
  width: 100%;
  color: black;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
`;
