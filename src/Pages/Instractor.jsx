import React from "react";
import styled from "styled-components";

const instructors = [
  {
    img: "https://i.ibb.co/dwGJXqqM/jankar-mahbub.jpg",
    name: "Jankar Mahbub",
    title: "React Instructor",
    email: "jankar.mahbub@gmail.com"
  },
  {
    img: "https://i.ibb.co/Jj9ZKyCm/giyas-uddin.jpg",
    name: "Giyas Uddin",
    title: "Node.js Instructor",
    email: "giyas.uddin@gmail.com"
  },
  {
    img: "https://i.ibb.co/6JJNcbMW/Zahid.jpg",
    name: "Zahid",
    title: "Fullstack Instructor",
    email: "zahid.dev@gmail.com"
  },
  {
    img: "https://i.ibb.co/8LyfGMvW/josim.jpg",
    name: "Josim",
    title: "Frontend Instructor",
    email: "josim.web@gmail.com"
  },
  {
    img: "https://i.ibb.co/VW9HjgYG/sakil.jpg",
    name: "Sakil",
    title: "Backend Instructor",
    email: "sakil.backend@gmail.com"
  },
  {
    img: "https://i.ibb.co/99xnm6Kf/rakib.jpg",
    name: "Rakib",
    title: "UI/UX Instructor",
    email: "rakib.uiux@gmail.com"
  },
];


const Instructor = () => {
  return (
    <div className="bg-linear-to-t from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A]  m-0">
      <h1 className="header text-center">Top Instructors</h1>
      <StyledWrapper>
        <div className="wrapper">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="card"
              style={{
                "--rotate": `${(360 / instructors.length) * i}deg`,
              }}
            >
              <img src={inst.img} alt={inst.name} />
              <div className="text">
                <h3>{inst.name}</h3>
                <p>{inst.title}</p>
                <p>{inst.email}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    max-width: 500px;
    height: 500px;
    margin: 50px auto;
    perspective: 1200px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
  }

  .card {
    position: absolute;
    width: 170px;
    height: 250px;
    top: 50%;
    left: 50%;
    margin: -110px 0 0 -75px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    text-align: center;
    overflow: hidden;
    transform: rotateY(var(--rotate)) translateZ(200px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: rotateY(var(--rotate)) translateZ(220px);
      box-shadow: 0 0 25px rgba(0,0,0,0.4);
    }
  }

  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .card .text {
    padding: 8px;
  }

  .card .text h3 {
    margin: 5px 0;
    font-size: 16px;
  }

  .card .text p {
    margin: 5px 0;
    font-size: 14px;
    color: #555;
  }

  .card .text button {
    margin-top: 5px;
    padding: 5px 10px;
    font-size: 13px;
    border: none;
    border-radius: 6px;
    background-color: #1e90ff;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .card .text button:hover {
    background-color: #0d6efd;
  }

  /* Mobile & tablet responsive */
  @media (max-width:700px) {
    .wrapper {
      animation: none;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      perspective: none;
    }

    .card {
      position: relative;
      top: 0;
      left: 0;
      margin: 0;
      transform: none !important;
      width: 100%;
      height: auto;
    }

    .card img {
      height: 120px;
    }
  }

  @media (max-width: 480px) {
    .card img {
      height: 150px;
    }
    .card .text h3 {
      font-size: 14px;
    }
    .card .text p {
      font-size: 12px;
    }
    .card .text button {
      font-size: 12px;
      padding: 4px 8px;
    }
  }
`;

export default Instructor;
