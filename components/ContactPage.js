import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to get in touch, please feel free to contact me using any of the information below:
      </p>
      <ul>
        <li>Email: calvinsg777@gmail.com</li>
        <li>Phone: (+27) 0726164382</li>
        <li>Address: 6 Mannikin Place, KZN, South Africa</li>
        <li>GitHub: <a href="https://github.com/CalvinG21" target="_blank" rel="noopener noreferrer">https://github.com/CalvinG21</a></li>
      </ul>
      <style jsx>{`
        .contact {
          background-color: white;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin: 20px;
        }

        h1 {
          color: #333;
        }

        p {
          font-size: 16px;
          color: #555;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 8px 0;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
      <style global jsx>{`
            body {
            background: lightgrey;
            }
            `}</style>
    </div>
  );
};

export default ContactPage;
