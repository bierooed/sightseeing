import React from "react";

export default function Footer() {
  return (
    <footer className="mt-6 flex flex-wrap justify-around items-center">
      <div>
        <h3>🔗 Links</h3>
        <ul className="text-blue-400 underline">
          <li>
            <a href="https://github.com/bierooed/sightseeing" target="_blank">
              Project GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hov13/" target="_blank">
              Author's Linkedin
            </a>
          </li>
        </ul>
      </div>
      <h3 className="mt-6">Developed with love in Armenia 🇦🇲</h3>
    </footer>
  );
}
