import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import Logout from "./Logout";

function NavbarPill() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div>
      <ul
        className="nav nav-pills nav-fill gap-2 p-1 small bg-dark rounded-5 shadow-sm"
        id="pillNav2"
        role="tablist"
        style={{
          "--bs-nav-link-color": "var(--bs-white)",
          "--bs-nav-pills-link-active-color": "var(--bs-primary)",
          "--bs-nav-pills-link-active-bg": "var(--bs-white)",
          opacity: 0.6,
        }}
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active rounded-5 fw-bold"
            id="home-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="true"
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link rounded-5 fw-bold"
            id="profile-tab2"
            data-bs-toggle="tab"
            type="button"
            role="tab"
            aria-selected="false"
          >
            MovieMax
          </button>
        </li>
        <li className="nav-item" role="presentation">
          {/* Conditional Rendering: Show Login and Logout buttons if user is logged in; show Signup and Login otherwise */}
          {userLoggedIn ? (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="nav-link rounded-5 fw-bold"
                id="login-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Login
              </button>
              <Logout />
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="nav-link rounded-5 fw-bold"
                id="signup-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Signup
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="nav-link rounded-5 fw-bold"
                id="login-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Login
              </button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavbarPill;
