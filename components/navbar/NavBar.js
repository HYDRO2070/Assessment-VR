"use client"
import React, { useState } from 'react';

import Globalcss from "../../components/Globalcss/Globalcss"


import {
  Box,
  IconButton,
  Typography,
  SvgIcon,
  Collapse,
} from '@mui/material';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box className="container-nav">
      <Globalcss/>
      {/* item nav */}
      <Box
        className={`nav-main ${isOpen ? 'open' : ''}`}
        sx={{
          position: 'fixed',
          // top: 0,
          left: isOpen ? 0 : '-250px', // Toggle left position
          backgroundColor: '#1C1C26',
          color: '#797986',
          width: '6.5vw',
          height: '100vh',
          transition: 'left 0.3s ease',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
          zIndex: 90,
        }}
      >
        <Box className="nav-option" sx={{ marginTop: '13vh', overflowY: 'scroll', display: 'flex', flexDirection: 'column', gap: '15px', maxHeight: '70vh',marginBottom:'2vh' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
              >
                <circle cx="25" cy="25" r="25" fill="#39bb81"></circle>
                <circle cx="25" cy="95" r="25" fill="#665dc3"></circle>
                <path d="m95 35 25 25-25 25z" fill="currentColor"></path>
                <path stroke="currentColor" strokeWidth="10" d="M75 60h20"></path>
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Remover</Typography>
          </Box>
          {/* Add more nav items similarly */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 495 281"
              >
                <path d="m486.87 209.81-124.71-31.422c-.915-.23-1.821-.3-2.723-.3l-14.207-24.59 137.12 22.233c.605.098 1.214.14 1.804.14 5.399 0 10.156-3.91 11.047-9.405.989-6.11-3.16-11.863-9.265-12.852l-153.28-24.852c-.602-.098-1.192-.106-1.782-.106l-14.98-25.926 167.11 17.086c.383.04.77.059 1.149.059 5.676 0 10.543-4.297 11.129-10.06.629-6.155-3.844-11.651-10.004-12.28l-183.2-18.742-40.95-70.867A15.903 15.903 0 0 0 247.399 0h-.01a15.889 15.889 0 0 0-13.73 7.945L189.45 84.746 8.33 132.77c-5.976 1.586-9.539 7.715-7.953 13.695 1.328 5.02 5.863 8.336 10.816 8.336.953 0 1.918-.12 2.879-.379l159.64-42.328-83.758 145.52a15.91 15.91 0 0 0 .016 15.848 15.902 15.902 0 0 0 13.727 7.918h287.97c5.648 0 10.91-3.039 13.73-7.933a15.904 15.904 0 0 0-.004-15.855l-30.578-52.918 106.61 26.859c.918.23 1.836.34 2.746.34 5.008 0 9.57-3.387 10.852-8.465 1.504-5.992-2.133-12.086-8.133-13.594l-.02-.003zm-371.88 49.168 132.4-230.02 132.91 230.02H114.99z" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Splitter</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 197 362"
              >
                <path d="M82.03 272.056v89.973h32.812v-89.973a98.565 98.565 0 0 0 58.742-33.547 98.57 98.57 0 0 0 23.29-63.512V16.407A16.405 16.405 0 0 0 188.67 2.2a16.392 16.392 0 0 0-16.406 0 16.405 16.405 0 0 0-8.203 14.207v158.59a65.625 65.625 0 0 1-131.249 0V16.407A16.405 16.405 0 0 0 24.61 2.2a16.392 16.392 0 0 0-16.406 0A16.405 16.405 0 0 0 0 16.407v158.59a98.573 98.573 0 0 0 23.289 63.512 98.564 98.564 0 0 0 58.742 33.547z" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Pitcher</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                viewBox="0 0 369 504"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m66.484 178.533 13.512-7.22-15.113-52.147-23.438 12.504-21.652-40.555-18.023 9.621 21.668 40.551L0 153.807l34.941 41.559 13.512-7.207 108.3 202.78H70.827l24.508-83.887-14.793-27.703-65.57 224.65h354.16l-134.66-461.64L192.042 0l-42.41 42.359-48.754 168.33 14.801 27.703 48.367-167.05h58.723l93.238 319.6h-136.1" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease', textAlign: 'center' }}>Key BPM Finder</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                viewBox="0 0 35 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M29.486 3.241a.982.982 0 0 0-.699.293L17.502 14.819 6.219 3.534c-.195-.195-.446-.289-.701-.289s-.504.094-.699.289a.982.982 0 0 0 0 1.4l11.283 11.285-4.85 4.85-.336-.207a5.833 5.833 0 0 0-3.074-.865 5.832 5.832 0 0 0-4.158 1.721c-1.115 1.112-1.726 2.585-1.725 4.162s.611 3.045 1.725 4.156c1.113 1.113 2.584 1.723 4.158 1.723s3.044-.61 4.158-1.723a5.819 5.819 0 0 0 1.723-4.156 5.83 5.83 0 0 0-.865-3.074l-.207-.336 4.85-4.852 4.852 4.852-.207.336a5.837 5.837 0 0 0-.867 3.074 5.82 5.82 0 0 0 1.725 4.156c1.113 1.113 2.584 1.722 4.158 1.723s3.045-.61 4.158-1.723c1.113-1.112 1.723-2.581 1.723-4.156s-.608-3.048-1.721-4.16a5.831 5.831 0 0 0-4.158-1.723 5.83 5.83 0 0 0-3.074.865l-.336.207-4.85-4.85L30.187 4.934a.982.982 0 0 0 0-1.4.983.983 0 0 0-.699-.293zm-2.324 18.735c1.039 0 2.025.41 2.76 1.145.734.733 1.143 1.719 1.143 2.758s-.409 2.023-1.143 2.756c-.735.735-1.722 1.143-2.76 1.143s-2.024-.408-2.76-1.143c-.734-.733-1.143-1.718-1.143-2.756s.409-2.024 1.143-2.758l.002-.002a3.891 3.891 0 0 1 2.758-1.143zm-19.318.002c1.038 0 2.024.409 2.758 1.143.735.735 1.143 1.721 1.143 2.76s-.409 2.021-1.143 2.754c-.735.735-1.721 1.145-2.76 1.145s-2.024-.409-2.76-1.145c-.734-.733-1.143-1.718-1.143-2.756s.409-2.023 1.145-2.758a3.885 3.885 0 0 1 2.76-1.143z" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Cutter</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                viewBox="0 0 477 470"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.999 152.324c6.16 0 11.199-5.04 11.199-11.199V61.602c0-21.84 17.359-39.199 39.199-39.199h119.28c6.16 0 11.199-5.04 11.199-11.199S189.836.005 183.676.005H64.397A61.425 61.425 0 0 0 2.796 61.607v78.961c0 6.715 5.043 11.758 11.203 11.758v-.002zM183.679 448.004H64.399c-21.84 0-39.2-17.359-39.2-39.199v-79.523c0-6.16-5.038-11.199-11.198-11.199s-11.2 5.04-11.2 11.199l-.003 79.523A61.425 61.425 0 0 0 64.4 470.407h119.28c6.16 0 11.199-5.04 11.199-11.199M461.999 318.084c-6.16 0-11.2 5.04-11.2 11.199l-.003 79.523c0 21.84-17.359 39.199-39.199 39.199h-119.28c-6.16 0-11.199 5.04-11.199 11.199s5.04 11.199 11.199 11.199h119.28a61.425 61.425 0 0 0 61.602-61.602l-.004-79.52c0-6.156-5.039-11.199-11.199-11.199l.003.002zM292.319 22.403h119.28c21.84 0 39.199 17.359 39.199 39.199v78.961c0 6.16 5.039 11.199 11.199 11.199s11.199-5.04 11.199-11.199V61.602A61.425 61.425 0 0 0 411.594 0l-119.28.004c-6.16 0-11.2 5.039-11.2 11.199-.003 6.16 5.04 11.199 11.2 11.199l.005.001zM212.239 238.564c0-.559 0-.559.558-1.121 0-.559 0-.559.56-1.121.558-1.68.558-2.801 0-4.48 0-.56 0-.56-.56-1.122 0-.558 0-.558-.558-1.12 0-.56-.559-.56-.559-1.122 0 0 0-.559-.558-.559l-1.68-1.68-77.281-77.272c-4.48-4.48-11.199-4.48-15.68 0s-4.48 11.199 0 15.68l58.238 58.238H11.199C5.039 222.885 0 227.924 0 234.084s5.04 11.199 11.199 11.199h163.52l-58.238 58.8c-4.48 4.481-4.48 11.2 0 15.68 2.238 2.239 5.04 3.36 7.84 3.36s5.601-1.121 7.84-3.36l79.52-79.52c0-.558 0-1.116.558-1.679zM465.919 223.444h-157.92l58.238-58.238c4.48-4.48 4.48-11.199 0-15.68-4.48-4.48-11.2-4.48-15.68 0l-79.52 79.52c0 .559-.559.559-.559 1.121 0 .559 0 .559-.558 1.121 0 .559 0 .559-.559 1.121-.558 1.68-.558 2.801 0 4.48 0 .56 0 .56.559 1.122 0 .558 0 .558.558 1.121 0 .559.559.559.559 1.121 0 0 0 .559.558.559.56.558 1.122 1.12 1.68 1.68l77.281 77.272c2.238 2.239 5.04 3.36 7.84 3.36s5.602-1.121 7.84-3.36c4.48-4.48 4.48-11.199 0-15.68l-58.238-58.238h157.92c6.16 0 11.199-5.039 11.199-11.199-.004-6.16-5.043-11.203-11.203-11.203h.005z" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Joiner</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                viewBox="0 0 385 525"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M192.498 332.5a105 105 0 0 1-105-105V105a105.003 105.003 0 0 1 52.5-90.935 105.012 105.012 0 0 1 105 0 105.003 105.003 0 0 1 52.5 90.934v122.5a104.998 104.998 0 0 1-105 105zm0-297.5a69.986 69.986 0 0 0-49.496 20.504A69.986 69.986 0 0 0 122.498 105v122.5c0 25.008 13.344 48.117 35 60.62s48.344 12.505 70 0 35-35.613 35-60.62V105a69.986 69.986 0 0 0-20.504-49.496A69.986 69.986 0 0 0 192.498 35z" />
                <path d="M209.998 437.5h-35a174.978 174.978 0 0 1-123.74-51.258A174.985 174.985 0 0 1 0 262.502a17.498 17.498 0 0 1 26.25-15.156A17.499 17.499 0 0 1 35 262.502c0 37.129 14.75 72.738 41.004 98.995A140.013 140.013 0 0 0 175 402.502h35c37.129 0 72.738-14.75 98.996-41.005A140.013 140.013 0 0 0 350 262.502a17.498 17.498 0 0 1 26.25-15.156 17.499 17.499 0 0 1 8.75 15.156 174.999 174.999 0 0 1-175 175l-.002-.002z" />
                <path d="M244.998 525h-105a17.498 17.498 0 0 1-15.156-26.25 17.499 17.499 0 0 1 15.156-8.75h35v-52.5a17.498 17.498 0 0 1 26.25-15.156 17.499 17.499 0 0 1 8.75 15.156V490h35a17.498 17.498 0 0 1 15.156 26.25 17.499 17.499 0 0 1-15.156 8.75z" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Recorder</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2.5em"
                height="1.7em"
                fill="currentColor"
                viewBox="0 0 39.989 39.989"
                id="icon-menu-karaoke"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.994 0C8.952 0 0 8.952 0 19.995c0 11.043 8.952 19.994 19.994 19.994s19.995-8.952 19.995-19.994C39.989 8.952 31.037 0 19.994 0zm0 27.745a7.75 7.75 0 1 1 0-15.5 7.75 7.75 0 0 1 0 15.5z"></path>

                <use xlinkHref="#icon-menu-karaoke" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Karaoke</Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="1.75em"
                height="1.75em"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 509 509"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M434.466 74.582C388.392 28.512 324.756 0 254.506 0s-133.89 28.508-179.96 74.582C24.484 124.644-4.786 195.492.644 272.872c9.418 134.32 125.91 236.22 260.57 236.22h168.43c43.867 0 79.418-35.551 79.418-79.418v-175.13c0-70.254-28.512-133.89-74.582-179.96l-.014-.002zm-161.81 339.9c-4.836 5.008-11.285 7.55-18.156 7.55-3.394 0-6.703-.507-9.758-1.866-3.308-1.36-6.023-3.223-8.398-5.684-4.836-4.75-7.55-11.285-7.55-18.156 0-6.703 2.714-13.406 7.55-18.156 9.418-9.586 26.98-9.586 36.398 0 4.836 4.75 7.55 11.453 7.55 18.156-.081 6.875-2.8 13.406-7.636 18.156zm12.473-124.64c-2.887.848-4.922 4.156-4.922 7.723v13.238c0 14.168-11.539 25.71-25.71 25.71-14.169 0-25.712-11.538-25.712-25.71v-13.238c0-26.047 16.97-49.383 41.238-56.934C292 233.84 311.937 210 305.574 179.2c-4.074-19.602-19.938-35.465-39.453-39.453-16.207-3.309-32.074.34-44.46 10.438-12.306 10.012-19.263 24.777-19.263 40.559 0 14.168-11.539 25.71-25.71 25.71-14.169 0-25.712-11.538-25.712-25.71 0-31.395 13.914-60.668 38.266-80.438 24.352-19.77 56.168-27.406 87.395-20.957 39.371 8.144 71.273 40.047 79.418 79.418 10.953 53.109-19.508 105.21-70.926 121.07v.004z"></path>

                <use xlinkHref="#icon-menu-help" />
              </svg>
            </SvgIcon>
            <Typography variant="body2" sx={{ fontSize: '12px', transition: 'color 0.3s ease' }}>Support</Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: '10px',
              cursor: 'pointer',
              '&:hover svg': { fill: 'white' },
              '&:hover p': { color: 'white' },
            }}
          >
            <SvgIcon sx={{ width: 25, fill: '#797986', transition: 'fill 0.3s ease' }}>
              {/* Replace with your actual SVG path */}
              <svg
                aria-hidden="true"
                width="2em"
                height="2em"
                fill="currentColor"
                stroke=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path style={{ fill: '#41479b' }} d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621V385.38c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.621c0-21.178-17.167-38.345-38.345-38.345z"></path>
                <path style={{ fill: '#f5f5f5' }} d="M511.469 120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54 107.147V88.276h-88.276v107.147L48.322 88.276h-9.977c-19.017 0-34.792 13.847-37.814 32.007l139.778 91.58H0v88.276h140.309L.531 391.717c3.022 18.159 18.797 32.007 37.814 32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54 107.147h9.977c19.017 0 34.792-13.847 37.814-32.007l-139.778-91.58H512v-88.276H371.691l139.778-91.579z"></path>
                <path style={{ fill: '#ff4b55' }} d="M282.483 88.276h-52.966v141.241H0v52.966h229.517v141.241h52.966V282.483H512v-52.966H282.483z"></path>
                <path style={{ fill: '#ff4b55' }} d="m24.793 421.252 186.583-121.114h-32.428L9.224 410.31a38.393 38.393 0 0 0 15.569 10.942zM346.388 300.138H313.96l180.716 117.305a38.515 38.515 0 0 0 12.287-13.075l-160.575-104.23zM4.049 109.475l157.73 102.387h32.428L15.475 95.842a38.499 38.499 0 0 0-11.426 13.633zM332.566 211.862l170.035-110.375a38.4 38.4 0 0 0-15.699-10.86L300.138 211.862h32.428z"></path>

                <use xlinkHref="#icon-flag-en_GB" />
              </svg>
            </SvgIcon>
          </Box>
        </Box>

      </Box>

      <IconButton
        className="nav-hamburger"
        onClick={toggleNavbar}
        sx={{
          height: '11vh',
          position: 'fixed',
          zIndex: 100,
          // top: '10px',
          left: '20px',
          cursor: 'pointer',
        }}
      >
        <SvgIcon>
          <svg
            aria-hidden="true"
            width="3em"
            height="3em"
            fill="white"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30 7H2a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Zm-6 9a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h21a1 1 0 0 0 1-1Zm-7 10a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1Z"></path>
          </svg>
        </SvgIcon>
      </IconButton>

    </Box>
  );
};

export default NavBar;
