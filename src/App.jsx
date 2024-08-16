import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need to import Router here
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Tv from './components/Tv';
import Discover from './components/Discover';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path="/movieDetails" element={<Discover/>}/>
      </Routes>
    </div>
  )
}

export default App

// function App() {
//   const containerStyle = {
//     backgroundColor: '#333', // Dark background
//     padding: '20px',
//     borderRadius: '10px'
//   };

//   return (
//     <div style={containerStyle}>
//       <Navbar />
//       <Tv />
//       <Discover />
//       <AuthProvider>
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/navbar" element={<Navbar />} />
//           <Route path="/tv" element={<Tv />} />
//           <Route path="/discover" element={<Discover />} />
//         </Routes>
//       </AuthProvider>
//     </div>
//   );
// }

//export default App;
