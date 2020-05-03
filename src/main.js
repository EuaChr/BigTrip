import { createMenuTemplate } from "./components/menu.js";
import { createInfoTemplate } from "./components/info-trip.js";
import { createFilterTemplate } from "./components/filters.js";
import { createSortTemplate } from "./components/sorting.js";
import { createTripEditTemplate } from "./components/trip-edit.js";
import { createDayTripListTemplate, 
          createDayTripItemTemplate,
          createTripListTemplate, 
          createTripItemTemplate } from "./components/trip-template.js";

const DAY_COUNT = 2;
const TRIP_COUNT = 3;

 const render = function(place, template,position) {
    place.insertAdjacentHTML(position, template)
 }

// Общая информация о путешествии
const tripMainElement = document.querySelector('.trip-main');
render(tripMainElement, createInfoTemplate(), 'afterbegin');

// Меню и фильтры
const tripControlsElement = tripMainElement.querySelector('.trip-controls');
render(tripControlsElement.querySelector('h2'), createMenuTemplate(), 'afterend');
render(tripControlsElement.querySelectorAll('h2')[1], createFilterTemplate(), 'afterend');

// Сортировка списка путешествий
const pageMainElement = document.querySelector('.page-main');
const tripEventsElement = pageMainElement.querySelector('.trip-events');
render(tripEventsElement.querySelector('h2'), createSortTemplate(), 'afterend' )

// Форма создания/редактирования путешествия
const sortingElement = pageMainElement.querySelector('.trip-sort');
render(sortingElement, createTripEditTemplate(), 'afterend');

// Создать список дней
render(tripEventsElement, createDayTripListTemplate(), 'beforeend');
const tripDaysElement = tripEventsElement.querySelector('.trip-days');

// Рендер дня в списке дней
for (let i = 0; i < DAY_COUNT; i++) {
  render(tripDaysElement, createDayTripItemTemplate(), 'beforeend');
}

// Список элементов дней
const dayList = tripDaysElement.querySelectorAll('.day');

// Создасть список и отрисовать путешествия внутри каждого списка
for (let i = 0; i < dayList.length; i++) {
  render(dayList[i], createTripListTemplate(), 'beforeend');
  const tripListElement = dayList[i].querySelector('.trip-events__list');
  for (let j = 0; j < TRIP_COUNT; j++) {
    render(tripListElement, createTripItemTemplate(), 'beforeend');
  }
}