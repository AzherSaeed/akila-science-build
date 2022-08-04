import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function TimeZones({ setLocale }) {
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    setLocale(timeZone);
  }, [timeZone]);

  return (
    <div>
      <FormControl
        fullWidth
        sx={{
          backgroundColor: 'white',
          borderRadius: '0px',
          marginTop: '16px',
        }}
      >
        <InputLabel shrink={false} id="time_zone">
          {timeZone === '' ? 'Time Zone' : ''}
        </InputLabel>

        <Select
          id="time_zone"
          value={timeZone}
          onChange={(e) => {
            setTimeZone(e.target.value);
          }}
        >
          <MenuItem value="">""</MenuItem>
          <MenuItem value="">""</MenuItem>
          <MenuItem value="" disabled="disabled">
            ------------- North America
          </MenuItem>
          <MenuItem value="Hawaii">(GMT-10:00) Hawaii</MenuItem>
          <MenuItem value="Alaska">(GMT-09:00) Alaska</MenuItem>
          <MenuItem value="Pacific Time (US &amp; Canada)">
            (GMT-08:00) Pacific Time (US &amp; Canada)
          </MenuItem>
          <MenuItem value="Mountain Time (US &amp; Canada)">
            (GMT-07:00) Mountain Time (US &amp; Canada)
          </MenuItem>
          <MenuItem value="Central Time (US &amp; Canada)" selected="selected">
            (GMT-06:00) Central Time (US &amp; Canada)
          </MenuItem>
          <MenuItem value="Eastern Time (US &amp; Canada)">
            (GMT-05:00) Eastern Time (US &amp; Canada)
          </MenuItem>
          <MenuItem value="" disabled="disabled">
            ------------- Europe
          </MenuItem>
          <MenuItem value="Dublin">(GMT) Dublin</MenuItem>
          <MenuItem value="Edinburgh">(GMT) Edinburgh</MenuItem>
          <MenuItem value="Lisbon">(GMT) Lisbon</MenuItem>
          <MenuItem value="London">(GMT) London</MenuItem>
          <MenuItem value="Amsterdam">(GMT+01:00) Amsterdam</MenuItem>
          <MenuItem value="Berlin">(GMT+01:00) Berlin</MenuItem>
          <MenuItem value="Bern">(GMT+01:00) Bern</MenuItem>
          <MenuItem value="Brussels">(GMT+01:00) Brussels</MenuItem>
          <MenuItem value="Budapest">(GMT+01:00) Budapest</MenuItem>
          <MenuItem value="Copenhagen">(GMT+01:00) Copenhagen</MenuItem>
          <MenuItem value="Madrid">(GMT+01:00) Madrid</MenuItem>
          <MenuItem value="Paris">(GMT+01:00) Paris</MenuItem>
          <MenuItem value="Prague">(GMT+01:00) Prague</MenuItem>
          <MenuItem value="Rome">(GMT+01:00) Rome</MenuItem>
          <MenuItem value="Stockholm">(GMT+01:00) Stockholm</MenuItem>
          <MenuItem value="Vienna">(GMT+01:00) Vienna</MenuItem>
          <MenuItem value="Warsaw">(GMT+01:00) Warsaw</MenuItem>
          <MenuItem value="Athens">(GMT+02:00) Athens</MenuItem>
          <MenuItem value="Bucharest">(GMT+02:00) Bucharest</MenuItem>
          <MenuItem value="" disabled="disabled">
            -------------
          </MenuItem>
          <MenuItem value="Midway Island">(GMT-11:00) Midway Island</MenuItem>
          <MenuItem value="Samoa">(GMT-11:00) Samoa</MenuItem>
          <MenuItem value="Tijuana">(GMT-08:00) Tijuana</MenuItem>
          <MenuItem value="Chihuahua">(GMT-07:00) Chihuahua</MenuItem>
          <MenuItem value="Mazatlan">(GMT-07:00) Mazatlan</MenuItem>
          <MenuItem value="Central America">(GMT-06:00) Central America</MenuItem>
          <MenuItem value="Guadalajara">(GMT-06:00) Guadalajara</MenuItem>
          <MenuItem value="Mexico City">(GMT-06:00) Mexico City</MenuItem>
          <MenuItem value="Monterrey">(GMT-06:00) Monterrey</MenuItem>
          <MenuItem value="Saskatchewan">(GMT-06:00) Saskatchewan</MenuItem>
          <MenuItem value="Bogota">(GMT-05:00) Bogota</MenuItem>
          <MenuItem value="Lima">(GMT-05:00) Lima</MenuItem>
          <MenuItem value="Quito">(GMT-05:00) Quito</MenuItem>
          <MenuItem value="Caracas">(GMT-04:30) Caracas</MenuItem>
          <MenuItem value="Atlantic Time (Canada)">(GMT-04:00) Atlantic Time (Canada)</MenuItem>
          <MenuItem value="La Paz">(GMT-04:00) La Paz</MenuItem>
          <MenuItem value="Santiago">(GMT-04:00) Santiago</MenuItem>
          <MenuItem value="Newfoundland">(GMT-03:30) Newfoundland</MenuItem>
          <MenuItem value="Brasilia">(GMT-03:00) Brasilia</MenuItem>
          <MenuItem value="Buenos Aires">(GMT-03:00) Buenos Aires</MenuItem>
          <MenuItem value="Georgetown">(GMT-03:00) Georgetown</MenuItem>
          <MenuItem value="Greenland">(GMT-03:00) Greenland</MenuItem>
          <MenuItem value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</MenuItem>
          <MenuItem value="Azores">(GMT-01:00) Azores</MenuItem>
          <MenuItem value="Cape Verde Is.">(GMT-01:00) Cape Verde Is.</MenuItem>
          <MenuItem value="Casablanca">(GMT) Casablanca</MenuItem>
          <MenuItem value="Ljubljana">(GMT+01:00) Ljubljana</MenuItem>
          <MenuItem value="Sarajevo">(GMT+01:00) Sarajevo</MenuItem>
          <MenuItem value="Skopje">(GMT+01:00) Skopje</MenuItem>
          <MenuItem value="West Central Africa">(GMT+01:00) West Central Africa</MenuItem>
          <MenuItem value="Zagreb">(GMT+01:00) Zagreb</MenuItem>
          <MenuItem value="Cairo">(GMT+02:00) Cairo</MenuItem>
          <MenuItem value="Harare">(GMT+02:00) Harare</MenuItem>
          <MenuItem value="Helsinki">(GMT+02:00) Helsinki</MenuItem>
          <MenuItem value="Istanbul">(GMT+02:00) Istanbul</MenuItem>
          <MenuItem value="Jerusalem">(GMT+02:00) Jerusalem</MenuItem>
          <MenuItem value="Kyiv">(GMT+02:00) Kyiv</MenuItem>
          <MenuItem value="Minsk">(GMT+02:00) Minsk</MenuItem>
          <MenuItem value="Pretoria">(GMT+02:00) Pretoria</MenuItem>
          <MenuItem value="Riga">(GMT+02:00) Riga</MenuItem>
          <MenuItem value="Sofia">(GMT+02:00) Sofia</MenuItem>
          <MenuItem value="Tallinn">(GMT+02:00) Tallinn</MenuItem>
          <MenuItem value="Vilnius">(GMT+02:00) Vilnius</MenuItem>
          <MenuItem value="Baghdad">(GMT+03:00) Baghdad</MenuItem>
          <MenuItem value="Kuwait">(GMT+03:00) Kuwait</MenuItem>
          <MenuItem value="Moscow">(GMT+03:00) Moscow</MenuItem>
          <MenuItem value="Nairobi">(GMT+03:00) Nairobi</MenuItem>
          <MenuItem value="Riyadh">(GMT+03:00) Riyadh</MenuItem>
          <MenuItem value="St. Petersburg">(GMT+03:00) St. Petersburg</MenuItem>
          <MenuItem value="Volgograd">(GMT+03:00) Volgograd</MenuItem>
          <MenuItem value="Tehran">(GMT+03:30) Tehran</MenuItem>
          <MenuItem value="Abu Dhabi">(GMT+04:00) Abu Dhabi</MenuItem>
          <MenuItem value="Baku">(GMT+04:00) Baku</MenuItem>
          <MenuItem value="Muscat">(GMT+04:00) Muscat</MenuItem>
          <MenuItem value="Tbilisi">(GMT+04:00) Tbilisi</MenuItem>
          <MenuItem value="Yerevan">(GMT+04:00) Yerevan</MenuItem>
          <MenuItem value="Kabul">(GMT+04:30) Kabul</MenuItem>
          <MenuItem value="Ekaterinburg">(GMT+05:00) Ekaterinburg</MenuItem>
          <MenuItem value="Islamabad">(GMT+05:00) Islamabad</MenuItem>
          <MenuItem value="Karachi">(GMT+05:00) Karachi</MenuItem>
          <MenuItem value="Tashkent">(GMT+05:00) Tashkent</MenuItem>
          <MenuItem value="Chennai">(GMT+05:30) Chennai</MenuItem>
          <MenuItem value="Kolkata">(GMT+05:30) Kolkata</MenuItem>
          <MenuItem value="Mumbai">(GMT+05:30) Mumbai</MenuItem>
          <MenuItem value="New Delhi">(GMT+05:30) New Delhi</MenuItem>
          <MenuItem value="Kathmandu">(GMT+05:45) Kathmandu</MenuItem>
          <MenuItem value="Almaty">(GMT+06:00) Almaty</MenuItem>
          <MenuItem value="Astana">(GMT+06:00) Astana</MenuItem>
          <MenuItem value="Dhaka">(GMT+06:00) Dhaka</MenuItem>
          <MenuItem value="Novosibirsk">(GMT+06:00) Novosibirsk</MenuItem>
          <MenuItem value="Sri Jayawardenepura">(GMT+06:00) Sri Jayawardenepura</MenuItem>
          <MenuItem value="Rangoon">(GMT+06:30) Rangoon</MenuItem>
          <MenuItem value="Bangkok">(GMT+07:00) Bangkok</MenuItem>
          <MenuItem value="Hanoi">(GMT+07:00) Hanoi</MenuItem>
          <MenuItem value="Jakarta">(GMT+07:00) Jakarta</MenuItem>
          <MenuItem value="Krasnoyarsk">(GMT+07:00) Krasnoyarsk</MenuItem>
          <MenuItem value="Beijing">(GMT+08:00) Beijing</MenuItem>
          <MenuItem value="Chongqing">(GMT+08:00) Chongqing</MenuItem>
          <MenuItem value="Hong Kong">(GMT+08:00) Hong Kong</MenuItem>
          <MenuItem value="Irkutsk">(GMT+08:00) Irkutsk</MenuItem>
          <MenuItem value="Kuala Lumpur">(GMT+08:00) Kuala Lumpur</MenuItem>
          <MenuItem value="Perth">(GMT+08:00) Perth</MenuItem>
          <MenuItem value="Singapore">(GMT+08:00) Singapore</MenuItem>
          <MenuItem value="Taipei">(GMT+08:00) Taipei</MenuItem>
          <MenuItem value="Ulaan Bataar">(GMT+08:00) Ulaan Bataar</MenuItem>
          <MenuItem value="Urumqi">(GMT+08:00) Urumqi</MenuItem>
          <MenuItem value="Osaka">(GMT+09:00) Osaka</MenuItem>
          <MenuItem value="Sapporo">(GMT+09:00) Sapporo</MenuItem>
          <MenuItem value="Seoul">(GMT+09:00) Seoul</MenuItem>
          <MenuItem value="Tokyo">(GMT+09:00) Tokyo</MenuItem>
          <MenuItem value="Yakutsk">(GMT+09:00) Yakutsk</MenuItem>
          <MenuItem value="Adelaide">(GMT+09:30) Adelaide</MenuItem>
          <MenuItem value="Darwin">(GMT+09:30) Darwin</MenuItem>
          <MenuItem value="Brisbane">(GMT+10:00) Brisbane</MenuItem>
          <MenuItem value="Canberra">(GMT+10:00) Canberra</MenuItem>
          <MenuItem value="Guam">(GMT+10:00) Guam</MenuItem>
          <MenuItem value="Hobart">(GMT+10:00) Hobart</MenuItem>
          <MenuItem value="Melbourne">(GMT+10:00) Melbourne</MenuItem>
          <MenuItem value="Port Moresby">(GMT+10:00) Port Moresby</MenuItem>
          <MenuItem value="Sydney">(GMT+10:00) Sydney</MenuItem>
          <MenuItem value="Vladivostok">(GMT+10:00) Vladivostok</MenuItem>
          <MenuItem value="Magadan">(GMT+11:00) Magadan</MenuItem>
          <MenuItem value="New Caledonia">(GMT+11:00) New Caledonia</MenuItem>
          <MenuItem value="Solomon Is.">(GMT+11:00) Solomon Is.</MenuItem>
          <MenuItem value="Auckland">(GMT+12:00) Auckland</MenuItem>
          <MenuItem value="Fiji">(GMT+12:00) Fiji</MenuItem>
          <MenuItem value="Kamchatka">(GMT+12:00) Kamchatka</MenuItem>
          <MenuItem value="Marshall Is.">(GMT+12:00) Marshall Is.</MenuItem>
          <MenuItem value="Wellington">(GMT+12:00) Wellington</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
