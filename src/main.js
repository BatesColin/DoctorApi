import { Doctor } from './doctorapi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


for(let i = 0; i < response.data.length; i++){
    $("#doctor-list").append(
      `<li>
        <h3>${response.data[i].profile.first_name} ${response.data[i].profile.last_name}, ${response.data[i].profile.title}</h3>
        <img src="${response.data[i].profile.image_url}">
        <h5>Specialties:</h5>
          <ul id="specialties-${i}"></ul>
        <h5>Location(s):</h5>
          <ul id="locations-${i}"></ul>
      </li>`
    )