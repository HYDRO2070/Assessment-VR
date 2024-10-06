"use client"
import { Title, Button, Text, Container, Anchor, Box } from '@mantine/core';
import { useState, useRef } from 'react'

const Main_section = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Save the selected file in state
  };
  return (
    <Box width="100vw"
      height="100vh"
      overflow="auto" // Enable scrolling when content exceeds height
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Container
        size="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#17171E',
          position: 'relative',
          color: 'white',
          padding: 0, // Remove padding if any
        }}
      >
        <Anchor href="" size="sm" style={{
          color: 'white', textDecoration: 'none', fontWeight: 'bold',
          width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5vh 0px', position: 'sticky', top: '0', zIndex: '20', backgroundColor: '#17171E'
        }}>
          HOW IT WORKS
        </Anchor>

        <div style={{ textAlign: 'center', margin: '35px' }}>
          <Title order={1} style={{ fontSize: '46px' }}>Vocal Remover and Isolation</Title>
          <Text size="xl" color="#D8D8E2" style={{ fontSize: '24px', margin: '10px' }}>
            Separate voice from music out of a song free with powerful AI algorithms
          </Text>
        </div>

        <div style={{ margin: '20px' }}>
          <img src="/player_en.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '40px' }}>
          {/* Hidden input for file selection */}
          <input
            type="file"
            accept=".wav,.mp3,.aac,.ogg,.wma,.flac,.alac,.aiff,audio/*"
            ref={fileInputRef} // Use ref instead of ID
            style={{ display: 'none' }} // Hide the input element
            onChange={handleFileChange} // Handle file selection
          />

          <Button
            onClick={() => fileInputRef.current.click()} // Open file dialog using ref
            variant="outline"
            styles={{
              root: {
                padding: '8px 25px',
                border: '2px solid #5a52c5',
                borderRadius: '100px',
                transition: 'background-color 0.3s',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#5a52c5c5',
                },
              },
            }}
          >
            Browse my file
          </Button>

        </div>
      </Container>

      <Box width="100vw" style={{ height: '80vh', backgroundColor: '#17171E' }}>
        <Box width="100vw" style={{ height: '0.5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#17171E' }}>
          <Box width="100vw" style={{ height: '0.2px', width: '98vw', backgroundColor: '#262633' }}></Box>
        </Box>
        <Box width="80vw" style={{ height: '100%',width:'90vw',margin:'auto', backgroundColor: '#17171E',display: 'flex', justifyContent: 'center',gap:'20px', alignItems: 'left',flexDirection:'column'}}>
          <Text size="xl" color="#D8D8E2" style={{ fontSize: '44px'}}>
          Remove vocals from a song
          </Text>
          <Box style={{ height: '50%',width:'100%', backgroundColor: '#17171E',display: 'flex', justifyContent: 'center', alignItems: 'left',flexDirection:'column',borderLeft:'3px solid #665DC3',textAlign:'left',backgroundColor:'#1F1F28'}}>
            <Text size="xl" color="#D8D8E2" style={{ fontSize: '24px', margin: '10px' }}>            This free online application will help remove vocals from a song by creating karaoke.
            </Text>
            <Text size="xl" color="#D8D8E2" style={{ fontSize: '24px', margin: '10px' }}>
            Once you choose a song, artificial intelligence will separate the vocals from the instrumental ones. You will get two tracks - a karaoke version of your song (no vocals) and acapella version (isolated vocals).
            </Text>
            <Text size="xl" color="#D8D8E2" style={{ fontSize: '24px', margin: '10px' }}>
            Despite the complexity and high cost of service, you can use it absolutely free. Processing usually takes about 10 seconds.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main_section
