import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="header">
      <nav class="nav">
         <Link to="/"><img src="./assets/imgs/StackMasters-Logo.png" alt="Stack Masters Logo" class="nav_logo" /></Link>

        <ul class="nav_items">
          <li class="nav_item">
            <a href="#" class="nav_link">Home</a>
            <a href="#" class="nav_link">Courses</a>
            <a href="#" class="nav_link">Services</a>
            <a href="#" class="nav_link">Contact</a>
          </li>
        </ul>

        <button class="button" id="form-open">Login</button>
      </nav>
      <div className="nova-icon">
        {/* NovaAI Activity Icon */}
        {/* You can add an icon or any relevant UI element here */}
      </div>
    </header>
  );
}

export default Header;
