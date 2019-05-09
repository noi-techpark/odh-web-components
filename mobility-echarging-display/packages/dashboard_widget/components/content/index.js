import { html } from 'lit-element';
import { Card } from '../card';
import {
  render_working_columns,
  render_plug_types,
  render_utilized_columns,
  render_columns_number
} from './components/card_renders';

export function Content(props) {
  return html`
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              ${Card({
                load_perc: this.load_perc_1,
                refresh_function: this.card_painter_1,
                title: 'Colonnine in funzione',
                content: render_working_columns(this.chart_1_value)
              })}
              ${Card({
                load_perc: this.load_perc_2,
                refresh_function: this.card_painter_2,
                title: 'Numero di colonnine a Bolzano',
                content: render_columns_number(this.number_of_stations)
              })}
              ${Card({
                load_perc: this.load_perc_3,
                refresh_function: this.card_painter_3,
                title: 'Tipologia di prese',
                content: render_plug_types()
              })}
              ${Card({
                load_perc: this.load_perc_4,
                refresh_function: this.card_painter_4,
                title: 'Colonnine utilizzate',
                content: render_utilized_columns({ chart_3_value: this.chart_3_value })
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
