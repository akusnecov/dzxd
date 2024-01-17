import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const Post2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Получение данных из вашего API
    const fetchData = async () => {
      try {
        const response = await fetch('41066861-36ef2bd2577c75b6261a6e1c5');
        if (!response.ok) {
          throw new Error(`Ошибка запроса к API с кодом ${response.status}`);
        }
        const data = await response.json();
        // Предполагается, что изображения находятся в свойстве 'images' ответа API
        setImages(data.images);
      } catch (error) {
        console.error('Ошибка при получении изображений:', error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только один раз

  return (
    <div className="Post__2">
      <div className="slider-container" id="sliderContainer">
        {/* Отобразите изображения, используя полученные данные */}
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.url} alt={`Слайд ${index + 1}`} />
          </div>
        ))}
        <button className="slider-button" id="prevButton">Назад</button>
        <button className="slider-button" id="nextButton">Вперед</button>
      </div>
      {/* Другое содержимое вашего компонента */}
    </div>
  );
};

export default Post2;

