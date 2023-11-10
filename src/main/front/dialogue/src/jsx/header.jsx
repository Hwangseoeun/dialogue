import "../css/header.css";
import styled from "styled-components";
import { useState } from "react";

import {
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const navigate = useNavigate();
  const toDiary = (e) => {
    localStorage.setItem(
      "currentDate",
      JSON.stringify([
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ])
    );
  };
  return (
    <>
      <header>
        <div className="logo">
          <LinkItem
            to="/"
            className="/"
            onClick={(e) => {
              toDiary(e);
            }}
          >
            DIALOGUE
          </LinkItem>
        </div>
        <nav>
          <LinkItem
            to="/"
            className="/"
            onClick={(e) => {
              toDiary(e);
            }}
          >
            CALENDER
          </LinkItem>
          <LinkItem
            to={"/Diary"}
            className="/Diary"
            onClick={(e) => {
              toDiary(e);
            }}
          >
            DIARY
          </LinkItem>
          <LinkItem
            to="/Scheduler"
            className="/Scheduler"
            onClick={(e) => {
              toDiary(e);
            }}
          >
            SCHEDULER
          </LinkItem>
        </nav>
      </header>
    </>
  );
}

const LinkItem = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default Header;
