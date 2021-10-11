import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 3s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  /* border: 2px solid lightgreen; */
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: block;
    max-hight: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    /* border: 2px solid pink; */
    display: flex;
    /* justify-content: flex-start; */
  }

  .score {
    /* border: 1px solid lime; */

    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: black;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
