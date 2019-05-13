import { html } from 'lit-element';
import icon__green_marker from './icons/green/green@2x.png';
import icon__red_marker from './icons/red/red@2x.png';
import icon__grey_marker from './icons/grey/grey@2x.png';

export function getLatLongFromStationDetail(o) {
  return { lat: o.latitude, lng: o.longitude };
}

export function stationStatusMapper(key) {
  const obj = {
    TEMPORARYUNAVAILABLE: icon__red_marker,
    AVAILABLE: icon__green_marker,
    ACTIVE: icon__green_marker,
    UNKNOWN: icon__grey_marker
  };
  return obj[key] ? obj[key] : icon__grey_marker;
}

export function debounce(delay, fn) {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

export const getStyle = array => array[0][1];

export const utils_capitalize = s => {
  s = s.toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const utils_truncate = (str, no_words) => {
  const splitted = str.split(' ');

  if (splitted.length > no_words) {
    return splitted.splice(0, no_words).join(' ') + '...';
  }
  return splitted.splice(0, no_words).join(' ');
};

export const encodeXml = s => {
  s = s.replace('&amp;', '&');

  return s
    .replace('&quot;', `"`)
    .replace('&#x9;', ` \t `)
    .replace('&#xA;', ` \n `)
    .replace('#xA;', ' \n ')
    .replace('&#xD;', ` \r `)
    .replace('#xD;', ` \r `)
    .replace(`&&`, '');
};