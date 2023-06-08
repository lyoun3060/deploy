import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "haeundae", text: "해운대 관광지" },
  { name: "busantheme", text: "부산 테마 여행" },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media scren and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.2 rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2rem;
  &.hover {
    color: #0462c0;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #27b41a;
    color: #27b41a;
    &:hover {
      color: #f51515;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={c.name === "haeundae" ? "/" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
