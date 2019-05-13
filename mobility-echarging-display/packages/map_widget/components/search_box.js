import { html } from 'lit-element';
import style from '../scss/search_box.scss';
import icon_filter from '../icons/grey/icon_filter_normal_grey.png';
import icon_search from '../icons/grey/icon_search_grey.png';
import { debounce, getStyle } from '../utils';
import icon_center from '../icons/blue/icon_localization_blue.png';
import icon_pin from '../icons/grey/icon_map_pin_grey.png';
import icon_x_grey from '../icons/grey/icon_x_grey.png';
import { t } from '../translations';

export function render__search_box() {
  const handle_onchange = e => {
    if (e.target.value) {
      debounced_request(e.target.value);
      this.showFilters = false;
    } else {
      this.searched_places = [];
    }
  };

  const debounced_request = debounce(500, this.request__get_coordinates_from_search);

  const manage_map = (lat, lng) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    this.current_location = { lat, lng };
    this.current_station = {};
    this.searched_places = [];
    this.showFilters = false;
    this.map.flyTo([lat, lng], 15);
    this.map.removeLayer(this.layer_columns);
    this.map.removeLayer(this.layer_user);
    this.drawMap();
    this.is_loading = false;
  };

  const handle__move_to_current_position = () => {
    this.is_loading = true;
    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        manage_map(latitude, longitude);
      },
      () => {}
    );
  };

  const handle__move_to_place = (lat, lng) => {
    this.is_loading = true;
    manage_map(lat, lng);
  };

  const render__places_list = () => {
    return html`
      <div class="position-absolute bkg-white search_box__container__resoult_list">
        <ul>
          <li @click="${handle__move_to_current_position}" class="p-3 d-flex align-items-center">
            <img class="w-14px mr-2" src="${icon_center}" alt="" /> ${t.my_position[this.language]}
          </li>
          ${this.searched_places.map(o => {
            return html`
              <li
                @click="${() => handle__move_to_place(o.lat, o.lon)}"
                class="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center"
              >
                <img class="w-16px mr-2" src="${icon_pin}" alt="" /> ${o.display_name}
              </li>
            `;
          })}
        </ul>
      </div>
    `;
  };

  const { radius, access_type, plug_type, state, provider } = this.filters;

  return html`
    <style>
      ${getStyle(style)}
    </style>
    <div class="d-flex align-items-center bkg-white position-relative search_box__container">
      <div>
        <img class="w-18px ml-2 mr-2" src="${icon_search}" alt="" />
      </div>
      <input
        @keyup="${handle_onchange}"
        class="search_box"
        name="place_query"
        type="text"
        placeholder="${t.search_on_greenmobility[this.language]}"
      />
      <div class="">
        <div style="height: 24px; width: 1px; background-color: rgba(136, 137, 139, 0.24);"></div>
      </div>
      <div @click="${() => this.handleToggleShowFilters()}" class="utils--cursor-pointer">
        ${radius > 0 || access_type.length || plug_type.length || plug_type.length || state.length || provider.length
          ? html`
              <div class="search_box__filter_badge"></div>
            `
          : null}
        <img class="w-18px ml-3 mr-3" src="${this.showFilters ? icon_x_grey : icon_filter}" alt="" />
      </div>
      ${this.searched_places.length ? render__places_list() : null}
    </div>
  `;
}
