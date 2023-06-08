import React from "react";
import styled from "styled-components";

const PdItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const Pd = ({ article }) => {
  var { trrsrtNm, contents, file_url } = article;
  var { TITLE, ITEMCNTNTS, MAIN_IMG_THUMB } = article;
  return (
    <PdItemBlock>
      {file_url ? (
        <div className="thumbnail">
          <a href={file_url} target="_blank" rel="noopener noreferrer">
            <img src={file_url} alt="thumbnail" />
          </a>
        </div>
      ) : (
        <div className="thumbnail">
          <a href={MAIN_IMG_THUMB} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_THUMB} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>{trrsrtNm || TITLE}</h2>
        <p>{contents || ITEMCNTNTS}</p>
      </div>
    </PdItemBlock>
  );
};

export default Pd;
