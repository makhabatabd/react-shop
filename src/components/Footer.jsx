import React from "react";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <p class="home">Home</p>
          <a class="logo" href="#">
            Company Name <i>&copy; 2013</i>
          </a>
        </li>
        <li>
          <p class="services">Services</p>

          <ul>
            <li>
              <a href="#">3D modeling</a>
            </li>
            <li>
              <a href="#">Web development</a>
            </li>
            <li>
              <a href="#">Mobile development</a>
            </li>
            <li>
              <a href="#">Web &amp; Print Design</a>
            </li>
          </ul>
        </li>
        <li>
          <p class="reachus">Reach us</p>

          <ul>
            <li>
              <a href="#">Email</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>555-123456789</li>
          </ul>
        </li>
        <li>
          <p class="clients">Clients</p>

          <ul>
            <li>
              <a href="#">Login Area</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
