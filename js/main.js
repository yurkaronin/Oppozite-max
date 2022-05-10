// Интерактивная карта с гео меткой
let center = [45.013460, 38.958488];

function init() {

  let map = new ymaps.Map("map", {
    center: center, // ваши данные
    zoom: 15
  });

  let placemarRkschool = new ymaps.Placemark([45.013460, 38.958488], {}, {
    iconLayout: 'default#image', /* говорим что будем отображать на карте в качестве геометки  */
    iconImageHref: '../img/map/balun.svg', /* указываем пусть к картинке на нашем сайте  */
    iconImageSize: [56, 80], /* размеры картинки  */
    iconImageOffset: [-19, -44] /* отступ от центра  */
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemarRkschool);

  placemarRkschool.events
    .add('mouseenter', function (e) {
      e.get('target').options.set('iconImageHref', '../img/map/balun-2.svg');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageHref', '../img/map/balun.svg');
    });
}

ymaps.ready(init);
