// Интерактивная карта с гео меткой
let center = [55.837458599741844,37.437410094494815];

function init() {

  let map = new ymaps.Map("map", {
    center: center, // ваши данные
    zoom: 17
  });

  let placemarRkschool = new ymaps.Placemark([55.837458599741844,37.437410094494815], {}, {
    iconLayout: 'default#image',
    /* говорим что будем отображать на карте в качестве геометки  */
    iconImageHref: 'https://demo-vg.tmweb.ru/oppozitemax/img/icons/balun-2.svg',
    /* указываем пусть к картинке на нашем сайте  */
    iconImageSize: [40, 54],
    /* размеры картинки  */
    iconImageOffset: [-42, -42]
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
      e.get('target').options.set('iconImageHref', './img/icons/balun-3.svg');
    })
    .add('mouseleave', function (e) {
      e.get('target').options.set('iconImageHref', './oppozitemax/img/icons/balun-2.svg');
    });
}

ymaps.ready(init);


// Inputmask("+7 (999) 999-99-99").mask('[type="tel"]');
