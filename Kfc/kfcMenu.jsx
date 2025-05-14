// import React, { useState } from 'react';

// const kfcMenu = [
//   { 
//     id: 1,
//     name: 'Original Recipe Chicken',
//     price: 8.99,
//     description: 'Crispy, juicy chicken with 11 herbs and spices.',
//     category: 'Chicken',
//     image:'https://imgs.search.brave.com/Js3BymMCeL1lGeZl4KYOUL55gCw48phjGPpG2dapUW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3B5/a2F0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNy9L/RkMtRnJpZWQtQ2hp/Y2tlbi1QaW4tMi5q/cGc'
//   },
//   // ... (other menu items remain the same)
// ];

// const KfcMenu = () => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [filterCategory, setFilterCategory] = useState('All');
//   const categories = ['All', 'Chicken', 'Burgers', 'Sides', 'Meals', 'Wraps'];

//   const filteredItems = filterCategory === 'All' 
//     ? kfcMenu 
//     : kfcMenu.filter(item => item.category === filterCategory);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-red-50">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8 px-4 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2">KFC Menu</h1>
//         <p className="text-lg opacity-90">Discover our delicious fried chicken and more!</p>
        
//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-2 mt-6">
//           {categories.map(category => (
//             <button
//               key={category}
//               onClick={() => setFilterCategory(category)}
//               className={`px-4 py-2 rounded-full font-medium transition-all ${
//                 filterCategory === category 
//                   ? 'bg-white text-red-600 shadow-md' 
//                   : 'bg-red-500 text-white hover:bg-red-400'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </header>

//       {/* Menu Grid */}
//       <main className="container mx-auto py-8 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredItems.map(item => (
//             <div 
//               key={item.id} 
//               onClick={() => setSelectedItem(item)}
//               className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                 <div>
//                   <h3 className="text-white font-semibold">{item.name}</h3>
//                   <p className="text-white/90">${item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Item Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full border-4 border-red-600">
//             <button 
//               onClick={() => setSelectedItem(null)}
//               className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 z-10 transition-colors"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             <img
//               src={selectedItem.image}
//               alt={selectedItem.name}
//               className="w-full h-64 object-cover"
//             />
            
//             <div className="p-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
//               <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
//               <p className="text-xl font-semibold mb-3">${selectedItem.price.toFixed(2)}</p>
//               <p className="mb-4">{selectedItem.description}</p>
//               <p className="text-sm opacity-90">Category: {selectedItem.category}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-red-600 to-red-800 text-white py-6 text-center mt-8">
//         <p className="text-lg font-medium">KFC - Finger Lickin' Good</p>
//         <p className="text-sm opacity-90 mt-1">Serving quality fried chicken since 1930</p>
//       </footer>
//     </div>
//   );
// };

// export default KfcMenu;


// Advanced CSS
import React, { useState, useEffect } from 'react';

// Mock KFC menu data
const kfcMenu = 
    [
        { 
          id: 1,
          name: 'Original Recipe Chicken',
          price: 8.99,
          description: 'Crispy, juicy chicken with 11 herbs and spices.',
          category: 'Chicken',
          image:'https://imgs.search.brave.com/Js3BymMCeL1lGeZl4KYOUL55gCw48phjGPpG2dapUW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3B5/a2F0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNy9L/RkMtRnJpZWQtQ2hp/Y2tlbi1QaW4tMi5q/cGc'
        },
        { 
          id: 2, 
          name: 'Zinger Burger', 
          price: 6.49, 
          description: 'Spicy fried chicken fillet with lettuce and mayo.', 
          category: 'Burgers', 
          image: 'https://imgs.search.brave.com/lm4GmvAwAYJV0weWwxvq2NP5Ej7r7RjWK9KJ0WOzx0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzU1Lzk3LzAx/LzM2MF9GXzk1NTk3/MDEwNl9oTzZ2SHp3/eTZtdm9VZHR4cjcz/VHpCTjh6dlQyV3Vp/Sy5qcGc' 
        },
        { 
          id: 3, 
          name: 'Popcorn Chicken', 
          price: 4.99, 
          description: 'Bite-sized chicken pieces, perfect for snacking.', 
          category: 'Sides', 
          image: 'https://imgs.search.brave.com/bZUesHy-Liseye3E7fLtmznMIzZomBuqDhjG0VK79cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy9rYnFxM2Uw/ci9wcm9kdWN0aW9u/LzNlYzAwODYzNzc4/MTkyOGZhMGVmOWMz/OGE4NTA5Mjg5NGU3/YWVkMDEtMTIwMHg4/MDAuanBnP3c9Mzg0/MCZxPTEwMA' 
        },
        { 
          id: 4, 
          name: 'Famous Bowl', 
          price: 7.49, 
          description: 'Mashed potatoes, corn, chicken, and gravy.', 
          category: 'Meals', 
          image: 'https://imgs.search.brave.com/kPONayZhMN15fZSh9pIGbCb8yBd9YdScRsXUBKC2D8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3Ju/YWRvdWdoYWxsaS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDIvS0ZDLUJP/V0xTLTEuanBn' 
        },
        { 
          id: 5, 
          name: 'Coleslaw', 
          price: 2.99, 
          description: 'Creamy, crunchy coleslaw side.', 
          category: 'Sides', 
          image: 'https://imgs.search.brave.com/X8RZ50scV6M3OOEpvnNh3-xEx--K5Gaz0ygYS4ZK2HU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raXRj/aGVuZnVud2l0aG15/M3NvbnMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA2/L0NvcHljYXQtS0ZD/LUNvbGVzbGF3Mzgt/c2NhbGVkLmpwZw' 
        },
        { 
          id: 6, 
          name: 'Twister Wrap', 
          price: 5.99, 
          description: 'Chicken strips, lettuce, and sauce in a tortilla.', 
          category: 'Wraps', 
          image: 'https://imgs.search.brave.com/Tr4Mzlk4sYrpxuZNHSIuzplNgYmp5z8_L5BCY69Cit4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ldS1p/bWFnZXMuY29udGVu/dHN0YWNrLmNvbS92/My9hc3NldHMvYmx0/ZWE3YWVlMmZjYTA1/MGExOS9ibHQ2ZDdi/ODMzNDlmNWI4NDRm/LzY3MjRkNTNhMThl/ZjBjNDI5YTE4NWVj/OS90d2lzdGVyXzIw/d3JhcF8yMEtGQy5q/cGc_d2lkdGg9MTI4/MCZhdXRvPXdlYnAm/cXVhbGl0eT05NSZm/b3JtYXQ9anBnJmRp/c2FibGU9dXBzY2Fs/ZQ' 
        },
        { 
          id: 7, 
          name: 'Hot Wings', 
          price: 5.49, 
          description: 'Spicy, crispy chicken wings.', 
          category: 'Chicken', 
          image: 'https://imgs.search.brave.com/3_3GXkEKDLApSRdQM6diwfHZmpdpa3A4aiJ29r6nxHA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGFuZHdpbmUu/Y29tL3RobWIvNDJZ/eEFURjJLWERqOXRY/Sjk2YUhJNVJDcUlJ/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/S0ZDLUhvdC1hbmQt/U3BpY3ktV2luZ3Mt/RlQtQkxPRzA5MjMt/YmNiZmU3OWU1NDU1/NGYyNDljNGJmMjQ2/ZDA5YjFkOTguanBn' 
        },
        { 
          id: 8, 
          name: 'Mashed Potatoes', 
          price: 2.49, 
          description: 'Creamy mashed potatoes with gravy.', 
          category: 'Sides', 
          image: 'https://imgs.search.brave.com/CI3AJycGhBhHLja-s-pJH54ugnOauuarnyibCjxTgUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGFuZHdpbmUu/Y29tL3RobWIvS2Jw/ZnZsdHlmY01YRl9i/RzViLUFzUFlVT1J3/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/S0ZDLUR1bmstSXQt/QnVja2V0LUZULUJM/T0cwMzI1LU1hc2hl/ZC1Qb3RhdG8tUG9w/cGVycy00NGVlZThl/ZWI2NjQ0OTk4YTdm/OWViNTQwOGJjMjZm/ZC5qcGc' 
        }
      ]

const KfcMenu = () => {
  const [menuItems, setMenuItems] = useState(kfcMenu);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [introAnimation, setIntroAnimation] = useState(true);
  const [filterCategory, setFilterCategory] = useState('All');

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Filter menu items by category
  const filteredItems =
    filterCategory === 'All' ? menuItems : menuItems.filter((item) => item.category === filterCategory);

  const handleExplore = () => {
    setIntroAnimation(false);
    setTimeout(() => setShowContent(true), 1000);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const categories = ['All', 'Chicken', 'Burgers', 'Sides', 'Meals', 'Wraps'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 to-red-800 overflow-hidden">
      {/* Intro Animation */}
      {!showContent && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${
            introAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-pulse">Welcome to KFC</h2>
            <p className="text-xl text-white mb-8">Finger Lickin' Good Menu</p>
            <button
              onClick={handleExplore}
              className="bg-white text-red-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300 animate-bounce"
            >
              Explore Menu →
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="min-h-screen bg-gradient-to-b from-white to-red-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-white">
                  KFC Menu
                </span>
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
                Discover our delicious fried chicken and more!
              </p>
              {/* Category Filter */}
              <div className="mt-6 flex justify-center space-x-4 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium m-1 ${
                      filterCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-red-600 hover:bg-red-100'
                    } transition-all duration-300`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                <p className="ml-4 text-red-600">Loading KFC Menu...</p>
              </div>
            )}

            {/* Menu Grid */}
            {!isLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-red-600 cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-sm text-white/80">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Item Modal */}
            {selectedItem && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-red-600">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full max-h-[50vh] object-cover"
                  />
                  <div className="p-6 bg-gradient-to-r from-red-600 to-white">
                    <h3 className="text-xl font-bold text-white">{selectedItem.name}</h3>
                    <p className="text-white/90">{selectedItem.description}</p>
                    <p className="text-white/90">Price: ${selectedItem.price.toFixed(2)}</p>
                    <p className="text-white/90">Category: {selectedItem.category}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <footer className="mt-16 bg-gradient-to-r from-red-600 to-red-800 text-white py-8 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-lg mb-2">KFC - Finger Lickin' Good</p>
                <p className="text-sm opacity-90">Serving quality fried chicken since 1930</p>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default KfcMenu;