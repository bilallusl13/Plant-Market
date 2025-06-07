import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlants, addtoBasket, removeFromBasket, addToQuantity } from '../reduxs/DataSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Plantstore() {
  const dispatch = useDispatch();
  const { items, status, error, basketItems } = useSelector((state) => state.data);

  // Her ürün için sepetteki miktarı bul
  const getItemQuantity = (itemId) => {
    const basketItem = basketItems.find(item => item.id === itemId);
    return basketItem ? basketItem.quantity || 0 : 0;
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlants());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div className="text-white text-center p-4">Yükleniyor...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500 text-center p-4">Hata: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-green-900 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Bitki Mağazamız</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const basketItem = basketItems.find(bi => bi.id === item.id);
          const quantity = basketItem ? basketItem.quantity : 0;

          return (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.common_name || item.scientific_name}
              </h2>
              {item.default_image && (
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.default_image.original_url || item.default_image.thumbnail || item.default_image.regular_url} 
                    alt={item.common_name || item.scientific_name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Resim+Yüklenemedi';
                    }}
                  />
                </div>
              )}
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Bilimsel Adı:</span> {item.scientific_name}
                </p>
                {item.cycle && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Yaşam Döngüsü:</span> {item.cycle}
                  </p>
                )}
                {item.watering && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Sulama:</span> {item.watering}
                  </p>
                )}
                {item.sunlight?.length > 0 && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Güneş Işığı:</span> {item.sunlight.join(', ')}
                  </p>
                )}
              </div>
              <div className="mt-4 flex justify-between items-center gap-2">
                {basketItem ? (
                  // Ürün sepette varsa miktar kontrolü göster
                  <div className="flex items-center gap-4">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                      onClick={() => dispatch(removeFromBasket(item))}
                    >
                      Sepetten Sil
                    </button>
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                      <button
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        onClick={() => dispatch(addToQuantity({ item, quantity: -1 }))}
                      >
                        <RemoveIcon />
                      </button>
                      <span className="text-gray-800 font-bold min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <button
                        className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        onClick={() => dispatch(addToQuantity({ item, quantity: 1 }))}
                      >
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                ) : (
                  // Ürün sepette yoksa sepete ekle butonu göster
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-300 w-full"
                    onClick={() => dispatch(addtoBasket(item))}
                  >
                    Sepete Ekle
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* End Credits Section */}
      <footer className="mt-12 pt-8 border-t border-green-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">Bitki Mağazası</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">Hakkımızda</h3>
              <p className="text-green-100">
                Doğanın güzelliklerini evinize taşıyoruz. Kaliteli ve sağlıklı bitkiler için doğru adres.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">İletişim</h3>
              <p className="text-green-100">
                Email: info@bitkimagazasi.com<br />
                Tel: +90 (555) 123 45 67<br />
                Adres: Yeşil Sokak No:1, İstanbul
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Çalışma Saatleri</h3>
              <p className="text-green-100">
                Pazartesi - Cuma: 09:00 - 18:00<br />
                Cumartesi: 10:00 - 16:00<br />
                Pazar: Kapalı
              </p>
            </div>
          </div>
          <div className="mt-8 text-sm text-green-200">
            <p>© 2024 Bitki Mağazası. Tüm hakları saklıdır.</p>
            <p className="mt-2">Bitki verileri Trefle API tarafından sağlanmaktadır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Plantstore;
