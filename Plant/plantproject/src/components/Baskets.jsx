import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { removeFromBasket, addToQuantity } from '../reduxs/DataSlice';

function Baskets() {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.data.basketItems);

  const calculateTotal = () => {
    return basketItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-600 to-yellow-400">
      {/* Üst Bilgi Alanı */}
      <div className="bg-white/10 backdrop-blur-lg py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center"
          >
            Alışveriş Sepeti
          </motion.h1>
        </div>
      </div>

      {/* Ana İçerik */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ürün Listesi */}
          <div className="lg:col-span-2 space-y-4">
            {basketItems.length > 0 ? (
              basketItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Ürün Görseli */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="w-full sm:w-48 h-48 flex-shrink-0"
                      >
                        <img 
                          src={item.default_image?.original_url || item.default_image?.thumbnail || item.default_image?.regular_url} 
                          alt={item.common_name || item.scientific_name}
                          className="w-full h-full object-cover rounded-lg shadow-md"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/400x400?text=Resim+Yüklenemedi';
                          }}
                        />
                      </motion.div>

                      {/* Ürün Detayları */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-3">
                          <motion.h2 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-2xl font-bold text-white"
                          >
                            {item.common_name || item.scientific_name}
                          </motion.h2>

                          {item.scientific_name && (
                            <p className="text-white/80 italic text-sm">
                              Bilimsel Adı: {item.scientific_name}
                            </p>
                          )}
                        </div>

                        {/* Kontroller */}
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => dispatch(removeFromBasket(item))}
                              className="p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-full transition-colors duration-300"
                              title="Ürünü Sil"
                            >
                              <DeleteIcon />
                            </button>

                            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                              <button
                                onClick={() => dispatch(addToQuantity({ item, quantity: -1 }))}
                                className="text-white hover:text-yellow-300 transition-colors duration-300"
                                title="Miktarı Azalt"
                              >
                                <RemoveIcon />
                              </button>
                              <span className="text-white font-bold text-lg min-w-[2rem] text-center">
                                {item.quantity || 1}
                              </span>
                              <button
                                onClick={() => dispatch(addToQuantity({ item, quantity: 1 }))}
                                className="text-white hover:text-yellow-300 transition-colors duration-300"
                                title="Miktarı Arttır"
                              >
                                <AddIcon />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center"
              >
                <p className="text-white text-xl font-medium">Sepetiniz boş</p>
                <p className="text-white/80 mt-2">Mağazamızdan harika bitkiler keşfedin!</p>
              </motion.div>
            )}
          </div>

          {/* Sipariş Özeti */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Sipariş Özeti</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-white">
                  <span className="text-lg">Toplam Ürün:</span>
                  <span className="text-xl font-bold">{calculateTotal()}</span>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Siparişi Tamamla
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baskets;
